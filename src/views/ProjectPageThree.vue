<template>
  <AppHeader :isSkillsPage="true" />
  <main class="project-page-main">
    <div class="under-construction">
      <h1>施工中 🚧</h1>
      <p>這個專案頁面正在努力建置中，敬請期待！</p>
    </div>
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<style scoped>
.project-page-main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
  padding: 2rem;
}

.under-construction {
  background-color: var(--section-bg-color);
  border: 2px dashed var(--primary-color);
  padding: 3rem;
  border-radius: 10px;
  max-width: 600px;
}

.under-construction h1 {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.under-construction p {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
