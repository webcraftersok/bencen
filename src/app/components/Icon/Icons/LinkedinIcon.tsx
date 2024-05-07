import { IconSVGProps } from "@/app/types";
import classes from "./icon.module.css";

const LinkedinIcon = ({ size }: IconSVGProps) => {
  return (
    <a href="https://www.linkedin.com/in/bencen-srl-57696220a/" target="_blank" rel="noopener noreferrer">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.fillColor}
      >
        <path
          d="M2.40374 4.81567C3.73128 4.81567 4.80747 3.73764 4.80747 2.40783C4.80747 1.07802 3.73128 0 2.40374 0C1.07619 0 0 1.07802 0 2.40783C0 3.73764 1.07619 4.81567 2.40374 4.81567Z"
          fill="inherit"
        />
        <path
          d="M7.07716 6.6402V19.9988H11.2178V13.3927C11.2178 11.6496 11.5452 9.96143 13.7028 9.96143C15.8308 9.96143 15.8572 11.9544 15.8572 13.5027V19.9999H20V12.6741C20 9.07555 19.2266 6.31006 15.0277 6.31006C13.0118 6.31006 11.6605 7.41823 11.1079 8.46698H11.0519V6.6402H7.07716ZM0.329559 6.6402H4.47677V19.9988H0.329559V6.6402Z"
          fill="inherit"
        />
      </svg>
    </a>
  );
};

export default LinkedinIcon;
