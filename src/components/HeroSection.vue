<template>
  <!-- 每個區塊都是一個 <section> 並且有唯一的 id -->
  <section id="hero" class="section-placeholder" style="background-color: #2c3e50;">
    <div class="section-content">
      <h2>Hero 區塊</h2>
      <p>這是訪客看到的第一個畫面。</p>
    </div>
  </section>
</template>

<script setup>
// 這是一個獨立的區塊組件，之後可以填充真實內容
</script>

<style scoped>
/* 將 placeholder 樣式移到各組件內部，方便管理 */
.section-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Hero 區塊通常佔滿一屏 */
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
}
.section-placeholder h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.section-placeholder p {
  font-size: 1.2rem;
  color: #eee;
}
</style>
