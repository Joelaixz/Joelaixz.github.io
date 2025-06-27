<template>
  <footer class="site-footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Joel. All Rights Reserved.</p>
      <p class="made-with">以 ❤️ 與 Vite + Vue.js 打造</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.site-footer {
  background-color: var(--header-bg-color);
  color: var(--text-color);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.made-with {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}
</style>
