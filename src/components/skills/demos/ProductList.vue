<template>
  <div class="product-list">
    <h3>商品列表</h3>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h4>{{ product.name }}</h4>
        <p>${{ product.price }}</p>
        <button @click="handleAddToCart(product)" class="btn-primary">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

// 模擬的商品數據
const products = ref([
  { id: 1, name: 'Vue.js T恤', price: 250 },
  { id: 2, name: 'Pinia 馬克杯', price: 150 },
  { id: 3, name: 'Vite 帽子', price: 200 },
]);

// 獲取 cart store 的實例
const cartStore = useCartStore();

// 處理加入購物車的事件
const handleAddToCart = (product) => {
  // 調用 store 中的 action
  cartStore.addToCart(product);
};
</script>

<style scoped>
.product-list h3 {
  margin-bottom: 1.5rem;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: var(--background-color);
}

.product-card h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.product-card p {
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1rem;
}
</style>
