import React from "react";
import "./RiskDetected.css";
import EndorLabs from "../EndorLabs/EndorLabs";
import riskdetected from "../../../assets/video/riskdetected.mp4";

const RiskDetected = () => {
  return (
    <div 
      className="vapi-container relative w-full h-full overflow-hidden hidden md:block"
      role="region"
      aria-label="Technology risk detection demonstration"
    >
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background technology risk detection animation"
        title="Risk Detection Technology Demo"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={riskdetected} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div 
        className="overlay absolute inset-0 z-10"
        aria-hidden="true"
      ></div>

      <div 
        className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none md:mt-11 lg:mt-18 xl:mt-20 2xl:mt-22"
        aria-live="polite"
      >
        <EndorLabs />
      </div>

      <div className="sr-only">
        Interactive demonstration showing advanced technology risk detection and security monitoring process. 
        Background animation with overlay content displaying security metrics.
      </div>
    </div>
  );
};

export default RiskDetected;