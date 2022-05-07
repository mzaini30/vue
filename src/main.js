import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { createHead } from '@vueuse/head'

const router = createRouter({
  routes,
  history: createWebHistory()
})
const head = createHead()

createApp(App).use(router).use(head).mount('#app')
