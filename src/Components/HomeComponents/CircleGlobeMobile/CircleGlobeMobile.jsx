import React from 'react';
import { DotLottiePlayer } from "@dotlottie/react-player";
import bgImage from '../../../assets/Image/GlobeBGImage.png';

const CircleGlobeMobile = () => {
  return (
    <div
      className="w-full h-full flex justify-center items-center md:hidden my-2"  
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-[300px]">
        <DotLottiePlayer
          src="https://lottie.host/238469c8-ac0c-4373-9919-da86c05a9b16/TOBQJvvS4F.lottie"
          loop
          autoplay
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default CircleGlobeMobile;
