"use client";

// import React, { useEffect, useState } from "react";
import ConnectWithUs from "../../components/Contact_Hero/ConnectWithUs";
import ContactCards from "../../components/Contact_Card/ContactCard";
import TabBar from "../../components/Tab_Bar/TabBar";
import classes from "./page.module.css";
// import Image from "next/image";
import FirstSection from "@/app/components/FirstSection/FirstSection";
import FadeInComponent from "@/app/components/FadeInComponent/FadeInComponent";

const Contact = () => {
  return (
    <div className={classes.page}>
      <FirstSection
        firstChild={<ConnectWithUs />}
        folderName={"contact"}
        secondChild={<ContactCards />}
      />
      <div className={classes.secondSection}>
        <section className={classes.tab}>
          <FadeInComponent>
            <TabBar />
          </FadeInComponent>
        </section>
      </div>
    </div>
  );
};

export default Contact;
