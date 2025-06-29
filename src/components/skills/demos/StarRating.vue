<template>
  <div class="star-rating" @mouseleave="resetPreview">
    <span
      v-for="n in 5"
      :key="n"
      class="star"
      :class="{ 
        highlighted: n <= (previewRating || rating), 
        preview: n <= previewRating 
      }"
      @mouseover="setPreview(n)"
      @click="selectRating(n)"
      role="button"
      :aria-label="`${n}星`"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props: 接收來自父元件的當前評分
const props = defineProps({
  rating: {
    type: Number,
    required: true,
    default: 0
  }
});

// Emits: 定義一個可以向上發送的事件
const emit = defineEmits(['update-rating']);

// 子元件的內部狀態，用於滑鼠懸停時的預覽效果
const previewRating = ref(0);

// 設定預覽評分
const setPreview = (n) => {
  previewRating.value = n;
};

// 重置預覽評分
const resetPreview = () => {
  previewRating.value = 0;
};

// 選擇評分，觸發 emit 事件通知父元件
const selectRating = (n) => {
  emit('update-rating', n);
};
</script>

<style scoped>
.star-rating {
  display: inline-flex;
  gap: 0.5rem;
}

.star {
  font-size: 2.5rem;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
}

.star:hover {
  transform: scale(1.2);
}

.star.highlighted {
  color: #ffc107; /* 金黃色 */
}

.star.preview {
  color: #ffdd7a; /* 較淺的金黃色作為預覽 */
}
</style>
