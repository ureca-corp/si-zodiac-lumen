import { css } from "@emotion/react";
import {
  FeatureSection1,
  FeatureSection2,
  FeatureSection3,
  FeatureSection4,
  FeatureSection5,
  FeatureSection6,
} from "./sections";

export const FeaturesSection = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <FeatureSection5 />
      <FeatureSection6 />
    </div>
  );
};
