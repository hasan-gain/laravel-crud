import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/types/user'

import { login, me, logout } from '@/api/auth'

export const useAuthStore = defineStore('auth', () => {
    // state
    const user = ref<null | User>(null)
    const loading = ref(false)
    const router = useRouter()

    // methods
    const init = () => {
        getUser()
    }

    const getUser = () => {
        me().then(res => {
            if (res.statusText === 'OK') {
                user.value = res.data
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => { })
    }

    const Login = (event) => {
        loading.value = true
        let formData = new FormData(event.target)
        login(formData).then(res => {
            if (res.statusText === 'OK') {
                localStorage.setItem('token', res.data.data.access_token)
            }
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            loading.value = false
        })
    }

    const Logout = () => {
        logout().then(res => {
            if (res.statusText === 'OK') {
                localStorage.removeItem('token')
                router.push({ name: 'login' })
            }
        }).catch(err => {
            console.log(err);

        }).finally(() => { })
    }

    const Registration = (data) => {
    }

    return { loading, user, Login, Logout, Registration, init }
})
