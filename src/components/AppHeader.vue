<template>
  <header class="sticky-header">
    <div class="logo">
      <router-link to="/">Joel</router-link>
    </div>
    <nav class="nav-links">
      <a href="#about">關於我</a>
      <a href="#skills">技能</a>
      <a href="#contact">聯絡我</a>
    </nav>
    <div class="controls">
      <div class="theme-switcher">
        <button @click="switchTheme('light')" title="Light Mode">☀️</button>
        <button @click="switchTheme('dark')" title="Dark Mode">🌙</button>
        <button @click="switchTheme('cyberpunk')" title="Cyberpunk Mode">🤖</button>
      </div>
      <router-link to="/resume" class="resume-cta">查看履歷</router-link>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

function switchTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
}
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

.theme-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem;
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
