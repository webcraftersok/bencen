'use client'

import React from "react";
import classes from './unlockingpossibilites.module.css';
import { UNLOCKING_POSSIBILITES } from '../../utils/constants';

interface Props {
    
  }

const UnlockingPossibilities = (): JSX.Element => {
  return (
      <section className={classes.text}>
          <h1>{UNLOCKING_POSSIBILITES['english'][0]}</h1>
          <p>
            {UNLOCKING_POSSIBILITES['english'][1]}
            <br></br>
            <br></br>
            {UNLOCKING_POSSIBILITES['english'][2]}
            <br></br>
            <br></br>
            {UNLOCKING_POSSIBILITES['english'][3]}
          </p>
      </section>
  ) 
};
  
export default UnlockingPossibilities;