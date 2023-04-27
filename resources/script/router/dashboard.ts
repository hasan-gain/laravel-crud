import type { RouteRecordRaw } from 'vue-router'
// layout
import Application from '@/layouts/Application.vue'
// views
import Dashboard from '@/views/dashboard/Dashboard.vue'

const route: RouteRecordRaw = {
    path: '',
    component: Application,
    children: [
        {
            path: '',
            redirect: 'app/dashboard'
        },
        {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                title: 'Dashboard',
                middleware: [],
                breadcrumbs: [],
                requiredAuth: true
            }
        }
    ]
}

export default route
