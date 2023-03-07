import useMediaQuery from "@mui/material/useMediaQuery";
import { Mq } from "./limit";

export const useCustomMediaQuery = () => {
  const isExtraSmall = useMediaQuery(Mq.xs);
  const isSmall = useMediaQuery(Mq.sm);
  const isMedium = useMediaQuery(Mq.md);
  const isLarge = useMediaQuery(Mq.lg);
  const isTablet = useMediaQuery(Mq.xl);
  const isLaptop = useMediaQuery(Mq.xxl);

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isTablet,
    isLaptop,
  };
};
