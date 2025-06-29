<template>
  <div class="rwd-demo-container">
    <h2>即時裝置縮放器與斷點視覺化</h2>
    <p class="description">拖曳模擬器邊框或右下角把手，測試網頁在不同寬度下的排版。</p>

    <div class="resizer-wrapper">
      <div
        class="resizable-frame"
        ref="resizableFrame"
        :style="{ width: frameWidth + 'px', height: frameHeight + 'px' }"
      >
        <div class="frame-info">
          當前寬度: {{ frameWidth }}px
          <transition name="fade">
            <span v-if="breakpointMessage" class="breakpoint-indicator">{{ breakpointMessage }}</span>
          </transition>
        </div>

        <!-- 模擬網頁內容 -->
        <div class="mock-website-content">
          <header class="mock-header">
            <div class="logo">Logo</div>
            <nav class="main-nav">
              <button class="hamburger-menu">☰</button>
              <ul>
                <li><a href="#">首頁</a></li>
                <li><a href="#">關於</a></li>
                <li><a href="#">服務</a></li>
                <li><a href="#">聯絡</a></li>
              </ul>
            </nav>
          </header>

          <main class="mock-main">
            <section class="hero-section">
              <h1>響應式設計的力量</h1>
              <p>在任何裝置上都能提供最佳的瀏覽體驗。</p>
            </section>

            <div class="content-columns">
              <div class="column">
                <h3>多欄佈局</h3>
                <img src="/dummy200.jpg" alt="Placeholder Image" />
                <p>內容會根據螢幕寬度自動調整為多欄或單欄。</p>
              </div>
              <div class="column">
                <h3>圖片與文字</h3>
                <img src="/dummy200.jpg" alt="Placeholder Image" />
                <p>圖片和文字的排列方式會隨著尺寸變化。</p>
              </div>
              <div class="column">
                <h3>側邊欄</h3>
                <img src="/dummy200.jpg" alt="Placeholder Image" />
                <p>在小螢幕上，側邊欄可能會隱藏或堆疊。</p>
              </div>
            </div>
          </main>

          <footer class="mock-footer">
            <p>&copy; 2025 響應式網站</p>
          </footer>
        </div>
      </div>
      <!-- 新的拖曳邊框和角落把手 -->
      <div class="resize-bar resize-bar-right" @mousedown="startResize('right', $event)"></div>
      <div class="resize-bar resize-bar-bottom" @mousedown="startResize('bottom', $event)"></div>
      <div class="resize-corner" @mousedown="startResize('corner', $event)"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const resizableFrame = ref(null);
const frameWidth = ref(800);
const frameHeight = ref(600);
const breakpointMessage = ref('');
let resizeStartX = 0;
let resizeStartY = 0;
let initialWidth = 0;
let initialHeight = 0;
let messageTimeout = null;
let activeHandle = null; // 用於追蹤當前拖曳的是哪個把手

// 定義斷點 (與 CSS 媒體查詢一致)
const breakpoints = [
  { width: 1200, name: '大型桌面' },
  { width: 992, name: '桌面' },
  { width: 768, name: '平板電腦' },
  { width: 576, name: '手機' },
];

const startResize = (handle, e) => {
  e.preventDefault();
  activeHandle = handle;
  resizeStartX = e.clientX;
  resizeStartY = e.clientY;
  initialWidth = resizableFrame.value.offsetWidth;
  initialHeight = resizableFrame.value.offsetHeight;
  window.addEventListener('mousemove', resizeFrame);
  window.addEventListener('mouseup', stopResize);
};

const resizeFrame = (e) => {
  let newWidth = initialWidth;
  let newHeight = initialHeight;

  if (activeHandle === 'right' || activeHandle === 'corner') {
    newWidth = initialWidth + (e.clientX - resizeStartX);
  }
  if (activeHandle === 'bottom' || activeHandle === 'corner') {
    newHeight = initialHeight + (e.clientY - resizeStartY);
  }

  // 限制最小尺寸
  frameWidth.value = Math.max(320, newWidth);
  frameHeight.value = Math.max(300, newHeight);
};

const stopResize = () => {
  window.removeEventListener('mousemove', resizeFrame);
  window.removeEventListener('mouseup', stopResize);
  activeHandle = null;
};

watch(frameWidth, (newWidth) => {
  // 檢查斷點
  let currentBreakpoint = '大型桌面';
  for (const bp of breakpoints) {
    if (newWidth <= bp.width) {
      currentBreakpoint = bp.name;
    }
  }

  // 顯示斷點訊息
  clearTimeout(messageTimeout);
  breakpointMessage.value = `✔ 已切換至 ${currentBreakpoint} 版面`;
  messageTimeout = setTimeout(() => {
    breakpointMessage.value = '';
  }, 2000); // 訊息顯示 2 秒
});

