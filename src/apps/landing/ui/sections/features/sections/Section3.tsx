import { useTranslation } from "react-i18next";
import { FeatureSection, FeatureSectionTemplateProps } from "../base";

import Card1Thumbnail from "@/images/section3/feature3/feature3_item1.png";
import PreviewImage from "@/images/section3/feature3/feature3_preview.png";
import MaterialImage from "@/images/section3/materials/feature3_material.png";

import { levitateAnimation } from "@/apps/global/anim";
import { Dimension, Mq } from "@/apps/global/theme";
import { css } from "@emotion/react";
import Image from "next/image";

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

  return (
    <section css={st.root}>
      <FeatureSection {...props} />

      <div css={st.materialWrapper}>
        <Image
          src={MaterialImage}
          alt={"material"}
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
    return t(`section3.feature3.${key}`);
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
  materialWrapper: css`
    position: absolute;
    top: -140px;
    left: 36%;

    width: 110px;
    aspect-ratio: 0.917;

    ${levitateAnimation}

    @media ${Mq.md} {
      top: unset;
      bottom: 100px;
      left: unset;
      right: 24px;
    }
  `,
};
