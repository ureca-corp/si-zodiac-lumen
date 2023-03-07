import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  console.log(locale);

  const { t, i18n } = useTranslation("landing");

  useEffect(() => {
    i18n.changeLanguage("ko");
  }, []);

  return <div>{t("test")}</div>;
}
