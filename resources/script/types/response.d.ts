export interface IObjectResponse {
}
export interface IArrayResponse { }
export interface IArrayResponseWithPagination {
    data: any[]
    from: number
    last_page: number
    first_page_url?: string | null
    last_page_url?: string | null
    next_page_url?: string | null
    path?: string
    current_page: number
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
