import { ShapeRadius } from "@/apps/global/theme";
import { css } from "@emotion/react";
import Image from "next/image";

type FeaturesSectionPreviewCardProps = {
  src: string;
  isCircularBorder?: boolean;
};

export const FeaturesSectionPreviewCard = ({
  src,
  isCircularBorder = true,
}: FeaturesSectionPreviewCardProps) => {
  return (
    <div
      css={[
        st.root,
        isCircularBorder &&
          css`
            border-radius: ${ShapeRadius.Large};
          `,
      ]}
    >
      <Image src={src} alt={"img"} fill sizes={"100"} />
    </div>
  );
};

const st = {
  root: css`
    position: relative;
    display: flex;

    width: 100%;
    aspect-ratio: 1.93;

    overflow: hidden;
  `,
};
