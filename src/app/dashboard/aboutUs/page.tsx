import DiscoverOurRoots from "../../components/About_Us_Hero/DiscoverOurRoots";
import MisionVisionValuesCards from "../../components/Mision_Vision_Values_Card/MisionVisionValuesCard";
import IMS from "../../components/IMS/IMS";
// import TeamCards from "../../components/Team_Card/TeamCard";
import Collaborators from "../../components/Collaborators/Collaborators";
import FirstSection from "@/app/components/FirstSection/FirstSection";

const AboutUs = () => {
  return (
    <>
      <FirstSection
        firstChild={<DiscoverOurRoots />}
        folderName={"about_us"}
        secondChild={<MisionVisionValuesCards />}
        textToTheRight={true}
        moreTranslate={true}
      />
      <IMS />
      {/*<TeamCards/>*/}
      <Collaborators />
    </>
  );
};

export default AboutUs;
