import type { ShallowRef } from 'vue'
export interface IAction {
    name: string
    fire: Function
    class?: string
    icon?: string
}
export interface ITabItem {
    name: string
    type: 'html' | 'component'
    icon?: string
    component: string | Object
    headerClass?: string
    bodyClass?: string
    in?: Function
    out?: Function
    tabTitle?: string
    props?: Object
    actions?: IAction[]
}

export interface ITabOptions {
    tabId: string
    tabs: ITabItem[]
    title?: string
    icon?: string
    class?: string
    scrollable?: boolean
    alignment?: 'horizontal' | 'vertical'
}
