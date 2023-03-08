import { CustomAppbar } from "@/apps/global/components";
import { Colors, Mq } from "@/apps/global/theme";
import { css } from "@emotion/react";
import {
  BusinessSection,
  FeaturesSection,
  Footer,
  IntroSection,
} from "./sections";

export const LandingView = () => {
  return (
    <div css={st.root}>
      <CustomAppbar />

      <IntroSection />
      <BusinessSection />
      <FeaturesSection />

      <Footer />
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

    color: ${Colors.TextPrimary3};

    @media ${Mq.sm} {
      background-size: 150% 100%;
    }
  `,

  tBox: css`
    width: 100%;
    height: 400px;
  `,
};
