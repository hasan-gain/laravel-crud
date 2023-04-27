import type { User } from '@/types/user'

export interface Login {
    token: string
    data: {
        access_token: string
        token_type: string
        user: User
        message: string
        success: boolean
    }
}
