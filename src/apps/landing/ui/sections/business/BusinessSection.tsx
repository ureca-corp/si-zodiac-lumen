import { Colors, Dimension, ShapeRadius } from "@/apps/global/theme";
import { Typography } from "@/apps/global/theme/typography";
import { css } from "@emotion/react";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useBusinessItems } from "./UseBusinessItems";

export const BusinessSection = () => {
  const { t } = useTranslation("landing");
  const { items: oldItems } = useBusinessItems();

  const items = oldItems.map((it) => ({
    ...it,
    title: t(`section2.${it.title}`),
  }));

  return (
    <div css={st.root}>
      <div css={st.textContainer}>
        <div css={st.sectionTitle} data-aos={"fade-up"}>
          {"BUSINESS"}
        </div>
        <p
          css={[Typography.firstSectionDesc, st.sectionDesc]}
          data-aos={"fade-up"}
        >
          {t("section2.description")}
        </p>
      </div>

      <div css={st.cardListContainer}>
        {items.map((it, index) => (
          <div key={index} css={st.itemCard(it.bg)} data-aos={"fade-up"}>
            <Image src={it.icon} alt={"icon"} width={40} height={40} />
            <div css={[Typography.h6, st.itemCardTitle]}>{it.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    padding: 0 16px 200px 16px;
  `,
  textContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
  sectionTitle: css`
    font-family: "Palatino";
    font-weight: 600;
    color: ${Colors.TextPrimary2};
  `,
  sectionDesc: css`
    color: ${Colors.TextPrimary3};

    word-break: keep-all;
    text-align: center;
  `,

  cardListContainer: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    max-width: ${Dimension.laptopInnerWidth};
    width: 100%;
  `,
  itemCard: (bg: string) => css`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 170px;

    min-height: 240px;

    padding: 20px;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: 100% 100%;

    border-radius: ${ShapeRadius.medium};
  `,
  itemCardTitle: css`
    white-space: pre-line;

    color: ${Colors.White};
  `,
};
