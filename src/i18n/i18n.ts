import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'i18n/languages/en.json';
import es from 'i18n/languages/es.json';

// Hardcoded for now, but we could use the device language in the future.
const deviceLanguage = 'en';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  keySeparator: '.',
  nsSeparator: ':',
});

export const getLanguage = () => {
  return i18n.language;
};

export default i18n;
