<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ParticleBackground from './components/ParticleBackground.vue'

const categories = [
  {
    id: 'highSchoolEntrance',
    label: '中考单词',
    description: '中考核心词汇',
    load: () => import('../data/words/highSchoolEntranceWords.js'),
  },
  {
    id: 'gradeOne',
    label: '高一单词',
    description: '高中一年级必修',
    load: () => import('../data/words/gradeOneWords.js'),
  },
  {
    id: 'gradeTwo',
    label: '高二单词',
    description: '高中二年级词汇',
    load: () => import('../data/words/gradeTwoWords.js'),
  },
  {
    id: 'collegeEntrance',
    label: '高考单词',
    description: '高考核心词汇',
    load: () => import('../data/words/collegeEntranceWords.js'),
  },
  {
    id: 'common',
    label: '常用单词',
    description: '英语常用词汇',
    load: () => import('../data/words/commonWords.js'),
  },
]

const STORAGE_KEY = 'study-english:practice-state:v2'
const LEGACY_STORAGE_KEY = 'study-english:practice-state:v1'

function readCachedState() {
  try {
    const currentState = localStorage.getItem(STORAGE_KEY)
    if (currentState) return JSON.parse(currentState)

    const legacyState = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY) || '{}')
    if (Object.keys(legacyState).length) {
      return {
        ...legacyState,
        version: 2,
        settings: {
          ...legacyState.settings,
          accent: 'en-GB',
        },
      }
    }

    return {}
  } catch (error) {
    console.warn('无法读取本地练习记录，将使用默认设置。', error)
    return {}
  }
}

const cachedState = readCachedState()
const cachedSettings = cachedState.settings ?? {}
const initialCategory = categories.find((item) => item.id === cachedState.activeCategoryId)
  ?? categories[0]

const activeCategory = ref(initialCategory)
const words = ref([])
const selectedWord = ref(null)
const detailPanel = ref(null)
const query = ref('')
const globalSearchMode = ref(false)
const globalSearchLoading = ref(false)
const globalSearchResults = ref([])
const globalSearchKeyword = ref('')
const globalSearchError = ref('')
const visibleCount = ref(120)
const loading = ref(false)
const loadError = ref('')
const viewMode = ref('library')
const accent = ref(cachedSettings.accent === 'en-US' ? 'en-US' : 'en-GB')
const autoRead = ref(cachedSettings.autoRead ?? true)
const recordProgress = ref(cachedSettings.recordProgress ?? true)
const particlesEnabled = ref(cachedSettings.particlesEnabled ?? true)
const randomPractice = ref(cachedSettings.randomPractice ?? false)
const trackErrors = ref(cachedSettings.trackErrors ?? true)
const hideWord = ref(cachedSettings.hideWord ?? false)
const practiceIndex = ref(0)
const wrongPracticeMode = ref(false)
const wrongPracticeIndex = ref(0)
const wrongPracticeCompleted = ref(false)
const answer = ref('')
const answerInput = ref(null)
const letterShakeVersions = ref({})
const feedback = ref(null)
const wrongWords = ref([])
const jumpNumber = ref(1)
const progressByCategory = ref(cachedState.progressByCategory ?? {})
const wrongWordsByCategory = ref(cachedState.wrongWordsByCategory ?? {})
const browseNavigationArmed = ref(false)
const browseNavigationHint = ref('')
let cacheReady = false
let browseNavigationTimer
let browseNavigationCooldownUntil = 0
let lastBrowseWheelAt = 0
let detailTouchStartY = 0
let detailTouchStartedAtBottom = false

function saveCachedState() {
  if (!cacheReady) return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 2,
      activeCategoryId: activeCategory.value.id,
      progressByCategory: progressByCategory.value,
      wrongWordsByCategory: wrongWordsByCategory.value,
      settings: {
        accent: accent.value,
        autoRead: autoRead.value,
        recordProgress: recordProgress.value,
        particlesEnabled: particlesEnabled.value,
        randomPractice: randomPractice.value,
        trackErrors: trackErrors.value,
        hideWord: hideWord.value,
      },
      updatedAt: new Date().toISOString(),
    }))
  } catch (error) {
    console.warn('无法保存本地练习记录。', error)
  }
}

