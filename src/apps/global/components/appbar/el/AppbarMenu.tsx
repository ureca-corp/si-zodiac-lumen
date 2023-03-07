import { Colors } from "@/apps/global/theme";
import { Mq } from "@/apps/global/theme/limit";
import { css } from "@emotion/react";
import { LanguageSelectButton } from "../../language-select";

export const AppbarMenu = () => {
  return (
    <div css={st.root}>
      <div css={st.menuList}>
        <a href="#">{"HOME"}</a>
        <a href="#">{"BUSINESS"}</a>
        <a href="#">{"COMPANY"}</a>
      </div>

      <LanguageSelectButton />
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
    gap: 88px;

    font-weight: 600;
    font-size: 14px;

    color: ${Colors.TextPrimary1};

    @media ${Mq.sm} {
      flex-direction: column;
      align-items: flex-start;
      gap: 36px;
    }
  `,
  menuList: css`
    display: flex;
    align-items: center;
    gap: 44px;

    font-family: "Palatino";

    @media ${Mq.sm} {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }
  `,
};
