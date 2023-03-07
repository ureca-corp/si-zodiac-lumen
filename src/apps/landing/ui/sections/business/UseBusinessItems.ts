import BusinessCard1 from "@/images/section2/business-card-1.png";
import BusinessCard2 from "@/images/section2/business-card-2.png";
import BusinessCard3 from "@/images/section2/business-card-3.png";
import BusinessCard4 from "@/images/section2/business-card-4.png";
import BusinessCard5 from "@/images/section2/business-card-5.png";

import CardInnerIcon1 from "@/images/icons/ic_ticket.png";
import CardInnerIcon2 from "@/images/icons/ic_post.png";
import CardInnerIcon3 from "@/images/icons/ic_circle_star.png";
import CardInnerIcon4 from "@/images/icons/ic_credit_card.png";
import CardInnerIcon5 from "@/images/icons/ic_home.png";

export const useBusinessItems = () => {
  const items = [
    {
      bg: BusinessCard1.src,
      title: "card1Title",
      icon: CardInnerIcon1.src,
    },
    {
      bg: BusinessCard2.src,
      title: "card2Title",
      icon: CardInnerIcon2.src,
    },
    {
      bg: BusinessCard3.src,
      title: "card3Title",
      icon: CardInnerIcon3.src,
    },
    {
      bg: BusinessCard4.src,
      title: "card4Title",
      icon: CardInnerIcon4.src,
    },
    {
      bg: BusinessCard5.src,
      title: "card5Title",
      icon: CardInnerIcon5.src,
    },
  ];

  return {
    items,
  };
};
