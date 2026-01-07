import React from "react";
import {
  FaPen,
  FaSmile,
  FaWrench,
  FaSyncAlt,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import hilfav from "../../assets/fav/FaviconBlack.svg";

const HandMobile = () => {
  const pathData =
    "M95,23.5 C95,23.5 95,102.97 95,102.97 C95,114.93 89.647,126.26 80.41,133.86 C80.41,133.86 0,200 0,200";

  const VIEWBOX = "0 0 600 600";
  const CENTER_X = 300;
  const duration = "3s";

  const SvgIcon = ({ x, y, icon: Icon }) => (
    <foreignObject x={x - 20} y={y - 20} width="40" height="40">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Icon className="text-black text-lg" />
      </div>
    </foreignObject>
  );

  const AnimatedPath = ({ id, transform, icon }) => (
    <g transform={transform}>
      <path
        id={id}
        d={pathData}
        stroke="rgb(92, 80, 64)"
        strokeOpacity="0.6"
        strokeWidth="3"
        fill="none"
      />

      <circle r="3" fill="#ff8402">
        <animateMotion
          dur={duration}
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          values="0;1;0"
          calcMode="linear"
        >
          <mpath href={`#${id}`} />
        </animateMotion>
      </circle>

      {icon}
    </g>
  );

  return (
    <>
      <style>{`
     .glow-border-bottom {
    border-bottom: 2px solid transparent;
   
    border-image: linear-gradient(
        to right, 
        transparent 5%, 
        #ff8402 25%,    
        white 50%,      
        #ff8402 75%,    
        transparent 95%
    ); 
    border-image-slice: 1;
    display: inline-block;

    
    
   
}
      `}</style>

      <div>
        <div className="border-white/20 border-t"></div>

        <div className="block md:hidden text-center mt-6">
          <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
            <span className="iceberg-regular glow-border-bottom block w-full text-center">
              The Central Solution Hub
            </span>
          </h1>

          <p className="text-base font-roboto text-gray-300">
            One Platform, Total Solutions
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[450px] bg-black overflow-hidden md:hidden mb-3">
          <svg
            width="100%"
            height="100%"
            viewBox={VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <AnimatedPath
              id="pathTopRight"
              transform="translate(330,0) scale(1.3)"
              icon={<SvgIcon x={97} y={30} icon={FaSmile} />}
            />
            <AnimatedPath
              id="pathTopLeft"
              transform="translate(270,0) scale(-1.3,1.3)"
              icon={<SvgIcon x={97} y={30} icon={FaPen} />}
            />
            <AnimatedPath
              id="pathBottomRight"
              transform="translate(330,600) scale(1.3,-1.3)"
              icon={<SvgIcon x={97} y={30} icon={FaSyncAlt} />}
            />
            <AnimatedPath
              id="pathBottomLeft"
              transform="translate(270,600) scale(-1.3,-1.3)"
              icon={<SvgIcon x={97} y={30} icon={FaWrench} />}
            />

            <path
              id="topVertical"
              d={`M ${CENTER_X} 80 L ${CENTER_X} 270`}
              stroke="rgb(92, 80, 64)"
              strokeOpacity="0.8"
              strokeWidth="3"
              fill="none"
            />
            <circle r="4" fill="#ff8402">
              <animateMotion
                dur={duration}
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
                values="0;1;0"
                calcMode="linear"
              >
                <mpath href="#topVertical" />
              </animateMotion>
            </circle>
            <SvgIcon x={CENTER_X} y={90} icon={FaStar} />

            <path
              id="bottomVertical"
              d={`M ${CENTER_X} 530 L ${CENTER_X} 340`}
              stroke="rgb(92, 80, 64)"
              strokeOpacity="0.8"
              strokeWidth="3"
              fill="none"
            />
            <circle r="4" fill="#ff8402">
              <animateMotion
                dur={duration}
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
                values="0;1;0"
                calcMode="linear"
              >
                <mpath href="#bottomVertical" />
              </animateMotion>
            </circle>
            <SvgIcon x={CENTER_X} y={530} icon={FaGlobe} />
          </svg>

          <div className="relative z-30 bg-white w-20 h-20 rounded-xl flex items-center justify-center shadow-lg">
            <img src={hilfav} alt="Logo" className="w-12 h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HandMobile;
