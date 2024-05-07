import Image from "next/legacy/image";
import classes from "./ServiceImageWithText.module.css";
import Button from "../Ui/Button";
import { infoForCardsItemProps } from "./ServiceImageWithText";
import { useScroll } from "@/app/hooks/useScroll";

const ServiceImageWithTextItem = ({
  id,
  alignTo,
  imageSrc,
  imageAlt,
  h2Text,
  paragraphText,
  last,
  buttonText,
}: infoForCardsItemProps) => {
  const scrollear = useScroll(id - 1, 80, "/dashboard/projects", true);

  return (
    <div
      className={`${classes.serviceImageWithText__item} ${classes[alignTo]} ${last ? classes.serviceImageWithText__item__last : ""
        }`}
      id={(id - 1).toString()}
    >
      <div
        className={`${classes.serviceImageWithText__item__image} ${classes.imageOutside}`}
      >
        <Image alt={imageAlt} src={imageSrc} layout="fill" objectFit="cover" />
      </div>
      <div className={classes.serviceImageWithText__item__info}>
        <h2>{h2Text}</h2>
        <div
          className={`${classes.serviceImageWithText__item__image} ${classes.imageInside}`}
        >
          <Image
            alt={imageAlt}
            src={imageSrc}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p>{paragraphText}</p>
        <Button
          href={""}
          text={buttonText}
          classNameContent="padding-10 padding-l-20 padding-r-20"
          preventDefault={true}
          onClick={scrollear}
        />
      </div>
    </div>
  );
};

export default ServiceImageWithTextItem;
