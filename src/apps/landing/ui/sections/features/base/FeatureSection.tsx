import { useCustomMediaQuery } from "@/apps/global/theme";
import {
  FeatureSectionTemplate,
  FeatureSectionTemplateProps,
  MobileFeatureSectionTemplate,
} from "./template";

export const FeatureSection = (p: FeatureSectionTemplateProps) => {
  const { isMedium } = useCustomMediaQuery();

  return isMedium ? (
    <MobileFeatureSectionTemplate {...p} />
  ) : (
    <FeatureSectionTemplate {...p} />
  );
};
