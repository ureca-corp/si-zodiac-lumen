import { css } from "@emotion/react";

export const levitateReverseAnimation = css`
  animation: levitate-reverse-animation 3.5s infinite alternate;
  animation-timing-function: ease-in-out;
  @keyframes levitate-reverse-animation {
    0% {
      transform: translate(0, 0px);
    }
    100% {
      transform: translate(0, 16px);
    }
  }
`;
