<template>
  <!-- 應用程式的固定頁首，包含導覽、Logo 和控制項 -->
  <header class="sticky-header" :class="{ 'skills-page-header': isSkillsPage }">
    <!-- 網站 Logo，點擊可返回首頁 -->
    <div class="logo">
      <router-link to="/">Joel</router-link>
    </div>

    <!-- 主要導覽連結，在技能頁面時隱藏 -->
    <nav class="nav-links" v-if="!isSkillsPage">
      <router-link to="/#about">關於我</router-link>
      <router-link to="/#skills">技能</router-link>
      <router-link to="/#contact">聯絡我</router-link>
    </nav>

    <!-- 控制項區域，包含主題切換按鈕和 GitHub 連結 -->
    <div class="controls">
      <!-- 主題切換按鈕，根據當前主題顯示不同文字和樣式 -->
      <button @click="toggleTheme" class="theme-toggle-button" :class="currentTheme">
        <span v-if="currentTheme === 'dark'">🌙 Dark</span>
        <span v-else-if="currentTheme === 'cyberpunk'">🤖 Cyber</span>
        <span v-else-if="currentTheme === 'light'">☀️ Light</span>
      </button>
      <!-- GitHub 連結 -->
      <a href="https://github.com/Joelaixz/Joelaixz.github.io" target="_blank" rel="noopener noreferrer" class="github-link">
        <font-awesome-icon :icon="['fab', 'github']" class="github-icon" />
      </a>
      <!-- 漢堡選單按鈕，僅在小螢幕顯示 -->
      <button class="hamburger-menu" @click="toggleMobileMenu" v-if="!isSkillsPage">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>

    <!-- 行動版導覽選單，根據 showMobileMenu 狀態顯示/隱藏 -->
    <nav class="mobile-nav-links" :class="{ 'is-active': showMobileMenu }" v-if="!isSkillsPage">
      <router-link to="/#about" @click="toggleMobileMenu">關於我</router-link>
      <router-link to="/#skills" @click="toggleMobileMenu">技能</router-link>
      <router-link to="/#contact" @click="toggleMobileMenu">聯絡我</router-link>
    </nav>
  </header>
</template>

<script setup>
// 導入 Vue 的響應式 API 和生命週期鉤子
import { ref, onMounted, defineProps } from 'vue';
// 導入 Vue Router 的 RouterLink 組件
import { RouterLink } from 'vue-router';

// 定義組件接收的 props
const props = defineProps({
  isSkillsPage: {
    type: Boolean,
    default: false
  }
});

// 定義可用的主題列表
const themes = ['dark', 'cyberpunk', 'light'];
// 響應式變數，用於儲存當前主題，預設為 'dark'
const currentTheme = ref('dark');
// 響應式變數，用於控制行動版選單的顯示/隱藏
const showMobileMenu = ref(false);

// 切換主題的函數
const toggleTheme = () => {
  // 獲取當前主題在主題列表中的索引
  const currentIndex = themes.indexOf(currentTheme.value);
  // 計算下一個主題的索引，循環切換
  const nextIndex = (currentIndex + 1) % themes.length;
  // 獲取下一個主題的名稱
  const nextTheme = themes[nextIndex];
  // 設定 HTML 根元素的 data-theme 屬性，應用主題樣式
  document.documentElement.setAttribute('data-theme', nextTheme);
  // 將選定的主題儲存到 localStorage，以便下次訪問時保留
  localStorage.setItem('theme', nextTheme);
  // 更新 currentTheme 響應式變數
  currentTheme.value = nextTheme;
};

// 切換行動版選單顯示/隱藏的函數
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

