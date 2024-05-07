import { IconSVGProps } from "@/app/types";
import classes from "./icon.module.css";

const HomeIcon = ({ size }: IconSVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.fillColor}
    >
      <path
        d="M16.75 6.62232V0.964286H13.625V3.57366L10.5 0.25L0.5 10.9643H3V20.25H8.625V13.1071H12.375V20.25H18V10.9643H20.5L16.75 6.62232Z"
        fill="inherit"
        fillOpacity="0.75"
      />
    </svg>
  );
};

export default HomeIcon;
