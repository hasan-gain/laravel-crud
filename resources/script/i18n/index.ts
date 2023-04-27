// import { createI18n } from 'vue-i18n'

// const i18n = createI18n({
//     locale: 'en',
//     fallbackLocale: { 'en': ['en'] },
//     formatFallbackMessages: true,
//     legacy: false
// })

// export default i18n

import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'
import { GET_LOCALE } from '@/api/application'

export const SUPPORT_LOCALES = ['en', 'ja']

export function setupI18n(options: I18nOptions = { locale: 'en' }) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  const { messages } = await GET_LOCALE(locale).then(res => ({ ...res }))
  i18n.global.setLocaleMessage(locale, messages)
  return nextTick()
}

export default setupI18n({ locale: localStorage.locale || 'en', legacy: false })