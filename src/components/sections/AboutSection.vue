<template>
  <!-- 關於我區塊的根元素，用於介紹個人資訊 -->
  <section id="about" class="about-section">
    <div class="container">
      <!-- 關於我內容區塊，包含照片和文字介紹 -->
      <div class="about-content">
        <!-- 個人照片區塊 -->
        <div class="about-photo">
          <img src="/head.jpg" alt="A professional photo of the developer">
        </div>
        <!-- 個人文字介紹區塊 -->
        <div class="about-text">
          <h2>Hello! 我是賴信宗</h2>
          <p>
            我對學習新知抱持高度熱情，並擅長在短時間內將所學應用於實踐。今年三月，我從零開始投入前端工程師的專業訓練；到了六月，我已不僅掌握了前端開發的核心技能，更進一步將 AI 協作工具（Gemini & Gemini CLI）融入開發流程。
          </p>
          <p>
            目前，我已能運用這些技能獨立開發個人網站，並將所學實踐於正在製作的團隊畢業專案中。我相信，這種快速迭代、擁抱新技術的學習模式，能讓我不斷成長，成為一名能持續為團隊創造價值的工程師。
          </p>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 此組件主要用於展示靜態內容，因此不需要額外的 JavaScript 邏輯
</script>

<style scoped>
/* 關於我區塊的整體樣式 */
.about-section {
  padding: 6rem 2rem; /* 內邊距 */
  background-color: var(--section-bg-color); /* 背景顏色，來自 CSS 變數 */
}

/* 容器樣式，用於限制內容寬度並居中 */
.container {
  max-width: 1100px; /* 最大寬度 */
  margin: 0 auto; /* 水平居中 */
}

/* 關於我內容的佈局樣式 */
.about-content {
  display: flex; /* 使用 Flexbox 佈局 */
  align-items: center; /* 垂直居中對齊 */
  gap: 4rem; /* 子元素間距 */
}

/* 個人照片區塊樣式 */
.about-photo {
  flex-shrink: 0; /* 防止圖片縮小 */
}

.about-photo img {
  width: 300px; /* 圖片寬度 */
  height: 300px; /* 圖片高度 */
  border-radius: 50%; /* 圓形圖片 */
  object-fit: cover; /* 圖片填充方式 */
  border: 5px solid var(--primary-color); /* 邊框，來自 CSS 變數 */
}

/* 關於我文字介紹區塊樣式 */
.about-text h2 {
  font-size: 2.5rem; /* 標題字體大小 */
  margin-bottom: 1.5rem; /* 下邊距 */
  color: var(--primary-color); /* 文字顏色，來自 CSS 變數 */
}

.about-text p {
  line-height: 1.8; /* 行高 */
  margin-bottom: 1rem; /* 下邊距 */
  font-size: 1.15rem; /* 放大字體大小 */
  text-indent: 2em; /* 段落開頭縮排兩個中文字體 */
}

/* 社群連結區塊樣式 */
.social-links {
  margin-top: 2rem; /* 上邊距 */
}

.social-links a {
  display: inline-block; /* 顯示為行內區塊元素 */
  width: 40px; /* 寬度 */
  height: 40px; /* 高度 */
  line-height: 40px; /* 行高，用於垂直居中文字 */
  text-align: center; /* 文字水平居中 */
  border-radius: 50%; /* 圓形按鈕 */
  background-color: var(--primary-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--button-text-color); /* 文字顏色，來自 CSS 變數 */
  margin-right: 1rem; /* 右外邊距 */
  text-decoration: none; /* 移除下劃線 */
  font-weight: bold; /* 字體粗細 */
  transition: transform 0.3s ease; /* 變形過渡動畫 */
}

/* 社群連結懸停時的樣式 */
.social-links a:hover {
  transform: scale(1.1); /* 懸停時放大 */
}
</style>