const filteredWords = computed(() => {
  if (globalSearchMode.value) return globalSearchResults.value

  const keyword = query.value.trim().toLowerCase()
  if (!keyword) return words.value

  return words.value.filter((item) => {
    return [item.B, item.C, item.D].some((value) =>
      String(value ?? '').toLowerCase().includes(keyword),
    )
  })
})

const visibleWords = computed(() => filteredWords.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < filteredWords.value.length)
const selectedBrowseIndex = computed(() => filteredWords.value.indexOf(selectedWord.value))
const canBrowsePrevious = computed(() => selectedBrowseIndex.value > 0)
const canBrowseNext = computed(() =>
  filteredWords.value.length > 0
  && selectedBrowseIndex.value < filteredWords.value.length - 1,
)
const practiceCollection = computed(() =>
  wrongPracticeMode.value ? wrongWords.value : words.value,
)
const currentPracticeIndex = computed(() =>
  wrongPracticeMode.value ? wrongPracticeIndex.value : practiceIndex.value,
)
const practiceTotal = computed(() => practiceCollection.value.length)
const practiceWord = computed(() =>
  practiceCollection.value[currentPracticeIndex.value] ?? null,
)
const practiceAnswerTarget = computed(() =>
  String(practiceWord.value?.B ?? '').replace(/[^a-z]/gi, '').toLowerCase(),
)
const answerSlots = computed(() =>
  [...practiceAnswerTarget.value].map((expected, index) => {
    const value = answer.value[index] ?? ''
    return {
      expected,
      value,
      wrong: Boolean(value) && value.toLowerCase() !== expected,
    }
  }),
)
const pendingLetterIndex = computed(() =>
  answer.value.length < practiceAnswerTarget.value.length ? answer.value.length : -1,
)

async function selectCategory(category) {
  if (loading.value) return
  if (activeCategory.value.id === category.id && words.value.length) {
    if (globalSearchMode.value) {
      globalSearchMode.value = false
      globalSearchResults.value = []
      globalSearchKeyword.value = ''
      globalSearchError.value = ''
      query.value = ''
      visibleCount.value = 120
      selectedWord.value = words.value[0] ?? null
    }
    return
  }

  if (words.value.length) {
    wrongWordsByCategory.value[activeCategory.value.id] = wrongWords.value.map((item) => item.B)
  }

  wrongPracticeMode.value = false
  wrongPracticeIndex.value = 0
  wrongPracticeCompleted.value = false
  loading.value = true
  loadError.value = ''
  globalSearchMode.value = false
  globalSearchResults.value = []
  globalSearchKeyword.value = ''
  globalSearchError.value = ''
  query.value = ''
  visibleCount.value = 120
  activeCategory.value = category

  try {
    const module = await category.load()
    words.value = module.default
    selectedWord.value = words.value[0] ?? null
    const legacyIndex = Number(localStorage.getItem(`study-progress:${category.id}`))
    const savedIndex = Number(progressByCategory.value[category.id] ?? legacyIndex)
    practiceIndex.value = recordProgress.value && Number.isInteger(savedIndex)
      ? Math.min(Math.max(savedIndex, 0), Math.max(words.value.length - 1, 0))
      : 0
    jumpNumber.value = practiceIndex.value + 1
    const savedWrongWords = new Set(wrongWordsByCategory.value[category.id] ?? [])
    wrongWords.value = words.value.filter((item) => savedWrongWords.has(item.B))
    answer.value = ''
    feedback.value = null
    cacheReady = true
    saveCachedState()
  } catch (error) {
    words.value = []
    selectedWord.value = null
    loadError.value = '词库加载失败，请刷新页面重试。'
    console.error(error)
  } finally {
    loading.value = false
  }
}

function handleSearchInput() {
  globalSearchError.value = ''
  if (!globalSearchMode.value || query.value.trim() === globalSearchKeyword.value) return

  globalSearchMode.value = false
  globalSearchResults.value = []
  globalSearchKeyword.value = ''
  selectedWord.value = words.value[0] ?? null
  visibleCount.value = 120
}

