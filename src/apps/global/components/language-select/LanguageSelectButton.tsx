import { css } from "@emotion/react";
import { ExpandMoreRounded } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { Languages } from "../../i18n";
import { Colors } from "../../theme";
import { useLanguageSelect, useMenu } from "./hooks";

export const LanguageSelectButton = () => {
  const { anchorEl, open, handleOpen, handleClose } = useMenu();
  const { handleLanguageChange, isLocaleEn, languageText } =
    useLanguageSelect();

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
      <div css={st.root} onClick={handleOpen}>
        <div>{languageText}</div>
        <ExpandMoreRounded fontSize={"small"} />
      </div>

      <Menu
        elevation={0}
        css={st.menuContainer}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          css={[st.menuItem, !isLocaleEn && st.menuItemSelected]}
          onClick={handleLanguageKoClick}
        >
          {"KOREAN"}
        </MenuItem>
        <MenuItem
          css={[st.menuItem, isLocaleEn && st.menuItemSelected]}
          disableRipple
          onClick={handleLanguageEnClick}
        >
          {"ENGLISH"}
        </MenuItem>
      </Menu>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  `,
  menuContainer: css`
    & .MuiPaper-root {
      border: 1px solid rgba(32, 32, 32, 0.06);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      padding: 8px;
    }

    & .MuiList-root {
      padding: 0;
    }
  `,
  menuItem: css`
    min-height: 32px !important;

    padding: 8px 44px 8px 8px;

    border-radius: 6px;

    font-size: 12px;
    color: ${Colors.TextPrimary2};

    &:hover {
      background-color: inherit;
    }
  `,
  menuItemSelected: css`
    background-color: ${Colors.MenuItemSelectedBg};

    &:hover {
      background-color: ${Colors.MenuItemSelectedBg};
    }
  `,
};
