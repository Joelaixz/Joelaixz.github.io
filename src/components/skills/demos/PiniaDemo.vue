<template>
  <div class="pinia-demo-container">
    <h2>跨元件購物車</h2>
    
    <!-- 模擬的導覽列 -->
    <nav class="mock-navbar">
      <div class="logo">電商網站</div>
      <NavbarCart />
    </nav>

    <!-- 主要內容區 -->
    <main class="main-content">
      <ProductList />
    </main>

    <!-- 說明區 -->
    <div class="explanation">
      <h4>展示重點：</h4>
      <ul>
        <li>
          <strong>集中式 Store:</strong> <code>useCartStore</code> 提供了一個集中的「單一資料來源」。
        </li>
        <li>
          <strong>Action 觸發:</strong> <code>ProductList</code> 元件中的按鈕調用 store 的 <code>addToCart</code> action 來修改狀態。
        </li>
        <li>
          <strong>Getter 響應:</strong> <code>NavbarCart</code> 元件使用 <code>cartItemCount</code> getter 來響應式地顯示購物車數量。
        </li>
        <li>
          <strong>解決方案:</strong> 這個範例完美解決了「遠距離元件通訊」的痛點，展示了 Pinia 如何讓狀態變化變得清晰、可預測。
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ProductList from './ProductList.vue';
import NavbarCart from './NavbarCart.vue';
</script>

<style scoped>
.pinia-demo-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.pinia-demo-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
}

.mock-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.main-content {
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  margin-bottom: 2rem;
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
