import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Settings } from '@/types/application'
import { GET_SETTINGS } from '@/api/application'
import { useLocaleStore } from '@/store/locale'

export const useAppStore = defineStore('app', () => {
    // state
    const leftMenu = ref<string>('')
    const loading = ref<boolean>(false)
    const settings = reactive<Settings>({ sidebar: [], logo: '', icon: '' })
    const localeStore = useLocaleStore()

    // methods
    const init = async () => {
        try {
            loading.value = true
            await setLeftMenu()
            await getSetting()
            await localeStore.init()
        } catch (error) {
            console.error(error)
        }
        finally {
            loading.value = false
        }
    }

    const setLeftMenu = async (type: string = localStorage.getItem('sidebar') || 'normal') => {
        try {
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
        catch (err) {
            console.error(err)
        }
    }
    const getSetting = async () => {
        try {
            let { sidebar, logo, icon } = await GET_SETTINGS().then(res => ({ ...res }))
            settings.sidebar = sidebar
            settings.logo = logo
            settings.icon = icon
        }
        catch (err) {
            console.error(err)
        }
    }
    return { init, setLeftMenu, loading, leftMenu, settings }
})
