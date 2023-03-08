import { css } from "@emotion/react";
import { Mq } from "./limit";

export const Typography = {
  mainTitle: css`
    font-size: 40px;
    line-height: 1.4;

    @media ${Mq.sm} {
      font-size: 24px;
    }
  `,
  mainDesc: css`
    font-size: 16px;

    @media ${Mq.sm} {
      font-size: 14px;
    }
  `,

  firstSectionDesc: css`
    font-size: 28px;
    font-weight: 600;

    @media ${Mq.sm} {
      font-size: 24px;
    }
  `,

  h6: css`
    font-size: 24px;
  `,
  body1: css`
    font-size: 16px;
  `,
  body2: css`
    font-size: 14px;
  `,
  caption: css`
    font-size: 12px;
  `,
};
