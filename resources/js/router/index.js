import {createRouter, createWebHistory} from 'vue-router'

import Default from '../layouts/Default.vue'
import NotFound from '../views/Error.vue'

// module
import dashboard from "./dashboard"
import auth from "./auth"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/app',
            component: Default,
            children: [
                {...dashboard},
                {...auth},
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            meta: {
                title: 'Page not found | 404'
            }
        }
    ]
})

router.afterEach((to, from, next) => {
    document.title = `${to.meta.title || 'App'}`
})

export default router;
