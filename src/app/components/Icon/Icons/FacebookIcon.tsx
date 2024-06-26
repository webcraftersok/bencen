import { IconSVGProps } from "@/app/types";
import classes from "./icon.module.css";

const FacebookIcon = ({ size }: IconSVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={classes.fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C4.47745 0 0 4.50448 0 10.0604C0 15.081 3.65637 19.2424 8.43784 20V12.9691H5.89759V10.0604H8.43784V7.84385C8.43784 5.32046 9.93099 3.92897 12.2142 3.92897C13.3083 3.92897 14.4544 4.12516 14.4544 4.12516V6.59926H13.1903C11.9502 6.59926 11.5622 7.37599 11.5622 8.17185V10.0584H14.3334L13.8904 12.9671H11.5622V19.998C16.3436 19.2444 20 15.082 20 10.0604C20 4.50448 15.5226 0 10 0Z"
        fill="inherit"
      />
    </svg>
  );
};

export default FacebookIcon;
