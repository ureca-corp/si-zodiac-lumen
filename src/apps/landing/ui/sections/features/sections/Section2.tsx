import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature2/feature2_item1.png";
import Card2Thumbnail from "@/images/section3/feature2/feature2_item2.png";
import PreviewImage from "@/images/section3/feature2/feature2_preview.png";
import MaterialImage from "@/images/section3/materials/feature2_material.png";
import MaterialImage2 from "@/images/section3/materials/feature2_material2.png";

import {
  levitateAnimation,
  levitateReverseAnimation,
} from "@/apps/global/anim";
import { Dimension, Mq } from "@/apps/global/theme";
import { css } from "@emotion/react";
import Image from "next/image";

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

  return (
    <section css={st.root}>
      <FeatureSection {...props} />

      <div css={st.materialWrapper1}>
        <Image
          src={MaterialImage}
          alt={"material"}
          fill
          sizes={"100"}
          data-aos={"fade-up"}
        />
      </div>

      <div css={st.materialWrapper2}>
        <Image
          src={MaterialImage2}
          alt={"material2"}
          fill
          sizes={"100"}
          data-aos={"fade-up"}
        />
      </div>
    </section>
  );
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

const st = {
  root: css`
    position: relative;

    width: 100%;
    max-width: ${Dimension.laptopInnerWidth};
  `,
  materialWrapper1: css`
    position: absolute;
    top: -80px;
    left: 5%;

    width: 150px;
    aspect-ratio: 1.153;

    ${levitateAnimation}

    @media ${Mq.md} {
      top: -160px;
      left: 16px;
    }
  `,
  materialWrapper2: css`
    position: absolute;
    bottom: 10%;
    right: 2%;

    width: 180px;
    aspect-ratio: 1;

    ${levitateReverseAnimation}

    @media ${Mq.md} {
      display: none;
    }
  `,
};
