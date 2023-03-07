import { css } from "@emotion/react";
import { Colors } from "../../theme";
import { AppbarMenu, LogoWithTitle } from "./el";

export const LaptopAppbar = () => {
  return (
    <div css={st.root}>
      <LogoWithTitle />

      {/* <div css={st.right}>
        <div css={st.rightMenu}>
          <a href="#">{"HOME"}</a>
          <a href="#">{"BUSINESS"}</a>
          <a href="#">{"COMPANY"}</a>
        </div>

        <LanguageSelectButton />
      </div> */}
      <AppbarMenu />
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 48px;

    border: 2px solid red;

    color: ${Colors.TextPrimary1};
  `,
  right: css`
    display: flex;
    align-items: center;
    gap: 88px;

    font-weight: 600;
    font-size: 14px;
  `,
  rightMenu: css`
    display: flex;
    align-items: center;
    gap: 44px;
  `,
};
