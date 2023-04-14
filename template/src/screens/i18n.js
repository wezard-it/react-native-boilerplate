/* eslint-disable @typescript-eslint/no-empty-function */
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'
import en from '../assets/locales/en.json'
import it from '../assets/locales/it.json'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const language = RNLocalize.findBestAvailableLanguage(['en', 'it'])?.languageTag
    callback(language)
  },
  init: () => {},
  cacheUserLanguage: () => {},
}

i18next.use(languageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  debug: true,
  resources: { en, it },
})

export default i18next
