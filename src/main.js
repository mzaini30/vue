import 'vue-global-api'
import App from './App.vue'
import routes from "virtual:generated-pages"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	routes,
	history: createWebHistory()
})

createApp(App).use(router).mount('#app')