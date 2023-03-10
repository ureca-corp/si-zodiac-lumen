import { css } from "@emotion/react";
import { ExpandMoreRounded } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { Languages } from "../../i18n";
import {
  CustomDropdownMenu,
  CustomDropdownMenuItem,
  useDropdownMenu,
} from "../dropdown";
import { useLanguageState } from "./hooks";

export const LanguageSelectButton = () => {
  const { anchorEl, open, handleOpen, handleClose } = useDropdownMenu();
  const { handleLanguageChange, isLocaleEn, languageText } = useLanguageState();

  const handleLanguageEnClick = () => {
    handleLanguageChange(Languages.en);
    handleClose();
  };

  const handleLanguageKoClick = () => {
    handleLanguageChange(Languages.ko);
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
        <div css={st.previewLanguage}>{languageText}</div>
        <ExpandMoreRounded fontSize={"small"} />
      </ButtonBase>

      <CustomDropdownMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div css={st.menuInner}>
          <CustomDropdownMenuItem
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
          </CustomDropdownMenuItem>
        </div>
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
    opacity: 0.8;
  `,
  previewLanguage: css`
    font-family: "Palatino";
  `,
  menuInner: css`
    min-width: 120px;
  `,
};
