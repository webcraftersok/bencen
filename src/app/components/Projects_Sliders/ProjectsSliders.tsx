import React, { useEffect, useState } from "react";
import classes from "./projectsSliders.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../Modal/Modal";
import Image from "next/legacy/image";
import Button from "../Ui/Button";
import useWindow from "@/app/hooks/useWindow";

type Hover = {
  id: number;
  isHover: boolean;
};

const CustomPrevArrow = (props: any) => (
  <div
    {...props}
    style={{
      ...props.style,
      left: "10px",
      zIndex: 1,
      cursor: "pointer",
    }}
    aria-disabled={props.currentSlide === 0 ? true : false}
  >
    {"<"}
  </div>
);

const CustomNextArrow = (props: any) => (
  <div
    {...props}
    style={{ ...props.style, right: "30px", zIndex: 1, cursor: "pointer" }}
    aria-disabled={props.currentSlide === 0 ? true : false}
  >
    {">"}
  </div>
);

const ProjectsSliders = ({ categoryData }: any): any => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    // lazyLoad: "anticipated",
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [hoverObject, setHoverObject] = useState<Hover[]>([]);
  const [activeModalId, setActiveModalId] = useState(null);
  const [projectInModal, setProjectInModal] = useState({
    id: 0,
    title: "",
    year: "",
    description: "",
    location: "",
    src: "",
  });

  const openModal = (projectId: any) => {
    setActiveModalId(projectId);
  };

  const closeModal = () => {
    setActiveModalId(null);
  };

  const handleHover = (id: number, hover: boolean) => {
    const newHoverObject = hoverObject.filter((object) => object.id !== id);
    setHoverObject([
      ...newHoverObject,
      {
        id: id,
        isHover: hover,
      },
    ]);
  };

  const { width } = useWindow();

  useEffect(() => {
    setProjectInModal(
      categoryData.find((project: any) => project.id === activeModalId)
    );
  }, [activeModalId, categoryData]);

  return (
    <>
      <div className={classes.cardsContainer}>
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings}>
            {categoryData.map((project: any, index: number) => {
              const { id, title, year, src } = project;

              const hoverCondition = hoverObject.find(
                (object) => object.id === id
              )?.isHover;

              return (
                <div key={index + 3000} className={classes.cardContainer}>
                  <div
                    className={classes.backgroundContainer}
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                    onClick={() => (width <= 600 ? openModal(id) : null)}
                  >
                    <div
                      className={`${hoverCondition && width > 600
                        ? `${classes.textContainer} ${classes.buttonInfo} `
                        : classes.textContainer
                        }`}
                      onMouseEnter={() => handleHover(id, true)}
                      onMouseLeave={() => handleHover(id, false)}
                    >
                      {hoverCondition && width > 600 ? (
                        <Button
                          href={""}
                          text={"+ Info"}
                          onClick={() => openModal(id)}
                          preventDefault={true}
                          style={{
                            padding: "10px 15px",
                            transform: "translate(-50%, -50%)",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                          }}
                        />
                      ) : (
                        <>
                          <h2>{title}</h2>
                          <p>{year}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Modal
        isOpen={activeModalId !== null}
        onClose={closeModal}
        title={projectInModal?.title}
      >
        <div
          className={classes.backgroundImageContainer}
          style={{
            position: "relative",
          }}
        >
          <Image
            src={projectInModal?.src}
            alt={projectInModal?.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            alignSelf: "flex-start",
          }}
        >
          {projectInModal?.description}
        </p>
        <p>
          <b>
            {projectInModal?.location} - {projectInModal?.year}
          </b>
        </p>
      </Modal>
    </>
  );
};

export default ProjectsSliders;
