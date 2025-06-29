import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 建立一個名為 'cart' 的 store
export const useCartStore = defineStore('cart', () => {
  // State: 購物車中的商品項目
  const items = ref([]);

  // Getter: 計算購物車中商品的總數量
  const cartItemCount = computed(() => items.value.length);

  // Action: 將商品加入購物車
  function addToCart(product) {
    // 這裡可以添加更複雜的邏輯，例如檢查商品是否已存在
    items.value.push(product);
  }

  // 將 state, getters, 和 actions 回傳
  return { items, cartItemCount, addToCart };
});
