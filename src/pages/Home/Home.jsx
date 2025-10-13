import React from "react";
import Hero from "../../Components/HomeComponents/Hero/Hero";
import Code from "../../Components/HomeComponents/Code/Code";
import CyberSecurity from "../../Components/HomeComponents/CyberSecurity/CyberSecurity";
import FaceRecognition from "../../Components/HomeComponents/FaceRecognition/FaceRecognition";
import InnovationTecnology from "../../Components/HomeComponents/InnovationTecnology/InnovationTecnology";

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />

      {/* always visible */}
      <div className="relative z-10">
        <Code />
      </div>
      <div className="relative z-10">
        <CyberSecurity />
      </div>
      <div className="relative z-10">
        <FaceRecognition />
      </div>
       <div className="relative z-10">
        <InnovationTecnology />
      </div>
    </div>
  );
};

export default Home;
