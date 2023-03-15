// layout
import Application from '../layouts/Application.vue'
// views
import Posts from '../views/posts/Posts.vue'

export default {
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
