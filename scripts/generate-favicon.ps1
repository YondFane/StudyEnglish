$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path $PSScriptRoot -Parent
$sizes = @(16, 32, 48)
$images = foreach ($size in $sizes) {
  $bitmap = [System.Drawing.Bitmap]::new(
    $size,
    $size,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $brandBrush = [System.Drawing.SolidBrush]::new(
    [System.Drawing.ColorTranslator]::FromHtml('#EC6E4C')
  )
  $textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
  $font = [System.Drawing.Font]::new(
    [System.Drawing.FontFamily]::GenericSerif,
    [single]($size * 0.62),
    [System.Drawing.FontStyle]::Regular,
    [System.Drawing.GraphicsUnit]::Pixel
  )
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center

  $inset = [single]($size * 0.04)
  $graphics.FillEllipse($brandBrush, $inset, $inset, $size - 2 * $inset, $size - 2 * $inset)
  $graphics.DrawString('S', $font, $textBrush, [System.Drawing.RectangleF]::new(0, -$size * 0.03, $size, $size), $format)

  $stream = [System.IO.MemoryStream]::new()
  $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
  $bytes = $stream.ToArray()

  $stream.Dispose()
  $format.Dispose()
  $font.Dispose()
  $textBrush.Dispose()
  $brandBrush.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()

  [PSCustomObject]@{ Size = $size; Bytes = $bytes }
}

$iconStream = [System.IO.MemoryStream]::new()
$writer = [System.IO.BinaryWriter]::new($iconStream)
$writer.Write([uint16]0)
$writer.Write([uint16]1)
$writer.Write([uint16]$images.Count)

$offset = 6 + 16 * $images.Count
foreach ($image in $images) {
  $writer.Write([byte]$image.Size)
  $writer.Write([byte]$image.Size)
  $writer.Write([byte]0)
  $writer.Write([byte]0)
  $writer.Write([uint16]1)
  $writer.Write([uint16]32)
  $writer.Write([uint32]$image.Bytes.Length)
  $writer.Write([uint32]$offset)
  $offset += $image.Bytes.Length
}

foreach ($image in $images) {
  $writer.Write($image.Bytes)
}

$writer.Flush()
$iconBytes = $iconStream.ToArray()
$writer.Dispose()
$iconStream.Dispose()

$publicRoot = Join-Path $projectRoot 'public'
[System.IO.Directory]::CreateDirectory($publicRoot) | Out-Null
[System.IO.File]::WriteAllBytes((Join-Path $projectRoot 'favicon.ico'), $iconBytes)
[System.IO.File]::WriteAllBytes((Join-Path $publicRoot 'favicon.ico'), $iconBytes)

Write-Host "Generated favicon.ico ($($iconBytes.Length) bytes) with sizes: $($sizes -join ', ')"
