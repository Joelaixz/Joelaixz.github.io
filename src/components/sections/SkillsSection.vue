<template>
  <!-- 技能樹/工具箱區塊的根元素，用於展示個人或團隊的技能 -->
  <section id="skills" class="skills-section">
    <div class="container">
      <h2>技能樹 / Toolbox</h2>
      <!-- 技能網格佈局，用於分類展示不同技能 -->
      <div class="skills-grid">
        <!-- 單個技能類別區塊 -->
        <div class="skill-category">
          <h3>前端 (Frontend)</h3>
          <!-- 技能卡片，展示具體技能 -->
          <div class="skill-card">Vue.js</div>
          <div class="skill-card">React</div>
          <div class="skill-card">JavaScript (ES6+)</div>
          <div class="skill-card">CSS3 & SASS</div>
          <div class="skill-card">Three.js</div>
        </div>
        <div class="skill-category">
          <h3>後端 (Backend)</h3>
          <div class="skill-card">Node.js</div>
          <div class="skill-card">Express</div>
          <div class="skill-card">Firebase</div>
        </div>
        <div class="skill-category">
          <h3>設計 (Design)</h3>
          <div class="skill-card">Figma</div>
          <div class="skill-card">UI/UX Principles</div>
        </div>
        <div class="skill-category">
          <h3>工具 (Tools)</h3>
          <div class="skill-card">Git & GitHub</div>
          <div class="skill-card">Vite</div>
          <div class="skill-card">Webpack</div>
          <div class="skill-card">Docker</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 此組件主要用於展示靜態內容，因此不需要額外的 JavaScript 邏輯
</script>

<style scoped>
/* 技能區塊的整體樣式 */
.skills-section {
  padding: 6rem 2rem; /* 內邊距 */
  background-color: var(--background-color); /* 背景顏色，來自 CSS 變數 */
}

/* 容器樣式，用於限制內容寬度並居中 */
.container {
  max-width: 1100px; /* 最大寬度 */
  margin: 0 auto; /* 水平居中 */
  text-align: center; /* 文字居中 */
}

/* 標題樣式 */
h2 {
  font-size: 2.5rem; /* 字體大小 */
  margin-bottom: 3rem; /* 下邊距 */
}

/* 技能網格佈局樣式 */
.skills-grid {
  display: grid; /* 使用 Grid 佈局 */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 自動調整列寬 */
  gap: 2rem; /* 網格間距 */
  text-align: left; /* 文字左對齊 */
}

/* 技能類別標題樣式 */
.skill-category h3 {
  font-size: 1.5rem; /* 字體大小 */
  color: var(--primary-color); /* 文字顏色，來自 CSS 變數 */
  margin-bottom: 1rem; /* 下邊距 */
  border-bottom: 2px solid var(--primary-color); /* 底部邊框 */
  padding-bottom: 0.5rem; /* 底部內邊距 */
}

/* 技能卡片樣式 */
.skill-card {
  background-color: var(--section-bg-color); /* 背景顏色，來自 CSS 變數 */
  padding: 1rem; /* 內邊距 */
  margin-bottom: 0.5rem; /* 下邊距 */
  border-radius: 5px; /* 圓角邊框 */
  border-left: 4px solid var(--primary-color); /* 左側邊框 */
  transition: all 0.3s ease; /* 所有屬性過渡動畫 */
}

/* 技能卡片懸停時的樣式 */
.skill-card:hover {
  transform: translateX(5px); /* 懸停時向右移動 5 像素 */
  box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* 陰影效果 */
}
</style>
