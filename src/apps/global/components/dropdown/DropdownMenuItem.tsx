import { css } from "@emotion/react";
import { MenuItem, MenuItemProps } from "@mui/material";
import { Colors } from "../../theme";

type CustomDropdownMenuItemProps = {
  isSelected?: boolean;
} & MenuItemProps;

export const CustomDropdownMenuItem = (p: CustomDropdownMenuItemProps) => {
  return (
    <MenuItem css={[st.menuItem, p.isSelected && st.menuItemSelected]} {...p} />
  );
};

const st = {
  menuItem: css`
    min-height: 32px !important;

    padding: 8px;

    border-radius: 6px;

    font-family: "Pretendard";
    font-size: 12px;
    color: ${Colors.TextPrimary3};

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
