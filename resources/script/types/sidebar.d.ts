export interface ISidebarMenu {
    id?: string
    name: string
    icon: string
    url?: string
    subMenu?: ISidebarSubMenu[]
    permission: boolean
}
export interface ISidebarSubMenu {
    name: string
    url: string
    permission: boolean
}
export interface ISidebar { }
