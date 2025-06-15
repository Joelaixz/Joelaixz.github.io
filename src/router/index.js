import { createRouter, createWebHistory } from 'vue-router';
import PortfolioLayout from '../views/PortfolioLayout.vue';

// 為了演示，我們直接在這裡創建簡單的組件
// 在實際專案中，這些應該是獨立的 .vue 檔案
const createSectionComponent = (name, color) => ({
  template: `
    <div class="section-placeholder" style="background-color: ${color};">
      <h2>${name} 區塊</h2>
      <p>這裡是 ${name} 的內容區域。之後可以替換成真正的組件。</p>
    </div>
  `,
  name: `${name}View`
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 父層路由，使用 PortfolioLayout 作為佈局
      path: '/',
      name: 'Layout',
      component: PortfolioLayout,
      // 重新導向到第一個區塊
      redirect: '/hero',
      // 巢狀路由 (子路由)
      children: [
        {
          path: 'hero',
          name: 'Hero',
          component: createSectionComponent('Hero', '#2c3e50')
        },
        {
          path: 'about',
          name: 'About',
          component: createSectionComponent('About', '#34495e')
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: createSectionComponent('Portfolio', '#7f8c8d')
        },
        {
          path: 'skills',
          name: 'Skills',
          component: createSectionComponent('Skills', '#95a5a6')
        },
        {
          path: 'contact',
          name: 'Contact',
          component: createSectionComponent('Contact', '#bdc3c7')
        }
      ]
    },
    // 你可以添加其他非佈局的頁面，例如 404
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
});

export default router;
