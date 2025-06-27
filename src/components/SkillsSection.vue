<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2>技能樹 / Toolbox</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>前端 (Frontend)</h3>
          <div class="skill-card">Vue.js</div>
          <div class="skill-card">React</div>
          <div class="skill-card">JavaScript (ES6+)</div>
          <div class="skill-card">CSS3 & SASS</div>
          <div class="skill-card">Three.js</div>
        </div>
        <div class="skill-category">
          <h3>後端 (Backend)</h3>
          <div class="skill-card">Node.js</div>
          <div class="skill-card">Express</div>
          <div class="skill-card">Firebase</div>
        </div>
        <div class="skill-category">
          <h3>設計 (Design)</h3>
          <div class="skill-card">Figma</div>
          <div class="skill-card">UI/UX Principles</div>
        </div>
        <div class="skill-category">
          <h3>工具 (Tools)</h3>
          <div class="skill-card">Git & GitHub</div>
          <div class="skill-card">Vite</div>
          <div class="skill-card">Webpack</div>
          <div class="skill-card">Docker</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.skills-section {
  padding: 6rem 2rem;
  background-color: var(--background-color);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: left;
}
.skill-category h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}
.skill-card {
  background-color: var(--section-bg-color);
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}
.skill-card:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>
