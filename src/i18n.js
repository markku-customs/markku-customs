import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    lng: 'fi-FI',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
