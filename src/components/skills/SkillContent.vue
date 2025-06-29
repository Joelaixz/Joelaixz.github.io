<template>
  <!-- 技能內容展示的根容器 -->
  <div class="skill-page-content">
    <!-- 根據 showDemo 狀態切換顯示內容或 Live Demo -->
    <div v-if="!showDemo">
      <h2>{{ skillData.title }}</h2>
      <h3>頁面說明:</h3>
      <p>{{ skillData.context }}</p>
      <h3>技術棧:</h3>
      <ul>
        <li v-for="tech in skillData.techStack" :key="tech">{{ tech }}</li>
      </ul>
      <!-- Live Demo 按鈕，點擊切換到動態展示窗口 -->
      <button @click="toggleDemo" class="btn-primary">即時演示</button>
    </div>
    <div v-else class="live-demo-container">
      <div class="demo-header">
        <!-- 動態展示窗口的標題，與技能標題一致 -->
        <h2>{{ skillData.title }}</h2>
        <!-- 返回說明按鈕，點擊切換回文字說明 -->
        <button @click="toggleDemo" class="btn-secondary return-button">返回說明</button>
      </div>
      <!-- 根據 skillData.title 條件渲染不同的 Demo 組件 -->
      <SemanticTagsDemo v-if="skillData.title === '語意化標籤'" />
      <FormsValidationDemo v-if="skillData.title === '表單與原生驗證'" />
      <AccessibilityDemo v-if="skillData.title === '無障礙網頁'" />
      <PseudoElementsDemo v-if="skillData.title === '偽類元素'" />
      <AnimationsDemo v-if="skillData.title === '動畫'" />
      <CustomPropertiesDemo v-if="skillData.title === '自訂屬性'" />
      <RwdDemo v-if="skillData.title === 'RWD'" />
      <EventListenersDemo v-if="skillData.title === '監聽事件'" />
      <AsyncAwaitDemo v-if="skillData.title === 'Async/Await'" />
      <ES6FunctionsDemo v-if="skillData.title === 'ES6+函式'" />
      <!-- 其他 Demo 組件將在此處添加 -->
    </div>
  </div>
</template>

<script setup>
// 導入 Vue 的響應式 API 和定義 props 的函數
import { ref, defineProps } from 'vue'
// 導入語意化標籤的 Demo 組件
import SemanticTagsDemo from '@/components/skills/demos/SemanticTagsDemo.vue'
import FormsValidationDemo from '@/components/skills/demos/FormsValidationDemo.vue'
import AccessibilityDemo from '@/components/skills/demos/accessibility/AccessibilityDemo.vue'
import PseudoElementsDemo from '@/components/skills/demos/PseudoElementsDemo.vue'
import AnimationsDemo from '@/components/skills/demos/AnimationsDemo.vue'
import CustomPropertiesDemo from '@/components/skills/demos/CustomPropertiesDemo.vue'
import RwdDemo from '@/components/skills/demos/RwdDemo.vue'
import EventListenersDemo from '@/components/skills/demos/EventListenersDemo.vue'
import AsyncAwaitDemo from '@/components/skills/demos/AsyncAwaitDemo.vue'
import ES6FunctionsDemo from '@/components/skills/demos/ES6FunctionsDemo.vue'

// 定義組件接收的 props，期望接收一個包含技能數據的 Object
const props = defineProps({
  skillData: Object,
})

// 響應式變數，控制是否顯示 Live Demo，預設為 false (顯示文字說明)
const showDemo = ref(false)

// 切換 showDemo 狀態的函數
const toggleDemo = () => {
  showDemo.value = !showDemo.value
}
</script>

<style scoped>
/* 技能頁面內容區的基礎樣式 */
.skill-page-content {
  padding: 2rem;
}

.skill-page-content h2 {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: var(--primary-color);
}

.skill-page-content h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.skill-page-content p {
  line-height: 1.8; /* 增加行高以提高閱讀舒適度 */
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.skill-page-content ul {
  list-style: disc; /* 使用圓點列表 */
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.skill-page-content li {
  line-height: 1.6;
  font-size: 1.1rem;
}

/* Live Demo 容器的樣式 */
.live-demo-container {
  border: 1px solid var(--border-color); /* 邊框 */
  padding: 1.5rem; /* 內邊距 */
  border-radius: 8px; /* 圓角邊框 */
  background-color: var(--section-bg-color); /* 背景顏色，來自 CSS 變數 */
}

.demo-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.demo-header h2 {
  margin-bottom: 0; /* 移除標題的下邊距，因為父元素已經有間距控制 */
  margin-right: 1rem; /* 標題與按鈕之間的間距 */
}

.return-button {
  margin-top: 0; /* 移除按鈕預設的上邊距 */
}
</style>
