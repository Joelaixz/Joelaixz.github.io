import './assets/base.css'
import './assets/main.css'

// 從 Vue 框架中導入 createApp 函數，用於創建 Vue 應用實例
import { createApp } from 'vue'
// 從 Pinia 狀態管理庫中導入 createPinia 函數，用於創建 Pinia 實例
import { createPinia } from 'pinia'

// 導入根組件 App.vue，它是整個 Vue 應用程式的入口點
import App from './App.vue'
// 導入路由配置，用於管理應用程式的導航
import router from './router'

// 創建 Vue 應用實例，並將根組件 App 傳入
const app = createApp(App)

// 將 Pinia 狀態管理庫掛載到 Vue 應用程式上，使其所有組件都能使用狀態管理功能
app.use(createPinia())
// 將 Vue Router 掛載到 Vue 應用程式上，啟用路由功能
app.use(router)

// 將 Vue 應用程式掛載到 HTML 頁面中 ID 為 'app' 的元素上
app.mount('#app')
