import React from "react";
import developmentImg from "../../assets/Image/development-circle.png";
import { FaNodeJs, FaReact, FaWordpress, FaAngular } from "react-icons/fa";
import { SiAngular, SiMagento, SiDotnet } from "react-icons/si";
import "./HilnexItCircle.css";

const HilnexItCircle = () => {

  return (
    <div className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center z-20">
      <div className="text-center text-white flex flex-col items-center justify-center md:mt-0 -mb-12 md:px-0 w-full">
        <div className="glob-map-text text-center w-full">
          <h1
            className="iceberg-regular text-white text-xl w-full uppercase border-t border-b border-white/20 p-3 
                       bg-gradient-to-r from-black via-[#181818] to-black mx-auto text-center"
          >
            Innovative IT & Web
          </h1>
        </div>
      </div>

      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12
                   w-full md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 mx-auto
                   min-h-[400px] md:min-h-[600px] lg:min-h-[680px] xl:min-h-[750px] 2xl:min-h-[820px]
                   py-8 md:py-12 px-4 md:px-0"
      >
        <div className="flex-1 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            COMPREHENSIVE WEB DEVELOPMENT SERVICES
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-6">
            We are top-class web designing and development services to help your business for improving sales and productivity of your business. We understand that different businesses have different requirements, so we offer customized web development solutions as per the unique requirements of various business niche. Our web developers are expert in al latest web development frameworks such as NodeJS, AngularJS, ReactJS, Magento, WordPress, .NET, and many others.
          </p>
          
          {/* Technology Icons Buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
              <FaNodeJs className="text-xl text-[#339933]" />
              <span>NodeJS</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
              <SiAngular className="text-xl text-[#DD0031]" />
              <span>AngularJS</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
              <FaReact className="text-xl text-[#61DAFB]" />
              <span>ReactJS</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
              <SiMagento className="text-xl text-[#EE672F]" />
              <span>Magento</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
              <FaWordpress className="text-xl text-[#21759B]" />
              <span>WordPress</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-all duration-300 text-white text-sm md:text-base">
              <SiDotnet className="text-xl text-[#512BD4]" />
              <span>.NET</span>
            </button>
          </div>
          
          {/* View More Button */}
          <button className="mt-6 md:mt-8 px-6 py-3 bg-[#ff8402] hover:bg-[#e67602] text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base w-fit">
            View More
          </button>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="relative flex flex-col items-center justify-center text-white">
            <img
              src={developmentImg}
              alt="Web Development Circle"
              className="spin-slow pointer-events-none
                         w-[250px] sm:w-[300px] md:w-[220px] lg:w-[280px] xl:w-[380px]"
            />
            <span
              className="absolute flex items-center justify-center text-center font-bold text-white
                         bg-black border-2 border-white rounded-full
                         text-lg sm:text-xs md:text-xs lg:text-lg xl:text-3xl
                         w-[7rem] md:w-[5rem] lg:w-[8rem] xl:w-[10rem] 2xl:w-[12rem]
                         h-[7rem] md:h-[5rem] lg:h-[8rem] xl:h-[10rem] 2xl:h-[12rem]"
            >
              Our Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HilnexItCircle;
