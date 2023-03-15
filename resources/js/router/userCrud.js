// layout
import Application from '../layouts/Application.vue'
// views
import Users from '../views/users/Users.vue'

export default {
    path: '',
    component: Application,
    children: [
        {
            path: 'users',
            name: 'users',
            component: Users,
            meta: {
                title: 'users',
                middleware: [],
                breadcrumbs: [],
                requiredAuth: true
            }
        }
    ]
}
