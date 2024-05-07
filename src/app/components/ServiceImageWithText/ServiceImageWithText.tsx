"use client";

import { SERVICES_SECTION } from "@/app/utils/constants";
import classes from "./ServiceImageWithText.module.css";
import ServiceImageWithTextItem from "./ServiceImageWithTextItem";
import { useContext } from "react";
import { store } from "@/app/context/context";
import { languageRendering } from "@/app/utils";

const servicesInfo = SERVICES_SECTION;

export type infoForCardsItemProps = {
  id: number;
  alignTo: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  h2Text: string;
  paragraphText: string;
  last: boolean;
  buttonText: string;
};

type infoForCardsContainerProps = infoForCardsItemProps[];

const ServiceImageWithTextContainer = () => {
  const context = useContext(store);

  const { language }: any = context;

  const infoForCards: infoForCardsContainerProps = languageRendering(
    language,
    servicesInfo
  ).map((object: any, index: number, array: any) => {
    const { h2Text, paragraphText, imageSrc, buttonText } = object;
    return {
      id: index + 1,
      alignTo: index === 0 || index === 2 ? "left" : "right",
      imageSrc: imageSrc,
      imageAlt: h2Text,
      h2Text: h2Text,
      paragraphText: paragraphText,
      last: array.length === index + 1,
      buttonText: buttonText,
    };
  });

  return (
    <>
      <div className={classes.serviceImageWithText__container}>
        {infoForCards.map((card, index, array) => {
          const {
            id,
            alignTo,
            imageSrc,
            imageAlt,
            h2Text,
            paragraphText,
            last,
            buttonText,
          } = card;
          return (
            <ServiceImageWithTextItem
              key={new Date().getTime() + index}
              id={id}
              alignTo={alignTo}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              h2Text={h2Text}
              paragraphText={paragraphText}
              last={last}
              buttonText={buttonText}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServiceImageWithTextContainer;
