"use client";

import React, { useContext } from "react";
import classes from "./footer.module.css";
import NavBar from "../NavBar/NavBar";
import Icon from "../Icon/Icon";
import IconWithImages from "../IconWithImages/IconWithImages";
import Link from "next/link";
import LinkButton from "../Ui/LinkButton";
import { store } from "@/app/context/context";
import {
  TOP_FOOTER,
  // FOOTER,
  NAVBAR,
  UNMATCHED_SERVICES_BUTTON,
} from "@/app/utils/constants";

const Footer = () => {
  const context = useContext(store);
  const { language, setLanguage }: any = context;

  return (
    <>
      <div className={classes.quotation__container}>
        <div className={classes.quotation__item}>
          <div className={classes.quotation__texts}>
            <h2>{TOP_FOOTER[language][0]}</h2>
            <p>{TOP_FOOTER[language][1]}</p>
          </div>
          <LinkButton
            href="/brochure/Folleto_Bencen.pdf"
            text={UNMATCHED_SERVICES_BUTTON[language]}
            classNameContent="padding-20"
            download="Folleto_Bencen.pdf"
          />
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.footer__firstBlock}>
          <Link href="/">
            <IconWithImages name="letra" size={60} />
          </Link>
          <NavBar
            withHome={true}
            hasPipes={false}
            linkTitles={
              language === "english" ? NAVBAR.english : NAVBAR.spanish
            }
            father="footer"
          />
        </div>
        <div className={classes.footer__secondBlock}>
          {/* <NavBar
            withHome={false}
            hasPipes={true}
            linkTitles={
              language === "english" ? FOOTER.english : FOOTER.spanish
            }
          /> */}
          <div className={classes.footer__icons}>
            {/*<Icon name="facebook" size={20} />*/}
            <Icon name="instagram" size={20} />
            <Icon name="linkedin" size={20} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
