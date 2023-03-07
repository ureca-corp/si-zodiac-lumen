import { css } from "@emotion/react";
import Image from "next/image";
import LogoSmall from "@/images/ic_logo_s.png";

export const LogoWithTitle = () => {
  return (
    <div css={st.root}>
      <div css={st.logoWrapper}>
        <Image src={LogoSmall} alt={"logo"} fill />
      </div>
      <h2 css={st.title}>{"ZODIAC LUMEN"}</h2>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  logoWrapper: css`
    position: relative;
    width: 30px;
    height: 30px;
    overflow: hidden;
  `,
  title: css`
    font-weight: bold;
    font-size: 18px;
  `,
};
