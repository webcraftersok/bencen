"use client";

import React, { useContext } from "react";
import classes from "./maintenance.module.css";
import { MAINTENANCE } from "@/app/utils/constants";
import { store } from "@/app/context/context";

const Maintenance = () => {
  const { language }: any = useContext(store);
  return (
    <div className={classes.maintenanceContent}>
      <h1 className={classes.title}>{MAINTENANCE[language][0]}</h1>
      <p className={classes.description}>{MAINTENANCE[language][1]}</p>
    </div>
  );
};

export default Maintenance;
