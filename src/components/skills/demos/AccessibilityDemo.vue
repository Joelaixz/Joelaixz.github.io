<template>
  <div class="accessibility-demo-placeholder">
    <p>無障礙網頁 Demo 佔位區塊</p>
    <p>即將在此處展示無障礙網頁的即時演示內容。</p>
  </div>
</template>

<script setup>
// 這裡可以放置無障礙網頁 Demo 的邏輯
</script>

<style scoped>
.accessibility-demo-placeholder {
  width: 100%;
  height: 300px; /* 設置一個高度以便於觀察 */
  background-color: #ffcccc; /* 淺紅色背景 */
  border: 2px dashed #cc0000; /* 紅色虛線邊框 */
  color: #cc0000; /* 紅色文字 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
</style>
