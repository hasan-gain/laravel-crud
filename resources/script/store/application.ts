import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { SidebarMenu } from '@/types/sidebar'
import { GET_SETTINGS } from '@/api/application'

export const useAppStore = defineStore('app', () => {
    // state
    const leftMenu = ref<string>('')
    const loading = ref<boolean>(false)
    const setting = reactive<{ sidebar: SidebarMenu[] }>({ sidebar: [] })

    // methods
    const init = () => {
        getSetting()
        setLeftMenu()
    }

    const setLeftMenu = (type: string = localStorage.getItem('sidebar') || 'normal') => {
        leftMenu.value = type
        localStorage.setItem('sidebar', type)
        let body = document.querySelector('body')
        if (body) {
            if (type === 'icon-only') {
                body.classList.remove('sidebar-hover-only')
                body.classList.toggle('sidebar-icon-only')
            } else if (type === 'floating') {
                body.classList.remove('sidebar-icon-only')
                body.classList.toggle('sidebar-hover-only')
                let sidebar = document.querySelector('.sidebar')
                sidebar?.querySelectorAll('.collapse.show').forEach(i => i.classList.remove('show'))
            } else if (type === 'normal') {
                body.classList.remove('sidebar-icon-only')
                body.classList.remove('sidebar-hover-only')
            }
        }
    }

    const getSetting = () => {
        GET_SETTINGS().then(res => {
            setting.sidebar = res.sidebar
        }).catch(err => { })
            .finally(() => { })
    }

    return { init, setLeftMenu, loading, leftMenu, setting }
})
