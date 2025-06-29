<template>
  <div class="ecommerce-filter-demo-container">
    <h2>電商商品篩選頁面</h2>
    <p class="description">展示如何利用 JavaScript 陣列方法鏈式呼叫，實現複雜的商品篩選功能。</p>

    <div class="filter-layout">
      <!-- 篩選條件區 -->
      <aside class="filter-sidebar">
        <h3>篩選條件</h3>

        <div class="filter-group">
          <h4>商品分類</h4>
          <div class="checkbox-list">
            <label v-for="category in availableCategories" :key="category">
              <input type="checkbox" :value="category" v-model="selectedCategories" />
              {{ category }}
            </label>
          </div>
        </div>

        <div class="filter-group">
          <h4>價格區間</h4>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            v-model.number="maxPrice"
            class="price-range-slider"
          />
          <p>最高價格: ${{ maxPrice }}</p>
        </div>

        <div class="filter-group">
          <h4>搜尋關鍵字</h4>
          <input type="text" v-model="searchKeyword" placeholder="輸入商品名稱" class="search-input" />
        </div>
      </aside>

      <!-- 商品展示區 -->
      <main class="product-list-main">
        <div class="filter-summary">
          <p>共篩選出 {{ filteredProducts.length }} 件商品，總價值為 ${{ totalFilteredValue.toFixed(0) }}。</p>
        </div>
        <div class="product-grid">
          <div v-for="product in filteredProducts" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="product-info">
              <h4 class="product-name">{{ product.name }}</h4>
              <p class="product-category">{{ product.category }}</p>
              <p class="product-price">${{ product.price.toFixed(0) }}</p>
            </div>
          </div>
          <p v-if="filteredProducts.length === 0" class="no-results">沒有找到符合條件的商品。</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const allProducts = ref([
  { id: 1, name: '筆記型電腦', category: '電子產品', price: 8999.90, image: '/dummy200.jpg' },
  { id: 2, name: '機械鍵盤', category: '電子產品', price: 1200.00, image: '/dummy200.jpg' },
  { id: 3, name: '藍牙耳機', category: '電子產品', price: 755.00, image: '/dummy200.jpg' },
  { id: 4, name: '設計師T恤', category: '服飾', price: 350.00, image: '/dummy200.jpg' },
  { id: 5, name: '牛仔褲', category: '服飾', price: 650.00, image: '/dummy200.jpg' },
  { id: 6, name: '運動鞋', category: '鞋類', price: 900.00, image: '/dummy200.jpg' },
  { id: 7, name: '咖啡機', category: '家電', price: 2500.00, image: '/dummy200.jpg' },
  { id: 8, name: '智慧手錶', category: '電子產品', price: 1999.90, image: '/dummy200.jpg' },
  { id: 9, name: '書籍: JavaScript精粹', category: '書籍', price: 250.00, image: '/dummy200.jpg' },
  { id: 10, name: '登山背包', category: '戶外用品', price: 1500.00, image: '/dummy200.jpg' },
]);

const selectedCategories = ref([]);
const maxPrice = ref(1000);
const searchKeyword = ref('');

const availableCategories = computed(() => {
  const categories = new Set();
  allProducts.value.forEach(p => categories.add(p.category));
  return Array.from(categories);
});

const filteredProducts = computed(() => {
  let products = allProducts.value;

  // 1. 篩選分類
  if (selectedCategories.value.length > 0) {
    products = products.filter(p => selectedCategories.value.includes(p.category));
  }

  // 2. 篩選價格
  products = products.filter(p => p.price <= maxPrice.value);

  // 3. 篩選關鍵字
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(keyword));
  }

  return products;
});

const totalFilteredValue = computed(() => {
  return filteredProducts.value.reduce((sum, p) => sum + p.price, 0);
});
</script>

<style scoped>
.ecommerce-filter-demo-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.ecommerce-filter-demo-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 1rem;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
  opacity: 0.8;
  font-size: 1.2rem;
}

.filter-layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-sidebar {
  flex: 0 0 250px; /* 固定寬度 */
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.filter-sidebar h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.filter-group {
  margin-bottom: 2rem;
}

.filter-group h4 {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.checkbox-list label {
  display: block;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.price-range-slider {
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  background: var(--border-color);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 5px;
}

.price-range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
}

.search-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--section-bg-color);
  color: var(--text-color);
  font-size: 1rem;
}

.product-list-main {
  flex: 1;
  min-width: 400px;
}

.filter-summary {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--primary-color);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

.product-name {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.product-category {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.no-results {
  text-align: center;
  grid-column: 1 / -1; /* 跨越所有列 */
  color: #999;
  margin-top: 2rem;
}
</style>