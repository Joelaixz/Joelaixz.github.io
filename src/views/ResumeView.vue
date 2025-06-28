<template>
  <!-- 履歷頁面的根容器 -->
  <div class="resume-page">
    <h1>我的履歷</h1>
    <p>這裡將會是您的線上履歷內容。</p>
    <p>您可以嵌入 PDF、設計 HTML 履歷，或提供下載連結。</p>
    <!-- 返回首頁的連結 -->
    <router-link to="/">返回首頁</router-link>
  </div>
</template>

<script setup>
// 導入 RouterLink 組件，用於導航
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* 履歷頁面的整體樣式 */
.resume-page {
  padding: 2rem; /* 內邊距 */
  text-align: center; /* 文字居中 */
  min-height: 80vh; /* 最小高度為視窗高度的 80% */
  display: flex; /* 使用 Flexbox 佈局 */
  flex-direction: column; /* 垂直排列子元素 */
  justify-content: center; /* 垂直居中對齊 */
  align-items: center; /* 水平居中對齊 */
  background-color: var(--background-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--text-color); /* 文字顏色，來自 CSS 變數 */
}

/* 標題樣式 */
h1 {
  font-size: 3rem; /* 字體大小 */
  margin-bottom: 1rem; /* 下邊距 */
}

/* 段落樣式 */
p {
  font-size: 1.2rem; /* 字體大小 */
  margin-bottom: 1rem; /* 下邊距 */
}

/* 返回首頁連結的樣式 */
router-link {
  margin-top: 2rem; /* 上邊距 */
  padding: 0.8rem 1.5rem; /* 內邊距 */
  background-color: var(--primary-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--button-text-color); /* 文字顏色，來自 CSS 變數 */
  text-decoration: none; /* 移除下劃線 */
  border-radius: 5px; /* 圓角邊框 */
  transition: background-color 0.3s ease; /* 背景顏色過渡動畫 */
}

/* 返回首頁連結懸停時的樣式 */
router-link:hover {
  opacity: 0.9; /* 懸停時透明度降低 */
}
</style>
