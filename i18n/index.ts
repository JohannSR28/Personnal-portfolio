import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import frCommon from "./locales/fr/common.json";
import enHome from "./locales/en/home.json";
import frHome from "./locales/fr/home.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, home: enHome },
    fr: { common: frCommon, home: frHome },
  },
  lng: "fr", // langue par défaut
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React gère déjà l'échappement
  },
});

export default i18n;
