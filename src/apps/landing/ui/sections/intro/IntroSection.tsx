import { css } from "@emotion/react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";

import img1 from "@/images/section1/section1_img1.png";
import img2 from "@/images/section1/section1_img2.png";

import { levitateAnimation } from "@/apps/global/anim";
import { Mq } from "@/apps/global/theme/limit";
import { Typography } from "@/apps/global/theme/typography";

export const IntroSection = () => {
  const { t } = useTranslation("landing");

  const s = t("section1.introduce1");

  return (
    <section css={st.root}>
      <div css={st.inner} data-aos={"fade-up"}>
        <div css={st.textContainer}>
          <div css={[Typography.mainTitle, st.mainTitle]}>
            <Trans
              suppressHydrationWarning
              components={{ b: <b /> }}
              defaults={s}
            />
          </div>

          <h6 css={[Typography.mainDesc, st.description]}>
            {t("section1.introduce2")}
          </h6>
        </div>

        <div css={st.imageAnchor}>
          <Image src={img1} alt={"img1"} css={st.img1} width={300} />
          <Image src={img2} alt={"img2"} css={st.img2} width={500} />
        </div>
      </div>
    </section>
  );
};

const st = {
  root: css`
    position: relative;

    width: 100%;
    max-width: 1500px;
    height: 680px;

    overflow: hidden;

    @media ${Mq.sm} {
      height: 800px;
    }
  `,
  inner: css`
    position: relative;
    width: 100%;
    height: 100%;

    padding-left: 16px;
    padding-right: 16px;
  `,
  textContainer: css`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 200px;

    z-index: 2;

    @media ${Mq.sm} {
      padding-top: 70px;

      font-size: 24px;
      align-items: center;
    }
  `,
  mainTitle: css`
    white-space: pre-line;

    @media ${Mq.sm} {
      text-align: center;
    }
  `,
  description: css`
    white-space: pre-line;

    opacity: 0.8;

    @media ${Mq.sm} {
      text-align: center;
      word-break: keep-all;

      max-width: 260px;
    }
  `,

  imageAnchor: css`
    position: absolute;

    top: 32%;
    left: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    @media ${Mq.sm} {
      top: 58%;
      left: 50%;

      transform: scale(0.9);
    }
  `,
  img1: css`
    position: absolute;
    bottom: -12px;
    right: -18px;
    aspect-ratio: 1.2;

    ${levitateAnimation}
  `,
  img2: css`
    position: absolute;
    top: -160px;
    left: -120px;
    aspect-ratio: 1.2;

    animation: intro-levitate-reverse-animation 3.2s infinite alternate;
    animation-timing-function: ease-in-out;
    @keyframes intro-levitate-reverse-animation {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, 36px);
      }
    }
    animation-delay: 1.5s;
  `,
};
