import type { RouteRecordRaw } from 'vue-router'
// layout
import Application from '@/layouts/Application.vue'
// views
import Error404 from '@/views/error/Error404.vue'

const route: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    component: Application,
    children: [
        {
            path: '',
            component: Error404
        }
    ],
    meta: {
        title: 'Not Found | 404'
    }
}

export default route
