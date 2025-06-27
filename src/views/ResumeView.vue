<template>
  <div class="resume-page">
    <h1>我的履歷</h1>
    <p>這裡將會是您的線上履歷內容。</p>
    <p>您可以嵌入 PDF、設計 HTML 履歷，或提供下載連結。</p>
    <router-link to="/">返回首頁</router-link>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.resume-page {
  padding: 2rem;
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
}
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
router-link {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
router-link:hover {
  opacity: 0.9;
}
</style>