async function executeGlobalSearch() {
  const keyword = query.value.trim().toLowerCase()
  if (!keyword || globalSearchLoading.value) return

  globalSearchLoading.value = true
  globalSearchError.value = ''
  visibleCount.value = 120
  resetBrowseNavigation()

  try {
    const loadedCategories = await Promise.all(
      categories.map(async (category) => ({
        category,
        entries: (await category.load()).default,
      })),
    )

    globalSearchResults.value = loadedCategories.flatMap(({ category, entries }) =>
      entries
        .filter((item) =>
          [item.B, item.C, item.D].some((value) =>
            String(value ?? '').toLowerCase().includes(keyword),
          ),
        )
        .map((item) => ({
          ...item,
          __categoryId: category.id,
          __categoryLabel: category.label,
        })),
    )
    globalSearchKeyword.value = query.value.trim()
    globalSearchMode.value = true
    selectedWord.value = globalSearchResults.value[0] ?? null
  } catch (error) {
    globalSearchError.value = '全局词库加载失败，请稍后重试。'
    console.error(error)
  } finally {
    globalSearchLoading.value = false
  }
}

async function selectPracticeCategory(category) {
  await selectCategory(category)
  if (autoRead.value) nextTick(speakPracticeWord)
}

function selectWord(word) {
  selectedWord.value = word
  resetBrowseNavigation()
  nextTick(() => detailPanel.value?.scrollTo({ top: 0, behavior: 'smooth' }))
}

function loadMore() {
  visibleCount.value += 120
}

function isDetailAtBottom() {
  const panel = detailPanel.value
  if (!panel) return false
  return panel.scrollHeight - panel.scrollTop - panel.clientHeight <= 4
}

function resetBrowseNavigation() {
  window.clearTimeout(browseNavigationTimer)
  browseNavigationArmed.value = false
  browseNavigationHint.value = ''
}

function scrollSelectedWordIntoView() {
  nextTick(() => {
    document.querySelector('.word-list > button.selected')?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
  })
}

function browseAdjacentWord(direction) {
  const list = filteredWords.value
  if (!list.length) return

  const currentIndex = selectedBrowseIndex.value
  const targetIndex = currentIndex < 0
    ? 0
    : Math.min(Math.max(currentIndex + direction, 0), list.length - 1)

  if (targetIndex === currentIndex) {
    browseNavigationHint.value = direction > 0 ? '已经是最后一个单词' : '已经是第一个单词'
    return
  }

  visibleCount.value = Math.max(visibleCount.value, targetIndex + 1)
  selectedWord.value = list[targetIndex]
  browseNavigationCooldownUntil = Date.now() + 600
  resetBrowseNavigation()
  nextTick(() => {
    detailPanel.value?.scrollTo({ top: 0, behavior: 'smooth' })
    scrollSelectedWordIntoView()
  })
}

function requestNextWordByGesture(type) {
  if (Date.now() < browseNavigationCooldownUntil) return

  if (!canBrowseNext.value) {
    browseNavigationHint.value = '已经是最后一个单词'
    return
  }

  if (browseNavigationArmed.value) {
    browseAdjacentWord(1)
    return
  }

  browseNavigationArmed.value = true
  browseNavigationHint.value = type === 'touch'
    ? '再上滑一次，切换到下一个单词'
    : '再向下滚动一次，切换到下一个单词'
  window.clearTimeout(browseNavigationTimer)
  browseNavigationTimer = window.setTimeout(resetBrowseNavigation, 1200)
}

function handleDetailWheel(event) {
  if (event.deltaY <= 12 || !isDetailAtBottom()) return

  const now = Date.now()
  const beginsNewWheelGesture = now - lastBrowseWheelAt > 160
  lastBrowseWheelAt = now
  if (beginsNewWheelGesture) requestNextWordByGesture('wheel')
}

function handleDetailTouchStart(event) {
  detailTouchStartY = event.touches[0]?.clientY ?? 0
  detailTouchStartedAtBottom = isDetailAtBottom()
}

