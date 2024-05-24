"use client";

import React, { useContext } from "react";
import Image from "next/image";
import classes from "./collaborators.module.css";
import { COLLABORATORS, CUSTOMERS } from "../../utils/constants";
import { store } from "@/app/context/context";
import FadeInComponent from "../FadeInComponent/FadeInComponent";

interface Props {
  imageName: string;
  width: number;
  height: number;
}

const Customer = ({ imageName, width, height }: Props): JSX.Element => {
  return (
    <div className={classes.customer}>
      <div className={classes.group}>
        <Image
          className={classes.image}
          alt={`${imageName}`}
          src={`/icons/Customers/${imageName}.svg`}
          width={width}
          height={height}
          priority
        />
      </div>
    </div>
  );
};

const Collaborators = (): JSX.Element => {
  const { language }: any = useContext(store);

  return (
    <section className={classes.text}>
      <FadeInComponent>
        <h1>{COLLABORATORS[language][0]}</h1>
        <p>
          {COLLABORATORS[language][1]}
          <br></br>
          <br></br>
          {COLLABORATORS[language][2]}
        </p>
        <ul className={classes.customers}>
          {Object.keys(CUSTOMERS).map((key) => {
            const [imageName, width, height] = CUSTOMERS[key];
            return (
              <li key={key}>
                <Customer imageName={imageName} width={width} height={height} />
              </li>
            );
          })}
        </ul>
      </FadeInComponent>
    </section>
  );
};

export default Collaborators;
