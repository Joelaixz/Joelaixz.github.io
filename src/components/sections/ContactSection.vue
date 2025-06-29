<template>
  <!-- 「下一步」引導式區塊，為不同意圖的訪客提供解決方案 -->
  <section id="next-steps" class="next-steps-section">
    <div class="container">
      <h2>下一步 (What's Next?)</h2>
      <div class="steps-grid">
        <!-- 欄位一：深入探討職位 -->
        <div class="step-card">
          <h3>深入探討職位</h3>
          <p>若我的技能與您的需求相符，我非常樂意與您進一步討論這個機會。</p>
          <a href="mailto:joe010231@gmail.com" class="btn-primary">直接寄送郵件給我</a>
        </div>

        <!-- 欄位二：下載數位版履歷 -->
        <div class="step-card">
          <h3>下載數位版履歷</h3>
          <p>需要一份數位 PDF 版本以便存檔或上傳至您的系統嗎？</p>
          <a href="/your-resume.pdf" download class="btn-primary">下載我的履歷 (PDF)</a>
        </div>

        <!-- 欄位三：檢視我的程式碼 -->
        <div class="step-card">
          <h3>檢視我的程式碼</h3>
          <p>歡迎深入我的 GitHub，檢視我的程式碼風格、專案結構與開源貢獻。</p>
          <a href="https://github.com/Joelaixz" target="_blank" rel="noopener noreferrer" class="btn-primary">前往我的 GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 此組件主要用於展示靜態內容和引導，因此不需要額外的 JavaScript 邏輯
</script>

<style scoped>
/* 「下一步」區塊的整體樣式 */
.next-steps-section {
  padding: 6rem 2rem; /* 內邊距 */
  background-color: var(--section-bg-color); /* 背景顏色，來自 CSS 變數 */
  text-align: center; /* 文字居中 */
}

/* 容器樣式，用於限制內容寬度並居中 */
.container {
  max-width: 1100px; /* 最大寬度 */
  margin: 0 auto; /* 水平居中 */
}

/* 標題樣式 */
h2 {
  font-size: 2.5rem; /* 字體大小 */
  margin-bottom: 3rem; /* 下邊距 */
}

/* 步驟網格佈局樣式 */
.steps-grid {
  display: grid; /* 使用 Grid 佈局 */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 自動調整列寬 */
  gap: 2rem; /* 網格間距 */
}

/* 每個步驟卡片的樣式 */
.step-card {
  background-color: var(--background-color); /* 背景顏色，來自 CSS 變數 */
  padding: 2rem; /* 內邊距 */
  border-radius: 8px; /* 圓角邊框 */
  border: 1px solid var(--border-color); /* 邊框 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 內容垂直分佈 */
  align-items: center; /* 水平居中 */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px); /* 懸停時輕微上浮 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.step-card h3 {
  font-size: 1.8rem; /* 標題字體大小 */
  color: var(--primary-color); /* 文字顏色，來自 CSS 變數 */
  margin-bottom: 1rem;
}

.step-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1; /* 讓段落佔據更多空間 */
}

.step-card .btn-primary {
  width: 100%; /* 按鈕寬度佔滿 */
  margin-top: auto; /* 將按鈕推到底部 */
}

.secondary-link-wrapper {
  margin-top: 1rem;
}

.btn-secondary-text {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.btn-secondary-text:hover {
  opacity: 0.8;
}
</style>
