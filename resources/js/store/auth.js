import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '../tools/http'

export const useAuthStore = defineStore('auth', () => {
    // state
    const user = ref(null)
    const loading = ref(false)
    const router = useRouter()

    // methods
    const init = () => {
        getUser()
    }

    const getUser = () => {
        http.get('/me')
            .then(res => {
                user.value = res.data
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => { })
    }

    const Login = (event) => {
        loading.value = true
        let formData = new FormData(event.target)
        http.post('/login', formData).then(res => {
            if (res.statusText === 'OK') {
                localStorage.setItem('token', res.data.data.access_token)
                router.push({ name: 'dashboard' })
            }
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            loading.value = false
        })
    }

    const Logout = () => {
        console.log('logout');
    }

    const Registration = (data) => {
    }

    return { loading, user, Login, Logout, Registration, init }
})
