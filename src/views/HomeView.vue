<template>
  <!-- 應用程式的整體佈局，包含頁首、主要內容區和頁尾 -->
  <AppHeader />
  <main>
    <!-- 英雄區塊：通常用於展示網站的標題、簡介和主要行動呼籲 -->
    <HeroSection />
    <!-- 關於區塊：介紹個人或專案的詳細資訊 -->
    <AboutSection />
    <!-- 技能區塊：展示個人或團隊的技能樹 -->
    <SkillsSection />
    <!-- 聯絡區塊：提供聯絡方式或表單 -->
    <ContactSection />
  </main>
  <!-- 應用程式的頁尾 -->
  <AppFooter />
</template>

<script setup>
// 導入應用程式所需的各個元件
import AppHeader from '@/components/common/AppHeader.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<style scoped>
/* 主要內容區的樣式 */
main {
  display: block; /* 確保在舊版瀏覽器中也能正確顯示為區塊元素 */
}
</style>
