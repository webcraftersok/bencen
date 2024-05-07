'use client'

import React, {useContext} from "react";
import classes from './discoverOurRoots.module.css';
import { DISCOVER_OUR_ROOTS } from '../../utils/constants';
import { store } from '@/app/context/context';

interface Props {
    
  }

const DiscoverOurRoots = (): JSX.Element => {
  const { language }: any = useContext(store)

  return (
    <section className={classes.text}>
        <h1>{DISCOVER_OUR_ROOTS[language][0]}</h1>
        <p>
          {DISCOVER_OUR_ROOTS[language][1]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS[language][2]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS[language][3]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS[language][4]}
          <br></br>
          <br></br>
          {DISCOVER_OUR_ROOTS[language][5]}
        </p>
    </section>
  ) 
};
  
export default DiscoverOurRoots;