import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag';

// src/main.js
import 'bootstrap/dist/css/bootstrap.min.css';  // 引入 Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 引入 Bootstrap JavaScript
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

createApp(App).use(VueGtag, {
    config: { id: "G-G1J2WZR7P5" }  // 替換成你的 GA4 ID
}, router);
createApp(App).use(store).use(router).mount('#app')
