import { Languages } from "@/apps/global/i18n";
import { useTranslation } from "react-i18next";

export const useLanguageState = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isLocaleEn = i18n.language === Languages.en;
  const languageText = isLocaleEn ? "ENG" : "KOR";

  return {
    handleLanguageChange,
    isLocaleEn,
    languageText,
  };
};
