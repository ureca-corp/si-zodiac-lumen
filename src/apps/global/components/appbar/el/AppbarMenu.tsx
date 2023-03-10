import { Colors } from "@/apps/global/theme";
import { Mq } from "@/apps/global/theme/limit";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { LanguageSelectButton, useLanguageState } from "../../language-select";
import { AppbarChannelsSection } from "./AppbarChannelsSection";

export const AppbarMenu = () => {
  const { isLocaleEn } = useLanguageState();

  const generalMenus = [
    {
      title: "HOME",
      link: "#",
    },
    {
      title: "BUSINESS",
      link: "#",
    },
    {
      title: "COMPANY",
      link: "#",
    },
    {
      title: "WHITE PAPER",
      link: isLocaleEn
        ? "https://undefined-281.gitbook.io/lumen-2.0/"
        : "https://undefined-281.gitbook.io/lumen-protocol-korea/",
    },
  ];

  return (
    <div css={st.root}>
      <div css={[st.menuList, st.sectionMobilePadding]}>
        {generalMenus.map((it) => (
          <a
            key={it.title + it.link}
            href={it.link}
            target={it.link !== "#" ? "_blank" : "_self"}
          >
            {it.title}
          </a>
        ))}
      </div>

      <AppbarChannelsSection />

      <div css={st.sectionMobilePadding}>
        <LanguageSelectButton />
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
    gap: 44px;

    font-weight: 600;
    font-size: 14px;

    color: ${Colors.TextPrimary1};

    overflow: auto;

    @media ${Mq.md} {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      width: 100%;
    }
  `,
  menuList: css`
    display: flex;
    align-items: center;
    gap: 44px;

    font-family: "Palatino";

    opacity: 0.8;

    @media ${Mq.md} {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;

      width: 100%;
    }
  `,
  sectionMobilePadding: css`
    @media ${Mq.md} {
      padding: 0 36px;
    }
  `,
};
