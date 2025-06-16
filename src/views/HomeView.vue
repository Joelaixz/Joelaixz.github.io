<template>
  <div class="home-view">
    <!-- 頂部導覽列 (Bootstrap Navbar) -->
    <header class="sticky-top">
      <nav class="navbar navbar-expand-md navbar-dark navbar-custom-bg">
        <div class="container">
          <!-- Logo 或網站標題 -->
          <a class="navbar-brand nav-logo" href="#">MyPortfolio</a>

          <!-- 漢堡選單按鈕 (在 md 以下尺寸顯示) -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- 導覽連結 (可收合) -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- 主要內容區 (所有區塊在此渲染) -->
    <main class="content-area">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <!-- 頁腳 -->
    <footer class="py-3 footer-custom-bg">
      <div class="container text-center">
        <p class="mb-0">&copy; {{ currentYear }} Joel Lai. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 引入所有的區塊組件
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

// 動態獲取當前年份
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
/* 移除了大部分佈局 CSS，因為已由 Bootstrap 取代。
  只保留與網站獨特主題顏色相關的自定義樣式。
*/
.home-view {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}

/* 自定義 Navbar 背景色 */
.navbar-custom-bg {
  background-color: var(--color-surface);
  border-bottom: 1px solid #333;
}

/* 自定義 Footer 背景色 */
.footer-custom-bg {
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  border-top: 1px solid #333;
  font-size: 0.9rem;
}

/* 讓 Logo 沿用設計規範的字體和顏色 */
.nav-logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--color-accent) !important; /* 使用 !important 來覆蓋 bootstrap 的預設顏色 */
}

/* 自定義 NavLink 的顏色 */
.navbar-dark .navbar-nav .nav-link {
  color: var(--color-text-primary);
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  /* .active class 會在滾動監聽時添加 */
  color: var(--color-accent);
}

/* 確保漢堡選單的邊框顏色在深色主題下可見 */
.navbar-dark .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.2);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28240, 242, 245, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.content-area {
  flex-grow: 1;
}
</style>
