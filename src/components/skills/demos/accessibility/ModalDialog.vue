<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div
        class="modal-content"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
        :aria-describedby="modalDescriptionId"
        tabindex="-1"
        ref="modalContent"
        @keydown.esc="closeModal"
      >
        <h2 :id="modalTitleId">互動視窗標題</h2>
        <p :id="modalDescriptionId">這是互動視窗的內容。請嘗試使用 Tab 鍵，你會發現焦點被限制在這個視窗內。</p>
        <p>按下 Esc 鍵或點擊視窗外部可以關閉視窗。</p>
        <button @click="closeModal" class="btn-primary close-button">關閉</button>
        <button class="btn-secondary">另一個按鈕</button>
        <input type="text" placeholder="輸入框" />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close', 'after-leave']);

const modalContent = ref(null);
const modalTitleId = 'modal-title-' + Math.random().toString(36).substr(2, 9);
const modalDescriptionId = 'modal-description-' + Math.random().toString(36).substr(2, 9);

let previouslyFocusedElement = null;

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    previouslyFocusedElement = document.activeElement;
    nextTick(() => {
      if (modalContent.value) {
        modalContent.value.focus();
        trapFocus();
      }
    });
  } else {
    releaseFocus();
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
    emit('after-leave');
  }
});

const closeModal = () => {
  emit('close');
};

const trapFocus = () => {
  document.addEventListener('keydown', handleKeyDown);
};

const releaseFocus = () => {
  document.removeEventListener('keydown', handleKeyDown);
};

const handleKeyDown = (event) => {
  if (event.key === 'Tab' && modalContent.value) {
    const focusableElements = getFocusableElements(modalContent.value);
    const firstFocusableEl = focusableElements[0];
    const lastFocusableEl = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) { // Shift + Tab
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        event.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        event.preventDefault();
      }
    }
  }
};

const getFocusableElements = (element) => {
  return Array.from(
    element.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
};

onUnmounted(() => {
  releaseFocus();
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--section-bg-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  color: var(--text-color);
  position: relative;
  outline: none; /* 移除預設的焦點外框 */
}

.modal-content h2 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.modal-content p {
  margin-bottom: 1.5rem;
}

.close-button {
  margin-top: 1rem;
  margin-right: 10px;
}

.modal-content button, .modal-content input {
  margin-bottom: 10px;
}

.modal-content input[type="text"] {
  padding: 0.8rem 1.5rem; /* 與按鈕相似的內邊距 */
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  width: calc(100% - 3rem); /* 考慮 padding */
  box-sizing: border-box; /* 確保 padding 不會增加總寬度 */
  margin-bottom: 1.5rem; /* 增加與下方元素的間距 */
}
</style>
