import '@/assets/css/fonts.css'
import '@/assets/css/tailwind.css'
import 'animate.css'
import { createApp } from 'vue'
import App from './App.vue'
import { setup } from './utils/bootstrap'
import Playground from './views/Playground/Playground.vue'

setup({
  onDevelopment() {
    createApp(Playground).mount('#app')
  },
  onProduction() {
    createApp(App).mount('#app')
  },
})
