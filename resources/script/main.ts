import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import VueFeather from 'vue-feather'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('Icon', VueFeather)

app.mount("#app")

import 'bootstrap'
