export interface IRole {
    id: number,
    name: string,
    pivot: {
        role_id: number
        user_id: number
    }
}
