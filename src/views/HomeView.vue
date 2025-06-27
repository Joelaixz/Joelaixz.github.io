<template>
  <Header />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
main {
  display: block; /* For older browsers */
}
</style>
