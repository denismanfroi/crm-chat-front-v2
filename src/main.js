import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'
import { auth } from './firebase'
import './assets/main.css'

const pinia = createPinia()
pinia.use(piniaPersistedstate)

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(pinia)
    app.use(router)
    app.mount('#app')
  }
})
