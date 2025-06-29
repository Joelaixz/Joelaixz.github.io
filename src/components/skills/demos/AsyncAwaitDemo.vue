<template>
  <div class="async-kitchen-simulator">
    <h2>「非同步小廚房」模擬器</h2>
    <p class="description">透過模擬烹飪流程，直觀理解 <code>async/await</code> 如何以同步方式編排非同步任務。</p>

    <div class="kitchen-layout">
      <!-- 食譜區 -->
      <div class="recipe-card">
        <h3>非同步香煎牛排食譜</h3>
        <ul>
          <li :class="{ 'active': currentStep === 1, 'completed': currentStep > 1 }">1. 醃製牛排 (3秒)</li>
          <li :class="{ 'active': currentStep === 2, 'completed': currentStep > 2 }">2. 香煎上色 (2秒)</li>
          <li :class="{ 'active': currentStep === 3, 'completed': currentStep > 3 }">3. 靜置鎖住肉汁 (5秒)</li>
        </ul>
        <button @click="cookSteak" :disabled="isCooking" class="btn-primary cook-button">
          {{ isCooking ? '烹飪中...' : '開始烹飪' }}
        </button>
      </div>

      <!-- 牛排圖片/動畫區 -->
      <div class="steak-display">
        <img :src="steakImage" alt="Steak" class="steak-image" :class="steakClass" />
        <div class="progress-bar-container" v-if="isCooking">
          <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
        </div>
        <p class="current-status">{{ statusMessage }}</p>
      </div>
    </div>

    <div class="code-explanation">
      <h3>程式碼展示:</h3>
      <pre class="css-code-block"><code>
async function cookSteak() {
  updateStatus('醃製中...');
  await marinate(3000); // 模擬醃製

  updateStatus('香煎中...');
  await sear(2000);     // 模擬香煎

  updateStatus('靜置中...');
  await rest(5000);      // 模擬靜置

  updateStatus('牛排完成，可以上菜了！');
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function marinate(ms) { await delay(ms); }
async function sear(ms) { await delay(ms); }
async function rest(ms) { await delay(ms); }
      </code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isCooking = ref(false);
const currentStep = ref(0);
const statusMessage = ref('準備烹飪...');
const progressBarWidth = ref(0);
let progressInterval = null;

const steakImage = computed(() => {
  switch (currentStep.value) {
    case 1: return '/steak/MarinatedSteak.jpg'; // 醃製中
    case 2: return '/steak/Pan-searedSteak.jpg'; // 香煎中
    case 3: return '/steak/RestingSteakLockingInJuices.jpg'; // 靜置中
    case 4: return '/steak/PlatedCookedSteak.jpg'; // 完成
    default: return '/steak/RawSteak.jpg'; // 初始狀態
  }
});

const steakClass = computed(() => {
  return {
    'marinating': currentStep.value === 1,
    'searing': currentStep === 2,
    'resting': currentStep === 3,
    'done': currentStep === 4,
  };
});

// 模擬延遲的 Promise 函數
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 烹飪步驟函數
const marinate = async (ms) => {
  currentStep.value = 1;
  await delay(ms);
};
const sear = async (ms) => {
  currentStep.value = 2;
  await delay(ms);
};
const rest = async (ms) => {
  currentStep.value = 3;
  await delay(ms);
};

// 更新狀態和進度條
const updateStatus = (message, duration = 0) => {
  statusMessage.value = message;
  clearInterval(progressInterval);
  progressBarWidth.value = 0;

  if (duration > 0) {
    let startTime = Date.now();
    progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      progressBarWidth.value = (elapsed / duration) * 100;
      if (progressBarWidth.value >= 100) {
        progressBarWidth.value = 100;
        clearInterval(progressInterval);
      }
    }, 50); // 每 50 毫秒更新一次進度條
  }
};

// 主烹飪流程
const cookSteak = async () => {
  isCooking.value = true;
  currentStep.value = 0;
  progressBarWidth.value = 0;
  statusMessage.value = '準備中...';

  try {
    updateStatus('正在醃製牛排...', 3000);
    await marinate(3000);

    updateStatus('正在香煎上色...', 2000);
    await sear(2000);

    updateStatus('正在靜置鎖住肉汁...', 5000);
    await rest(5000);

    updateStatus('牛排完成，可以上菜了！');
    currentStep.value = 4;
  } catch (error) {
    statusMessage.value = `烹飪失敗: ${error.message}`;
  } finally {
    isCooking.value = false;
    clearInterval(progressInterval);
  }
};
</script>

<style scoped>
.async-kitchen-simulator {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.async-kitchen-simulator h2 {
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

.kitchen-layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}

.recipe-card,
.steak-display {
  flex: 1;
  min-width: 300px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-card h3,
.steak-display h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.recipe-card ul {
  list-style: none;
  padding: 0;
  width: 100%;
  margin-bottom: 1.5rem;
}

.recipe-card li {
  padding: 0.8rem;
  border-bottom: 1px dashed var(--border-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.recipe-card li:last-child {
  border-bottom: none;
}

.recipe-card li.active {
  background-color: rgba(var(--primary-color-rgb), 0.1);
  color: var(--primary-color);
  font-weight: bold;
}

.recipe-card li.completed {
  text-decoration: line-through;
  color: #999;
}

.cook-button {
  width: 80%;
  padding: 1rem;
  font-size: 1.2rem;
}

.steak-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.steak-image.marinating {
  /* 醃製效果 */
  filter: saturate(1.2) brightness(0.9);
}

.steak-image.searing {
  /* 香煎效果 */
  filter: brightness(0.7) contrast(1.2);
  transform: scale(1.02);
}

.steak-image.resting {
  /* 靜置效果 */
  filter: grayscale(0.2) brightness(1.1);
}

.steak-image.done {
  /* 完成效果 */
  filter: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.progress-bar-container {
  width: 90%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-bar {
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 5px;
  transition: width 0.1s linear;
}

.current-status {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--primary-color);
}

.code-explanation {
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.code-explanation h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.css-code-block {
  background-color: #2d2d2d;
  color: #ccc;
  padding: 1.5rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: 'Fira Code', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  border: 1px solid #444;
}

.css-code-block code {
  white-space: pre-wrap;
  display: block;
}
</style>
