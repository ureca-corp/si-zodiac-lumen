import { useCustomMediaQuery } from "../../theme/UseCustomMediaQuery";
import { LaptopAppbar } from "./LaptopAppbar";
import { MobileAppbar } from "./MobileAppbar";

export const CustomAppbar = () => {
  const { isSmall } = useCustomMediaQuery();

  return isSmall ? <MobileAppbar /> : <LaptopAppbar />;
};
