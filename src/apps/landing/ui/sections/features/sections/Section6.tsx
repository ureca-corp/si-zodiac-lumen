import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import PreviewImage from "@/images/section3/feature6/feature6_preview.png";

import { Dimension } from "@/apps/global/theme";
import { css } from "@emotion/react";

export const FeatureSection6 = () => {
  const { getText } = useTranslatedText();

  const props: FeatureSectionTemplateProps = {
    isLocatePreviewLeft: true,
    title: getText("mainTitle"),
    desc: getText("mainDesc"),
    previewCardSrc: PreviewImage.src,
  };

  return (
    <section css={st.root}>
      <FeatureSection {...props} />
    </section>
  );
};

const useTranslatedText = () => {
  const { t } = useTranslation("landing");

  const getText = (key: string) => {
    return t(`section3.feature6.${key}`);
  };

  return {
    getText,
  };
};

const st = {
  root: css`
    position: relative;

    width: 100%;
    max-width: ${Dimension.laptopInnerWidth};
  `,
};
