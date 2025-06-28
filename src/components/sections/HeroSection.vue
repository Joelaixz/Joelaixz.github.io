<template>
  <!-- 英雄區塊的根元素，通常用於展示網站的標題、簡介和主要行動呼籲 -->
  <section id="hero" class="hero-section">
    <!-- 模擬 Swiper.js 的單個投影片，用於展示專案資訊 -->
    <div class="swiper-slide">
      <!-- 投影片的背景區域，可以放置圖片或影片 -->
      <div class="slide-background">
        <!-- 動態影片或 GIF 的佔位符 -->
        <div class="video-placeholder"></div>
      </div>
      <!-- 投影片的內容區域，包含標題、簡介、技術標籤和行動呼籲按鈕 -->
      <div class="slide-content">
        <h1>專案標題 (Project Title)</h1>
        <p class="one-liner-pitch">一個幫助使用者追蹤閱讀進度的社群平台。</p>
        <div class="tech-tags">
          <span>Vue.js</span>
          <span>Firebase</span>
          <span>Pinia</span>
          <span>Vite</span>
        </div>
        <div class="cta-buttons">
          <!-- "查看專案" 按鈕，導向到技能展示頁面的狀態管理子頁面 -->
          <router-link to="/project/skills-showcase/state-management" class="btn-primary">查看專案</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 在實際應用中，此處會導入並配置 Swiper.js 或其他輪播庫
</script>

<style scoped>
/* --- 基礎區塊佈局 --- */
.hero-section {
  height: 90vh; /* 設定區塊高度為視窗高度的 90% */
  display: flex; /* 使用 Flexbox 佈局 */
  align-items: center; /* 垂直居中對齊內容 */
  justify-content: center; /* 水平居中對齊內容 */
  color: white; /* 文字顏色 */
  text-align: center; /* 文字水平居中 */
  position: relative; /* 設定為相對定位，以便子元素絕對定位 */
}

.swiper-slide {
  width: 100%; /* 寬度佔滿父元素 */
  height: 100%; /* 高度佔滿父元素 */
  position: relative; /* 設定為相對定位 */
  display: flex; /* 使用 Flexbox 佈局 */
  align-items: center; /* 垂直居中對齊內容 */
  justify-content: center; /* 水平居中對齊內容 */
}

/* --- 背景與疊加層 --- */
.slide-background {
  position: absolute; /* 絕對定位 */
  top: 0;
  left: 0;
  width: 100%; /* 寬度佔滿父元素 */
  height: 100%; /* 高度佔滿父元素 */
  z-index: -1; /* 放置在內容下方 */
}

.video-placeholder {
  width: 100%; /* 寬度佔滿父元素 */
  height: 100%; /* 高度佔滿父元素 */
  background-color: #333; /* 預設背景色 */
  background-image: url('https://via.placeholder.com/1920x1080/333/808080?text=Dynamic+Project+Video'); /* 佔位圖片 */
  background-size: cover; /* 背景圖片覆蓋整個元素 */
  background-position: center; /* 背景圖片居中 */
}

.slide-background::after {
  content: ''; /* 偽元素內容為空 */
  position: absolute; /* 絕對定位 */
  top: 0;
  left: 0;
  width: 100%; /* 寬度佔滿父元素 */
  height: 100%; /* 高度佔滿父元素 */
  background-color: var(--hero-overlay-color); /* 疊加層顏色，來自 CSS 變數 */
}

/* --- 內容與排版 --- */
.slide-content {
  z-index: 1; /* 放置在背景上方 */
  padding: 2rem; /* 內邊距 */
}

.slide-content h1 {
  font-size: 4rem; /* 標題字體大小 */
  font-weight: 900; /* 字體粗細 */
  margin-bottom: 1rem; /* 下邊距 */
  color: var(--hero-text-color); /* 文字顏色，來自 CSS 變數 */
}

.one-liner-pitch {
  font-size: 1.25rem; /* 簡介字體大小 */
  margin-bottom: 1.5rem; /* 下邊距 */
  color: var(--hero-text-color); /* 文字顏色，來自 CSS 變數 */
}

/* --- 技術標籤 --- */
.tech-tags {
  margin-bottom: 2rem; /* 下邊距 */
}

.tech-tags span {
  display: inline-block; /* 顯示為行內區塊元素 */
  background-color: rgba(255, 255, 255, 0.1); /* 背景顏色，帶透明度 */
  color: var(--hero-text-color); /* 文字顏色，來自 CSS 變數 */
  padding: 0.3rem 0.8rem; /* 內邊距 */
  border-radius: 15px; /* 圓角邊框 */
  margin: 0.2rem; /* 外邊距 */
  font-size: 0.9rem; /* 字體大小 */
  border: 1px solid var(--primary-color); /* 邊框，來自 CSS 變數 */
}

/* --- 行動呼籲按鈕 --- */
.cta-buttons a {
  text-decoration: none; /* 移除下劃線 */
  padding: 0.8rem 1.8rem; /* 內邊距 */
  border-radius: 5px; /* 圓角邊框 */
  font-weight: bold; /* 字體粗細 */
  margin: 0 0.5rem; /* 外邊距 */
  transition: all 0.3s ease; /* 所有屬性在 0.3 秒內平滑過渡 */
}

.btn-primary {
  background-color: var(--primary-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--button-text-color); /* 文字顏色，來自 CSS 變數 */
}

.btn-primary:hover {
    transform: translateY(-3px); /* 懸停時向上移動 3 像素 */
}
</style>
