<template>
  <!-- 應用程式的固定頁首，傳遞 isSkillsPage prop 以調整樣式 -->
  <AppHeader :isSkillsPage="true" />

  <!-- 技能展示頁面的主要佈局容器 -->
  <main class="skills-showcase-layout">
    <!-- 左側導覽列，用於切換不同的技能展示內容 -->
    <SkillsSidebar />
    <!-- 右側內容區，用於顯示巢狀子路由的內容 -->
    <div class="content-area">
      <!-- 當 isLoading 為 true 時顯示讀取動畫，否則顯示路由內容 -->
      <LoadingSpinner v-if="isLoading" />
      <router-view v-else v-slot="{ Component }">
        <!-- Transition 組件用於為路由切換添加過渡動畫 -->
        <Transition name="fade" mode="out-in">
          <!-- 動態渲染當前路由匹配到的組件 -->
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </main>

  <!-- 應用程式的頁尾 -->
  <AppFooter />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// 導入左側導覽列組件
import SkillsSidebar from '@/components/layout/SkillsSidebar.vue';
// 導入頁首和頁尾組件
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
// 導入讀取動畫組件
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

const isLoading = ref(false);
const router = useRouter();

// 在路由開始導航時設置 isLoading 為 true
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

// 在路由導航完成後設置 isLoading 為 false
router.afterEach(() => {
  isLoading.value = false;
});

// 組件掛載時，如果當前路由是技能展示頁面，則確保 isLoading 為 false
// 這是為了處理首次進入頁面時的狀態
onMounted(() => {
  isLoading.value = false;
});
</script>

<style scoped>
/* 技能展示頁面的整體佈局樣式 */
.skills-showcase-layout {
  display: flex; /* 使用 Flexbox 佈局，使側邊欄和內容區並排顯示 */
  min-height: calc(100vh - var(--header-height) - var(--footer-height)); /* 確保頁面至少佔據整個視窗高度，減去頁首和頁尾的高度 */
  padding-top: var(--header-height); /* 為頁首留出空間 */
  padding-bottom: var(--footer-height); /* 為頁尾留出空間 */
}

/* 內容區的樣式 */
.content-area {
  flex-grow: 1; /* 讓內容區佔據剩餘的所有可用空間 */
  padding: 2rem; /* 內容區內邊距 */
  display: flex; /* 讓內容區內部也使用 Flexbox，以便讀取動畫居中 */
  align-items: center; /* 垂直居中讀取動畫 */
  justify-content: center; /* 水平居中讀取動畫 */
}

/* 路由切換過渡動畫的樣式 */
/* 進入和離開動畫的活躍狀態 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease; /* 透明度在 0.3 秒內平滑過渡 */
}

/* 進入動畫的起始狀態和離開動畫的結束狀態 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* 透明度為 0，表示完全透明 */
}
</style>
