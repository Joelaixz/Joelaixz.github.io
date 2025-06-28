import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// 創建 Vue Router 實例
const router = createRouter({
  // 使用 HTML5 History 模式，提供更友好的 URL
  history: createWebHistory(import.meta.env.BASE_URL),
  // 定義應用程式的路由規則
  routes: [
    {
      // 首頁路由
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      // 專案技能展示頁面路由，包含巢狀路由
      path: '/project/skills-showcase',
      component: () => import('@/views/ProjectSkillsPage.vue'),
      children: [
        {
          // 狀態管理技能展示子頁面，延遲載入
          path: 'state-management',
          name: 'skills-state-management',
          component: () => import('@/components/skills/StateManagement.vue')
        },
        {
          // API 串接技能展示子頁面，延遲載入
          path: 'api-fetching',
          name: 'skills-api-fetching',
          component: () => import('@/components/skills/ApiFetching.vue')
        }
      ]
    }
  ],
  // 定義路由切換時的滾動行為
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的滾動位置，則恢復該位置
    if (savedPosition) {
      return savedPosition;
    } 
    // 如果目標路由有 hash (錨點)，則滾動到該元素
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } 
    // 否則，滾動到頁面頂部
    else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
