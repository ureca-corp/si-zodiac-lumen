import { css } from "@emotion/react";
import Image from "next/image";
import LogoSmall from "@/images/ic_logo_s.png";
import { Colors } from "@/apps/global/theme";

export const LogoWithTitle = () => {
  return (
    <div css={st.root}>
      <Image src={LogoSmall} alt={"logo"} width={30} priority={true} />
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
  title: css`
    font-family: "Palatino";
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;

    color: ${Colors.TextPrimary3};

    padding-top: 4px;

    opacity: 0.8;
  `,
};
