<template>
  <header class="sticky-header">
    <div class="logo">
      <router-link to="/">Joel</router-link>
    </div>
    <nav class="nav-links">
      <router-link to="/#about">關於我</router-link>
      <router-link to="/#skills">技能</router-link>
      <router-link to="/#contact">聯絡我</router-link>
    </nav>
    <div class="controls">
      <button @click="toggleTheme" class="theme-toggle-button" :class="currentTheme">
        <span v-if="currentTheme === 'light'">☀️ Light</span>
        <span v-else-if="currentTheme === 'dark'">🌙 Dark</span>
        <span v-else-if="currentTheme === 'cyberpunk'">🤖 Cyber</span>
      </button>
      <router-link to="/resume" class="resume-cta">查看履歷</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const themes = ['light', 'dark', 'cyberpunk'];
const currentTheme = ref('light');

const toggleTheme = () => {
  const currentIndex = themes.indexOf(currentTheme.value);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  currentTheme.value = nextTheme;
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && themes.includes(savedTheme)) {
    currentTheme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    // Default to light if no theme saved or invalid
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--header-bg-color);
  color: var(--text-color);
  z-index: 1000;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid var(--border-color);
}

.logo a {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--primary-color);
}

.nav-links a {
  margin: 0 1rem;
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.theme-toggle-button {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-toggle-button:hover {
  opacity: 0.9;
}

.theme-toggle-button.light {
  background-color: #FFD700; /* Gold */
  color: #333;
}

.theme-toggle-button.dark {
  background-color: #6A0DAD; /* Dark Purple */
  color: #FFF;
}

.theme-toggle-button.cyberpunk {
  background-color: #00F0FF; /* Bright Cyan */
  color: #0A043C;
  box-shadow: 0 0 10px #00F0FF, 0 0 20px #00F0FF;
}

.resume-cta {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.resume-cta:hover {
  opacity: 0.9;
}
</style>
