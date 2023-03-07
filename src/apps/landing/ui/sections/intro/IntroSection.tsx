import { css } from "@emotion/react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";

import img1 from "@/images/section1/section1_img1.png";
import img2 from "@/images/section1/section1_img2.png";
import { Mq } from "@/apps/global/theme/limit";

export const IntroSection = () => {
  const { t } = useTranslation("landing");

  const s = t("section1.introduce1");

  return (
    <section css={st.root} data-aos={"fade-up"}>
      <div css={st.inner}>
        <div css={st.textContainer}>
          <h4 css={st.mainText}>
            <Trans
              suppressHydrationWarning
              components={{ b: <b /> }}
              defaults={s}
            />
          </h4>

          <h6 css={st.description}>{t("section1.introduce2")}</h6>
        </div>

        <div css={st.imageAnchor}>
          <Image src={img1} alt={"img1"} css={st.img1} fill={false} />
          <Image src={img2} alt={"img2"} css={st.img2} fill={false} />
        </div>
      </div>
    </section>
  );
};

const st = {
  root: css`
    position: relative;

    width: 100%;
    height: 680px;

    overflow: hidden;
  `,
  inner: css`
    position: relative;
    width: 100%;
    height: 100%;

    padding-left: 10%;
    padding-right: 10%;

    @media ${Mq.sm} {
      padding-left: 16px;
      padding-right: 16px;
    }
  `,
  textContainer: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 200px;

    @media ${Mq.sm} {
      padding-top: 70px;

      font-size: 24px;
      align-items: center;
    }
  `,
  mainText: css`
    white-space: pre-line;

    font-size: 40px;
    line-height: 1.4;

    @media ${Mq.sm} {
      font-size: 24px;
      text-align: center;
    }
  `,
  description: css`
    white-space: pre-line;

    font-size: 16px;
    line-height: 1.4;

    @media ${Mq.sm} {
      font-size: 14px;
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
    width: 300px;

    animation: levitate-animation 3.5s infinite alternate;
    animation-timing-function: ease-in-out;
    @keyframes levitate-animation {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, 16px);
      }
    }
  `,
  img2: css`
    position: absolute;
    top: -160px;
    left: -120px;
    aspect-ratio: 1.2;
    width: 500px;

    animation: levitate-reverse-animation 3.5s infinite alternate;
    animation-delay: 1.5s;
    animation-timing-function: ease-in-out;
    @keyframes levitate-reverse-animation {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, 16px);
      }
    }
  `,
};
