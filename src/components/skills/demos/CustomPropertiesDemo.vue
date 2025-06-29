<template>
  <div class="custom-properties-demo-container">
    <h2>元件變體產生器</h2>
    <p class="description">此展示利用 CSS 變數的局部作用域特性，以更現代化、可維護的方式建立同一元件的不同版本。</p>

    <div class="generator-layout">
      <!-- 元件預覽區 -->
      <div class="component-preview">
        <h3>即時預覽</h3>
        <div class="plan-card" :class="cardClasses">
          <div class="card-header">
            <h4 class="plan-title">{{ plan.title }}</h4>
            <p class="plan-price">${{ plan.price }}<span>/月</span></p>
          </div>
          <div class="card-body">
            <ul>
              <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
            </ul>
            <button class="btn-subscribe">立即訂閱</button>
          </div>
        </div>
      </div>

      <!-- 設定面板 -->
      <div class="settings-panel">
        <h3>元件變體選項</h3>
        <div class="option-group">
          <h4>狀態:</h4>
          <div class="button-group">
            <button
              @click="toggleFeature('standard')"
              :class="{ 'active': !isFeatured }"
              class="btn-option"
            >
              標準
            </button>
            <button
              @click="toggleFeature('featured')"
              :class="{ 'active': isFeatured }"
              class="btn-option"
            >
              簡約
            </button>
          </div>
        </div>

        <div class="option-group">
          <h4>模式:</h4>
          <div class="button-group">
            <button
              @click="toggleTheme('light')"
              :class="{ 'active': !isDarkTheme }"
              class="btn-option"
            >
              亮色
            </button>
            <button
              @click="toggleTheme('dark')"
              :class="{ 'active': isDarkTheme }"
              class="btn-option"
            >
              暗色
            </button>
          </div>
        </div>

        <div class="option-group">
          <h4>顯示 CSS:</h4>
          <button @click="showCssCode = !showCssCode" class="btn-option">
            {{ showCssCode ? '隱藏 CSS' : '顯示 CSS' }}
          </button>
        </div>

        <pre v-if="showCssCode" class="css-code-block"><code>
/* 基礎樣式 */
.plan-card {
  --card-bg-color: #fff;
  --card-text-color: #333;
  --card-border-color: #eee;
  --card-header-bg: var(--primary-color);
  --card-header-text: #fff;
  --btn-bg: var(--primary-color);
  --btn-text: #fff;
  /* ... 其他基礎變數 */
}

/* 簡約狀態 */
.plan-card.is-featured {
  --card-border-color: var(--primary-color);
  --card-header-bg: var(--primary-color-dark);
  --btn-bg: var(--primary-color-dark);
  /* ... 覆寫相關變數 */
}

/* 暗色模式 */
.plan-card.theme-dark {
  --card-bg-color: #333;
  --card-text-color: #eee;
  --card-border-color: #555;
  --card-header-bg: #222;
  --card-header-text: #fff;
  --btn-bg: #555;
  --btn-text: #fff;
  /* ... 覆寫相關變數 */
}

/* 組合範例 */
.plan-card.is-featured.theme-dark {
  --card-header-bg: #000;
  --btn-bg: #000;
  /* ... 更精確的覆寫 */
}
        </code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const plan = ref({
  title: '基本方案',
  price: 9.99,
  features: [
    '無限儲存空間',
    '每月 100GB 流量',
    '24/7 客戶支援',
    '免費 SSL 憑證',
  ],
});

const isFeatured = ref(false);
const isDarkTheme = ref(false);
const showCssCode = ref(false);

const cardClasses = computed(() => {
  return {
    'is-featured': isFeatured.value,
    'theme-dark': isDarkTheme.value,
  };
});

const toggleFeature = (type) => {
  isFeatured.value = type === 'featured';
};

const toggleTheme = (type) => {
  isDarkTheme.value = type === 'dark';
};
</script>

<style scoped>
.custom-properties-demo-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.custom-properties-demo-container h2 {
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

.generator-layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.component-preview,
.settings-panel {
  flex: 1;
  min-width: 300px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.component-preview h3,
.settings-panel h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
}

/* --- 方案卡片樣式 --- */
.plan-card {
  /* 基礎變數定義 */
  --card-bg-color: #fff;
  --card-text-color: #333;
  --card-border-color: #eee;
  --card-header-bg: var(--primary-color);
  --card-header-text: #fff;
  --btn-bg: var(--primary-color);
  --btn-text: #fff;
  --feature-icon-color: var(--primary-color);

  background-color: var(--card-bg-color);
  color: var(--card-text-color);
  border: 1px solid var(--card-border-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* 預設輕微陰影 */
  transition: all 0.3s ease;
}

.card-header {
  background-color: var(--card-header-bg);
  color: var(--card-header-text);
  padding: 1.5rem;
  text-align: center;
}

.plan-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: inherit; /* 繼承父元素顏色 */
}

.plan-price {
  font-size: 2.5rem;
  font-weight: bold;
  color: inherit; /* 繼承父元素顏色 */
}

.plan-price span {
  font-size: 1rem;
  font-weight: normal;
  opacity: 0.8;
}

.card-body {
  padding: 1.5rem;
}

.card-body ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.card-body li {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  position: relative;
  padding-left: 25px;
}

.card-body li::before {
  content: '\2713'; /* Checkmark */
  color: var(--feature-icon-color);
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}

.btn-subscribe {
  display: block;
  width: 100%;
  padding: 0.8rem;
  background-color: var(--btn-bg);
  color: var(--btn-text);
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-subscribe:hover {
  opacity: 0.9;
}

/* --- 變體樣式 (局部變數覆寫) --- */
.plan-card.is-featured {
  --card-border-color: var(--primary-color);
  --card-header-bg: var(--primary-color-dark); /* 使用更深的顏色 */
  --card-header-text: #fff; /* 確保文字顏色 */
  --btn-bg: var(--primary-color-dark); /* 使用更深的顏色 */
  --btn-text: #fff; /* 確保文字顏色 */
  --feature-icon-color: var(--primary-color-dark);
  --card-bg-color: var(--section-bg-color); /* 使用 section-bg-color 增加對比 */
  box-shadow: 0 8px 20px rgba(var(--primary-color-rgb), 0.3);
  transform: translateY(-5px);
}

.plan-card.theme-dark {
  --card-bg-color: #333;
  --card-text-color: #eee;
  --card-border-color: #555;
  --card-header-bg: #222;
  --card-header-text: #fff;
  --btn-bg: #555;
  --btn-text: #fff;
  --feature-icon-color: #eee;
}

/* 組合變體 */
.plan-card.is-featured.theme-dark {
  --card-header-bg: #000;
  --btn-bg: #000;
  --feature-icon-color: #fff;
}

/* --- 設定面板樣式 --- */
.settings-panel h4 {
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  color: var(--text-color);
}

.button-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.btn-option {
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-option:hover {
  background-color: var(--section-bg-color);
}

.btn-option.active {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border-color: var(--primary-color);
}

.css-code-block {
  background-color: #2d2d2d;
  color: #ccc;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.6; /* 增加行高 */
  border: 1px solid #444; /* 增加邊框 */
}

.css-code-block code {
  white-space: pre-wrap; /* 保持換行 */
  display: block; /* 確保 code 元素佔據整個寬度 */
}
</style>