// layout
import Auth from '../layouts/Auth.vue'
// views
import Login from '../views/auth/Login.vue'
import Registration from '../views/auth/Registration.vue'

export default {
    path: 'auth',
    component: Auth,
    children: [
        {
            path: 'login',
            name: 'dashboard',
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
