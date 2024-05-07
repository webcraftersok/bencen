"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classes from "./serviceCard.module.css";
import Button from "../Ui/Button";
import { SERVICES, SERVICES_BUTTON } from "../../utils/constants";
import { store } from "@/app/context/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScroll } from "@/app/hooks/useScroll";

interface Props {
  imageName: string;
  header: string;
  content: string;
  id: number;
}

const ServiceCard = ({
  imageName,
  header,
  content,
  id,
}: Props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const { language }: any = useContext(store);

  const pathname = usePathname();

  const scrollear = useScroll(
    id,
    100,
    "/dashboard/services",
    !pathname.includes("services")
  );

  return (
    <div
      className={`${classes.serviceCard}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classes.group}>
        <Image
          className={classes.image}
          alt={`${header}`.toLowerCase() + " icon"}
          src={`/icons/Services/${hover ? imageName + "_hover" : imageName
            }.png`}
          width={96}
          height={96}
          priority
        />
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          <div className={classes.content}>{content}</div>
        </div>
        <Button
          href={""}
          classNameButton={classes.button}
          text={SERVICES_BUTTON[language]}
          preventDefault={true}
          onClick={scrollear}
        />
      </div>
    </div>
  );
};

const ServiceCards = (): JSX.Element => {
  const { language }: any = useContext(store);

  // Slider configuration:
  const sliderSettings = {
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={`${classes.serviceCardContainer}`}>
      <div className={`${classes.showSlider} serviceCardSliderContainer`}>
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings}>
            {Object.keys(SERVICES[language]).map((key, index) => {
              const [imageName, header, content] = SERVICES[language][key];
              return (
                <div key={key}>
                  <ServiceCard
                    imageName={imageName}
                    header={header}
                    content={content}
                    id={index}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className={classes.hideSlider}>
        <ul className={classes.serviceCards}>
          {Object.keys(SERVICES[language]).map((key, index) => {
            const [imageName, header, content] = SERVICES[language][key];
            return (
              <li key={key}>
                <ServiceCard
                  imageName={imageName}
                  header={header}
                  content={content}
                  id={index}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCards;
