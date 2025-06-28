<template>
  <div class="semantic-tags-demo">
    <div class="controls">
      <button @click="toggleXRay" :class="{ 'active': isXRayActive }" class="xray-toggle-button">
        {{ isXRayActive ? '關閉結構透視' : '啟用結構透視' }}
      </button>
    </div>

    <div class="news-page-container" :class="{ 'x-ray-mode': isXRayActive }">
      <header>
        <h1>科技前瞻：AI如何重塑未來生活</h1>
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
            <h2>深度解析：生成式AI的最新突破與應用前景</h2>
            <address>作者：<a rel="author" href="#">李明</a></address>
            <time datetime="2025-06-28">發布日期：2025年6月28日</time>
          </header>
          <p>人工智慧（AI）的發展正以前所未有的速度改變著我們的世界。特別是生成式AI，在圖像生成、自然語言處理等領域取得了令人矚目的成就。</p>
          <figure>
            <img src="/dummy200.jpg" alt="AI技術示意圖">
            <figcaption>圖：AI技術的快速發展。</figcaption>
          </figure>
          <p>從藝術創作到科學研究，生成式AI的應用範圍不斷擴大。它不僅能輔助人類完成複雜任務，甚至在某些方面展現出超越人類的創造力。</p>
          <h3>AI倫理與挑戰：我們該如何應對？</h3>
          <p>然而，AI的快速發展也帶來了一系列倫理和社會挑戰，例如數據隱私、演算法偏見以及對就業市場的影響。如何平衡技術進步與社會責任，成為當前亟需解決的問題。</p>
          <blockquote>
            <p>「科技的真正價值，在於它能為人類帶來福祉，而非製造新的困境。」</p>
            <footer>— 某位科技倫理學者</footer>
          </blockquote>
          <p>未來，我們需要建立更完善的法律法規和倫理準則，引導AI技術朝著有利於人類社會的方向發展。同時，教育和培訓也應跟上步伐，幫助人們適應AI時代的新變化。</p>
          <footer>
            <p>相關標籤：<a href="#">AI</a>, <a href="#">科技</a>, <a href="#">未來</a>, <a href="#">倫理</a></p>
          </footer>
        </article>

        <aside>
          <h3>相關文章</h3>
          <ul>
            <li><a href="#">AI在醫療領域的應用</a></li>
            <li><a href="#">區塊鏈技術的最新進展</a></li>
            <li><a href="#">量子計算：下一個科技前沿</a></li>
          </ul>
        </aside>
      </main>

      <footer>
        <p>&copy; 2025 科技前瞻新聞</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isXRayActive = ref(true);

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

.news-page-container nav li {
  display: inline-block;
  margin-right: 1rem;
}
.news-page-container aside li {
  display: block;
  margin-bottom: 0.5rem; /* 為每個連結增加一些間距 */
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