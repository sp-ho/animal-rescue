import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import huTranslations from './locales/hu.json';

const resources = {
  en: { translation: enTranslations },
  hu: { translation: huTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hu', // set the default language
    fallbackLng: 'hu', // use Hungarian if the language file is missing
    interpolation: {
      escapeValue: false, // react already safely escapes by default
    },
  });

export default i18n;
