import { CustomAppbar } from "@/apps/global/components";
import { css } from "@emotion/react";

export const LandingView = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        width: 100%;

        background-image: url("/images/main-background.png");
        background-repeat: no-repeat;
      `}
    >
      <CustomAppbar />

      <div
        data-aos={"fade-up"}
        css={[
          st.tBox,
          css`
            background-color: red;
          `,
        ]}
      >
        asd-1
      </div>

      <div
        data-aos={"fade-up"}
        css={[
          st.tBox,
          css`
            background-color: orange;
          `,
        ]}
      >
        asd-1
      </div>

      <div
        data-aos={"fade-up"}
        css={[
          st.tBox,
          css`
            background-color: green;
          `,
        ]}
      >
        asd-1
      </div>

      <div
        data-aos={"fade-up"}
        css={[
          st.tBox,
          css`
            background-color: blue;
          `,
        ]}
      >
        asd-1
      </div>

      <div
        css={css`
          min-height: 5200px;
        `}
      >
        asd
      </div>
    </div>
  );
};

const st = {
  tBox: css`
    width: 100%;
    height: 400px;
  `,
};
