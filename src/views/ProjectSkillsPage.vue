<template>
  <!-- 技能展示頁面的主要佈局容器 -->
  <main class="skills-showcase-layout">
    <!-- 左側導覽列，用於切換不同的技能展示內容 -->
    <SkillsSidebar />
    <!-- 右側內容區，用於顯示巢狀子路由的內容 -->
    <div class="content-area">
      <!-- router-view 用於顯示當前匹配到的子路由組件 -->
      <!-- v-slot="{ Component }" 允許我們訪問當前渲染的組件實例 -->
      <router-view v-slot="{ Component }">
        <!-- Transition 組件用於為路由切換添加過渡動畫 -->
        <Transition name="fade" mode="out-in">
          <!-- 動態渲染當前路由匹配到的組件 -->
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </main>
</template>

<script setup>
// 導入左側導覽列組件
import SkillsSidebar from '@/components/layout/SkillsSidebar.vue';
</script>

<style scoped>
/* 技能展示頁面的整體佈局樣式 */
.skills-showcase-layout {
  display: flex; /* 使用 Flexbox 佈局，使側邊欄和內容區並排顯示 */
  min-height: 100vh; /* 確保頁面至少佔據整個視窗高度 */
}

/* 內容區的樣式 */
.content-area {
  flex-grow: 1; /* 讓內容區佔據剩餘的所有可用空間 */
  padding: 2rem; /* 內容區內邊距 */
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