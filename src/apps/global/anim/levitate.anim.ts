import { css } from "@emotion/react";

export const levitateAnimation = css`
  animation: levitate-animation 3.5s infinite alternate;
  animation-timing-function: ease-in-out;
  @keyframes levitate-animation {
    0% {
      transform: translate(0, 0px);
    }
    100% {
      transform: translate(0, 16px);
    }
  }
`;
