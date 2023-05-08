import type { ShallowRef } from 'vue'

export interface TabItem {
    name: string,
    type: 'html' | 'compoent'
    component: ShallowRef | string,
    class?: string,
    in?: Function,
    out?: Function,
    tabTitle?: string,
    props?: Object
}

export interface TabOptions {
    tabId: string,
    tabs: TabItem[],
    scrollable?: boolean,
    alignment?: 'horizontal' | 'vertical'
}
