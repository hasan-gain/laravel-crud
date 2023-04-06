import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import type { Router } from 'vue-router'

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiredAuth) {
        if (isAuthenticate()) next()
        else next({ name: 'login' })
    }
    else next()
    document.title = `${to.meta.title || 'App'}`
})

let isAuthenticate = () => {
    return !!localStorage.getItem('token')
}

export default router;
