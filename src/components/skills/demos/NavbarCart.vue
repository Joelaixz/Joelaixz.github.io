<template>
  <div class="navbar-cart">
    <div class="cart-icon-wrapper">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" class="cart-icon" />
      <span v-if="itemCount > 0" class="badge">{{ itemCount }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faShoppingCart);

// 獲取 cart store 的實例
const cartStore = useCartStore();

// 從 store 的 getter 中獲取商品數量
const itemCount = computed(() => cartStore.cartItemCount);
</script>

<style scoped>
.navbar-cart {
  display: flex;
  align-items: center;
}

.cart-icon-wrapper {
  position: relative;
  font-size: 1.5rem; /* 調整圖示大小 */
  color: var(--text-color);
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}
</style>
