import { CustomAppbar } from "@/apps/global/components";
import { css } from "@emotion/react";
import { IntroSection } from "./sections";

export const LandingView = () => {
  return (
    <div css={st.root}>
      <CustomAppbar />

      <IntroSection />
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;

    width: 100%;

    background-image: url("/images/main-background.png");
    background-repeat: no-repeat;
    background-size: cover;
  `,

  tBox: css`
    width: 100%;
    height: 400px;
  `,
};
