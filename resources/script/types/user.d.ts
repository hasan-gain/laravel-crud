import type { IRole } from '@/types/role'

export interface IProfile {
    id: number
    user_id: number
    gender: string
    about: string
    address: string
    contact: string
    date_of_birth: string
}

export interface IProfilePicture {
    id: number
    full_url: string
    path: string
}

export interface IUser {
    id: 1
    first_name: string
    last_name: string
    full_name: string
    email: string
    invitation_token: string | null
    last_login_at: string | null
    profile: Profile | null
    profile_picture: ProfilePicture | null
    roles: IRole[]
    created_at: string | null
    created_by: string | null
    updated_at: string | null
    deleted_at: string | null
}
