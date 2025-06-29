<template>
  <div class="event-inspector-container">
    <h2>互動式事件偵測器</h2>
    <p class="description">偵測並解析各種 DOM 事件，並展示事件委派機制。</p>

    <div class="inspector-layout">
      <!-- 事件類型選擇區 -->
      <div class="event-controls">
        <h4>選擇要監聽的事件類型:</h4>
        <div class="checkbox-group">
          <label><input type="checkbox" v-model="selectedEventTypes" value="click"> click</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="dblclick"> dblclick</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="mousemove"> mousemove</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="keydown"> keydown</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="keyup"> keyup</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="mousedown"> mousedown</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="mouseup"> mouseup</label>
          <label><input type="checkbox" v-model="selectedEventTypes" value="contextmenu"> contextmenu</label>
        </div>
        <button @click="clearLog" class="btn-secondary clear-button">清除日誌</button>
      </div>

      <!-- 事件觸發區 -->
      <div class="event-zone" ref="eventZone" @click="handleEvent" @dblclick="handleEvent" @mousemove="handleEvent" @keydown="handleEvent" @keyup="handleEvent" @mousedown="handleEvent" @mouseup="handleEvent" @contextmenu="handleEvent" tabindex="0">
        <p>事件觸發區</p>
        <div class="child-box box-red"></div>
        <div class="child-box box-green"></div>
        <div class="child-box box-blue"></div>
      </div>

      <!-- 事件日誌面板 -->
      <div class="event-log-panel">
        <h4>事件日誌</h4>
        <div class="log-entries">
          <div v-for="(log, index) in eventLog" :key="index" class="log-entry">
            <span class="log-type">[{{ log.type }}]</span>
            <span class="log-details">{{ log.details }}</span>
          </div>
          <div v-if="eventLog.length === 0" class="no-entries">
            <p>沒有事件記錄。</p>
            <p>請在左側區域進行互動。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="delegation-explanation">
      <h3>事件委派 (Event Delegation) 原理展示:</h3>
      <p>
        此展示僅在最外層的
        <code class="code-highlight">.event-zone</code>
        元素上掛載了一個事件監聽器。當您點擊內部的小區塊時，日誌會清晰地顯示：
      </p>
      <ul>
        <li>
          <code class="code-highlight">event.target</code>:
          被點擊的元素 (事件的真正來源，例如
          <code class="code-highlight">.child-box</code>)。
        </li>
        <li>
          <code class="code-highlight">event.currentTarget</code>:
          掛載監聽器的元素 (處理事件的元素，即
          <code class="code-highlight">.event-zone</code>)。
        </li>
      </ul>
      <p>這展示了事件委派的效率和原理。</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedEventTypes = ref(['click', 'mousemove', 'keydown']); // Default selected
const eventLog = ref([]);
const eventZone = ref(null); // Reference to the event zone element

const handleEvent = (e) => {
  if (!selectedEventTypes.value.includes(e.type)) {
    return; // Only log selected event types
  }

  let details = '';
  if (e.type.startsWith('mouse')) {
    details = `clientX: ${e.clientX}, clientY: ${e.clientY}, target: ${e.target.className || e.target.tagName.toLowerCase()}, currentTarget: ${e.currentTarget.className || e.currentTarget.tagName.toLowerCase()}`;
  } else if (e.type.startsWith('key')) {
    details = `key: '${e.key}', code: '${e.code}', ctrlKey: ${e.ctrlKey}, shiftKey: ${e.shiftKey}, altKey: ${e.altKey}, target: ${e.target.className || e.target.tagName.toLowerCase()}, currentTarget: ${e.currentTarget.className || e.currentTarget.tagName.toLowerCase()}`;
  } else if (e.type === 'click' || e.type === 'dblclick' || e.type === 'contextmenu') {
    details = `button: ${e.button} (${getMouseButton(e.button)}), target: ${e.target.className || e.target.tagName.toLowerCase()}, currentTarget: ${e.currentTarget.className || e.currentTarget.tagName.toLowerCase()}`;
  }

  eventLog.value.unshift({ // Add to the beginning of the array
    type: e.type,
    details: details,
  });

  // Limit log entries to prevent performance issues
  if (eventLog.value.length > 50) {
    eventLog.value.pop();
  }
};

const getMouseButton = (buttonCode) => {
  switch (buttonCode) {
    case 0: return '左鍵';
    case 1: return '中鍵';
    case 2: return '右鍵';
    default: return '未知';
  }
};

const clearLog = () => {
  eventLog.value = [];
};
</script>

<style scoped>
.event-inspector-container {
  padding: 2rem;
  background-color: var(--section-bg-color);
  border-radius: 8px;
  color: var(--text-color);
}

.event-inspector-container h2 {
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

.inspector-layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.event-controls {
  flex: 1;
  min-width: 250px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.event-controls h4 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.clear-button {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
}

.event-zone {
  flex: 2;
  min-width: 400px;
  height: 400px;
  border: 3px solid var(--primary-color);
  background-color: var(--background-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: default;
  tabindex: 0; /* Make it focusable for keyboard events */
}

.event-zone p {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.7;
}

.child-box {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.child-box:hover {
  transform: scale(1.05);
}

.box-red { background-color: #e74c3c; }
.box-green { background-color: #2ecc71; }
.box-blue { background-color: #3498db; }

.event-log-panel {
  flex: 2;
  min-width: 300px;
  height: 400px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: #2d2d2d; /* 深色背景模擬控制台 */
  color: #eee;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.event-log-panel h4 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #555;
  padding-bottom: 0.5rem;
}

.log-entries {
  flex-grow: 1;
  overflow-y: auto; /* 允許滾動 */
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.log-entry {
  margin-bottom: 0.5rem;
  word-break: break-all; /* 防止長行溢出 */
}

.log-type {
  color: #88ccff; /* 藍色 */
  font-weight: bold;
}

.log-details {
  color: #eee;
}

.no-entries {
  text-align: center;
  color: #aaa;
  margin-top: 2rem;
}

.delegation-explanation {
  margin-top: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
}

.delegation-explanation h3 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.delegation-explanation p {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.delegation-explanation ul {
  list-style: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.code-highlight {
  background-color: rgba(var(--primary-color-rgb), 0.1);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.95em;
  color: var(--primary-color);
}
</style>