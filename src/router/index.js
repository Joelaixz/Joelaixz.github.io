import { createRouter, createWebHistory } from 'vue-router';
// 引入我們新的主視圖
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 網站的根路徑 (/)
      path: '/',
      name: 'home',
      // 直接載入包含了所有區塊的 HomeView 組件
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    }
  ]
});

export default router;
