<template>
  <div class="animations-demo-container">
    <h2>微交互與通知中心</h2>
    <p class="description">此展示透過動畫提供清晰、即時的操作反饋，增強使用者體驗。</p>

    <section class="demo-section">
      <h3>動作確認動畫 (儲存成功)</h3>
      <div class="save-button-wrapper">
        <button
          class="save-button"
          :class="{ 'saved': saveStatus === 'saved', 'saving': saveStatus === 'saving' }"
          @click="saveSettings"
          :disabled="saveStatus === 'saving'"
        >
          <span v-if="saveStatus === 'initial'">儲存設定</span>
          <span v-else-if="saveStatus === 'saving'"></span>
          <svg v-else-if="saveStatus === 'saved'" class="checkmark" viewBox="0 0 52 52">
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </button>
      </div>
    </section>

    <section class="demo-section">
      <h3>錯誤提示動畫 (密碼錯誤)</h3>
      <div class="password-input-group" :class="{ 'shake': passwordError }">
        <label for="password">密碼:</label>
        <input type="password" id="password" v-model="password" @input="passwordError = false" />
        <button @click="checkPassword" class="btn-primary">提交</button>
      </div>
      <p v-if="passwordError" class="error-message">密碼錯誤，請重新輸入！</p>
    </section>

    <section class="demo-section">
      <h3>提醒注意動畫 (新通知)</h3>
      <div class="notification-area">
        <button @click="triggerNotification" class="btn-primary">模擬接收新通知</button>
        <div class="bell-icon-wrapper">
          <font-awesome-icon :icon="['fas', 'bell']" class="bell-icon" :class="{ 'ringing': isRinging }" />
          <span v-if="notificationCount > 0" class="notification-badge">{{ notificationCount }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

library.add(faBell);

// --- 儲存按鈕動畫 ----
const saveStatus = ref('initial'); // initial, saving, saved

const saveSettings = () => {
  saveStatus.value = 'saving';
  setTimeout(() => {
    saveStatus.value = 'saved';
    setTimeout(() => {
      saveStatus.value = 'initial'; // 重置狀態以便再次演示
    }, 2000); // 顯示打勾 2 秒後重置
  }, 1000); // 模擬儲存過程 1 秒
};

// --- 密碼錯誤動畫 ---
const password = ref('');
const passwordError = ref(false);

const checkPassword = () => {
  if (password.value !== 'correct') { // 假設正確密碼是 'correct'
    passwordError.value = true;
    setTimeout(() => {
      passwordError.value = false;
    }, 1000); // 晃動動畫持續 1 秒後停止
  } else {
    alert('密碼正確！');
    password.value = '';
  }
};

// --- 通知鈴鐺動畫 ---
const isRinging = ref(false);
const notificationCount = ref(0);

const triggerNotification = () => {
  notificationCount.value++;
  isRinging.value = true;
  setTimeout(() => {
    isRinging.value = false;
  }, 1500); // 鈴鐺響動 1.5 秒後停止
};
</script>

<style scoped>
.animations-demo-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.animations-demo-container h2 {
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

.demo-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.demo-section h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

/* --- 儲存按鈕動畫 --- */
.save-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px; /* 確保有足夠空間進行動畫 */
}

.save-button {
  width: 150px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.save-button.saving {
  width: 50px;
  border-radius: 50%;
  background-color: var(--primary-color-dark);
}

.save-button.saved {
  width: 50px;
  border-radius: 50%;
  background-color: #28a745; /* 成功綠 */
}

.save-button span {
  transition: opacity 0.3s ease;
}

.save-button.saving span {
  opacity: 0;
}

.save-button.saved span {
  opacity: 0;
}

/* 儲存中動畫 (簡單的旋轉加載) */
.save-button.saving::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 打勾動畫 */
.checkmark {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  stroke-width: 4;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #fff;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% { stroke-dashoffset: 0; }
}

@keyframes fill {
  100% { box-shadow: inset 0px 0px 0px 30px #28a745; }
}

@keyframes scale {
  0%, 100% { transform: none; }
  50% { transform: scale3d(1.1, 1.1, 1); }
}

/* --- 密碼錯誤動畫 --- */
.password-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 300px;
  margin: 0 auto;
}

.password-input-group input {
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
}

.password-input-group button {
  align-self: flex-start; /* 按鈕靠左 */
}

.password-input-group.shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

.error-message {
  color: #dc3545; /* 紅色錯誤訊息 */
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

/* --- 通知鈴鐺動畫 --- */
.notification-area {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.bell-icon-wrapper {
  position: relative;
  font-size: 3rem;
  color: var(--primary-color);
}

.bell-icon.ringing {
  animation: bell-shake 0.5s ease-in-out 3; /* 響鈴動畫，重複 3 次 */
  transform-origin: top center;
}

@keyframes bell-shake {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(5deg); }
  30% { transform: rotate(-5deg); }
  45% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #dc3545; /* 紅色徽章 */
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  transform: translate(50%, -50%);
  min-width: 20px;
  text-align: center;
}
</style>