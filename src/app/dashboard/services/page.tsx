import FirstSection from "@/app/components/FirstSection/FirstSection";
import UnlockingPossibilities from "../../components/Services_Hero/UnlockingPossibilites";
import ServiceImageWithText from "@/app/components/ServiceImageWithText/ServiceImageWithText";
import ServiceCards from "@/app/components/Service_Card/ServiceCard";

const Services = () => {
  return (
    <>
      <FirstSection
        firstChild={<UnlockingPossibilities />}
        folderName={"services"}
        secondChild={<ServiceCards />}
      />
      <ServiceImageWithText />
    </>
  );
};

export default Services;
