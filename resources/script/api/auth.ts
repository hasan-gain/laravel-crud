import http from '@/helper/http'
import type { Login } from '@/types/auth'
import type { User } from '@/types/user'

export const login = (formData: FormData) => {
    return http.post<Login>('/login', formData)
}

export const me = () => {
    return http.get<User>('/me')
}

export const logout = () => {
    return http.post('/logout')
}
