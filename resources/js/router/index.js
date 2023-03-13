import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import NotFound from '../views/Error.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
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
