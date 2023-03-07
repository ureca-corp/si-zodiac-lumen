import { useCustomMediaQuery } from "../../theme/UseCustomMediaQuery";
import { LaptopAppbar } from "./LaptopAppbar";
import { MobileAppbar } from "./MobileAppbar";

export const CustomAppbar = () => {
  const { isMedium } = useCustomMediaQuery();

  return isMedium ? <MobileAppbar /> : <LaptopAppbar />;
};
