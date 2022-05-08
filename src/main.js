import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
// import generatedRoutes from 'virtual:generated-pages'
import RouterPrefetch from 'vue-router-prefetch'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  routes,
  history: createWebHistory()
})
const head = createHead()

createApp(App).use(router).use(RouterPrefetch).use(head).mount('#app')
