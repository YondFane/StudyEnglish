param(
  [ValidateSet(2)]
  [int]$AudioType = 2,
  [string]$VoiceName = 'Microsoft Zira Desktop'
)

$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$typeRoot = Join-Path $projectRoot "data/audio/type-$AudioType"
$journalPath = Join-Path $typeRoot 'download-records.jsonl'

if (-not (Test-Path -LiteralPath $journalPath)) {
  throw "Download journal not found: $journalPath"
}

$latest = @{}
Get-Content -LiteralPath $journalPath | ForEach-Object {
  if (-not [string]::IsNullOrWhiteSpace($_)) {
    $record = $_ | ConvertFrom-Json
    if ($record.key) { $latest[$record.key] = $record }
  }
}

$failed = @($latest.Values | Where-Object status -eq 'failed' | Sort-Object key)
if ($failed.Count -eq 0) {
  Write-Host 'No failed audio records require device generation.'
  exit 0
}

$voiceProbe = New-Object -ComObject SAPI.SpVoice
$availableVoice = @($voiceProbe.GetVoices()) |
  Where-Object { $_.GetDescription() -like "$VoiceName*" } |
  Select-Object -First 1
if (-not $availableVoice) {
  throw "Required en-US voice is not installed: $VoiceName"
}

foreach ($item in $failed) {
  $hashAlgorithm = [System.Security.Cryptography.SHA256]::Create()
  try {
    $sourceBytes = [System.Text.Encoding]::UTF8.GetBytes("${AudioType}:$($item.key)")
    $hash = ([System.BitConverter]::ToString($hashAlgorithm.ComputeHash($sourceBytes))).Replace('-', '').ToLowerInvariant()
  } finally {
    $hashAlgorithm.Dispose()
  }

  $relativeFile = "type-$AudioType/files/$($hash.Substring(0, 2))/$hash.wav"
  $absoluteFile = Join-Path (Join-Path $projectRoot 'data/audio') ($relativeFile.Replace('/', [IO.Path]::DirectorySeparatorChar))
  $parentDirectory = Split-Path -Parent $absoluteFile
  New-Item -ItemType Directory -Path $parentDirectory -Force | Out-Null

  $synthesizer = New-Object -ComObject SAPI.SpVoice
  $audioStream = New-Object -ComObject SAPI.SpFileStream
  try {
    $synthesizer.Voice = $availableVoice
    $synthesizer.Rate = -1
    $audioStream.Open($absoluteFile, 3, $false)
    $synthesizer.AudioOutputStream = $audioStream
    $null = $synthesizer.Speak([string]$item.term)
  } finally {
    $audioStream.Close()
  }

  $generatedRecord = [ordered]@{
    key = $item.key
    term = $item.term
    file = $relativeFile
    status = 'success'
    format = 'wav'
    bytes = (Get-Item -LiteralPath $absoluteFile).Length
    httpStatus = 0
    url = "device://$($VoiceName.Replace(' ', '-'))"
    provider = 'windows-speech'
    voice = 'en-US-Microsoft-Zira'
    fallback = $true
    attempts = [int]$item.attempts
    updatedAt = [DateTime]::UtcNow.ToString('o')
  }
  Add-Content -LiteralPath $journalPath -Value ($generatedRecord | ConvertTo-Json -Compress) -Encoding UTF8
  Write-Host "Generated $($item.term) -> $relativeFile"
}

Write-Host "Generated $($failed.Count) failed en-US audio files with $VoiceName."
