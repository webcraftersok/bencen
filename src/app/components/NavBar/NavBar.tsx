"use client";
import Link from "next/link";
import Icon from "../Icon/Icon";
import classes from "./navBar.module.css";
import { changeFolderPath, convertLinkString, navigateTo } from "@/app/utils";
import { usePathname } from "next/navigation";
import IconWithImages from "../IconWithImages/IconWithImages";

type NavBarProps = {
  withHome: boolean;
  hasPipes: boolean;
  linkTitles: string[];
  father?: string;
  withLanguage?: string;
  handleSideBar?: any;
  handleChangeLanguage?: any;
  children?: React.ReactNode;
};

const NavBar = ({
  withHome,
  hasPipes,
  linkTitles = [],
  father,
  withLanguage,
  handleSideBar,
  handleChangeLanguage,
  children,
}: NavBarProps) => {
  const pathName = usePathname();

  return (
    <div>
      <nav>
        <ul
          className={`${classes.navBar} ${
            father === "footer" && !hasPipes
              ? classes.navBarFooter
              : father === "header" && classes.navBarHeader
          }`}
        >
          {withHome && (
            <li className={`${father === "footer" && classes.navBar__home}`}>
              <Link
                onClick={handleSideBar}
                className={`${
                  pathName === "/"
                    ? classes.navBar__link && classes.active
                    : classes.navBar__link
                }`}
                href="/"
              >
                <Icon name="home" size={20} />
              </Link>
            </li>
          )}

          {linkTitles.map((link: string, index: number, array: string[]) => {
            return (
              <li key={link + index}>
                <Link
                  onClick={handleSideBar}
                  className={`font-w-500 ${
                    hasPipes && classes.navBar__linkWithPipes
                  } ${
                    `/dashboard/${changeFolderPath(link)}` === pathName
                      ? classes.navBar__link && classes.active
                      : classes.navBar__link
                  }`}
                  href={navigateTo(link)}
                >
                  {link}
                </Link>
                {hasPipes && array.length - 1 !== index && (
                  <span className={`${classes.navBar__pipes}`}> | </span>
                )}
              </li>
            );
          })}
          {withLanguage && (
            <li className={`${father === "footer" && classes.navBar__home}`}>
              <div
                className={classes.languageIconContainer}
                onClick={handleChangeLanguage}
              >
                <IconWithImages
                  name={withLanguage === "english" ? "language" : "languageEn"}
                  size={30}
                />
              </div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
