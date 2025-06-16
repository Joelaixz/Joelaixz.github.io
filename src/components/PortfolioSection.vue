<template>
  <section id="portfolio" class="portfolio-section py-5">
    <div class="container">
      <div class="row mb-5 text-center">
        <div class="col-lg-8 mx-auto">
          <h2 class="display-5 fw-bold">我的作品</h2>
        </div>
      </div>

      <div class="portfolio-grid">
        <PortfolioCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PortfolioCard from './PortfolioCard.vue'; // 引入子元件

// 在 setup 中定義專案資料。未來可以從外部 API 或 JS 檔案中引入
const projects = ref([
  {
    title: '專案一：響應式電商網站',
    description: '一個使用 Vue 3 和 Pinia 打造的現代化電商平台，具備完整的購物車與商品管理功能。',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Vue 3', 'Pinia', 'Vite', 'Bootstrap 5'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: '專案二：3D 互動作品集',
    description: '利用 Three.js 與 GSAP 動畫庫，打造一個具有沉浸式體驗的 3D 互動個人網站。',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Three.js', 'Vue 3', 'GSAP'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: '專案三：任務管理應用',
    description: '一個支援團隊協作的任務管理工具，使用 TypeScript 提升程式碼的健壯性。',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    codeUrl: '#'
  },
  // 您可以在此處加入更多專案...
]);
</script>

<style scoped>
.portfolio-section {
  /* 主背景色 */
  background-color: #1a1d24;
  padding-top: 130px!important;
}

h2 {
  font-family: 'Poppins', sans-serif;
  color: #f0f2f5;
}

/* 這裡是自訂 CSS Grid 佈局的核心
  它會創建一個流體網格，卡片寬度在 320px 到 1fr 之間自動調整
*/
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem; /* 卡片之間的間距 */
}
</style>
