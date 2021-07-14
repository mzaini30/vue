import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
import 'vue-global-api'

const router = createRouter({
	routes,
	history: createWebHistory()
})

createApp(App).use(router).mount('#app')