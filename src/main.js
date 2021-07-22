import 'vue-global-api'
import App from './App.vue'
import routes from "virtual:generated-pages"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { createHead } from '@vueuse/head'
// import { setupLayouts } from 'virtual:generated-layouts'

// const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	routes,
	history: createWebHistory()
})

const head = createHead()

createApp(App).use(router).use(head).mount('#app')