function handleDetailTouchEnd(event) {
  if (!detailTouchStartedAtBottom) return
  const endY = event.changedTouches[0]?.clientY ?? detailTouchStartY
  if (detailTouchStartY - endY >= 55) requestNextWordByGesture('touch')
}

function speakText(text, lang = accent.value) {
  if (!text || !('speechSynthesis' in window)) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  const voices = window.speechSynthesis.getVoices()
  const preferredVoice = voices.find(
    (voice) => voice.lang.toLowerCase() === lang.toLowerCase(),
  )

  utterance.lang = lang
  utterance.rate = 0.9
  if (preferredVoice) utterance.voice = preferredVoice
  window.speechSynthesis.speak(utterance)
}

function speakWord(lang) {
  speakText(selectedWord.value?.B, lang)
}

function speakPracticeWord() {
  speakText(practiceWord.value?.B)
}

function speakExample() {
  speakText(practiceWord.value?.H)
}

function speakSelectedExample() {
  speakText(selectedWord.value?.H, 'en-GB')
}

function openPractice() {
  wrongPracticeMode.value = false
  wrongPracticeCompleted.value = false

  if (recordProgress.value && !randomPractice.value) {
    const savedIndex = Number(progressByCategory.value[activeCategory.value.id])
    if (Number.isInteger(savedIndex)) {
      practiceIndex.value = Math.min(
        Math.max(savedIndex, 0),
        Math.max(words.value.length - 1, 0),
      )
    }
  } else if (!recordProgress.value) {
    const selectedIndex = words.value.indexOf(selectedWord.value)
    if (selectedIndex >= 0) practiceIndex.value = selectedIndex
  }

  jumpNumber.value = practiceIndex.value + 1
  answer.value = ''
  feedback.value = null
  viewMode.value = 'practice'
  nextTick(() => {
    answerInput.value?.focus()
    if (autoRead.value) speakPracticeWord()
  })
}

function nextPracticeWord() {
  const collection = practiceCollection.value
  if (!collection.length) return

  let nextIndex
  if (randomPractice.value && collection.length > 1) {
    nextIndex = currentPracticeIndex.value
    while (nextIndex === currentPracticeIndex.value) {
      nextIndex = Math.floor(Math.random() * collection.length)
    }
  } else {
    nextIndex = (currentPracticeIndex.value + 1) % collection.length
  }

  if (wrongPracticeMode.value) {
    wrongPracticeIndex.value = nextIndex
  } else {
    practiceIndex.value = nextIndex
  }

  jumpNumber.value = nextIndex + 1
  answer.value = ''
  letterShakeVersions.value = {}
  feedback.value = null
  nextTick(() => answerInput.value?.focus())
}

function startWrongPractice() {
  if (wrongPracticeMode.value) {
    wrongPracticeMode.value = false
    wrongPracticeCompleted.value = false
    answer.value = ''
    letterShakeVersions.value = {}
    feedback.value = null
    jumpNumber.value = practiceIndex.value + 1
    nextTick(() => {
      answerInput.value?.focus()
      if (autoRead.value) speakPracticeWord()
    })
    return
  }

  if (!wrongWords.value.length) {
    feedback.value = { type: 'hint', text: '当前词库还没有错题记录' }
    return
  }

  wrongPracticeMode.value = true
  wrongPracticeCompleted.value = false
  wrongPracticeIndex.value = 0
  answer.value = ''
  letterShakeVersions.value = {}
  feedback.value = null
  nextTick(() => {
    answerInput.value?.focus()
    if (autoRead.value) speakPracticeWord()
  })
}

function completeWrongWord() {
  const completedWord = practiceWord.value
  const removalIndex = wrongWords.value.findIndex((item) => item.B === completedWord?.B)
  if (removalIndex >= 0) wrongWords.value.splice(removalIndex, 1)

  answer.value = ''
  letterShakeVersions.value = {}

  if (!wrongWords.value.length) {
    wrongPracticeMode.value = false
    wrongPracticeCompleted.value = true
    wrongPracticeIndex.value = 0
    feedback.value = null
    return
  }

  wrongPracticeIndex.value = Math.min(removalIndex, wrongWords.value.length - 1)
  feedback.value = null
  nextTick(() => {
    answerInput.value?.focus()
    if (autoRead.value) speakPracticeWord()
  })
}

