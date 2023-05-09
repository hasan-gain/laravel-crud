import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ILocale } from '@/types/application'
import i18n from '@/i18n'
import { setI18nLanguage } from '@/i18n'

export const useLocaleStore = defineStore('locale', () => {
    // state
    const locale = ref<string>(localStorage.locale || 'en')
    const localesList = ref<ILocale[]>([])

    const init = async () => {
        try {
            setI18nLanguage(i18n, locale.value)
        } catch (err) {
            console.error(err)
        }
    }

    const setLocalList = (list: ILocale[]) => {
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
