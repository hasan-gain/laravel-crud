import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import type { Router } from 'vue-router'
import { useAppStore } from '@/store/application'

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: 'smooth' }
    }
})

// router.beforeResolve(to => {
//     const appStore = useAppStore()
//     return !!(appStore.sidebar.length)
//         ? true
//         : appStore.init().then(settings => true)
// })

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
