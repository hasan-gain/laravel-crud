import type { RouteRecordRaw } from 'vue-router'
// layout
import Auth from '@/layouts/Auth.vue'
// views
import Login from '@/views/auth/Login.vue'
import Registration from '@/views/auth/Registration.vue'

const route: RouteRecordRaw = {
    path: 'auth',
    component: Auth,
    children: [
        {
            path: 'login',
            name: 'login',
            component: Login,
            meta: {
                title: 'Login',
                middleware: [],
                breadcrumbs: []
            }
        },
        {
            path: 'registration',
            name: 'registration',
            component: Registration,
            meta: {
                title: 'Registration',
                middleware: [],
                breadcrumbs: []
            }
        },
    ]
}

export default route
