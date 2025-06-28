<template>
  <!-- 技能內容展示的根容器 -->
  <div class="skill-page-content">
    <!-- 根據 showDemo 狀態切換顯示內容或 Live Demo -->
    <div v-if="!showDemo">
      <h2>{{ skillData.title }}</h2>
      <h3>專案背景 (Context):</h3>
      <p>{{ skillData.context }}</p>
      <h3>技術棧 (Tech Stack):</h3>
      <ul>
        <li v-for="tech in skillData.techStack" :key="tech">{{ tech }}</li>
      </ul>
      <!-- Live Demo 按鈕，點擊切換到動態展示窗口 -->
      <button @click="toggleDemo" class="btn-primary">Live Demo</button>
    </div>
    <div v-else class="live-demo-container">
      <h3>動態展示窗口</h3>
      <!-- 這裡將是動態展示的內容，例如嵌入的組件或 iframe -->
      <p>此處將展示 {{ skillData.title }} 的 Live Demo。</p>
      <!-- 返回說明按鈕，點擊切換回文字說明 -->
      <button @click="toggleDemo" class="btn-secondary">返回說明</button>
    </div>
  </div>
</template>

<script setup>
// 導入 Vue 的響應式 API 和定義 props 的函數
import { ref, defineProps } from 'vue';

// 定義組件接收的 props，期望接收一個包含技能數據的 Object
const props = defineProps({
  skillData: Object
});

// 響應式變數，控制是否顯示 Live Demo，預設為 false (顯示文字說明)
const showDemo = ref(false);

// 切換 showDemo 狀態的函數
const toggleDemo = () => {
  showDemo.value = !showDemo.value;
};
</script>

<style scoped>
/* 技能頁面內容區的基礎樣式 */
.skill-page-content {
  padding: 2rem; /* 內容區內邊距 */
}

/* Live Demo 容器的樣式 */
.live-demo-container {
  border: 1px solid var(--border-color); /* 邊框 */
  padding: 1.5rem; /* 內邊距 */
  border-radius: 8px; /* 圓角邊框 */
  background-color: var(--section-bg-color); /* 背景顏色，來自 CSS 變數 */
}

/* 主要和次要按鈕的通用樣式 */
.btn-primary,
.btn-secondary {
  padding: 0.8rem 1.5rem; /* 內邊距 */
  border-radius: 5px; /* 圓角邊框 */
  font-weight: bold; /* 字體粗細 */
  cursor: pointer; /* 鼠標樣式 */
  transition: all 0.3s ease; /* 所有屬性過渡動畫 */
  margin-top: 1rem; /* 上邊距 */
}

/* 主要按鈕樣式 */
.btn-primary {
  background-color: var(--primary-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--button-text-color); /* 文字顏色，來自 CSS 變數 */
  border: none; /* 無邊框 */
}

/* 次要按鈕樣式 */
.btn-secondary {
  background-color: transparent; /* 透明背景 */
  color: var(--primary-color); /* 文字顏色，來自 CSS 變數 */
  border: 1px solid var(--primary-color); /* 邊框，來自 CSS 變數 */
  margin-left: 1rem; /* 左外邊距 */
}

/* 主要按鈕懸停時的樣式 */
.btn-primary:hover {
  opacity: 0.9; /* 懸停時透明度降低 */
}

/* 次要按鈕懸停時的樣式 */
.btn-secondary:hover {
  background-color: var(--primary-color); /* 懸停時背景顏色變為主題色 */
  color: var(--button-text-color); /* 懸停時文字顏色變為按鈕文字顏色 */
}
</style>
