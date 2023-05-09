import type { ShallowRef } from 'vue'

export interface ITabItem {
    name: string
    type: 'html' | 'compoent'
    icon?: string
    component: ShallowRef | string
    class?: string
    in?: Function
    out?: Function
    tabTitle?: string
    props?: Object
}

export interface ITabOptions {
    tabId: string
    tabs: TabItem[]
    scrollable?: boolean
    alignment?: 'horizontal' | 'vertical'
}
