import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { GET_SETTINGS } from '@/api/application'
import { useLocaleStore } from '@/store/locale'
import { sidebarResponse } from '@/api/application'
import i18n from '@/i18n'
import { loadLocaleMessages } from '@/i18n'
import type { ISettings } from '@/types/application'
import type { ISidebarMenu } from '@/types/sidebar'

export const useAppStore = defineStore('app', () => {
    // state
    const leftMenu = ref<string>('')
    const loading = ref<boolean>(false)
    const settings = reactive<ISettings>({ company_banner: '', company_icon: '', company_logo: '', company_name: '', time_format: 'h', time_zone: '', default_language: localStorage.locale, date_format: '', currency_symbol: '', currency_position: '', thousand_separator: ',' })
    const sidebar = reactive<ISidebarMenu[]>(sidebarResponse)
    const localeStore = useLocaleStore()

    // methods
    const init = async () => {
        try {
            loading.value = true
            await getSetting()
            await localeStore.init()
            await setLeftMenu()
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
            let res = await GET_SETTINGS({ lang: localeStore.locale || 'en' }).then(res => ({ ...res.data }))
            for (let item in res) {
                if (item !== 'language_file') {
                    settings[item] = res[item]
                }
            }
            localeStore.setLocalList(res.languages || [])
            loadLocaleMessages(i18n, localeStore.locale, res.language_file)
        }
        catch (err) {
            console.error(err)
        }
    }
    return { init, setLeftMenu, loading, leftMenu, settings, sidebar }
})
