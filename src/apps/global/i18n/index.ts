import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./en";
import * as ko from "./ko";

const Languages = {
  en: "en",
  ko: "ko",
};

const resources: Resource = {
  en: {
    ...en,
  },
  ko: {
    ...ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Languages.en,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export { Languages };

export default i18n;
