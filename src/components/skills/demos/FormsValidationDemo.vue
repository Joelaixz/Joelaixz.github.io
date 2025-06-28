<template>
  <div class="form-validation-demo">
    <h2>自訂錯誤訊息產生器</h2>

    <div class="toggle-switch-container">
      <label for="error-mode-toggle" class="toggle-label">原生瀏覽器提示</label>
      <div class="toggle-switch">
        <input
          type="checkbox"
          id="error-mode-toggle"
          v-model="useCustomMessages"
          class="toggle-checkbox"
        />
        <label for="error-mode-toggle" class="toggle-slider"></label>
      </div>
      <label for="error-mode-toggle" class="toggle-label">自訂風格提示</label>
    </div>

    <form ref="formRef" @submit.prevent="checkForm" novalidate class="tour-form">
      <div class="form-group">
        <label for="tour-date">預約日期：</label>
        <input type="date" id="tour-date" name="tour-date" required />
      </div>

      <div class="form-group">
        <label for="tour-pax">人數 (1-10人)：</label>
        <input
          type="number"
          id="tour-pax"
          name="tour-pax"
          required
          min="1"
          max="10"
          placeholder="請輸入參觀人數"
        />
      </div>

      <div class="form-group">
        <label for="tour-tel">聯絡電話：</label>
        <input
          type="tel"
          id="tour-tel"
          name="tour-tel"
          required
          pattern="09\d{8}"
          placeholder="請輸入09開頭的10碼手機號碼"
        />
      </div>

      <button type="submit" class="btn-primary check-button">檢查表單</button>
    </form>

    <div v-if="useCustomMessages && errorMessages.length > 0" class="custom-errors">
      <h3>請修正以下錯誤：</h3>
      <ul>
        <li v-for="(msg, index) in errorMessages" :key="index">{{ msg }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const useCustomMessages = ref(false);
const errorMessages = ref([]);
const formRef = ref(null);

onMounted(() => {
  if (formRef.value) {
    const today = new Date().toISOString().split('T')[0];
    formRef.value.querySelector('#tour-date').setAttribute('min', today);
  }
});

const checkForm = () => {
  const form = formRef.value;
  if (!form) return;

  // 清空舊的錯誤訊息
  errorMessages.value = [];

  if (useCustomMessages.value) {
    // --- 自訂風格提示模式 ---
    // 檢查表單內所有欄位的驗證狀態
    let firstInvalidElement = null;
    for (const element of form.elements) {
      if (element.validity && !element.validity.valid) {
        // 找到第一個無效的欄位，用於聚焦
        if (!firstInvalidElement) {
            firstInvalidElement = element;
        }
        // 獲取欄位對應的 label 文字
        const label = element.labels && element.labels[0] ? element.labels[0].textContent.replace('：', '') : element.name;
        // 組合欄位名稱和瀏覽器提供的錯誤訊息
        const message = `${label}: ${element.validationMessage}`;
        errorMessages.value.push(message);
      }
    }
    // 如果有錯誤，將視窗聚焦到第一個錯誤的欄位上
    if (firstInvalidElement) {
        firstInvalidElement.focus();
    }

  } else {
    // --- 原生瀏覽器提示模式 ---
    // 手動觸發瀏覽器的原生驗證報告
    form.reportValidity();
  }
};
</script>

<style scoped>
.form-validation-demo {
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--section-bg-color);
}

h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 2.8rem; /* 調整標題字體大小 */
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  opacity: 0.9;
}

.toggle-switch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.toggle-label {
  font-weight: bold;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle-checkbox {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.toggle-checkbox:checked + .toggle-slider {
  background-color: var(--primary-color);
}

.toggle-checkbox:checked + .toggle-slider:before {
  transform: translateX(26px);
}

.tour-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: bold;
}

.form-group input {
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
}

.check-button {
  margin-top: 1rem;
}

.custom-errors {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 2px solid #e74c3c;
  background-color: #fbeae5;
  border-radius: 8px;
  color: #c0392b;
}

.custom-errors h3 {
  color: #c0392b;
  margin-top: 0;
  margin-bottom: 1rem;
}

.custom-errors ul {
  padding-left: 20px;
  margin: 0;
}

.custom-errors li {
  margin-bottom: 0.5rem;
}
</style>