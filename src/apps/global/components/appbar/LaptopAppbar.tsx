import { css } from "@emotion/react";
import { Colors } from "../../theme";
import { AppbarMenu, LogoWithTitle } from "./el";

export const LaptopAppbar = () => {
  return (
    <div css={st.root}>
      <LogoWithTitle />
      <AppbarMenu />
    </div>
  );
};

const st = {
  root: css`
    position: sticky;
    top: 0;
    z-index: 9999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px;

    width: 100%;

    padding: 16px 48px;

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
