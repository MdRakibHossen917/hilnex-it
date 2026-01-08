import React from "react";
import Hero from "../../Components/HomeComponents/Hero/Hero";
import Code from "../../Components/HomeComponents/Code/Code";
import Animation from "../../Components/HomeComponents/Animation/Animation";
import RiskDetected from "../../Components/HomeComponents/RiskDetected/RiskDetected";
import FaceRecognitionAnimation from "../../Components/HomeComponents/FaceRecognitionAnimation/FaceRecognitionAnimation";
import JoulesLabs from "../../Components/JoulesLabs/JoulesLabs";
import GlobMap from "../../Components/GlobMap/GlobMap";
import HilnexItCircle from "../../Components/HilnexItCircle/HilnexItCircle";
import BrandItemLogoCard from "../../Components/HomeComponents/BrandItemLogoCard/BrandItemLogoCard";
import DetectedUpGrade from "../../Components/MobileDevice/DetectedUpGrade";
import WorkflowSection from "../../Components/HomeComponents/WorkflowSection/WorkflowSection";
import FAQSection from "../../Components/HomeComponents/FAQSection/FAQSection";
import OurSolutionsMobile from "../../Components/HomeComponents/OurSolutionsMobile/OurSolutionsMobile";
import WorkProgessbarMobile from "../../Components/HomeComponents/WorkProgessbarMobile/WorkProgessbarMobile";
import HandMobile from "../../Components/HandMobile/HandMobile";
import VapiMobile from "../../Components/VapiMobile/VapiMobile";

const Home = () => {
  return (
    <div className="bg-black ">
      <div className="relative z-10 space-y-0">
        <Hero />
        <Code />
        <JoulesLabs />
        <DetectedUpGrade />
        <RiskDetected />
        <OurSolutionsMobile />
        <BrandItemLogoCard />
        <VapiMobile />
        <FaceRecognitionAnimation />
            
        <HilnexItCircle />
        <HandMobile />
        <WorkProgessbarMobile />
        <WorkflowSection />
        <FAQSection />
        <GlobMap />
      </div>
    </div>
  );
};

export default Home;
