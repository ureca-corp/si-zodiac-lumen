import { Drawer } from "@mui/material";
import { useState } from "react";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AppbarMenu } from "./AppbarMenu";
import { css } from "@emotion/react";

export const MobileMenuDrawerIconButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <MenuRounded />
      </IconButton>

      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <div css={st.menuWrapper}>
          <div css={st.IconBtnWrapper}>
            <IconButton edge={"end"} onClick={handleClose}>
              <CloseRounded css={st.closeIcon} />
            </IconButton>
          </div>

          <AppbarMenu />
        </div>
      </Drawer>
    </div>
  );
};

const st = {
  menuWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 20px;

    min-width: 320px;

    padding-bottom: 120px;
  `,
  IconBtnWrapper: css`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    padding: 12px 28px;
  `,
  closeIcon: css`
    font-size: 12px;
  `,
};
