import type {IUser } from '@/types/user'

export interface ILogin {
    token: string
    data: {
        access_token: string
        token_type: string
        user: IUser
        message: string
        success: boolean
    }
}
