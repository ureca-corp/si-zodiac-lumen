import { css } from "@emotion/react";
import { ExpandMoreRounded } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import Image from "next/image";
import { Languages } from "../../i18n";
import { Typography } from "../../theme/typography";
import {
  CustomDropdownMenu,
  CustomDropdownMenuItem,
  useDropdownMenu,
} from "../dropdown";

import TelegramIcon from "@/images/icons/ic_telegram.png";
import Link from "next/link";

export const ChannelSelectButton = () => {
  const { anchorEl, open, handleOpen, handleClose } = useDropdownMenu();

  const handleLanguageEnClick = () => {
    handleClose();
  };

  const handleLanguageKoClick = () => {
    handleClose();
  };

  return (
    <div>
      <ButtonBase
        css={st.root}
        disableRipple
        disableTouchRipple
        onClick={handleOpen}
      >
        <div css={st.previewLanguage}>{"CHANNELS"}</div>
        <ExpandMoreRounded fontSize={"small"} />
      </ButtonBase>

      <CustomDropdownMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div
          css={css`
            min-width: 200px;
            height: 200px; // TODO: Delete
          `}
        >
          asd
        </div>
        {/* <CustomDropdownMenuItem
          isSelected={!isLocaleEn}
          onClick={handleLanguageKoClick}
        >
          {"KOREAN"}
        </CustomDropdownMenuItem>
        <CustomDropdownMenuItem
          isSelected={isLocaleEn}
          onClick={handleLanguageEnClick}
        >
          {"ENGLISH"}
        </CustomDropdownMenuItem> */}
      </CustomDropdownMenu>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: inherit;
  `,
  previewLanguage: css`
    font-family: "Palatino";
  `,
};
