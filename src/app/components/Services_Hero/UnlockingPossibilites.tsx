'use client'

import React, {useContext} from "react";
import classes from './unlockingpossibilites.module.css';
import { UNLOCKING_POSSIBILITES } from '../../utils/constants';
import { store } from "@/app/context/context";

interface Props {
    
  }

const UnlockingPossibilities = (): JSX.Element => {
  const { language }: any = useContext(store);

  return (
      <section className={classes.text}>
          <h1>{UNLOCKING_POSSIBILITES[language][0]}</h1>
          <p>
            {UNLOCKING_POSSIBILITES[language][1]}
            <br></br>
            <br></br>
            {UNLOCKING_POSSIBILITES[language][2]}
            <br></br>
            <br></br>
            {UNLOCKING_POSSIBILITES[language][3]}
          </p>
      </section>
  ) 
};
  
export default UnlockingPossibilities;