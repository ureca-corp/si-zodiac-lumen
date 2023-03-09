import { css } from "@emotion/react";
import { Menu, MenuProps } from "@mui/material";

export const CustomDropdownMenu = (p: MenuProps) => {
  return <Menu elevation={1} css={st.menuContainer} {...p} />;
};

const st = {
  menuContainer: css`
    z-index: 9999;

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
};