onMounted(() => {
  // 初始化時觸發一次斷點檢查
  if (resizableFrame.value) {
    frameWidth.value = resizableFrame.value.offsetWidth;
    frameHeight.value = resizableFrame.value.offsetHeight;
  }
});

onUnmounted(() => {
  stopResize();
  clearTimeout(messageTimeout);
});
</script>

<style scoped>
.rwd-demo-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.rwd-demo-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
  opacity: 0.8;
  font-size: 1.2rem;
}

.resizer-wrapper {
  position: relative; /* 確保把手可以相對於它定位 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px; /* 確保有足夠空間 */
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.resizable-frame {
  position: relative;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-color: #fff; /* 模擬網頁背景 */
  transition: width 0.1s ease-out, height 0.1s ease-out; /* 平滑縮放 */
  min-width: 320px;
  min-height: 300px;
}

.frame-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(var(--primary-color-rgb), 0.9);
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.breakpoint-indicator {
  background-color: #28a745; /* 綠色提示 */
  padding: 0.5rem 1rem; /* 增加內邊距 */
  border-radius: 20px; /* 圓角 */
  font-weight: bold;
  font-size: 1.2rem; /* 放大字體 */
  margin-left: 1rem; /* 與寬度資訊的間距 */
  box-shadow: 0 0 10px rgba(40, 167, 69, 0.5); /* 增加陰影 */
}

/* 模擬網頁內容樣式 */
.mock-website-content {
  width: 100%;
  height: 100%;
  overflow-y: auto; /* 允許內容滾動 */
  background-color: var(--background-color);
  color: var(--text-color);
}

.mock-header {
  background-color: var(--primary-color);
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mock-header .logo {
  font-weight: bold;
  font-size: 1.5rem;
}

.mock-header .main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.mock-header .main-nav a {
  color: #fff;
  text-decoration: none;
}

.mock-header .hamburger-menu {
  display: none; /* 預設隱藏漢堡菜單 */
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.mock-main {
  padding: 1.5rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.hero-section p {
  font-size: 1.1rem;
}

.content-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.content-columns .column {
  flex: 1;
  min-width: 280px;
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--section-bg-color);
}

.content-columns .column h3 {
  color: var(--primary-color);
  margin-bottom: 0.8rem;
}

.content-columns .column img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
}

.mock-footer {
  background-color: var(--text-color);
  color: var(--background-color);
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

/* 新的拖曳邊框樣式 */
.resize-bar {
  position: absolute;
  background-color: rgba(100, 100, 100, 0.8); /* 更深、更不透明的灰色 */
  transition: background-color 0.2s ease;
}

.resize-bar:hover {
  background-color: rgba(80, 80, 80, 0.9); /* 懸停時更深 */
}

.resize-bar-right {
  top: 0;
  right: -10px; /* 移到框架外部 */
  width: 10px;
  height: 100%;
  cursor: ew-resize;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resize-bar-right::before {
  content: '';
  width: 2px;
  height: 20px;
  background-color: #fff; /* 白色線條 */
  box-shadow: 0 5px 0 #fff, 0 -5px 0 #fff; /* 兩條短線 */
}

.resize-bar-bottom {
  left: 0;
  bottom: -10px; /* 移到框架外部 */
  width: 100%;
  height: 10px;
  cursor: ns-resize;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resize-bar-bottom::before {
  content: '';
  width: 20px;
  height: 2px;
  background-color: #fff; /* 白色線條 */
  box-shadow: 5px 0 0 #fff, -5px 0 0 #fff; /* 兩條短線 */
}

.resize-corner {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-color: rgba(80, 80, 80, 0.9); /* 更深、更不透明的灰色 */
  cursor: nwse-resize;
  z-index: 12; /* 確保在最上層 */
  border-radius: 50%; /* 圓形把手 */
  transition: background-color 0.2s ease;
}

.resize-corner:hover {
  background-color: rgba(60, 60, 60, 1); /* 懸停時更深 */
}

/* --- 媒體查詢 (Media Queries) --- */

/* 平板電腦 (Tablet) */
@media (max-width: 992px) {
  .mock-header .main-nav ul {
    display: none; /* 隱藏導航菜單 */
  }
  .mock-header .hamburger-menu {
    display: block; /* 顯示漢堡菜單 */
  }
  .content-columns {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 兩欄佈局 */
  }
}

/* 手機 (Mobile) */
@media (max-width: 768px) {
  .content-columns {
    flex-direction: column; /* 單欄堆疊 */
  }
  .content-columns .column img {
    order: -1; /* 圖片在上 */
  }
  .hero-section h1 {
    font-size: 2rem;
  }
  .hero-section p {
    font-size: 1rem;
  }
}

/* 更小的手機 */
@media (max-width: 576px) {
  .mock-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  .mock-header .logo {
    margin-bottom: 0.5rem;
  }
  .mock-main {
    padding: 1rem;
  }
}

/* 過渡動畫 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>