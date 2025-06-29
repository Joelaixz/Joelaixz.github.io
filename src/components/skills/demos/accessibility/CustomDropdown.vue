<template>
  <div class="custom-dropdown">
    <button
      ref="dropdownButton"
      class="dropdown-toggle btn-secondary"
      aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="toggleDropdown"
      @keydown.down.prevent="focusNextItem"
      @keydown.up.prevent="focusPrevItem"
    >
      {{ selectedOption || '選擇一個選項' }}
    </button>

    <ul
      v-if="isOpen"
      ref="dropdownMenu"
      class="dropdown-menu"
      role="menu"
      tabindex="-1"
      @keydown.down.prevent="focusNextItem"
      @keydown.up.prevent="focusPrevItem"
      @keydown.enter="selectFocusedItem"
      @keydown.space="selectFocusedItem"
      @keydown.esc="closeDropdown"
      @blur.capture="handleBlur"
    >
      <li
        v-for="(option, index) in options"
        :key="option.value"
        :id="`option-${option.value}`"
        role="menuitem"
        tabindex="-1"
        @click="selectOption(option)"
        @mouseover="focusedIndex = index"
        :class="{ 'focused': focusedIndex === index }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const options = ref([
  { label: '選項 A', value: 'a' },
  { label: '選項 B', value: 'b' },
  { label: '選項 C', value: 'c' },
  { label: '選項 D', value: 'd' },
]);

const isOpen = ref(false);
const selectedOption = ref('');
const focusedIndex = ref(-1);
const dropdownButton = ref(null);
const dropdownMenu = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      focusedIndex.value = -1; // Reset focused item on open
      dropdownMenu.value.focus(); // Focus the menu itself
    });
  }
};

const closeDropdown = () => {
  isOpen.value = false;
  focusedIndex.value = -1;
  dropdownButton.value.focus(); // Return focus to the button
};

const selectOption = (option) => {
  selectedOption.value = option.label;
  closeDropdown();
};

const focusItem = (index) => {
  if (index >= 0 && index < options.value.length) {
    focusedIndex.value = index;
    const item = document.getElementById(`option-${options.value[index].value}`);
    if (item) {
      item.focus(); // Programmatically focus the list item
    }
  }
};

const focusNextItem = () => {
  if (!isOpen.value) {
    toggleDropdown();
    return;
  }
  const nextIndex = (focusedIndex.value + 1) % options.value.length;
  focusItem(nextIndex);
};

const focusPrevItem = () => {
  if (!isOpen.value) {
    toggleDropdown();
    return;
  }
  const prevIndex = (focusedIndex.value - 1 + options.value.length) % options.value.length;
  focusItem(prevIndex);
};

const selectFocusedItem = () => {
  if (focusedIndex.value !== -1) {
    selectOption(options.value[focusedIndex.value]);
  }
};

const handleBlur = (event) => {
  // Check if the blur event is moving focus outside the dropdown button or menu
  if (!event.currentTarget.contains(event.relatedTarget) && !dropdownButton.value.contains(event.relatedTarget)) {
    closeDropdown();
  }
};
</script>

<style scoped>
.custom-dropdown {
  position: relative;
  display: inline-block;
  margin-top: 1rem;
}

.dropdown-toggle {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  min-width: 200px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--section-bg-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0.5rem 0 0 0;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.dropdown-menu li {
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  color: var(--text-color);
}

.dropdown-menu li:hover,
.dropdown-menu li.focused {
  background-color: var(--primary-color);
  color: var(--button-text-color);
}
</style>
