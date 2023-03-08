import { Dimension } from "@/apps/global/theme";
import { css } from "@emotion/react";
import { FeaturesSectionPreviewCard, FeatureTextBox } from "../el";
import { FeatureList } from "../el/feature_list";
import { FeatureSectionTemplateProps } from "./FeatureSectionTemplateProps";

export const FeatureSectionTemplate = ({
  isLocatePreviewLeft = false,
  title,
  desc,
  featureModels,
  previewCardSrc,
}: FeatureSectionTemplateProps) => {
  return (
    <div css={st.root} data-aos={"fade-up"}>
      <div
        css={[
          st.inner,
          isLocatePreviewLeft &&
            css`
              flex-direction: row-reverse;
            `,
        ]}
      >
        <div css={st.innerLeft}>
          <FeatureTextBox title={title} desc={desc} />

          <div css={st.cardsWrapper}>
            <FeatureList models={featureModels} />
          </div>
        </div>

        <div css={st.innerRight}>
          <FeaturesSectionPreviewCard src={previewCardSrc} />
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    justify-content: center;

    padding: 0 16px 200px 16px;
  `,
  inner: css`
    display: flex;
    justify-content: space-between;
    gap: 48px;

    width: 100%;
    max-width: ${Dimension.laptopInnerWidth};
  `,
  innerLeft: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  innerRight: css`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-top: 100px;
  `,
  cardsWrapper: css`
    margin-top: 64px;
  `,
};
