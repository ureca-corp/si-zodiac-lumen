import { Mq, ShapeRadius } from "@/apps/global/theme";
import { Typography } from "@/apps/global/theme/typography";
import { css } from "@emotion/react";
import Image from "next/image";
import { FeatureListItemModel } from "./item.model";

type FeatureListProps = {
  models: FeatureListItemModel[];
};

export const FeatureList = ({ models }: FeatureListProps) => {
  return (
    <div css={st.root}>
      {models.map((it, index) => (
        <div css={st.itemRoot} key={index}>
          <div css={st.itemThumbnail}>
            <Image src={it.thumbnailUrl} alt={it.desc} fill sizes={"100"} />
          </div>
          <p css={st.itemDesc}>{it.desc}</p>
        </div>
      ))}
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    gap: 48px;

    flex-wrap: wrap;

    @media ${Mq.sm} {
      gap: 24px;
    }
  `,
  itemRoot: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  `,
  itemThumbnail: css`
    position: relative;
    min-width: 124px;
    aspect-ratio: 1;

    border-radius: ${ShapeRadius.Huge};
    overflow: hidden;
  `,
  itemDesc: css`
    ${Typography.body2}

    font-weight: 700;
    white-space: pre-line;
    text-align: center;
  `,
};
