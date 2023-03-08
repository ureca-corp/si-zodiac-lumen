import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature3/feature3_item1.png";
import PreviewImage from "@/images/section3/feature3/feature3_preview.png";

export const FeatureSection3 = () => {
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
    ],
    previewCardSrc: PreviewImage.src,
  };

  return <FeatureSection {...props} />;
};

const useTranslatedText = () => {
  const { t } = useTranslation("landing");

  const getText = (key: string) => {
    return t(`section3.feature3.${key}`);
  };

  return {
    getText,
  };
};
