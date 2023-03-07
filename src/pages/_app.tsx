import "@/common/styles/globals.css";
import "@/fonts/font.css";
import "aos/dist/aos.css";

import i18n from "@/apps/global/i18n";

import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";

import AOS from "aos";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default App;
