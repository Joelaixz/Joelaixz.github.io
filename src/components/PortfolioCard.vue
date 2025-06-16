<template>
  <div class="card h-100 shadow-sm">
    <img :src="project.image" class="card-img-top" :alt="project.title">

    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold">{{ project.title }}</h5>
      <p class="card-text text-body-secondary small">{{ project.description }}</p>

      <div class="tags my-3">
        <span v-for="tag in project.tags" :key="tag"
              class="badge rounded-pill text-bg-light fw-normal me-1 mb-1">
          {{ tag }}
        </span>
      </div>

      <div class="mt-auto d-flex">
        <a :href="project.liveUrl" target="_blank" class="btn btn-sm btn-accent w-50 me-2">
          <i class="bi bi-eye-fill me-1"></i> 線上預覽
        </a>
        <a :href="project.codeUrl" target="_blank" class="btn btn-sm btn-outline-secondary w-50">
          <i class="bi bi-github me-1"></i> 原始碼
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用 defineProps 來定義此元件可以接收的資料
// 'project' 是一個物件類型，由父元件傳入
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* 針對卡片的個人化微調 */
.card {
  /* 確保卡片背景色與 About 區塊一致 */
  background-color: #252a33;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2) !important;
}

.card-title {
  color: #f0f2f5;
}

/* 自訂的強調色按鈕樣式 */
.btn-accent {
  background-color: #00aaff;
  border-color: #00aaff;
  color: #ffffff;
}
.btn-accent:hover {
  background-color: #0088cc;
  border-color: #0088cc;
}

/* 覆蓋 Bootstrap 預設的按鈕樣式，讓它更有設計感 */
.btn {
  transition: all 0.3s ease;
}
</style>
