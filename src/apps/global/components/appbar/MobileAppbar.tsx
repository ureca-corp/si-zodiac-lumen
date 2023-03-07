import { css } from "@emotion/react";
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px;
  `,
  right: css`
    display: flex;
    align-items: center;
    gap: 88px;

    font-weight: 600;
    font-size: 14px;
  `,
};
