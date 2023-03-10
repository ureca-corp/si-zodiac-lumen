import { FeatureListItemModel } from "../el/feature_list";

export type FeatureSectionTemplateProps = {
  isLocatePreviewLeft?: boolean;
  title: string;
  desc: string;
  previewCardSrc: string;
  featureModels?: FeatureListItemModel[];
};
