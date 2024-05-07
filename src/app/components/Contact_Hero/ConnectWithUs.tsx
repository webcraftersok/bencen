"use client";

import React, { useContext } from "react";
import { CONNECT_WITH_US } from "../../utils/constants";
import { store } from "@/app/context/context";

const ConnectWithUs = (): JSX.Element => {
  const { language }: any = useContext(store)

  return (
    <>
      <h1>{CONNECT_WITH_US[language][0]}</h1>
      <p>
        {CONNECT_WITH_US[language][1]}
        <br></br>
        <br></br>
        {CONNECT_WITH_US[language][2]}
        <br></br>
        <br></br>
        {CONNECT_WITH_US[language][3]}
      </p>
    </>
  );
};

export default ConnectWithUs;
