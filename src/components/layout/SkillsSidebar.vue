<template>
  <!-- 側邊導覽列容器 -->
  <aside class="skills-sidebar">
    <nav>
      <ul>
        <li>
          <!-- 導覽連結到狀態管理技能展示頁面 -->
          <router-link to="/project/skills-showcase/state-management">狀態管理</router-link>
        </li>
        <li>
          <!-- 導覽連結到 API 串接技能展示頁面 -->
          <router-link to="/project/skills-showcase/api-fetching">API 串接</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// 此組件不需要額外的 JavaScript 邏輯，因為導覽功能由 router-link 提供
</script>

<style scoped>
/* 側邊導覽列的整體樣式 */
.skills-sidebar {
  width: 250px; /* 固定寬度 */
  background-color: #f4f4f4; /* 背景顏色 */
  padding: 2rem; /* 內邊距 */
}

/* 導覽列表樣式 */
nav ul {
  list-style: none; /* 移除列表項目符號 */
  padding: 0; /* 移除預設內邊距 */
}

/* 導覽連結樣式 */
nav a {
  display: block; /* 讓連結佔據整個寬度，方便點擊 */
  padding: 0.5rem 1rem; /* 內邊距 */
  text-decoration: none; /* 移除下劃線 */
  color: #333; /* 文字顏色 */
  border-radius: 5px; /* 圓角邊框 */
  transition: background-color 0.3s; /* 背景顏色過渡動畫 */
}

/* 導覽連結懸停時的樣式 */
nav a:hover {
  background-color: #e0e0e0; /* 懸停時的背景顏色 */
}

/* 當前活躍連結的樣式 */
nav a.router-link-active {
  background-color: #007bff; /* 活躍時的背景顏色 */
  color: white; /* 活躍時的文字顏色 */
}
</style>
