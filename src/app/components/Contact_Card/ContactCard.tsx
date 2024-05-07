"use client";

import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import classes from "./contactCard.module.css";
import { CONTACT_CARD } from "../../utils/constants";
import Icon from "../Icon/Icon";
import { store } from "@/app/context/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  imageName: string;
  header: string;
  content: string;
}

const ContactCard = ({ imageName, header, content }: Props): JSX.Element => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1440) {
        setWidth(280);
      } else {
        setWidth(255);
      }
    }
  }, []);

  return (
    <div
      className={classes.contactCard}
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      <div className={classes.group}>
        <div className={classes.imageGroup}>
          <Image
            className={classes.image}
            alt={`${header}`.toLowerCase()}
            src={`/icons/Contact/${imageName}.svg`}
            width={96}
            height={96}
            priority
          />
        </div>
        <div
          className={classes.text}
          style={{ width: `${(width * 13) / 15}px` }}
        >
          <div className={classes.header}>{header}</div>
          {content ? (
            <pre className={classes.content}>{content}</pre>
          ) : (
            <div className={classes.footer__icons}>
              {/*<Icon name="facebook" size={20} />*/}
              <Icon name="instagram" size={20} />
              <Icon name="linkedin" size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactCardSlider = (): JSX.Element => {
  const { language }: any = useContext(store);
  const sliderSettings = {
    responsive: [
      {
        breakpoint: 1100,
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
    <div className={classes.sliderContainer}>
      <Slider {...sliderSettings}>
        {Object.keys(CONTACT_CARD[language]).map((key) => {
          const [imageName, header, content] = CONTACT_CARD[language][key];
          return (
            <div key={key}>
              <ContactCard
                imageName={imageName}
                header={header}
                content={content}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const ContactCards = (): JSX.Element => {
  const { language }: any = useContext(store);

  const renderContactCards = () => {
    return Object.keys(CONTACT_CARD[language]).map((key) => {
      const [imageName, header, content] = CONTACT_CARD[language][key];
      return (
        <li key={key}>
          <ContactCard
            imageName={imageName}
            header={header}
            content={content}
          />
        </li>
      );
    });
  };

  return (
    <>
      <div className={classes.showSlider}>
        <ul className={classes.contactCards}>{renderContactCards()}</ul>
      </div>

      <div className={`${classes.serviceCardContainer}`}>
        <div className={`${classes.hideSlider} serviceCardSliderContainer`}>
          <div className={classes.sliderContainer}>
            <ContactCardSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCards;
