<script setup>
import { computed, ref } from 'vue'

const words = [
  { word: 'curious', phonetic: '/ˈkjʊəriəs/', meaning: '好奇的', example: 'Stay curious and keep learning.' },
  { word: 'progress', phonetic: '/ˈprəʊɡres/', meaning: '进步；进展', example: 'A little progress each day adds up.' },
  { word: 'confident', phonetic: '/ˈkɒnfɪdənt/', meaning: '自信的', example: 'Practice helps you become confident.' },
]

const currentIndex = ref(0)
const learned = ref(12)
const showMeaning = ref(false)
const currentWord = computed(() => words[currentIndex.value])

function nextWord() {
  currentIndex.value = (currentIndex.value + 1) % words.length
  showMeaning.value = false
}

function markLearned() {
  learned.value += 1
  nextWord()
}
</script>

<template>
  <main class="page-shell">
    <nav class="nav">
      <a class="brand" href="#" aria-label="Study English 首页">
        <span class="brand-mark">S</span>
        <span>Study English</span>
      </a>
      <div class="nav-links">
        <a class="active" href="#today">今日学习</a>
        <a href="#plan">学习计划</a>
      </div>
      <button class="avatar" aria-label="个人中心">YF</button>
    </nav>

    <section class="hero" id="today">
      <div class="hero-copy">
        <p class="eyebrow">THURSDAY · DAILY PRACTICE</p>
        <h1>每天一点，<br><em>英语自然进步。</em></h1>
        <p class="subtitle">用几分钟积累词汇、练习表达。今天也从一个单词开始吧。</p>
        <div class="hero-actions">
          <a class="primary-button" href="#word-card">开始今日学习 <span>→</span></a>
          <div class="streak"><b>7</b><span>天连续学习<br>保持得很好</span></div>
        </div>
      </div>

      <div class="word-card" id="word-card">
        <div class="card-top">
          <span>今日词汇 {{ currentIndex + 1 }}/{{ words.length }}</span>
          <span class="sound" aria-hidden="true">♪</span>
        </div>
        <div class="word-content">
          <p class="word">{{ currentWord.word }}</p>
          <p class="phonetic">{{ currentWord.phonetic }}</p>
          <button class="meaning-toggle" @click="showMeaning = !showMeaning">
            {{ showMeaning ? currentWord.meaning : '点击查看释义' }}
          </button>
          <p class="example">“{{ currentWord.example }}”</p>
        </div>
        <div class="card-actions">
          <button class="skip" @click="nextWord">稍后复习</button>
          <button class="learned" @click="markLearned">我学会了</button>
        </div>
      </div>
    </section>

    <section class="progress-section" id="plan">
      <div>
        <p class="section-kicker">YOUR PROGRESS</p>
        <h2>这一周，你正在稳步前进。</h2>
      </div>
      <div class="stats">
        <article><strong>{{ learned }}</strong><span>已学单词</span></article>
        <article><strong>38</strong><span>练习分钟</span></article>
        <article><strong>86%</strong><span>复习正确率</span></article>
      </div>
    </section>
  </main>
</template>
