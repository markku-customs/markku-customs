import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  'en-US': {
    translation: {
      'markku-customs': 'Markku Customs',
      links: {
        home: 'Home',
        store: 'Store',
        contact: 'Contact',
      },
      hero: {
        heading: 'We Build. <br/> You Play.',
        description:
          'We build custom high-performance PCs tailored to your needs and budget, using only the highest quality components. Contact us to get started on your perfect PC!',
        buttons: {
          store: 'View Store',
          contact: 'Contact Us',
        },
      },
      contact: {
        phone: 'Phone Number',
        email: 'Email',
        instagram: 'Instagram',
        name: 'Name',
        message: 'Message',
        'type-message': 'Type your message here...',
        send: 'Send Message',
      },
      variable: 'Variable',
      order: 'Order Now',
      'fps-performance': 'FPS Performance',
      footer: '© {{year}} Markku Customs. All rights reserved.',
    },
  },
  'fi-FI': {
    translation: {
      'markku-customs': 'Markkulan Kustomsit',
      links: {
        home: 'Koti',
        store: 'Kauppa',
        contact: 'Yhteystiedot',
      },
      hero: {
        heading: 'We Build. <br/> You Play.',
        description:
          'Rakennamme asiakkaan tarpeisiin ja budjettiin räätälöityjä, korkean suorituskyvyn tietokoneita käyttäen vain laadukkaimpia komponentteja. Ota yhteyttä aloittaaksesi täydellisen tietokoneen rakentamisen!',
        buttons: {
          store: 'Näytä Valikoima',
          contact: 'Ota Yhteyttä',
        },
      },
      contact: {
        phone: 'Puhelinnumero',
        email: 'Sähköposti',
        instagram: 'Instagram',
        name: 'Nimi',
        message: 'Viesti',
        'type-message': 'Kirjoita viestisi tähän...',
        send: 'Lähetä Viesti',
      },
      variable: 'Muuttuva',
      order: 'Tilaa Nyt',
      'fps-performance': 'FPS-toimivuus',
      footer: '© {{year}} Markku Customs. Kaikki oikeudet pidätetään.',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en-US', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
