import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature5/feature5_item1.png";
import Card2Thumbnail from "@/images/section3/feature5/feature5_item2.png";
import Card3Thumbnail from "@/images/section3/feature5/feature5_item3.png";
import PreviewImage from "@/images/section3/feature5/feature5_preview.png";
import MaterialImage from "@/images/section3/materials/feature5_material.png";

import { levitateAnimation } from "@/apps/global/anim";
import { Dimension, Mq } from "@/apps/global/theme";
import { css } from "@emotion/react";
import Image from "next/image";

export const FeatureSection5 = () => {
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

  return (
    <section css={st.root}>
      <FeatureSection {...props} />

      <div css={st.materialWrapper}>
        <Image
          src={MaterialImage}
          alt={"material"}
          fill
          sizes={""}
          data-aos={"fade-up"}
        />
      </div>
    </section>
  );
};

const useTranslatedText = () => {
  const { t } = useTranslation("landing");

  const getText = (key: string) => {
    return t(`section3.feature5.${key}`);
  };

  return {
    getText,
  };
};

const st = {
  root: css`
    position: relative;

    max-width: ${Dimension.laptopInnerWidth};
  `,
  materialWrapper: css`
    position: absolute;
    top: -80px;
    left: 54%;

    width: 125px;
    aspect-ratio: 1;

    ${levitateAnimation}

    @media ${Mq.md} {
      top: -160px;
      left: unset;
      right: 24px;
    }
  `,
};
