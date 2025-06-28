<template>
  <!-- 載入動畫的根容器 -->
  <div class="loading-spinner">
    <!-- 旋轉的圓形動畫元素 -->
    <div class="spinner"></div>
    <!-- 載入提示文字 -->
    <p>載入中...</p>
  </div>
</template>

<script setup>
// 此組件僅用於顯示載入動畫，不需要額外的 JavaScript 邏輯
</script>

<style scoped>
/* 載入動畫容器的樣式 */
.loading-spinner {
  display: flex; /* 使用 Flexbox 佈局 */
  flex-direction: column; /* 垂直排列子元素 */
  align-items: center; /* 水平居中對齊 */
  justify-content: center; /* 垂直居中對齊 */
  min-height: 200px; /* 確保有足夠的空間顯示載入動畫 */
  color: var(--text-color); /* 文字顏色，來自 CSS 變數 */
}

/* 旋轉動畫元素的樣式 */
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1); /* 淺色邊框，作為背景 */
  border-left-color: var(--primary-color); /* 主題色邊框，形成旋轉效果 */
  border-radius: 50%; /* 圓形 */
  width: 50px; /* 寬度 */
  height: 50px; /* 高度 */
  animation: spin 1s linear infinite; /* 應用旋轉動畫，持續 1 秒，線性，無限循環 */
  margin-bottom: 1rem; /* 下邊距 */
}

/* 定義旋轉動畫 */
@keyframes spin {
  0% { transform: rotate(0deg); } /* 從 0 度開始 */
  100% { transform: rotate(360deg); } /* 旋轉到 360 度 */
}
</style>
