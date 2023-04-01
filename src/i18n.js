import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "markku-customs": "Markku Customs",
      "home":"Home",
      "store":"Store",
      "contact":"Contact",
      hero: {
        heading: "We Build. <br/> You Play.",
        description:
          "We build custom high-performance PCs tailored to your needs and budget, using only the highest quality components. Contact us to get started on your perfect PC!",
        buttons: {
          store: "View Store",
          contact: "Contact Us",
        },
      },
      footer: "© {{year}} Markku Customs. All rights reserved.",
    },
  },
  fi: {
    translation: {
      "markku-customs": "Markkulan Kustomsit",
      "home":"Koti",
      "store":"Kauppa",
      "contact":"Yhteyshenkilö",
      hero: {
        heading: "Me Rakennamme. <br/> Te Pelaatte.",
        description:
          "Rakennamme asiakkaan tarpeisiin ja budjettiin räätälöityjä, korkean suorituskyvyn tietokoneita käyttäen vain laadukkaimpia komponentteja. Ota yhteyttä aloittaaksesi täydellisen tietokoneen rakentamisen!",
        buttons: {
          store: "Näytä Valikoima",
          contact: "Ota Yhteyttä",
        },
      },
      footer: "© {{year}} Markku Customs. Kaikki oikeudet pidätetään.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;