function returnToNormalPractice() {
  wrongPracticeCompleted.value = false
  answer.value = ''
  letterShakeVersions.value = {}
  feedback.value = null
  jumpNumber.value = practiceIndex.value + 1
  nextTick(() => {
    answerInput.value?.focus()
    if (autoRead.value) speakPracticeWord()
  })
}

function focusAnswerInput() {
  answerInput.value?.focus()
}

function triggerLetterShake(index) {
  letterShakeVersions.value = {
    ...letterShakeVersions.value,
    [index]: (letterShakeVersions.value[index] ?? 0) + 1,
  }
}

function handleAnswerInput(event) {
  const cleanedValue = event.target.value
    .replace(/[^a-z]/gi, '')
    .slice(0, practiceAnswerTarget.value.length)
    .toLowerCase()

  event.target.value = cleanedValue
  answer.value = cleanedValue

  const currentIndex = cleanedValue.length - 1

  if (
    currentIndex >= 0
    && !event.inputType?.startsWith('delete')
    && cleanedValue[currentIndex] !== practiceAnswerTarget.value[currentIndex]
  ) {
    triggerLetterShake(currentIndex)
  }
}

function submitAnswer() {
  const expected = practiceAnswerTarget.value
  const actual = answer.value.trim().toLowerCase()
  if (!actual) {
    feedback.value = { type: 'hint', text: '请输入单词后再提交' }
    return
  }

  if (actual === expected) {
    feedback.value = {
      type: 'success',
      text: wrongPracticeMode.value ? '回答正确，已移出错题记录！' : '回答正确，很棒！',
    }
    window.setTimeout(
      wrongPracticeMode.value ? completeWrongWord : nextPracticeWord,
      650,
    )
    return
  }

  answerSlots.value.forEach((slot, index) => {
    if (slot.wrong) triggerLetterShake(index)
  })
  feedback.value = { type: 'error', text: `再想一想，正确答案是 ${practiceWord.value.B}` }
  if (trackErrors.value && !wrongWords.value.some((item) => item.B === practiceWord.value.B)) {
    wrongWords.value.push(practiceWord.value)
  }
}

function resetPractice() {
  if (wrongPracticeMode.value) {
    wrongPracticeIndex.value = 0
  } else {
    practiceIndex.value = 0
  }
  jumpNumber.value = 1
  answer.value = ''
  letterShakeVersions.value = {}
  feedback.value = null
  wrongPracticeCompleted.value = false
  if (autoRead.value) nextTick(speakPracticeWord)
}

function jumpToWord() {
  const target = Math.min(Math.max(Number(jumpNumber.value) || 1, 1), words.value.length)
  practiceIndex.value = target - 1
  jumpNumber.value = target
  answer.value = ''
  letterShakeVersions.value = {}
  feedback.value = null
  nextTick(() => answerInput.value?.focus())
}

function handleGlobalKeydown(event) {
  if (viewMode.value !== 'practice') return
  if (event.target.closest?.('.jump-control')) return

  if (event.key === 'Escape') {
    speakPracticeWord()
    return
  }

  if (event.key === '1') {
    event.preventDefault()
    speakExample()
    return
  }

  if (event.key === '2') {
    event.preventDefault()
    hideWord.value = !hideWord.value
  }
}

watch(practiceIndex, (index) => {
  if (recordProgress.value && !randomPractice.value) {
    progressByCategory.value[activeCategory.value.id] = index
    saveCachedState()
  }
  if (viewMode.value === 'practice' && autoRead.value) nextTick(speakPracticeWord)
})

watch(selectedWord, (word) => {
  if (word && viewMode.value === 'library') {
    nextTick(() => speakText(word.B, 'en-GB'))
  }
})

watch(wrongPracticeIndex, () => {
  if (viewMode.value === 'practice' && wrongPracticeMode.value && autoRead.value) {
    nextTick(speakPracticeWord)
  }
})

watch(recordProgress, (enabled) => {
  if (enabled && !randomPractice.value) {
    progressByCategory.value[activeCategory.value.id] = practiceIndex.value
  }
  saveCachedState()
})

