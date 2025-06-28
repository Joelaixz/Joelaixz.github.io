<template>
  <!-- 網站頁尾的根元素 -->
  <footer class="site-footer">
    <div class="container">
      <!-- 版權資訊，動態顯示當前年份 -->
      <p>&copy; {{ currentYear }} Joel. All Rights Reserved.</p>
      <!-- 製作資訊 -->
      <p class="made-with">以 ❤️ 與 Vite + Vue.js 打造</p>
    </div>
  </footer>
</template>

<script setup>
// 導入 Vue 的 ref 函數，用於創建響應式數據
import { ref } from 'vue';

// 創建一個響應式變數 currentYear，並初始化為當前年份
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* 頁尾的整體樣式 */
.site-footer {
  background-color: var(--header-bg-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--text-color); /* 文字顏色，來自 CSS 變數 */
  padding: 2rem; /* 內邊距 */
  text-align: center; /* 文字居中 */
  border-top: 1px solid var(--border-color); /* 上邊框 */
}

/* 容器樣式，用於限制內容寬度並居中 */
.container {
  max-width: 1100px; /* 最大寬度 */
  margin: 0 auto; /* 水平居中 */
}

/* 製作資訊的樣式 */
.made-with {
  font-size: 0.9rem; /* 字體大小 */
  margin-top: 0.5rem; /* 上邊距 */
  opacity: 0.8; /* 透明度 */
}
</style>
