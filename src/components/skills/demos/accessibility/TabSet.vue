<template>
  <div class="tab-set">
    <div role="tablist" aria-label="範例頁籤">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :id="`tab-${tab.id}`"
        role="tab"
        :aria-selected="activeTabId === tab.id"
        :tabindex="activeTabId === tab.id ? 0 : -1"
        @click="activateTab(tab.id)"
        @keydown.left="navigateTabs('left')"
        @keydown.right="navigateTabs('right')"
      >
        {{ tab.title }}
      </button>
    </div>
    <div
      v-for="(tab, index) in tabs"
      :key="tab.id"
      :id="`panel-${tab.id}`"
      role="tabpanel"
      :aria-labelledby="`tab-${tab.id}`"
      v-show="activeTabId === tab.id"
    >
      <p>{{ tab.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
  { id: 'tab1', title: '頁籤一', content: '這是頁籤一的內容。' },
  { id: 'tab2', title: '頁籤二', content: '這是頁籤二的內容。' },
  { id: 'tab3', title: '頁籤三', content: '這是頁籤三的內容。' },
]);

const activeTabId = ref(tabs.value[0].id);

const activateTab = (id) => {
  activeTabId.value = id;
};

const navigateTabs = (direction) => {
  const currentIndex = tabs.value.findIndex(tab => tab.id === activeTabId.value);
  let nextIndex = currentIndex;

  if (direction === 'left') {
    nextIndex = (currentIndex - 1 + tabs.value.length) % tabs.value.length;
  } else if (direction === 'right') {
    nextIndex = (currentIndex + 1) % tabs.value.length;
  }

  activeTabId.value = tabs.value[nextIndex].id;
  // 聚焦到新的頁籤按鈕
  document.getElementById(`tab-${activeTabId.value}`).focus();
};
</script>

<style scoped>
.tab-set {
  margin-top: 1rem;
}

.tab-set [role="tablist"] {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
}

.tab-set [role="tab"] {
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-bottom: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 5px;
  color: var(--text-color);
}

.tab-set [role="tab"][aria-selected="true"] {
  background-color: var(--section-bg-color);
  border-color: var(--primary-color);
  color: var(--primary-color);
  font-weight: bold;
}

.tab-set [role="tabpanel"] {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--section-bg-color);
}
</style>
