import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Locale } from '@/types/application'
import { GET_LOCALES_LIST } from '@/api/application'
import i18n from '@/i18n'
import { setI18nLanguage, loadLocaleMessages } from '@/i18n'

export const useLocaleStore = defineStore('locale', () => {
    // state
    const locale = ref<string>(localStorage.locale || 'en')
    const localesList = ref<Locale[]>([])

    const init = async () => {
        try {
            await getLocaleData()
            await setLocal(locale.value)
        } catch (err) {
            console.error(err)
        }
    }

    const getLocaleData = async () => {
        try {
            let res = await GET_LOCALES_LIST()
            localesList.value = res
        } catch (err) {
            console.error(err)
        }
    }

    const setLocal = async (l: string) => {
        try {
            loadLocaleMessages(i18n, l)
            setI18nLanguage(i18n, l)
            locale.value = l
            localStorage.locale = l
        } catch (err) {
            console.error(err)
        }
    }
    return { setLocal, localesList, locale, init }
})
