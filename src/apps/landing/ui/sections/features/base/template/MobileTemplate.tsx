import { css } from "@emotion/react";
import { FeatureList, FeaturesSectionPreviewCard, FeatureTextBox } from "../el";
import { FeatureSectionTemplateProps } from "./FeatureSectionTemplateProps";

export const MobileFeatureSectionTemplate = ({
  title,
  desc,
  featureModels,
  previewCardSrc,
}: FeatureSectionTemplateProps) => {
  return (
    <div css={st.root}>
      <div data-aos={"fade-up"}>
        <FeatureTextBox
          title={title}
          desc={desc}
          middleImage={<FeaturesSectionPreviewCard src={previewCardSrc} />}
        />
      </div>

      <div data-aos={"fade-up"}>
        <FeatureList models={featureModels} />
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    padding: 0 16px 200px 16px;
  `,
};
