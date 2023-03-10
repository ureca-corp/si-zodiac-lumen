import { Colors, useCustomMediaQuery } from "@/apps/global/theme";
import { css } from "@emotion/react";
import { ChannelsBox, ChannelSelectButton } from "../../channel-select";

export const AppbarChannelsSection = () => {
  const { isMedium } = useCustomMediaQuery();

  return isMedium ? (
    <div
      css={css`
        width: 100%;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;

        padding: 20px 32px 32px 32px;

        color: ${Colors.TextPrimary3};
        font-family: "Pretendard";
      `}
    >
      <ChannelsBox />
    </div>
  ) : (
    <ChannelSelectButton />
  );
};