// 組件掛載後執行，用於初始化主題
onMounted(() => {
  // 從 localStorage 獲取保存的主題
  const savedTheme = localStorage.getItem('theme');
  // 如果有保存的主題且該主題有效，則應用該主題
  if (savedTheme && themes.includes(savedTheme)) {
    currentTheme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // 如果沒有保存的主題或主題無效，則預設為 'dark' 主題
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
</script>

<style scoped>
/* 固定頁首的樣式 */
.sticky-header {
  position: sticky; /* 固定在視窗頂部 */
  top: 0; /* 距離頂部 0 */
  width: 100%; /* 寬度佔滿 */
  display: flex; /* 使用 Flexbox 佈局 */
  justify-content: space-between; /* 子元素兩端對齊 */
  align-items: center; /* 垂直居中對齊 */
  padding: 1rem 2rem; /* 內邊距 */
  background-color: var(--header-bg-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--text-color); /* 文字顏色，來自 CSS 變數 */
  z-index: 1000; /* 確保在其他內容之上 */
  transition: background-color 0.3s ease; /* 背景顏色過渡動畫 */
  border-bottom: 1px solid var(--border-color); /* 底部邊框 */
  height: var(--header-height); /* 設定頁首高度 */
}

/* 技能頁面時頁首的特殊樣式 */
.skills-page-header {
  justify-content: center; /* Logo 置中 */
}

/* Logo 樣式 */
.logo {
  /* 在技能頁面時，Logo 佔據更多空間以實現置中 */
  flex-grow: 1;
  text-align: center;
}

.logo a {
  font-weight: bold; /* 字體粗細 */
  font-size: 1.5rem; /* 字體大小 */
  text-decoration: none; /* 移除下劃線 */
  color: var(--primary-color); /* 文字顏色，來自 CSS 變數 */
}

/* 導覽連結樣式 */
.nav-links {
  flex-grow: 1; /* 讓導覽連結佔據更多空間 */
  text-align: center;
}

.nav-links a {
  margin: 0 1rem; /* 左右外邊距 */
  text-decoration: none; /* 移除下劃線 */
  color: var(--text-color); /* 文字顏色，來自 CSS 變數 */
  transition: color 0.3s ease; /* 文字顏色過渡動畫 */
}

/* 導覽連結懸停時的樣式 */
.nav-links a:hover {
  color: var(--primary-color); /* 懸停時文字顏色變為主題色 */
}

/* 控制項區域的樣式 */
.controls {
  display: flex; /* 使用 Flexbox 佈局 */
  align-items: center; /* 垂直居中對齊 */
  gap: 1.5rem; /* 子元素間距 */
}

/* 主題切換按鈕樣式 */
.theme-toggle-button {
  background-color: var(--primary-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--button-text-color); /* 文字顏色，來自 CSS 變數 */
  border: none; /* 無邊框 */
  padding: 0.5rem 1rem; /* 內邊距 */
  border-radius: 5px; /* 圓角邊框 */
  cursor: pointer; /* 鼠標樣式 */
  font-weight: bold; /* 字體粗細 */
  transition: background-color 0.3s ease, color 0.3s ease; /* 背景和文字顏色過渡動畫 */
  display: flex; /* 使用 Flexbox 佈局 */
  align-items: center; /* 垂直居中對齊 */
  gap: 0.5rem; /* 子元素間距 */
}

/* 主題切換按鈕懸停時的樣式 */
.theme-toggle-button:hover {
  opacity: 0.9; /* 懸停時透明度降低 */
}

/* 淺色主題按鈕的特定樣式 */
.theme-toggle-button.light {
  background-color: #FFD700; /* 金色 */
  color: #333;
}

/* 深色主題按鈕的特定樣式 */
.theme-toggle-button.dark {
  background-color: #6A0DAD; /* 深紫色 */
  color: #FFF;
}

/* 賽博龐克主題按鈕的特定樣式 */
.theme-toggle-button.cyberpunk {
  background-color: #00F0FF; /* 亮青色 */
  color: #0A043C;
  box-shadow: 0 0 10px #00F0FF, 0 0 20px #00F0FF; /* 發光效果 */
}

/* GitHub 連結樣式 */
.github-link {
  color: var(--text-color); /* 顏色 */
  text-decoration: none; /* 移除下劃線 */
  transition: color 0.3s ease;
  display: flex; /* 讓圖片可以垂直居中 */
  align-items: center;
}

.github-link:hover {
  color: var(--primary-color); /* 懸停時變色 */
}

.github-icon {
  width: 28px; /* 設定圖示寬度 */
  height: 28px; /* 設定圖示高度 */
  /* Font Awesome 圖示顏色由 color 屬性控制 */
}

/* 漢堡選單按鈕樣式 */
.hamburger-menu {
  display: none; /* 預設隱藏 */
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

/* 行動版導覽選單樣式 */
.mobile-nav-links {
  display: none; /* 預設隱藏 */
  position: absolute;
  top: var(--header-height); /* 位於頁首下方 */
  left: 0;
  width: 100%;
  background-color: var(--header-bg-color);
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.mobile-nav-links.is-active {
  display: flex; /* 啟用時顯示 */
}

.mobile-nav-links a {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.8rem 0;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease;
}

.mobile-nav-links a:hover {
  background-color: var(--primary-color);
  color: var(--button-text-color);
}

/* RWD 調整 */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* 在小螢幕上隱藏桌面版導覽連結 */
  }

  .hamburger-menu {
    display: block; /* 在小螢幕上顯示漢堡選單按鈕 */
  }

  .sticky-header {
    justify-content: space-between; /* 調整頁首內容分佈 */
  }

  .skills-page-header {
    justify-content: center; /* 技能頁面時 Logo 仍然置中 */
  }

  .logo {
    flex-grow: 0; /* 恢復 Logo 的 flex-grow */
    text-align: left; /* Logo 靠左對齊 */
  }
}
</style>