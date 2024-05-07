"use client";

import { IconProps } from "@/app/types";
import FacebookIcon from "./Icons/FacebookIcon";
import HomeIcon from "./Icons/HomeIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import LinkedinIconBlue from "./Icons/LinkedinIconBlue";
import LogoIcon from "./Icons/LogoIcon";
import HamburguerIcon from "./Icons/HamburguerIcon";

const Icons = (name: string, size: number) => {
  switch (name) {
    case "home":
      return <HomeIcon size={size} />;
    case "facebook":
      return <FacebookIcon size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    //case "linkedinBlue":
      //return <LinkedinIconBlue size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "logo":
      return <LogoIcon size={size} />;
    case "hamburguer":
      return <HamburguerIcon size={size} />;
    default:
      return <HomeIcon size={size} />;
  }
};

/**
 * @param name Icon Name
 * @param size Icon Size
 * @param onClick On-Click Function to execute
 */

export default function Icon({ name, size = 20, onClick }: IconProps) {

  return Icons(name, size);
}
