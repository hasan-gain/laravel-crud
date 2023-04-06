import type { RouteRecordRaw } from 'vue-router'

import Default from '@/layouts/Default.vue'
import NotFound from '@/views/Error.vue'

// modules
import dashboard from "@/router/dashboard"
import posts from "@/router/posts"
import auth from "@/router/auth"

const routes: RouteRecordRaw[] = [
    {
        path: '/app',
        component: Default,
        children: [
            { ...dashboard },
            { ...posts },
            { ...auth },
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

export default routes;
