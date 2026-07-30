<script setup>
import { computed, ref } from 'vue'

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

const activeCategory = ref(categories[0])
const words = ref([])
const selectedWord = ref(null)
const query = ref('')
const visibleCount = ref(120)
const loading = ref(false)
const loadError = ref('')

const filteredWords = computed(() => {
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

async function selectCategory(category) {
  if (loading.value || activeCategory.value.id === category.id && words.value.length) return

  loading.value = true
  loadError.value = ''
  query.value = ''
  visibleCount.value = 120
  activeCategory.value = category

  try {
    const module = await category.load()
    words.value = module.default
    selectedWord.value = words.value[0] ?? null
  } catch (error) {
    words.value = []
    selectedWord.value = null
    loadError.value = '词库加载失败，请刷新页面重试。'
    console.error(error)
  } finally {
    loading.value = false
  }
}

function selectWord(word) {
  selectedWord.value = word
}

function loadMore() {
  visibleCount.value += 120
}

function speakWord() {
  if (!selectedWord.value || !('speechSynthesis' in window)) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(selectedWord.value.B)
  utterance.lang = 'en-US'
  window.speechSynthesis.speak(utterance)
}

selectCategory(categories[0])
</script>

<template>
  <main class="page-shell">
    <nav class="nav">
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

      <span class="word-total">{{ words.length.toLocaleString() }} words</span>
    </nav>

    <header class="library-header">
      <div>
        <p class="eyebrow">VOCABULARY LIBRARY</p>
        <h1>{{ activeCategory.label }}</h1>
        <p>{{ activeCategory.description }}，选择左侧单词查看完整记忆信息。</p>
      </div>
      <label class="search-box">
        <span aria-hidden="true">⌕</span>
        <input v-model="query" type="search" placeholder="搜索单词、音标或释义" />
      </label>
    </header>

    <section class="workspace" :aria-busy="loading">
      <aside class="word-panel">
        <div class="panel-heading">
          <span>单词列表</span>
          <span>{{ filteredWords.length }} 个结果</span>
        </div>

        <div v-if="loading" class="panel-state">正在载入词库…</div>
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
            <span class="word-phonetic">{{ word.C }}</span>
            <span class="arrow">→</span>
          </button>
          <button v-if="hasMore" class="load-more" @click="loadMore">
            加载更多（剩余 {{ filteredWords.length - visibleCount }}）
          </button>
        </div>
      </aside>

      <article v-if="selectedWord" class="detail-panel">
        <div class="detail-hero">
          <div>
            <p class="detail-kicker">WORD DETAIL</p>
            <h2>{{ selectedWord.B }}</h2>
            <p class="phonetic">{{ selectedWord.C }}</p>
          </div>
          <button class="sound-button" aria-label="朗读单词" title="朗读单词" @click="speakWord">
            <span aria-hidden="true">♪</span>
          </button>
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
          <span class="detail-label">EXAMPLE SENTENCE</span>
          <blockquote>{{ selectedWord.H || '暂无例句' }}</blockquote>
          <p>{{ selectedWord.I || '暂无翻译' }}</p>
        </section>
      </article>

      <article v-else class="detail-panel empty-detail">
        <p>从左侧选择一个单词查看详情</p>
      </article>
    </section>
  </main>
</template>
