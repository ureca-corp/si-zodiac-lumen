import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature1/feature1_item1.png";
import Card2Thumbnail from "@/images/section3/feature1/feature1_item2.png";
import Card3Thumbnail from "@/images/section3/feature1/feature1_item3.png";
import PreviewImage from "@/images/section3/feature1/feature1_preview.png";

export const FeatureSection1 = () => {
  const { getText } = useTranslatedText();

  const props: FeatureSectionTemplateProps = {
    isLocatePreviewLeft: false,
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

  return <FeatureSection {...props} />;
};

const useTranslatedText = () => {
  const { t } = useTranslation("landing");

  const getText = (key: string) => {
    return t(`section3.feature1.${key}`);
  };

  return {
    getText,
  };
};
