import React from "react";


import bkashMFS from "../../assets/pngImage/bKash.webp";
import nagadMFS from "../../assets/pngImage/Nagad.webp";
import upayhMFS from "../../assets/pngImage/upay.webp";
import rocketMFS from "../../assets/pngImage/rocket.webp";
import vCard from "../../assets/pngImage/Visa.webp";
import Mcard from "../../assets/pngImage/Mastercard.webp";
import brack from "../../assets/pngImage/brac-bank.webp";
import ebl from "../../assets/pngImage/ebl.webp";
import city from "../../assets/pngImage/city-bank.webp";
import basic from "../../assets/pngImage/basic-bank.webp";
import sonali from "../../assets/pngImage/Sonali-Bank.webp";
import agrani from "../../assets/pngImage/agrani-bank.webp";
import payeer from "../../assets/pngImage/Payeer.webp";


import pathao from "../../assets/Courier/172837.png";
import first from "../../assets/Courier/360_F_413209771_ZA2YI8qDK721nma8N5erkn5OIzct6hPW.jpg";
import courierHand from "../../assets/Courier/attachment_104051456.jfif";
import FirstCurrier from "../../assets/Courier/courier-logo-design_139869-1383.avif";
import redex from "../../assets/Courier/FedEx_Corporation_-_2016_Logo.svg.png";
import feedx from "../../assets/Courier/istockphoto-1138748281-612x612.jpg";
import cycle from "../../assets/Courier/360_F_413209771_ZA2YI8qDK721nma8N5erkn5OIzct6hPW.jpg";
import pathaonew from "../../assets/Courier/Pathao-Logo_Horizontal_with_TagLine.png";
import newfeedx from "../../assets/Courier/172837.png";
import pathaohome from "../../assets/Courier/FedEx_Corporation_-_2016_Logo.svg.png";
import pathaocycle from "../../assets/Courier/Pathao-Logo_Horizontal_with_TagLine.png";
import oldpathao from "../../assets/Courier/courier-logo-design_139869-1383.avif";
import dakapathao from "../../assets/Courier/istockphoto-1138748281-612x612.jpg";

const VapiMobile = () => {
  const topRowIcons = [
    { icon: bkashMFS },
    { icon: nagadMFS },
    { icon: upayhMFS },
    { icon: rocketMFS },
    { icon: vCard },
    { icon: Mcard },
    { icon: brack },
    { icon: ebl },
    { icon: city },
    { icon: basic },
    { icon: sonali },
    { icon: agrani },
    { icon: payeer },
  ];

  const bottomRowIcons = [
    { icon: pathao },
    { icon: first },
    { icon: courierHand },
    { icon: FirstCurrier },
    { icon: redex },
    { icon: feedx },
    { icon: cycle },
    { icon: pathaonew },
    { icon: newfeedx },
    { icon: pathaohome },
    { icon: pathaocycle },
    { icon: oldpathao },
    { icon: dakapathao },
  ];

  const topRowIconsDuplicated = [...topRowIcons, ...topRowIcons];
  const bottomRowIconsDuplicated = [...bottomRowIcons, ...bottomRowIcons];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right { animation-duration: 30s; }
          .icon-card { width: 28vw; height: 20vw; min-width: 100px; min-height: 70px; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .animate-scroll-left,
          .animate-scroll-right { animation-duration: 35s; }
          .icon-card { width: 140px; height: 100px; }
        }

        @media (min-width: 1025px) {
          .animate-scroll-left,
          .animate-scroll-right { animation-duration: 40s; }
          .icon-card { width: 140px; height: 100px; }
        }
      `}</style>

      <div
        className="flex flex-col gap-6 py-6 px-4"
        style={{
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(rgba(192, 184, 184, 0.2) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="text-left mb-4">
          <h1 className="text-[#dfdcdc] text-4xl md:text-3xl font-bold">
            Integrate with more than 20+ apps in a Snap.
          </h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            Seamlessly connect with your favorite tools and platforms
          </p>
        </div>

        <div className="scroll-container relative overflow-hidden">
          <div className="flex gap-4 animate-scroll-left">
            {topRowIconsDuplicated.map((item, index) => (
              <div
                key={index}
                className="icon-card flex-shrink-0 bg-white rounded shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="mb-2 max-h-12 md:max-h-16 object-contain"
                />
                <span className="text-xs text-gray-600 text-center font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-container relative overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            {bottomRowIconsDuplicated.map((item, index) => (
              <div
                key={index}
                className="icon-card flex-shrink-0 bg-white rounded shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="mb-2 max-h-12 md:max-h-16 object-contain"
                />
                <span className="text-xs text-gray-600 text-center font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VapiMobile;
