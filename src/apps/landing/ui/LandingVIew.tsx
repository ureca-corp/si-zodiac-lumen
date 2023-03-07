import { CustomAppbar } from "@/apps/global/components";
import { css } from "@emotion/react";

export const LandingView = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        background-color: #d9d9d9;
      `}
    >
      <CustomAppbar />
    </div>
  );
};
