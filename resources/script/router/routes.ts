import type { RouteRecordRaw } from 'vue-router'

import Default from '@/layouts/Default.vue'
import Application from '@/layouts/Application.vue'
import NotFound from '@/views/error/Error404.vue'

// modules
import dashboard from "@/router/dashboard"
import posts from "@/router/posts"
import auth from "@/router/auth"
import error from "@/router/error"

const routes: RouteRecordRaw[] = [
    {
        path: '/app',
        component: Default,
        children: [
            { ...dashboard },
            { ...posts },
            { ...auth },
            { ...error }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: Application,
        children: [{ path: '', component: NotFound }],
        meta: {
            title: 'Page not found | 404'
        }
    }
]

export default routes;
