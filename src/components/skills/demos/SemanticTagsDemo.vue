<template>
  <div class="semantic-tags-demo">
    <div class="controls">
      <button @click="toggleXRay" :class="{ 'active': isXRayActive }" class="xray-toggle-button">
        {{ isXRayActive ? '關閉結構透視' : '啟用結構透視' }}
      </button>
    </div>

    <div class="news-page-container" :class="{ 'x-ray-mode': isXRayActive }">
      <header>
        <h1>新聞報導標題</h1>
        <nav>
          <ul>
            <li><a href="#">首頁</a></li>
            <li><a href="#">國際</a></li>
            <li><a href="#">科技</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <header>
            <h2>文章主標題：探索前端框架的未來</h2>
            <address>作者：<a rel="author" href="#">Joel</a></address>
            <time datetime="2024-07-20">發布日期：2024年7月20日</time>
          </header>
          <p>這是一段關於前端框架發展趨勢的引言。隨著技術的快速迭代，前端開發者面臨著不斷學習新工具和技術的挑戰。</p>
          <figure>
            <img src="https://via.placeholder.com/600x300?text=Frontend+Frameworks" alt="前端框架示意圖">
            <figcaption>圖：前端框架的生態系統。</figcaption>
          </figure>
          <p>在過去的幾年中，Vue、React 和 Angular 等主流框架持續演進，提供了更高效、更靈活的開發方式。同時，新的框架和工具也層出不窮，例如 Svelte、SolidJS 和 Qwik，它們各自帶來了獨特的優勢和解決方案。</p>
          <h3>子標題：Vue 3 的 Composition API</h3>
          <p>Vue 3 引入的 Composition API 徹底改變了組件的組織方式，提供了更強大的邏輯複用能力和更好的 TypeScript 支持。這使得大型應用程式的開發和維護變得更加容易。</p>
          <blockquote>
            <p>「語意化 HTML 不僅僅是為了瀏覽器，更是為了人類和機器都能更好地理解內容。」</p>
            <footer>— 某位前端專家</footer>
          </blockquote>
          <p>除了框架本身，狀態管理、路由、打包工具等周邊生態系統也在不斷成熟。開發者需要綜合考慮專案需求、團隊熟悉度以及社區支持等因素，選擇最適合的技術棧。</p>
          <footer>
            <p>相關標籤：<a href="#">前端</a>, <a href="#">框架</a>, <a href="#">Vue</a>, <a href="#">React</a></p>
          </footer>
        </article>

        <aside>
          <h3>相關文章</h3>
          <ul>
            <li><a href="#">如何選擇適合你的前端框架</a></li>
            <li><a href="#">深入理解 JavaScript 異步編程</a></li>
            <li><a href="#">CSS 變數在主題切換中的應用</a></li>
          </ul>
        </aside>
      </main>

      <footer>
        <p>&copy; 2024 新聞報導範例</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isXRayActive = ref(false);

const toggleXRay = () => {
  isXRayActive.value = !isXRayActive.value;
};
</script>

<style scoped>
.semantic-tags-demo {
  padding: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 8px;
}

.controls {
  text-align: center;
  margin-bottom: 1.5rem;
}

.xray-toggle-button {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.xray-toggle-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.xray-toggle-button.active {
  background-color: var(--text-color);
  color: var(--background-color);
}

.news-page-container {
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--section-bg-color);
  transition: all 0.5s ease-in-out;
}

/* 預設新聞頁面樣式 */
.news-page-container header,
.news-page-container main,
.news-page-container footer,
.news-page-container article,
.news-page-container nav,
.news-page-container aside,
.news-page-container section,
.news-page-container div,
.news-page-container p,
.news-page-container h1,
.news-page-container h2,
.news-page-container h3,
.news-page-container ul,
.news-page-container li,
.news-page-container figure,
.news-page-container figcaption,
.news-page-container address,
.news-page-container time,
.news-page-container blockquote {
  border: 1px solid transparent; /* 預設無邊框 */
  padding: 0.5rem; /* 預設內邊距 */
  margin-bottom: 1rem; /* 預設下邊距 */
  transition: all 0.3s ease;
}

