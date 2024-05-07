import Maintenance from "@/app/components/Maintenance/Maintenance";
import classes from "./news.module.css";
import Image from "next/image";

const News = () => {
  return (
    <section className={classes.sectionContainer}>
      <div className={classes.maintenanceContainer}>
        <div className={classes.imageContainer}>
          <Image src="/img/building.jpg" fill alt={"Maintenance"} />
        </div>
        <Maintenance />
      </div>
    </section>
  );
};

export default News;
