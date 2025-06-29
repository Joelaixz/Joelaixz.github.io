import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// 定義所有技能的數據，用於路由和內容展示
const allSkillsData = {
  'html-semantic-tags': {
    title: '語意化標籤',
    context: '此頁面展示了如何正確使用 HTML5 語意化標籤來提升網頁的可讀性、SEO 和無障礙性，並提供「結構透視」模式幫助理解。',
    techStack: ['HTML5', 'CSS3'],
  },
  'html-forms-validation': {
    title: '表單與原生驗證',
    context: '此頁面展示了 HTML 表單的建立，以及如何利用 HTML5 原生驗證功能來提升使用者體驗和數據完整性，並提供自訂錯誤訊息的切換功能。',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  'html-accessibility': {
    title: '無障礙網頁',
    context: '此頁面展示了如何遵循 WCAG 指南，建立對所有使用者都友善的無障礙網頁，包含鍵盤導航、自訂下拉選單和互動視窗的無障礙實踐。',
    techStack: ['HTML5', 'CSS3', 'ARIA', 'JavaScript'],
  },
  'css-pseudo-elements': {
    title: '偽類元素',
    context: '此頁面展示了 CSS 偽類和偽元素在網頁設計中的應用，無需 JavaScript 即可實現豐富的互動效果，例如按鈕狀態、表單焦點和自訂選項框。',
    techStack: ['CSS3', 'Pseudo-classes', 'Pseudo-elements'],
  },
  'css-animations': {
    title: '動畫',
    context: '此頁面展示了使用 CSS3 動畫和過渡效果來增強使用者介面互動性，包含動作確認、錯誤提示和新通知提醒等微交互範例。',
    techStack: ['CSS3', 'Animations', 'Transitions'],
  },
  'css-custom-properties': {
    title: '自訂屬性',
    context: '此頁面展示了 CSS 自訂屬性（CSS Variables）的使用，以實現更靈活和可維護的樣式，透過動態切換主題和元件狀態來演示其強大功能。',
    techStack: ['CSS3', 'Custom Properties'],
  },
  'css-rwd': {
    title: 'RWD',
    context: '此頁面展示了響應式網頁設計的實現，透過一個可調整大小的模擬器，即時視覺化網頁在不同設備（桌面、平板、手機）上的佈局變化和斷點效果。',
    techStack: ['CSS3', 'Media Queries', 'Flexbox', 'Grid'],
  },
  'javascript-event-listeners': {
    title: '監聽事件',
    context: '此頁面展示了 JavaScript 事件監聽器在處理使用者互動方面的應用，並透過一個互動式偵測器和事件委派原理的解釋，深入理解事件流機制。',
    techStack: ['JavaScript', 'DOM Events', 'Event Delegation'],
  },
  'javascript-async-await': {
    title: 'Async/Await',
    context: '此頁面透過一個「非同步小廚房」模擬器，直觀理解 JavaScript 中 `async/await` 如何以同步方式編排非同步任務，展示了非阻塞操作的流程控制。',
    techStack: ['JavaScript', 'Async/Await', 'Promises'],
  },
  'javascript-es6-functions': {
    title: 'ES6+函式',
    context: '此頁面展示了 ES6+ 中箭頭函數、解構賦值、展開運算符等新特性在函數編寫中的應用，並透過一個電商商品篩選頁面，演示了陣列方法的鏈式呼叫實現複雜邏輯。',
    techStack: ['JavaScript', 'ES6+', 'Array Methods'],
  },
  'vue-reactivity': {
    title: '響應式',
    context: '此頁面展示了 Vue 3 響應式系統的工作原理，包括 `ref` 和 `reactive` 的使用，透過一個即時個人資料產生器，直觀感受數據變化的即時響應。',
    techStack: ['Vue.js 3', 'Composition API', 'ref', 'computed'],
  },
  'vue-props-passing': {
    title: 'props傳遞',
    context: '此頁面展示了 Vue 組件之間通過 props 進行數據傳遞的最佳實踐，並透過一個互動式星級評分元件，完美詮釋了「Props 向下傳遞，Emits 向上通知」的單向數據流模式。',
    techStack: ['Vue.js 3', 'Props', 'Emits', 'Single-File Components'],
  },
  'vue-pinia': {
    title: 'Pinia',
    context: '此頁面展示了使用 Pinia 進行 Vue 應用程式的狀態管理，透過一個跨元件購物車範例，清晰地解釋了如何解決「遠距離元件通訊」的痛點，實現集中式狀態管理。',
    techStack: ['Vue.js 3', 'Pinia', 'State Management', 'Actions', 'Getters'],
  },
};

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
        // HTML 技能子路由
        {
          path: 'html/semantic-tags',
          name: 'skills-html-semantic-tags',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['html-semantic-tags'] })
        },
        {
          path: 'html/forms-validation',
          name: 'skills-html-forms-validation',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['html-forms-validation'] })
        },
        {
          path: 'html/accessibility',
          name: 'skills-html-accessibility',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['html-accessibility'] })
        },
        // CSS 技能子路由
        {
          path: 'css/pseudo-elements',
          name: 'skills-css-pseudo-elements',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['css-pseudo-elements'] })
        },
        {
          path: 'css/animations',
          name: 'skills-css-animations',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['css-animations'] })
        },
        {
          path: 'css/custom-properties',
          name: 'skills-css-custom-properties',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['css-custom-properties'] })
        },
        {
          path: 'css/rwd',
          name: 'skills-css-rwd',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['css-rwd'] })
        },
        // JavaScript 技能子路由
        {
          path: 'javascript/event-listeners',
          name: 'skills-javascript-event-listeners',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['javascript-event-listeners'] })
        },
        {
          path: 'javascript/async-await',
          name: 'skills-javascript-async-await',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['javascript-async-await'] })
        },
        {
          path: 'javascript/es6-functions',
          name: 'skills-javascript-es6-functions',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['javascript-es6-functions'] })
        },
        // Vue 技能子路由
        {
          path: 'vue/reactivity',
          name: 'skills-vue-reactivity',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['vue-reactivity'] })
        },
        {
          path: 'vue/props-passing',
          name: 'skills-vue-props-passing',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['vue-props-passing'] })
        },
        {
          path: 'vue/pinia',
          name: 'skills-vue-pinia',
          component: () => import('@/components/skills/SkillContent.vue'),
          props: route => ({ skillData: allSkillsData['vue-pinia'] })
        },
      ]
    },
    {
      path: '/project/project-two',
      name: 'project-two',
      component: () => import('@/views/ProjectPageTwo.vue'),
    },
    {
      path: '/project/project-three',
      name: 'project-three',
      component: () => import('@/views/ProjectPageThree.vue'),
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