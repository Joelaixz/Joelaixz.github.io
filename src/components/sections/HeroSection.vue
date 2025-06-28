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
        <h1>{{ currentProject.title }}</h1>
        <p class="one-liner-pitch">{{ currentProject.description }}</p>
        <div class="tech-tags">
          <span v-for="tech in currentProject.techTags" :key="tech">{{ tech }}</span>
        </div>
        <div class="cta-buttons">
          <!-- "查看專案" 按鈕，導向到技能展示頁面的狀態管理子頁面 -->
          <router-link :to="currentProject.link" class="btn-primary">查看專案</router-link>
        </div>
      </div>

      <!-- Swiper 導航按鈕 -->
      <div class="swiper-navigation">
        <button @click="prevProject" class="nav-button prev-button">&#10094;</button>
        <button @click="nextProject" class="nav-button next-button">&#10095;</button>
      </div>
    </div>

    <!-- 時間進度條 -->
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const projects = ref([
  {
    title: '專案一：複合技能展示',
    description: '透過實際範例，深入探索我的前端開發技能。',
    techTags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    link: '/project/skills-showcase/html/semantic-tags',
  },
  {
    title: '專案二：智慧家居控制',
    description: '一個基於物聯網技術的智慧家居管理系統，實現遠端控制與自動化。',
    techTags: ['Vue.js', 'Node.js', 'IoT', 'MongoDB'],
    link: '/project/project-two',
  },
  {
    title: '專案三：互動式數據可視化',
    description: '將複雜的數據轉化為直觀的圖表與儀表板，提供動態分析。',
    techTags: ['React', 'D3.js', 'Python', 'DataViz'],
    link: '/project/project-three',
  },
]);

const currentIndex = ref(0);
let autoPlayInterval = null;
let progressBarInterval = null;
const progressBarWidth = ref(0);
const slideDuration = 6000; // 幻燈片切換時間 (毫秒)
const updateInterval = 100; // 進度條更新間隔 (毫秒)

const currentProject = computed(() => projects.value[currentIndex.value]);

const startAutoPlay = () => {
  clearInterval(autoPlayInterval);
  clearInterval(progressBarInterval);
  progressBarWidth.value = 0;

  autoPlayInterval = setInterval(() => {
    nextProject();
  }, slideDuration);

  progressBarInterval = setInterval(() => {
    progressBarWidth.value += (updateInterval / slideDuration) * 100;
    if (progressBarWidth.value >= 100) {
      progressBarWidth.value = 100;
    }
  }, updateInterval);
};

const resetAutoPlay = () => {
  startAutoPlay();
};

const nextProject = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length;
  resetAutoPlay();
};

const prevProject = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.value.length) % projects.value.length;
  resetAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(autoPlayInterval);
  clearInterval(progressBarInterval);
});
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

/* Swiper 導航按鈕 */
.swiper-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px; /* 左右邊距 */
  z-index: 2; /* 確保在內容上方 */
}

.nav-button {
  background-color: rgba(255, 255, 255, 0.2); /* 半透明白色背景 */
  color: white;
  border: none;
  border-radius: 50%; /* 圓形按鈕 */
  width: 60px; /* 加大按鈕尺寸 */
  height: 60px; /* 加大按鈕尺寸 */
  font-size: 2.5rem; /* 加大字體 */
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* 增加模糊效果 */
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.4); /* 懸停時變亮 */
}

/* 進度條容器 */
.progress-bar-container {
  position: absolute;
  bottom: 20px; /* 距離底部 10px */
  left: 50%;
  transform: translateX(-50%);
  width: 10%; /* 寬度佔滿，左右各留 20px */
  max-width: 1000px; /* 與 .container 寬度一致 */
  height: 5px; /* 進度條高度 */
  background-color: rgba(128, 128, 128, 0.3); /* 灰階背景色 */
  border-radius: 2.5px; /* 圓角 */
  overflow: hidden; /* 隱藏超出部分 */
  z-index: 3; /* 確保在最上層 */
}

/* 進度條本身 */
.progress-bar {
  height: 100%;
  background-color: rgba(128, 128, 128, 0.7); /* 灰階進度色 */
  transition: width 0.1s linear; /* 平滑的寬度過渡 */
}
</style>