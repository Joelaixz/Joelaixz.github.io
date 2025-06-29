<template>
  <div class="props-passing-demo-container">
    <h2>互動式星級評分元件</h2>
    <div class="parent-component-area">
      <h3>父元件區域</h3>
      <p class="rating-text">
        您對本次服務的評分是：
        <span class="rating-value">{{ rating }}</span>
        顆星
      </p>
      <StarRating :rating="rating" @update-rating="handleRatingUpdate" />
    </div>
    <div class="explanation">
      <h4>展示重點：</h4>
      <ul>
        <li>
          <strong>Props Down:</strong> 父元件的
          <code>rating ({{ rating }})</code>
          透過 prop 傳遞給子元件。
        </li>
        <li>
          <strong>Emits Up:</strong> 當您點擊星星時，子元件觸發
          <code>update-rating</code> 事件，將新值向上發送。
        </li>
        <li>
          <strong>單向數據流:</strong>
          父元件監聽到事件後更新自身狀態，新狀態再透過 prop
          向下傳遞，完成數據閉環。
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StarRating from './StarRating.vue';

// 1. 父元件持有一個 ref 狀態
const rating = ref(4);

// 3. 父元件定義一個方法來處理子元件發出的事件
const handleRatingUpdate = (newRating) => {
  // 更新自己的狀態
  rating.value = newRating;
};
</script>

<style scoped>
.props-passing-demo-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
  text-align: center;
}

.props-passing-demo-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
}

.parent-component-area {
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.parent-component-area h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.rating-text {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.rating-value {
  font-weight: bold;
  color: var(--primary-color);
  font-size: 1.8rem;
}

.explanation {
  text-align: left;
  background-color: var(--background-color);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.explanation h4 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.explanation ul {
  padding-left: 20px;
}

.explanation li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.explanation code {
  background-color: rgba(var(--primary-color-rgb), 0.1);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.95em;
  color: var(--primary-color);
}
</style>
