<template>
  <div class="home-view">
    <!-- 頂部導覽列 -->
    <header class="main-header">
      <nav class="main-nav">
        <!-- Logo 或網站標題 -->
        <a href="#" class="nav-logo">MyPortfolio</a>
        <!-- 導覽連結 (已修改為錨點連結) -->
        <ul class="nav-links">
          <li><a href="#hero">Hero</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
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
    <footer class="main-footer">
      <p>&copy; 2024 Your Name. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// 引入所有的區塊組件
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

// 這個組件現在是我們單頁網站的主體，
// 它負責組合導覽列、所有內容區塊以及頁腳。
</script>

<style scoped>
/* 這裡的樣式與您之前的 PortfolioLayout.vue 基本相同，僅複製過來 */
.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text-primary);
}

.main-header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--color-accent);
}

.content-area {
  flex-grow: 1;
  /* 注意：這裡不再需要 padding，讓每個 section 自己控制內邊距 */
}

.main-footer {
  text-align: center;
  padding: 1rem;
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  border-top: 1px solid #333;
}
</style>
