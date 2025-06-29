<template>
  <div class="interactive-ui-toolkit">
    <h2>互動式 UI 元件庫</h2>
    <p class="description">此展示僅使用 CSS 偽類和選擇器，無需 JavaScript，即可實現豐富的互動效果。</p>

    <section class="component-section">
      <h3>按鈕 (Buttons)</h3>
      <p class="section-description">展示 <code>:hover</code> (懸停), <code>:active</code> (點擊), <code>:focus-visible</code> (鍵盤焦點) 和 <code>:disabled</code> (禁用) 偽類。</p>
      <div class="button-showcase">
        <button class="btn-example">正常按鈕</button>
        <button class="btn-example disabled" disabled>禁用按鈕</button>
      </div>
    </section>

    <section class="component-section">
      <h3>表單輸入框 (Form Inputs)</h3>
      <p class="section-description">展示 <code>:focus-within</code> 偽類，當輸入框獲得焦點時，整個容器會改變樣式。</p>
      <div class="input-group">
        <label for="username">使用者名稱:</label>
        <input type="text" id="username" placeholder="請輸入您的名稱" />
      </div>
      <div class="input-group">
        <label for="email">電子郵件:</label>
        <input type="email" id="email" placeholder="請輸入您的電子郵件" />
      </div>
    </section>

    <section class="component-section">
      <h3>自訂選項框 (Custom Checkbox)</h3>
      <p class="section-description">展示 <code>:checked</code> 偽類與 <code>::before</code>, <code>::after</code> 偽元素，以及相鄰兄弟選擇器。</p>
      <div class="checkbox-group">
        <input type="checkbox" id="custom-checkbox" class="hidden-checkbox" />
        <label for="custom-checkbox" class="custom-checkbox-label">
          我同意服務條款
        </label>
      </div>
    </section>
  </div>
</template>

<script setup>
// 無需 JavaScript，所有互動皆由 CSS 處理
</script>

<style scoped>
.interactive-ui-toolkit {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.interactive-ui-toolkit h2 {
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
  font-size: 1.2rem; /* 與 AccessibilityDemo 的 instruction 字體大小一致 */
}

.section-description {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #999; /* 灰階化 */
  font-style: italic;
}

.component-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.component-section h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

/* --- 按鈕樣式 --- */
.button-showcase {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn-example {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.1s ease;
  background-color: var(--primary-color);
  color: var(--button-text-color);
}

.btn-example:hover {
  background-color: var(--primary-color) ;
  transform: translateY(-1px); /* 輕微上浮 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 增加陰影 */
  color: var(--button-text-color) !important; /* 確保文字顏色可見 */
  opacity: 0.7 ; 
}

.btn-example:active {
  transform: translateY(1px); /* 點擊時輕微下沉 */
  background-color: var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 點擊時陰影變小 */
  color: var(--button-text-color) !important; /* 確保文字顏色可見 */
  opacity: 1 ; 
}

.btn-example:focus-visible {
  outline: 3px solid var(--focus-outline-color); /* 清晰的焦點輪廓 */
  outline-offset: 2px;
}

.btn-example.disabled,
.btn-example:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

/* --- 輸入框樣式 --- */
.input-group {
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-group:focus-within {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.3);
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.input-group:focus-within label {
  color: var(--primary-color);
}

.input-group input[type="text"],
.input-group input[type="email"] {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.input-group input[type="text"]:focus,
.input-group input[type="email"]:focus {
  border-color: var(--primary-color);
  outline: none;
}

/* --- 自訂選項框樣式 --- */
.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.hidden-checkbox {
  /* 隱藏原生 checkbox */
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-checkbox-label {
  position: relative;
  padding-left: 30px; /* 為自訂的方框留出空間 */
  cursor: pointer;
  color: var(--text-color);
  font-size: 1rem;
  line-height: 20px; /* 與方框高度一致 */
}

.custom-checkbox-label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  transition: all 0.2s ease;
}

.custom-checkbox-label::after {
  content: '\2713'; /* Unicode checkmark */
  position: absolute;
  left: 4px;
  top: 0px;
  font-size: 16px;
  color: var(--button-text-color);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.hidden-checkbox:checked + .custom-checkbox-label::before {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.hidden-checkbox:checked + .custom-checkbox-label::after {
  opacity: 1;
}

/* 確保鍵盤焦點可見性 */
.hidden-checkbox:focus-visible + .custom-checkbox-label::before {
  outline: 3px solid var(--focus-outline-color);
  outline-offset: 2px;
}
</style>