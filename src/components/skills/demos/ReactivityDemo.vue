<template>
  <div class="profile-builder-container">
    <h2>即時個人資料產生器</h2>
    <p class="description">透過即時預覽，直觀感受 Vue 響應式系統的強大與便利。</p>

    <div class="builder-layout">
      <!-- 左側：資料輸入表單 -->
      <div class="input-form">
        <h3>資料輸入</h3>
        <div class="form-group">
          <label for="fullName">姓名:</label>
          <input type="text" id="fullName" v-model="fullName" placeholder="例如: 王小明" />
        </div>
        <div class="form-group">
          <label for="contact">聯絡方式:</label>
          <input type="text" id="contact" v-model="contact" placeholder="例如: 0912345678" />
        </div>
        <div class="form-group">
          <label for="bio">個人簡介:</label>
          <textarea id="bio" v-model="bio" rows="5" placeholder="我是一位熱愛前端開發的工程師，擅長 Vue.js 和響應式設計.
我樂於學習新技術，並將其應用於實際專案中，致力於打造優質的使用者體驗。"></textarea>
          <p class="char-count">字數: {{ bioLength }}</p>
        </div>
      </div>

      <!-- 右側：即時預覽區塊 -->
      <div class="live-preview">
        <h3>即時預覽</h3>
        <div class="profile-card">
          <div class="profile-header">
            <img src="/dummy200.jpg" alt="Profile Picture" class="profile-picture" />
            <h4 class="full-name">{{ fullName }}</h4>
            <p class="contact-info">{{ contact }}</p>
          </div>
          <div class="profile-body">
            <p class="bio-text">{{ bio }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="code-explanation">
      <h3>程式碼展示:</h3>
      <pre class="css-code-block"><code>
// 使用 ref 實現雙向綁定
const fullName = ref('賴信宗');
const contact = ref('0912345678');
const bio = ref('個人介紹範例');

// 使用 computed 實現衍生資料
const bioLength = computed(() => {
  return bio.value.length;
});
      </code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const fullName = ref('賴信宗');
const contact = ref('0912345678');
const bio = ref(`我是一位熱愛前端開發的工程師，擅長 Vue.js 和響應式設計。
我樂於學習新技術，並將其應用於實際專案中，致力於打造優質的使用者體驗。`);
  const bioLength = computed(() => {
  return bio.value.length;
});
</script>

<style scoped>
.profile-builder-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.profile-builder-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
  opacity: 0.8;
  font-size: 1.2rem;
}

.builder-layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}

.input-form,
.live-preview {
  flex: 1;
  min-width: 300px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.input-form h3,
.live-preview h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--text-color);
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--section-bg-color);
  color: var(--text-color);
  font-size: 1rem;
  box-sizing: border-box;
}

.char-count {
  font-size: 0.9rem;
  color: #999;
  text-align: right;
  margin-top: 0.5rem;
}

/* --- 個人資料卡片樣式 --- */
.profile-card {
  background-color: var(--section-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
}

.profile-header {
  margin-bottom: 1.5rem;
}

.profile-picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  margin-bottom: 1rem;
}

.full-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.contact-info {
  font-size: 1rem;
  color: #666;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  text-align: left;
}

.code-explanation {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
  margin-top: 2rem;
}

.code-explanation h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.css-code-block {
  background-color: #2d2d2d;
  color: #ccc;
  padding: 1.5rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  border: 1px solid #444;
}

.css-code-block code {
  white-space: pre-wrap;
  display: block;
}
</style>
