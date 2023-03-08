import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature2/feature2_item1.png";
import Card2Thumbnail from "@/images/section3/feature2/feature2_item2.png";
import PreviewImage from "@/images/section3/feature2/feature2_preview.png";

export const FeatureSection2 = () => {
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
    ],
    previewCardSrc: PreviewImage.src,
  };

  return <FeatureSection {...props} />;
};

const useTranslatedText = () => {
  const { t } = useTranslation("landing");

  const getText = (key: string) => {
    return t(`section3.feature2.${key}`);
  };

  return {
    getText,
  };
};
