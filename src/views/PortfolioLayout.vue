<template>
  <div class="portfolio-layout">
    <!-- 頂部導覽列 -->
    <header class="main-header">
      <nav class="main-nav">
        <!-- Logo 或網站標題 -->
        <a href="/" class="nav-logo">MyPortfolio</a>
        <!-- 導覽連結 -->
        <ul class="nav-links">
          <li><router-link to="/hero">Hero</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/skills">Skills</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- 主要內容區 -->
    <main class="content-area">
      <!-- 巢狀路由的內容將會被渲染在這裡 -->
      <router-view />
    </main>

    <!-- 頁腳 -->
    <footer class="main-footer">
      <p>&copy; 2024 Your Name. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// 這個組件定義了網站的整體佈局，包括頁首、主要內容區和頁腳。
// <router-view /> 是個佔位符，Vue Router 會根據當前的子路由，
// 動態地將對應的組件（例如 AboutView, PortfolioView 等）渲染到這個位置。
</script>

<style scoped>
/* 使用 scoped 以確保樣式只作用於此組件 */
.portfolio-layout {
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

/* 當前路由的連結樣式 */
.nav-links a.router-link-exact-active {
  color: var(--color-accent);
}

.nav-links a:hover {
  color: var(--color-accent);
}

.content-area {
  flex-grow: 1; /* 讓內容區填滿剩餘空間 */
  padding: 2rem;
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
