<template>
  <section id="hero" class="hero-section">
    <!-- This would be a Swiper component -->
    <div class="swiper-slide">
      <div class="slide-background">
        <!-- Placeholder for a dynamic video or GIF -->
        <div class="video-placeholder"></div>
      </div>
      <div class="slide-content">
        <h1>專案標題 (Project Title)</h1>
        <p class="one-liner-pitch">一個幫助使用者追蹤閱讀進度的社群平台。</p>
        <div class="tech-tags">
          <span>Vue.js</span>
          <span>Firebase</span>
          <span>Pinia</span>
          <span>Vite</span>
        </div>
        <div class="cta-buttons">
          <a href="/project/project-one" class="btn-primary">查看專案</a>
          <a href="#" class="btn-secondary">線上預覽</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// In a real scenario, you would import and configure Swiper.js here.
</script>

<style scoped>
.hero-section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background-color: #333;
  background-image: url('https://via.placeholder.com/1920x1080/333/808080?text=Dynamic+Project+Video');
  background-size: cover;
  background-position: center;
}

.slide-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--hero-overlay-color);
}

.slide-content {
  z-index: 1;
  padding: 2rem;
}

.slide-content h1 {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: var(--hero-text-color);
}

.one-liner-pitch {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--hero-text-color);
}

.tech-tags {
  margin-bottom: 2rem;
}

.tech-tags span {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--hero-text-color);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  margin: 0.2rem;
  font-size: 0.9rem;
  border: 1px solid var(--primary-color);
}

.cta-buttons a {
  text-decoration: none;
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  font-weight: bold;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--button-text-color);
}

.btn-secondary {
  background-color: transparent;
  color: var(--hero-text-color);
  border: 1px solid var(--hero-text-color);
}

.btn-primary:hover {
    transform: translateY(-3px);
}
.btn-secondary:hover {
    background-color: var(--hero-text-color);
    color: var(--background-color);
}
</style>
