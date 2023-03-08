import { ShapeRadius } from "@/apps/global/theme";
import { css } from "@emotion/react";
import Image from "next/image";

type FeaturesSectionPreviewCardProps = {
  src: string;
};

export const FeaturesSectionPreviewCard = ({
  src,
}: FeaturesSectionPreviewCardProps) => {
  return (
    <div css={st.root}>
      <Image src={src} alt={"img"} fill sizes={""} />
    </div>
  );
};

const st = {
  root: css`
    position: relative;
    display: flex;

    width: 100%;
    aspect-ratio: 1.93;

    border-radius: ${ShapeRadius.Large};

    overflow: hidden;
  `,
};
