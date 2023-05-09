import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Locale } from '@/types/application'
import i18n from '@/i18n'
import { setI18nLanguage } from '@/i18n'

export const useLocaleStore = defineStore('locale', () => {
    // state
    const locale = ref<string>(localStorage.locale || 'en')
    const localesList = ref<Locale[]>([])

    const init = async () => {
        try {
            setI18nLanguage(i18n, locale.value)
        } catch (err) {
            console.error(err)
        }
    }

    const setLocalList = (list: Locale[]) => {
        localesList.value = list
    }

    const setLocal = async (l: string) => {
        try {
            localStorage.locale = l
            location.reload()
        } catch (err) {
            console.error(err)
        }
    }
    return { setLocal, setLocalList, localesList, locale, init }
})
