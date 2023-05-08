import type { SidebarMenu } from '@/types/sidebar'
// export interface Settings { sidebar: SidebarMenu[], logo: string, icon: string }
export interface Settings {
    company_banner: string
    company_icon: string
    company_logo: string
    company_name: string
    time_zone: string
    time_format: 'h' | 'H'
    thousand_separator: ',' | ',' | ' '
    default_language: string
    date_format: string
    currency_symbol: string
    currency_position: string
    language_file?: {}
    languages?: Locale[]
}
export interface Locale {
    key: string
    title: string
}
export interface LocaleResponse { messages: {} }
