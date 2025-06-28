<template>
  <!-- 側邊導覽列容器 -->
  <aside class="skills-sidebar">
    <nav>
      <ul class="skill-categories">
        <li v-for="category in skillsData" :key="category.title" class="skill-category-item">
          <h3>{{ category.title }}</h3>
          <ul class="skill-sub-items">
            <li v-for="skill in category.skills" :key="skill.path">
              <!-- 導覽連結到具體技能展示頁面 -->
              <router-link :to="skill.path">{{ skill.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

// 定義技能數據結構
const skillsData = ref([
  {
    title: 'HTML',
    skills: [
      { name: '語意化標籤', path: '/project/skills-showcase/html/semantic-tags' },
      { name: '表單與原生驗證', path: '/project/skills-showcase/html/forms-validation' },
      { name: '無障礙網頁', path: '/project/skills-showcase/html/accessibility' },
    ]
  },
  {
    title: 'CSS',
    skills: [
      { name: '偽類元素', path: '/project/skills-showcase/css/pseudo-elements' },
      { name: '動畫', path: '/project/skills-showcase/css/animations' },
      { name: '自訂屬性', path: '/project/skills-showcase/css/custom-properties' },
      { name: 'RWD', path: '/project/skills-showcase/css/rwd' },
    ]
  },
  {
    title: 'JavaScript',
    skills: [
      { name: '監聽事件', path: '/project/skills-showcase/javascript/event-listeners' },
      { name: 'Async/Await', path: '/project/skills-showcase/javascript/async-await' },
      { name: 'ES6+函式', path: '/project/skills-showcase/javascript/es6-functions' },
    ]
  },
  {
    title: 'Vue',
    skills: [
      { name: '響應式', path: '/project/skills-showcase/vue/reactivity' },
      { name: 'props傳遞', path: '/project/skills-showcase/vue/props-passing' },
      { name: 'Pinia', path: '/project/skills-showcase/vue/pinia' },
    ]
  },
]);
</script>

<style scoped>
/* 側邊導覽列的整體樣式 */
.skills-sidebar {
  width: 250px; /* 固定寬度 */
  background-color: var(--section-bg-color); /* 背景顏色 */
  padding: 2rem; /* 內邊距 */
  border-right: 1px solid var(--border-color); /* 右側邊框 */
}

/* 技能類別列表樣式 */
.skill-categories {
  list-style: none; /* 移除列表項目符號 */
  padding: 0;
}

.skill-category-item {
  margin-bottom: 1.5rem;
}

.skill-category-item h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.8rem;
  border-bottom: 1px solid var(--primary-color);
  padding-bottom: 0.4rem;
}

/* 技能子項目列表樣式 */
.skill-sub-items {
  list-style: none;
  padding: 0;
}

.skill-sub-items li {
  margin-bottom: 0.5rem;
}

/* 導覽連結樣式 */
.skill-sub-items a {
  display: block; /* 讓連結佔據整個寬度，方便點擊 */
  padding: 0.5rem 1rem; /* 內邊距 */
  text-decoration: none; /* 移除下劃線 */
  color: var(--text-color); /* 文字顏色 */
  border-radius: 5px; /* 圓角邊框 */
  transition: background-color 0.3s, color 0.3s;
}

/* 導覽連結懸停時的樣式 */
.skill-sub-items a:hover {
  background-color: var(--primary-color);
  color: var(--button-text-color);
}

/* 當前活躍連結的樣式 */
.skill-sub-items a.router-link-active {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  font-weight: bold;
}
</style>
