import DiscordIcon from "@/images/icons/ic_discord.png";
import TelegramIcon from "@/images/icons/ic_telegram.png";

import { css } from "@emotion/react";
import { MenuItem } from "@mui/material";
import Image from "next/image";

import Link from "next/link";
import { ReactNode } from "react";
import { Colors, Mq, Typography } from "../../../theme";

export const ChannelsBox = () => {
  const telegramData = {
    icon: TelegramIcon.src,
    title: "Telegram",
    global: [
      {
        title: "LUMEN OFFICIAL",
        link: "https://t.me/LUMEN_Chat_GL",
      },
      {
        title: "LUMEN COMMUNITY",
        link: "https://t.me/LUMEM_Official",
      },
    ],
    korea: [
      {
        title: "LUMEN OFFICIAL",
        link: "https://t.me/LUMEN_Official_KR",
      },
      {
        title: "LUMEN COMMUNITY",
        link: "https://t.me/Lumen_Chat_KR",
      },
    ],
  };

  const discordData = {
    icon: DiscordIcon.src,
    title: "Discord",
    items: [
      {
        title: "LUMEN OFFICIAL",
        link: "https://discord.gg/hSVEM3gk6Q",
      },
    ],
  };

  return (
    <div css={st.root}>
      <div css={st.channelSection}>
        <IconWithTitle icon={telegramData.icon} title={telegramData.title} />

        <div css={st.channelItemsContainer}>
          <div css={st.channelInnerGroup}>
            {telegramData.global.map((it, index) => (
              <Link key={index} href={it.link} target={"_blank"}>
                <ChannelMenuItem title={it.title} badgeTitle={"Global"} />
              </Link>
            ))}
          </div>

          <div css={st.channelInnerGroup}>
            {telegramData.korea.map((it, index) => (
              <Link key={index} href={it.link} target={"_blank"}>
                <ChannelMenuItem title={it.title} badgeTitle={"Korea"} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div css={st.channelSection}>
        <IconWithTitle icon={discordData.icon} title={discordData.title} />

        <div css={st.channelInnerGroup}>
          {discordData.items.map((it, index) => (
            <Link key={index} href={it.link} target={"_blank"}>
              <ChannelMenuItem title={it.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    min-width: 220px;

    padding: 4px 0;
  `,

  channelSection: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  channelItemsContainer: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  channelInnerGroup: css`
    display: flex;
    flex-direction: column;
  `,
};

// =================================================================

type ChannelMenuItemProps = {
  title: string;
  badgeTitle?: string;
};

const ChannelMenuItem = ({ title, badgeTitle }: ChannelMenuItemProps) => {
  return (
    <MenuItem
      css={css`
        border-radius: 6px;
        height: 36px;

        @media ${Mq.md} {
          width: fit-content;
          padding: 0 4px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          width: 100%;
        `}
      >
        <p
          css={css`
            ${Typography.caption}
            width: 140px;
          `}
        >
          {title}
        </p>
        {badgeTitle && <Badge>{badgeTitle}</Badge>}
      </div>
    </MenuItem>
  );
};

// =================================================================

type IconWithTitleProps = {
  icon: string;
  title: string;
};

const IconWithTitle = ({ icon, title }: IconWithTitleProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 8px;

        padding: 4px;
      `}
    >
      <Image src={icon} alt={title} width={16} height={16} />
      <p
        css={css`
          ${Typography.caption}

          font-weight: 600;

          color: ${Colors.TextPrimary4};
        `}
      >
        {title}
      </p>
    </div>
  );
};

// =================================================================

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;

        padding: 3px 6px;

        border-radius: 4px;
        background-color: ${Colors.BadgeBg};
        color: ${Colors.White};
        font-size: 11px;
      `}
    >
      {children}
    </div>
  );
};
