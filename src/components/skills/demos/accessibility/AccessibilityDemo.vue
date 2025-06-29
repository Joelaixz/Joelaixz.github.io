<template>
  <div class="accessibility-demo">
    <h2>挑戰開始！請全程僅使用鍵盤 (Tab, Shift+Tab, Enter, Space, Esc) 來操作此頁面所有功能。</h2>
    <p class="instruction">當您按下 Tab 鍵時，請注意焦點高亮效果。</p>

    <section class="demo-section">
      <h3>1. 頁籤功能 (Tab Set)</h3>
      <TabSet />
    </section>

    <section class="demo-section">
      <h3>2. 自訂下拉選單 (Custom Dropdown)</h3>
      <CustomDropdown />
    </section>

    <section class="demo-section">
      <h3>3. 互動視窗 (Modal Dialog)</h3>
      <button @click="openModal" class="btn-primary" ref="modalTriggerButton">開啟互動視窗</button>
      <ModalDialog :isOpen="isModalOpen" @close="closeModal" @after-leave="focusTriggerButton" />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TabSet from './TabSet.vue';
import CustomDropdown from './CustomDropdown.vue';
import ModalDialog from './ModalDialog.vue';

const isModalOpen = ref(false);
const modalTriggerButton = ref(null);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const focusTriggerButton = () => {
  if (modalTriggerButton.value) {
    modalTriggerButton.value.focus();
  }
};

// 確保 :focus-visible 樣式生效
onMounted(() => {
  document.body.classList.add('using-keyboard');
});
</script>

<style scoped>
.accessibility-demo {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.accessibility-demo h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
}

.instruction {
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
  opacity: 0.8;
  font-size: 1.2rem; /* 放大字體 */
}

.demo-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.demo-section h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

/* 全局焦點樣式，利用 :focus-visible */
/* 確保在 main.css 或 base.css 中定義，這裡僅為演示 */
/* 實際應用中，應避免在組件的 scoped style 中定義全局樣式 */
:focus-visible {
  outline: 5px solid var(--primary-color); /* 粗且高對比的外框 */
  outline-offset: 2px;
  border-radius: 3px;
}

/* 為了避免滑鼠點擊時出現焦點框，可以配合 JavaScript 判斷 */
/* 這裡僅為演示，實際應用中可能需要更複雜的邏輯 */
body:not(.using-keyboard) :focus-visible {
  outline: none;
}
</style>