watch(randomPractice, (enabled) => {
  if (!enabled && recordProgress.value) {
    progressByCategory.value[activeCategory.value.id] = practiceIndex.value
  }
  saveCachedState()
})

watch(
  [accent, autoRead, particlesEnabled, trackErrors, hideWord],
  saveCachedState,
)

watch(wrongWords, (items) => {
  if (!cacheReady) return
  wrongWordsByCategory.value[activeCategory.value.id] = items.map((item) => item.B)
  saveCachedState()
}, { deep: true })

onMounted(() => window.addEventListener('keydown', handleGlobalKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
  window.clearTimeout(browseNavigationTimer)
})

selectCategory(initialCategory)
</script>

<template>
  <main :class="['page-shell', { 'practice-shell': viewMode === 'practice' }]">
    <nav v-if="viewMode === 'library'" class="nav">
      <a class="brand" href="#" aria-label="Study English 首页">
        <span class="brand-mark">S</span>
        <span>
          <b>Study English</b>
          <small>Word Library</small>
        </span>
      </a>

      <div class="nav-tabs" aria-label="词库分类">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="{ active: activeCategory.id === category.id }"
          :aria-pressed="activeCategory.id === category.id"
          @click="selectCategory(category)"
        >
          {{ category.label }}
        </button>
      </div>

      <button class="practice-entry" @click="openPractice">
        开始练习
        <span aria-hidden="true">→</span>
      </button>
      <span class="word-total">{{ words.length.toLocaleString() }} words</span>
    </nav>

    <header v-if="viewMode === 'library'" class="library-header">
      <div>
        <p class="eyebrow">VOCABULARY LIBRARY</p>
        <h1>{{ activeCategory.label }}</h1>
        <p>{{ activeCategory.description }}，选择左侧单词查看完整记忆信息。</p>
      </div>
      <div class="search-controls">
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            v-model="query"
            type="search"
            placeholder="搜索单词、音标或释义"
            @input="handleSearchInput"
            @keydown.enter.prevent="executeGlobalSearch"
          />
        </label>
        <button
          class="global-search-button"
          :disabled="!query.trim() || globalSearchLoading"
          @click="executeGlobalSearch"
        >
          {{ globalSearchLoading ? '搜索中…' : '全局搜索' }}
        </button>
      </div>
    </header>

    <section
      v-if="viewMode === 'library'"
      class="workspace"
      :aria-busy="loading || globalSearchLoading"
    >
      <aside class="word-panel">
        <div class="panel-heading">
          <span>{{ globalSearchMode ? `全局搜索：${globalSearchKeyword}` : '单词列表' }}</span>
          <span>{{ filteredWords.length }} 个结果</span>
        </div>

        <div v-if="loading || globalSearchLoading" class="panel-state">
          {{ globalSearchLoading ? '正在搜索全部词库…' : '正在载入词库…' }}
        </div>
        <div v-else-if="globalSearchError" class="panel-state error">{{ globalSearchError }}</div>
        <div v-else-if="loadError" class="panel-state error">{{ loadError }}</div>
        <div v-else-if="!filteredWords.length" class="panel-state">没有找到匹配的单词</div>

        <div v-else class="word-list">
          <button
            v-for="(word, index) in visibleWords"
            :key="`${word.B}-${index}`"
            :class="{ selected: selectedWord === word }"
            @click="selectWord(word)"
          >
            <span class="word-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="word-name">{{ word.B }}</span>
            <span class="word-phonetic">
              {{ word.C }}<template v-if="word.__categoryLabel"> · {{ word.__categoryLabel }}</template>
            </span>
            <span class="arrow">→</span>
          </button>
          <button v-if="hasMore" class="load-more" @click="loadMore">
            加载更多（剩余 {{ filteredWords.length - visibleCount }}）
          </button>
        </div>
      </aside>

      <article
        v-if="selectedWord"
        ref="detailPanel"
        class="detail-panel"
        @wheel.passive="handleDetailWheel"
        @touchstart.passive="handleDetailTouchStart"
        @touchend.passive="handleDetailTouchEnd"
      >
        <div class="detail-hero">
          <div>
            <p class="detail-kicker">
              WORD DETAIL
              <template v-if="selectedWord.__categoryLabel"> · {{ selectedWord.__categoryLabel }}</template>
            </p>
            <h2>{{ selectedWord.B }}</h2>
            <p class="phonetic">{{ selectedWord.C }}</p>
          </div>
          <div class="sound-actions" aria-label="单词发音">
            <button
              class="sound-button"
              aria-label="英式发音"
              title="英式发音"
              @click="speakWord('en-GB')"
            >
              <span aria-hidden="true">♪</span>
              <b>英式</b>
            </button>
            <button
              class="sound-button accent-us"
              aria-label="美式发音"
              title="美式发音"
              @click="speakWord('en-US')"
            >
              <span aria-hidden="true">♪</span>
              <b>美式</b>
            </button>
          </div>
        </div>

        <div class="meaning-card">
          <span>释义</span>
          <p>{{ selectedWord.D || '暂无释义' }}</p>
        </div>

        <div class="detail-grid">
          <section>
            <span class="detail-label">单词拆分</span>
            <p class="split-word">{{ selectedWord.E || '—' }}</p>
          </section>
          <section>
            <span class="detail-label">拆分联想</span>
            <p>{{ selectedWord.F || '—' }}</p>
          </section>
          <section class="wide">
            <span class="detail-label">记忆提示</span>
            <p>{{ selectedWord.G || '—' }}</p>
          </section>
        </div>

        <section class="example-card">
          <div class="example-card-heading">
            <span class="detail-label">EXAMPLE SENTENCE</span>
            <button
              aria-label="播放英式例句"
              title="播放英式例句"
              @click="speakSelectedExample"
            >
              <span aria-hidden="true">♪</span>
              播放例句
            </button>
          </div>
          <blockquote>{{ selectedWord.H || '暂无例句' }}</blockquote>
          <p>{{ selectedWord.I || '暂无翻译' }}</p>
        </section>

        <div class="browse-word-navigation">
          <p :class="{ visible: browseNavigationHint }" aria-live="polite">
            {{ browseNavigationHint || '滚动到底部可快速切换单词' }}
          </p>
          <div>
            <button :disabled="!canBrowsePrevious" @click="browseAdjacentWord(-1)">
              <span aria-hidden="true">←</span>
              上一个单词
            </button>
            <span>{{ selectedBrowseIndex + 1 }} / {{ filteredWords.length }}</span>
            <button :disabled="!canBrowseNext" @click="browseAdjacentWord(1)">
              下一个单词
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </article>

      <article v-else class="detail-panel empty-detail">
        <p>从左侧选择一个单词查看详情</p>
      </article>
    </section>

    <section v-else class="practice-view">
      <ParticleBackground :enabled="particlesEnabled" />

      <header class="practice-toolbar">
        <button class="back-library" @click="viewMode = 'library'">
          <span aria-hidden="true">←</span>
          返回词库
        </button>

        <div class="accent-switch" aria-label="发音类型">
          <button :class="{ active: accent === 'en-US' }" @click="accent = 'en-US'">美式</button>
          <button :class="{ active: accent === 'en-GB' }" @click="accent = 'en-GB'">英式</button>
        </div>

        <button class="practice-reset" @click="resetPractice">重新练习</button>
        <strong class="practice-count">
          <template v-if="wrongPracticeCompleted">错题已清空</template>
          <template v-else>{{ currentPracticeIndex + 1 }} / {{ practiceTotal }}</template>
        </strong>

        <div class="practice-options">
          <label>
            <span>自动朗读</span>
            <input v-model="autoRead" type="checkbox" role="switch" />
          </label>
          <label>
            <span>记录进度</span>
            <input v-model="recordProgress" type="checkbox" role="switch" />
          </label>
          <label>
            <span>粒子背景</span>
            <input v-model="particlesEnabled" type="checkbox" role="switch" />
          </label>
          <label>
            <span>随机练习</span>
            <input v-model="randomPractice" type="checkbox" role="switch" />
          </label>
          <label>
            <span>错题统计</span>
            <input v-model="trackErrors" type="checkbox" role="switch" />
          </label>
        </div>
      </header>

      <div v-if="wrongPracticeCompleted" class="wrong-practice-complete">
        <span aria-hidden="true">✓</span>
        <p>WRONG WORDS CLEARED</p>
        <h2>错题练习完成</h2>
        <p>当前词库的错题已经全部答对，并从本地错题记录中移除。</p>
        <button @click="returnToNormalPractice">继续普通练习</button>
      </div>

      <div v-else-if="practiceWord" class="practice-card">
        <span v-if="wrongPracticeMode" class="wrong-practice-badge">
          错题练习 · 剩余 {{ wrongWords.length }} 词
        </span>
        <p class="practice-meaning">{{ practiceWord.D }}</p>
        <div class="practice-title">
          <h2 :class="{ concealed: hideWord }">{{ hideWord ? '••••••' : practiceWord.B }}</h2>
          <span>{{ practiceWord.C }}</span>
        </div>

        <dl class="practice-details">
          <div><dt>拆分</dt><dd>{{ practiceWord.E || '—' }}</dd></div>
          <div><dt>综合</dt><dd>{{ practiceWord.F || '—' }}</dd></div>
          <div><dt>联想</dt><dd>{{ practiceWord.G || '—' }}</dd></div>
          <div><dt>例句</dt><dd>{{ practiceWord.H || '—' }}</dd></div>
          <div><dt>翻译</dt><dd>{{ practiceWord.I || '—' }}</dd></div>
        </dl>

        <form class="answer-form" @submit.prevent="submitAnswer">
          <p class="letter-hint">逐字母输入，按 Enter 提交</p>
          <div
            class="letter-entry"
            role="group"
            aria-label="单词字母输入区"
            @click="focusAnswerInput"
          >
            <span
              v-for="(slot, index) in answerSlots"
              :key="`${currentPracticeIndex}-${index}-${letterShakeVersions[index] ?? 0}`"
              :class="[
                'letter-slot',
                {
                  filled: slot.value,
                  wrong: slot.wrong,
                  waiting: pendingLetterIndex === index,
                },
              ]"
            >
              {{ slot.value }}
            </span>
            <input
              ref="answerInput"
              class="letter-capture"
              :value="answer"
              type="text"
              autocomplete="off"
              autocapitalize="none"
              spellcheck="false"
              :maxlength="practiceAnswerTarget.length"
              aria-label="输入单词字母"
              @input="handleAnswerInput"
            />
          </div>
          <p v-if="feedback" :class="['practice-feedback', feedback.type]">{{ feedback.text }}</p>
        </form>

        <div class="practice-actions">
          <button class="action-coral" @click="speakPracticeWord">♪ 播放单词 <kbd>ESC</kbd></button>
          <button class="action-gold" @click="speakExample">♪ 播放例句 <kbd>1</kbd></button>
          <button class="action-blue" @click="hideWord = !hideWord">
            {{ hideWord ? '显示单词' : '隐藏单词' }} <kbd>2</kbd>
          </button>
          <button class="action-green" @click="submitAnswer">提交 <kbd>Enter</kbd></button>
          <button class="action-muted" @click="nextPracticeWord">随机/下一词</button>
          <button class="action-danger" @click="startWrongPractice">
            {{ wrongPracticeMode ? '退出错题练习' : '错题练习' }}
            <span v-if="wrongWords.length">{{ wrongWords.length }}</span>
          </button>
          <button
            v-if="!wrongPracticeMode && wrongWords.length"
            class="action-clear"
            @click="wrongWords = []"
          >
            清空错题
          </button>
          <label v-if="!wrongPracticeMode" class="jump-control">
            <input v-model.number="jumpNumber" type="number" min="1" :max="words.length" />
            <button @click="jumpToWord">跳转</button>
          </label>
        </div>
      </div>

      <footer class="practice-categories">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="{ active: activeCategory.id === category.id }"
          @click="selectPracticeCategory(category)"
        >
          <span></span>
          {{ category.description }}
        </button>
      </footer>
    </section>
  </main>
</template>
