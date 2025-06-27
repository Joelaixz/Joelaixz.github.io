<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Let's Build Something Amazing</h2>
      <p>對我的作品感興趣，或是有合作的想法嗎？歡迎隨時與我聯繫！</p>
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
</script>

<style scoped>
.contact-section {
  padding: 6rem 2rem;
  background-color: var(--section-bg-color);
  text-align: center;
}
.container {
  max-width: 700px;
  margin: 0 auto;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 3rem;
  font-size: 1.1rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
}
.btn-primary {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}
.btn-primary:hover {
  opacity: 0.9;
}
</style>
