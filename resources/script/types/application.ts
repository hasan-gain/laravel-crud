import type { SidebarMenu } from '@/types/sidebar'
export interface Settings { sidebar: SidebarMenu[], logo: string, icon: string }
export interface Locale {
    id: string
    key: string
    title: string
    value: string
}
export interface LocaleResponse { messages: {} }