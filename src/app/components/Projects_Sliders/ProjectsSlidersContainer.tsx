import React, { useContext } from "react";
import ProjectsSliders from "@/app/components/Projects_Sliders/ProjectsSliders";
import { CATEGORIES_WITH_DATA } from "@/app/utils/constants";
import { store } from "@/app/context/context";
import classes from "./projectsSliders.module.css";

const ProjectsSlidersContainer = () => {
  const context = useContext(store);

  const { language, setLanguage }: any = context;

  return (
    <div className={classes.projectsSlidersContainer}>
      {CATEGORIES_WITH_DATA.map((category: any, index: number) => {
        return (
          <div className={classes.categoryContainer} key={2000 + index}>
            <h2
              id={index.toString()}
              className={`${classes.categoryContainer__title}`}
            >
              {category[language].category}
            </h2>
            <ProjectsSliders categoryData={category[language].data} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSlidersContainer;
