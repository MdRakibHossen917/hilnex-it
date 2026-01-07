import React from 'react';
import riskdetected from '../../assets/video/riskdetected.mp4';

const DetectedUpGrade = () => {
  return (
    <div className="block md:hidden w-full h-auto relative">
      <video
        className="p-4 mx-auto h-auto"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Technology upgrade demonstration video"
        title="Technology Upgrade Demo"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={riskdetected} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional: Add hidden description for screen readers */}
      <div className="sr-only">
        Demonstration video showing technology upgrade and risk detection process
      </div>
    </div>
  );
};

export default DetectedUpGrade;