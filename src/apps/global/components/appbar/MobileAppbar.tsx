import { css } from "@emotion/react";
import { Colors } from "../../theme";
import { LogoWithTitle, MobileMenuDrawerIconButton } from "./el";

export const MobileAppbar = () => {
  return (
    <div css={st.root}>
      <LogoWithTitle />

      <div css={st.right}>
        <MobileMenuDrawerIconButton />
      </div>
    </div>
  );
};

const st = {
  root: css`
    position: sticky;
    top: 0;
    z-index: 9999;
    background-color: ${Colors.AppbarBg};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px 16px;

    color: ${Colors.TextPrimary1};
  `,
  right: css`
    display: flex;
    align-items: center;
    gap: 88px;

    font-weight: 600;
    font-size: 14px;
  `,
};