.news-page-container h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.news-page-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.news-page-container h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.news-page-container p {
  line-height: 1.7;
}

.news-page-container nav ul,
.news-page-container aside ul {
  list-style: none;
  padding: 0;
}

.news-page-container nav li,
.news-page-container aside li {
  display: inline-block;
  margin-right: 1rem;
}

.news-page-container a {
  color: var(--primary-color);
  text-decoration: none;
}

.news-page-container a:hover {
  text-decoration: underline;
}

.news-page-container figure {
  text-align: center;
  margin: 1.5rem 0;
}

.news-page-container img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.news-page-container figcaption {
  font-style: italic;
  font-size: 0.9rem;
  color: var(--text-color);
  margin-top: 0.5rem;
}

.news-page-container blockquote {
  border-left: 5px solid var(--primary-color);
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--text-color);
}

.news-page-container main {
  display: flex;
  gap: 2rem;
}

.news-page-container article {
  flex: 3;
}

.news-page-container aside {
  flex: 1;
  background-color: var(--background-color);
  padding: 1rem;
  border-radius: 8px;
}

/* X-Ray 模式樣式 */
.news-page-container.x-ray-mode header {
  background-color: var(--xray-header-bg);
  border: 1px dashed var(--xray-header-border);
  position: relative;
}
.news-page-container.x-ray-mode header::before {
  content: '<header>';
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
  color: var(--xray-tag-color);
  background-color: var(--xray-tag-bg);
  padding: 2px 5px;
  border-radius: 3px;
}

.news-page-container.x-ray-mode nav {
  background-color: var(--xray-nav-bg);
  border: 1px dashed var(--xray-nav-border);
  position: relative;
}
.news-page-container.x-ray-mode nav::before {
  content: '<nav>';
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
  color: var(--xray-tag-color);
  background-color: var(--xray-tag-bg);
  padding: 2px 5px;
  border-radius: 3px;
}

.news-page-container.x-ray-mode main {
  background-color: var(--xray-main-bg);
  border: 1px dashed var(--xray-main-border);
  position: relative;
}
.news-page-container.x-ray-mode main::before {
  content: '<main>';
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
  color: var(--xray-tag-color);
  background-color: var(--xray-tag-bg);
  padding: 2px 5px;
  border-radius: 3px;
}

.news-page-container.x-ray-mode article {
  background-color: var(--xray-article-bg);
  border: 1px dashed var(--xray-article-border);
  position: relative;
}
.news-page-container.x-ray-mode article::before {
  content: '<article>';
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
  color: var(--xray-tag-color);
  background-color: var(--xray-tag-bg);
  padding: 2px 5px;
  border-radius: 3px;
}

.news-page-container.x-ray-mode aside {
  background-color: var(--xray-aside-bg);
  border: 1px dashed var(--xray-aside-border);
  position: relative;
}
.news-page-container.x-ray-mode aside::before {
  content: '<aside>';
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
  color: var(--xray-tag-color);
  background-color: var(--xray-tag-bg);
  padding: 2px 5px;
  border-radius: 3px;
}

.news-page-container.x-ray-mode footer {
  background-color: var(--xray-footer-bg);
  border: 1px dashed var(--xray-footer-border);
  position: relative;
}
.news-page-container.x-ray-mode footer::before {
  content: '<footer>';
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
  color: var(--xray-tag-color);
  background-color: var(--xray-tag-bg);
  padding: 2px 5px;
  border-radius: 3px;
}

/* 針對內層元素，避免重複的邊框和背景 */
.news-page-container.x-ray-mode article header,
.news-page-container.x-ray-mode article footer {
  background-color: transparent;
  border: none;
}
</style>
