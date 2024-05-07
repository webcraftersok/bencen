"use client";

import React, { useEffect, useState, useContext } from "react";
import "../styles/globals.css";
import ServiceCards from "../components/Service_Card/ServiceCard";
import UnmatchedCards from "../components/Unmatched_Card/UnmatchedCard";
import classes from "./page.module.css";
import Header from "../components/Header/Header";
import Image from "next/image";
import AboutUsCard from "../components/aboutUs_Card/AboutUsCard";
import ClientCard from "../components/Clients_Card/ClientCard";
import NewsCard from "../components/News_Card/NewsCard";
import Button from "../components/Ui/Button";
import LinkButton from "../components/Ui/LinkButton";
import {
  HOME_TEXT,
  ABOUT_US,
  ABOUT_US_BUTTON,
  UNMATCHED_SERVICES_TITLE,
  UNMATCHED_SERVICES_BUTTON,
  PROJECTS,
  PROJECTS_BUTTON,
  CONTACT,
  CONTACT_BUTTON,
  NEWS,
} from "../utils/constants";
import { store } from "@/app/context/context";
import Link from "next/link";
import Maintenance from "../components/Maintenance/Maintenance";
import FirstSection from "../components/FirstSection/FirstSection";

const HomePage = () => {
  const [pantallaMediana, setPantallaMediana] = useState(false);
  const [firtAndLastImage, setFirstAndLastImage] = useState({
    width: 1200,
    heigth: 888,
  });
  const [otherImages, setOtherImages] = useState({ width: 1200, heigth: 960 });
  const context = useContext(store);
  const { language, setLanguage }: any = context;


  const handleResize = () => {
    setPantallaMediana(window.innerWidth < 768);
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
      setPantallaMediana(false);
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      setOtherImages({ width: 1200, heigth: 960 });
    } else {
      setPantallaMediana(true);
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      setOtherImages({ width: 1200, heigth: 960 });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div className={classes.homePageContainer}>
        <div className={classes.sectionsContainer}>
          <FirstSection
            firstChild={
              <>
                <div>
                  <h1>{HOME_TEXT[language][0]}</h1>
                  <p>{HOME_TEXT[language][1]}</p>
                  <p>{HOME_TEXT[language][2]}</p>
                </div>
              </>
            }
            folderName={"home"}
            secondChild={
              <div>
                <ServiceCards />
              </div>
            }
          />
          <section
            className={classes.secondSectionContainer}
            style={{ background: "white" }}
          >
            <div className={`${classes.imageContainer} ${classes.secondImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.aboutCardContainer}>
                  <AboutUsCard />
                  <div className={`${classes.aboutUsParagraphContainer} ${language === 'spanish' ? classes.aboutUsParagraphContainerInSpanish : ''}`}>
                    <h1>{ABOUT_US[language][0]}</h1>
                    <p>{ABOUT_US[language][1]}</p>
                    <p>{ABOUT_US[language][2]}</p>
                    <Button
                      href={"/dashboard/aboutUs"}
                      text={ABOUT_US_BUTTON[language]}
                      classNameContent="padding-20"
                    />
                  </div>
                </div>
              </div>
              <div className={classes.show}>
                <Image
                  width={otherImages.width}
                  height={otherImages.heigth}
                  src={"/images/FrameTwoInside.png"}
                  alt={""}
                  priority
                />
              </div>
            </div>
          </section>
          <section className={`${classes.threeSectionContainer}`}>
            <div
              className={`${classes.imageContainer} ${classes.otherImage} ${classes.paddingBottom
                } ${pantallaMediana && classes.widthOutMarginTop} ${pantallaMediana && classes.widthOutMarginTop
                }`}
            >
              <div className={`${classes.containerAbsolute} ${language === 'spanish' ? classes.threeSectionContainerInSpanish : ''}`}>
                <div className={classes.unmatchedServicesContainer}>
                  <div className={classes.unmatchedServicesParagraphContainer}>
                    <h1>{UNMATCHED_SERVICES_TITLE[language][0]}</h1>
                    <p>{UNMATCHED_SERVICES_TITLE[language][1]}</p>
                    <LinkButton
                      href="/brochure/Folleto_Bencen.pdf"
                      text={UNMATCHED_SERVICES_BUTTON[language]}
                      classNameContent="padding-10"
                      download='Folleto_Bencen.pdf'
                    />
                  </div>
                  <UnmatchedCards />
                </div>
              </div>
              <div className={classes.show}>
                <Image
                  width={1200}
                  height={960}
                  src={"/images/FrameThree.png"}
                  alt={""}
                  priority
                />
              </div>
            </div>
          </section>
          <section
            className={classes.fourSectionContainer}
            style={{ background: "white" }}
          >
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.clientCardContainer}>
                  <ClientCard />
                  <div className={classes.clientParagraphContainer}>
                    <h1>{PROJECTS[language][0]}</h1>
                    <p>{PROJECTS[language][1]}</p>
                    <p>{PROJECTS[language][2]}</p>
                    <Button
                      href={"/dashboard/projects"}
                      text={PROJECTS_BUTTON[language]}
                      classNameContent="padding-20"
                    />
                  </div>
                </div>
              </div>
              <div className={classes.show}>
                <Image
                  width={otherImages.width}
                  height={720}
                  src={"/images/FrameFour.png"}
                  alt={""}
                  priority
                />
              </div>
            </div>
          </section>
          <section className={classes.fiveSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.contactContainer}>
                  <h1>{CONTACT[language][0]}</h1>
                  <p>{CONTACT[language][1]}</p>
                  <p>{CONTACT[language][2]}</p>
                  <div className={classes.buttonContactContainer}>
                    <Button
                      href={"/dashboard/contact"}
                      text={CONTACT_BUTTON[language][0]}
                      classNameContent="padding-10"
                    />
                    {/* <Button
                      href={""}
                      text={CONTACT_BUTTON[language][1]}
                      classNameContent="padding-10"
                    /> */}
                  </div>
                </div>
              </div>
              <div className={classes.show}>
                <Image
                  width={otherImages.width + 2}
                  height={720}
                  src={"/images/FrameFive.png"}
                  alt={""}
                  priority
                />
              </div>
            </div>
          </section>
          <section
            className={classes.sixSectionContainer}
            style={{ background: "white" }}
          >
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div
                  className={`${classes.newsContainer} newsContainerSliderContainer`}
                >
                  <h1>{NEWS[language][0]}</h1>
                  {/* <NewsCard /> */}
                  <div className={classes.maintenanceContainer}>
                    <div className={classes.imageContainer}>
                      <Image src="/img/building.jpg" fill alt={"Maintenance"} />
                    </div>
                    <Maintenance />
                  </div>
                </div>
              </div>
              <div className={classes.show}>
                <Image
                  width={otherImages.width}
                  height={820}
                  src={"/images/FrameSix.png"}
                  alt={""}
                  priority
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
