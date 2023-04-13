import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Settings } from '@/types/application'
import { GET_SETTINGS } from '@/api/application'

export const useAppStore = defineStore('app', () => {
    // state
    const leftMenu = ref<string>('')
    const loading = ref<boolean>(false)
    const loaded = ref<boolean>(false)
    const settings = reactive<Settings>({ sidebar: [], logo: '', icon: '' })

    // methods
    const init = async () => {
        loading.value = true
        getSetting()
        await setLeftMenu()
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

    const getSetting = async () => {
        try {
            let { sidebar, logo, icon } = await GET_SETTINGS().then(res => ({ ...res }))
            settings.sidebar = sidebar
            settings.logo = logo
            settings.icon = icon
            loaded.value = true
        }
        catch (err) {
            console.error(err)
        }
        finally {
            loading.value = false
        }
    }

    return { init, setLeftMenu, loading, loaded, leftMenu, settings }
})
