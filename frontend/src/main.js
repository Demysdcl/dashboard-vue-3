import '@/assets/css/fonts.css'
import '@/assets/css/tailwind.css'
import 'animate.css'
import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(Toast, { position: POSITION.BOTTOM_RIGHT })
  .mount('#app')
