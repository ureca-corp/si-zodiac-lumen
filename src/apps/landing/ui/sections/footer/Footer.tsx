import FooterLargeLogo from "@/images/footer/footer_large_logo.png";
import FooterSmallLogo from "@/images/footer/footer_small_logo.png";
import FooterBg from "@/images/footer/footer_bg.png";

import { css } from "@emotion/react";
import Image from "next/image";
import { Typography } from "@/apps/global/theme/typography";
import { Colors } from "@/apps/global/theme";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("landing");

  return (
    <footer css={st.root}>
      <div css={st.top}>
        <div css={st.topInner}>
          <div css={st.largeLogoWrapper}>
            <Image src={FooterLargeLogo} alt={"logo"} fill sizes={"100"} />
          </div>

          <p css={st.desc}>{t("footer.desc")}</p>
        </div>
      </div>

      <div css={st.bottom}>
        <div css={st.bottomInner}>
          <div css={st.logoWithTitle}>
            <div css={st.smallLogoWrapper}>
              <Image src={FooterSmallLogo} alt={"logo"} fill sizes={"100"} />
            </div>

            <p css={st.bottomLogoTitle}>{"ZODIAC LUMEN"}</p>
          </div>
          <p css={st.legal}>{"ⓒ LUMEN HOLDINGS CORP. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
};

const st = {
  root: css`
    color: ${Colors.White};

    width: 100%;
  `,
  top: css`
    display: flex;
    flex-direction: column;

    min-height: 500px;

    background-image: url(${FooterBg.src});
    background-repeat: no-repeat;
    background-size: cover;
  `,
  bottom: css`
    display: flex;
    justify-content: center;

    background-color: #242424;
    padding: 8px;
  `,

  topInner: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 68px;

    padding: 80px 16px;
  `,
  largeLogoWrapper: css`
    position: relative;
    width: 190px;
    aspect-ratio: 1;
  `,
  desc: css`
    ${Typography.body1}

    max-width: 660px;

    text-align: center;
    white-space: pre-line;
    word-break: keep-all;
    opacity: 0.9;
  `,

  bottomInner: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  `,
  logoWithTitle: css`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  smallLogoWrapper: css`
    position: relative;
    width: 44px;
    aspect-ratio: 1;
  `,
  bottomLogoTitle: css`
    ${Typography.body1}

    font-family: "Palatino";
    font-weight: 700;

    padding-top: 8px;
    opacity: 0.8;
  `,
  legal: css`
    ${Typography.caption}

    opacity: 0.6;
  `,
};
