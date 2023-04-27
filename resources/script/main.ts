import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'
import VueFeather from 'vue-feather'

import 'bootstrap' // BS5
import 'nprogress/nprogress.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.component('Icon', VueFeather)

app.mount("#app")
