// layout
import Application from '../layouts/Application.vue'
// views
import Dashboard from '../views/dashboard/Dashboard.vue'

export default {
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
                breadcrumbs: []
            }
        }
    ]
}
