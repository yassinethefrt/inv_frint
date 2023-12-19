import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFr from "../locals/fr.json";
import translationAR from "../locals/ar.json";

const resources = {
  fr: {
    translation: translationFr,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar",

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSupense: false,
  },
});

export default i18n;
