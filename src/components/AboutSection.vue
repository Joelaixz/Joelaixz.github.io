<template>
  <section id="about" class="about-section py-5">
    <div class="container">
      <div class="row mb-5 text-center">
        <div class="col-lg-8 mx-auto">
          <h2 class="display-5 fw-bold">關於我</h2>
        </div>
      </div>

      <div class="row g-5 align-items-center">

        <div class="col-lg-4 text-center">
          <div class="about-image-wrapper">
            <img src="https://via.placeholder.com/400" alt="王大明的個人照片" class="img-fluid rounded-3">
          </div>
        </div>

        <div class="col-lg-8 text-center text-lg-start">
          <div class="about-content">
            <h3 class="fw-bold mb-3">我是誰？</h3>
            <p class="text-body-secondary">
              您好！我是一位對打造流暢、高效且富含美感的使用者介面充滿熱情的前端工程師。擁有 X 年的網頁開發經驗，我專注於將設計師的願景轉化為真實、可互動的數位產品。
            </p>
            <p class="text-body-secondary">
              我享受深入研究 JavaScript 的核心，並熟練運用 Vue.js 生態系來建構可維護、可擴展的應用程式。對我而言，程式碼不僅是邏輯，更是一種工藝。我熱衷於追隨最新的網頁標準與技術，並樂於在團隊中分享知識、共同成長。
            </p>
            <a href="/path/to/your/cv.pdf" download class="btn btn-accent mt-3">
              下載履歷 <i class="bi bi-download ms-2"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// 此元件目前為靜態內容，暫時不需要 script 邏輯
</script>

<style scoped>
/* [優化] style 區塊大幅簡化
  現在只保留無法輕易用 Bootstrap 工具類別取代的「個人化」或「主題化」樣式
*/
.about-section {
  background-color: #252a33; /* 背景色為主題一部分，予以保留 */
  color: #f0f2f5;
  padding-top: 130px!important;
}

h2, h3 {
  font-family: 'Poppins', sans-serif;
}

p {
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
}

/* 圖片的特殊樣式予以保留 */
.about-image-wrapper {
  display: inline-block; /* 讓 text-center 生效 */
  max-width: 400px;
}
.about-image-wrapper img {
  border: 4px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.about-image-wrapper img:hover {
  transform: scale(1.03);
  border-color: #00aaff;
}

/* 自訂的強調色按鈕樣式予以保留 */
.btn-accent {
  background-color: #00aaff;
  border-color: #00aaff;
  color: #ffffff;
  padding: 10px 25px;
  font-weight: bold;
  transition: all 0.3s ease;
}
.btn-accent:hover {
  background-color: #0088cc;
  border-color: #0088cc;
  box-shadow: 0 4px 15px rgba(0, 170, 255, 0.2);
}
</style>
