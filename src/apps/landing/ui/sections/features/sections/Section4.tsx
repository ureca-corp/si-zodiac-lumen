import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature4/feature4_item1.png";
import Card2Thumbnail from "@/images/section3/feature4/feature4_item2.png";
import Card3Thumbnail from "@/images/section3/feature4/feature4_item3.png";
import PreviewImage from "@/images/section3/feature4/feature4_preview.png";
import { css } from "@emotion/react";
import { Dimension } from "@/apps/global/theme";

export const FeatureSection4 = () => {
  const { getText } = useTranslatedText();

  const props: FeatureSectionTemplateProps = {
    isLocatePreviewLeft: true,
    title: getText("mainTitle"),
    desc: getText("mainDesc"),
    featureModels: [
      {
        thumbnailUrl: Card1Thumbnail.src,
        desc: getText("card1Desc"),
      },
      {
        thumbnailUrl: Card2Thumbnail.src,
        desc: getText("card2Desc"),
      },
      {
        thumbnailUrl: Card3Thumbnail.src,
        desc: getText("card3Desc"),
      },
    ],
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
    return t(`section3.feature4.${key}`);
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
