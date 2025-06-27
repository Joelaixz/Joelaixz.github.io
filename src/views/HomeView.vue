<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped>
main {
  display: block; /* For older browsers */
}
</style>
