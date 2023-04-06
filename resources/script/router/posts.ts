import type { RouteRecordRaw } from 'vue-router'
// layout
import Application from '@/layouts/Application.vue'
// views
import Posts from '@/views/posts/Posts.vue'

const route: RouteRecordRaw = {
    path: '',
    component: Application,
    children: [
        {
            path: 'posts',
            name: 'posts',
            component: Posts,
            meta: {
                title: 'posts',
                middleware: [],
                breadcrumbs: [],
                requiredAuth: true
            }
        }
    ]
}

export default route
