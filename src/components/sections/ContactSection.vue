<template>
  <!-- 聯絡我區塊的根元素，用於提供聯絡方式或表單 -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Let's Build Something Amazing</h2>
      <p>對我的作品感興趣，或是有合作的想法嗎？歡迎隨時與我聯繫！</p>
      <!-- 聯絡表單 -->
      <form class="contact-form">
        <input type="text" placeholder="您的姓名" required>
        <input type="email" placeholder="您的 Email" required>
        <textarea placeholder="您的訊息" rows="5" required></textarea>
        <button type="submit" class="btn-primary">發送訊息</button>
      </form>
    </div>
  </section>
</template>

<script setup>
// 此組件主要用於展示靜態內容和表單，因此不需要額外的 JavaScript 邏輯
</script>

<style scoped>
/* 聯絡我區塊的整體樣式 */
.contact-section {
  padding: 6rem 2rem; /* 內邊距 */
  background-color: var(--section-bg-color); /* 背景顏色，來自 CSS 變數 */
  text-align: center; /* 文字居中 */
}

/* 容器樣式，用於限制內容寬度並居中 */
.container {
  max-width: 700px; /* 最大寬度 */
  margin: 0 auto; /* 水平居中 */
}

/* 標題樣式 */
h2 {
  font-size: 2.5rem; /* 字體大小 */
  margin-bottom: 1rem; /* 下邊距 */
}

/* 段落樣式 */
p {
  margin-bottom: 3rem; /* 下邊距 */
  font-size: 1.1rem; /* 字體大小 */
}

/* 聯絡表單的佈局樣式 */
.contact-form {
  display: flex; /* 使用 Flexbox 佈局 */
  flex-direction: column; /* 垂直排列子元素 */
  gap: 1rem; /* 子元素間距 */
}

/* 表單輸入框和文本域的樣式 */
.contact-form input,
.contact-form textarea {
  width: 100%; /* 寬度佔滿父元素 */
  padding: 1rem; /* 內邊距 */
  border: 1px solid var(--border-color); /* 邊框 */
  border-radius: 5px; /* 圓角邊框 */
  background-color: var(--background-color); /* 背景顏色，來自 CSS 變數 */
  color: var(--text-color); /* 文字顏色，來自 CSS 變數 */
  font-size: 1rem; /* 字體大小 */
}
</style>
