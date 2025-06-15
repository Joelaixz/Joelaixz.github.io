import './assets/main.css'

// 引入 Bootstrap 的 CSS 樣式
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入 Bootstrap 的 JS 功能
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
