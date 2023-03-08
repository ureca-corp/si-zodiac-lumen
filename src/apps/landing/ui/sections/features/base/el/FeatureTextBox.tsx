import { Typography } from "@/apps/global/theme/typography";
import { css } from "@emotion/react";
import { ReactNode } from "react";

type FeatureTextBoxProps = {
  title: string;
  desc: string;
  middleImage?: ReactNode;
};

export const FeatureTextBox = ({
  title,
  desc,
  middleImage,
}: FeatureTextBoxProps) => {
  return (
    <dl css={st.textContainer}>
      <dt css={st.title}>{title}</dt>
      {middleImage}
      <dd css={st.desc}>{desc}</dd>
    </dl>
  );
};

const st = {
  textContainer: css`
    display: flex;
    flex-direction: column;
    flex: 1;

    gap: 20px;
  `,
  title: css`
    ${Typography.h6}

    font-weight: 700;
    word-break: keep-all;
  `,
  desc: css`
    ${Typography.body1}

    white-space: pre-line;
    word-break: keep-all;
  `,
};
