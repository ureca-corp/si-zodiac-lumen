import { css } from "@emotion/react";
import { ExpandMoreRounded } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { CustomDropdownMenu, useDropdownMenu } from "../dropdown";

import { ChannelsBox } from "./el/ChannelsBox";

export const ChannelSelectButton = () => {
  const { anchorEl, open, handleOpen, handleClose } = useDropdownMenu();

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
        <ChannelsBox />
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
};
