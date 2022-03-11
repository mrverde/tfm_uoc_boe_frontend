import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es/es.json";
import en from "./locales/en/en.json";

const resources = {
  es: { translation: es },
  en: { translation: en }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
