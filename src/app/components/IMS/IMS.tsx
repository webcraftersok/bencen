"use client";

import React, { useContext } from "react";
import Image from "next/image";
import classes from "./iMS.module.css";
import { IMS_TITLE, IMS_LEFT, IMS_RIGHT } from "../../utils/constants";
import { store } from "@/app/context/context";
import FadeInComponent from "../FadeInComponent/FadeInComponent";

const ISOImage = (): JSX.Element => {
  return (
    <Image
      className={classes.image}
      alt={"ISO"}
      src={"/icons/IMS/ISO.png"}
      width={112}
      height={112}
    />
  );
};

const IMS = (): JSX.Element => {
  const { language }: any = useContext(store);

  return (
    <section className={classes.section}>
      <FadeInComponent>
        <article className={classes.text}>
          <div className={`${classes.title} ${classes.text}`}>
            <h1>{IMS_TITLE[language]}</h1>
            <ISOImage />
          </div>
          <div className={`${classes.column} ${classes.text}`}>
            <p>
              {IMS_LEFT[language].map((text: number, index: string) => (
                <div key={index}>
                  {text}
                  <br />
                  <br />
                </div>
              ))}
            </p>
          </div>
          <div className={`${classes.column} ${classes.text}`}>
            <p>
              {IMS_RIGHT[language].map((text: number, index: string) => (
                <div className={classes.divBullets} key={index}>
                  {text}
                  <br />
                </div>
              ))}
            </p>
          </div>
        </article>
      </FadeInComponent>
    </section>
  );
};

export default IMS;
