<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-photo">
          <img src="https://via.placeholder.com/400x400?text=Your+Photo" alt="A professional photo of the developer">
        </div>
        <div class="about-text">
          <h2>Hello, I'm Joel</h2>
          <p>
            我是一位充滿熱情的前端工程師，專注於打造流暢、美觀且高效能的使用者介面。我熱衷於將複雜的問題轉化為直觀、易用的數位體驗。
          </p>
          <p>
            我擅長使用現代前端技術棧，從概念發想、UI/UX 設計到程式碼實現，我都能夠一手包辦。我相信好的產品來自於對細節的堅持與不斷的溝通。
          </p>
          <p>
            工作之餘，我喜歡探索新的開源專案、參加技術社群，偶爾也會沉浸在攝影與音樂的世界裡。
          </p>
          <div class="social-links">
            <a href="#" title="GitHub">GH</a>
            <a href="#" title="LinkedIn">LI</a>
            <a href="#" title="Dribbble">DR</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  padding: 6rem 2rem;
  background-color: var(--section-bg-color);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.about-photo {
  flex-shrink: 0;
}

.about-photo img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--primary-color);
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.about-text p {
  line-height: 1.8;
  margin-bottom: 1rem;
}

.social-links {
  margin-top: 2rem;
}

.social-links a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  margin-right: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: scale(1.1);
}
</style>
