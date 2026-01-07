import React, { useState, useEffect } from "react";
import "./EndorLabs.css";
import logo from "../../../assets/ficon.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BiError } from "react-icons/bi";

const getPathLengthEstimate = (d) => 900;
const ANIM_DURATION_SECONDS = 12;
const leftEnd = 9.2;

const STOP_POINT_404_KEYPOINT = 0.815;
const FADE_OUT_KEYTIME = 0.995;

const y1_start = 103;
const y2_start = 139;
const y3_start = 319;
const y4_start = 355;
const y5_start = 391;
const y_coords = [y1_start, y2_start, y3_start, y4_start, y5_start];

const leftPaths = [
  {
    path: `M20,${y1_start} L320,${y1_start} L370,${y1_start + 37} L900,${
      y1_start + 37
    }`,
    id: 0,
  },
  {
    path: `M20,${y2_start} L220,${y2_start} L270,${y2_start + 40} L900,${
      y2_start + 40
    }`,
    id: 1,
  },
  {
    path: `M20,${y3_start} L70,${y3_start} L130,${y3_start - 70} L900,${
      y3_start - 70
    }`,
    id: 2,
  },
  {
    path: `M20,${y4_start} L170,${y4_start} L200,${y4_start - 40} L900,${
      y4_start - 40
    }`,
    id: 3,
  },
  {
    path: `M20,${y5_start} L420,${y5_start} L470,${y5_start - 35} L900,${
      y5_start - 35
    }`,
    id: 4,
  },
];

const baseLeftTriangles = [
  { pathIndex: 0, text: "Data Supply Chain" },
  { pathIndex: 0, text: "Data Supply 1-A" },
  { pathIndex: 0, text: "Data Supply 1-B" },
  { pathIndex: 1, text: "Data Receive 2-A" },
  { pathIndex: 1, text: "Data Receive 2-B" },
  { pathIndex: 2, text: "Data Delivery 3-A" },
  { pathIndex: 2, text: "Data Delivery 3-C" },
  { pathIndex: 3, text: "Data Catch 4-A" },
  { pathIndex: 4, text: "Cyber Security 5-A" },
  { pathIndex: 4, text: "Cyber Security 5-B" },
];

const rightItems = [
  {
    path: `M20,${y_coords[1]} L500,${y_coords[1]} L550,${
      y_coords[1] - 40
    } L900,${y_coords[1] - 40}`,
    text: "Success",
    color: "blue",
    begin: leftEnd + 0.5,
    mode: "icon-then-text",
    swapTime1: 0.3,
    icon: (
      <AiOutlineCheck
        style={{ width: "18px", height: "18px", color: "lime" }}
      />
    ),
  },
  {
    path: `M20,${y_coords[2] - 70} L300,${y_coords[2] - 70} L350,${
      y_coords[2] - 110
    } L900,${y_coords[2] - 110}`,
    text: "Success",
    color: "green",
    begin: leftEnd + 1.0,
    mode: "icon-then-text",
    swapTime1: 0.3,
    icon: (
      <AiOutlineCheck
        style={{ width: "18px", height: "18px", color: "lime" }}
      />
    ),
  },
  {
    path: `M20,${y_coords[2] - 70} L300,${y_coords[2] - 70} L350,${
      y_coords[2] - 30
    } L750,${y_coords[2] - 30}`,
    text: "404 Error !!",
    color: "red",
    begin: leftEnd + 1.2,
    mode: "icon-then-text",
    swapTime1: 0.1,
    icon: (
      <BiError style={{ width: "18px", height: "18px", color: "#ff0000" }} />
    ),
  },
  {
    path: `M20,${y_coords[3]} L500,${y_coords[3]} L550,${
      y_coords[3] + 40
    } L900,${y_coords[3] + 40}`,
    text: "GitHub",
    color: "white",
    begin: leftEnd + 1.5,
    mode: "icon-text-icon",
    swapTime1: 0.1,
    swapTime2: 0.9,
    icon: (
      <FaGithub style={{ width: "18px", height: "18px", color: "white" }} />
    ),
  },
];

const EndorLabs = () => {
  const [leftItemsWithMode, setLeftItemsWithMode] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const generateNewModes = () => {
    const selectedItems = [...baseLeftTriangles];
    const ANIMATION_CYCLE_TIME = ANIM_DURATION_SECONDS;

    const itemsByPath = selectedItems.reduce((acc, item) => {
      if (!acc[item.pathIndex]) acc[item.pathIndex] = [];
      acc[item.pathIndex].push(item);
      return acc;
    }, {});

    let newItems = [];

    for (const pathIndex in itemsByPath) {
      const pathItems = itemsByPath[pathIndex];
      const spacingTime = ANIMATION_CYCLE_TIME / (pathItems.length + 1);

      pathItems.forEach((item, index) => {
        const mode = Math.random() < 0.5 ? "icon-only" : "icon-to-text";
        const startDelay = spacingTime * (index + 1);

        let swapDistance = null;
        if (mode === "icon-to-text") {
          swapDistance = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
        }

        newItems.push({
          ...item,
          path: leftPaths[item.pathIndex].path,
          mode,
          swapDistance,
          startDelay,
        });
      });
    }

    setLeftItemsWithMode(newItems);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    generateNewModes();
    const intervalId = setInterval(
      generateNewModes,
      ANIM_DURATION_SECONDS * 1000
    );

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const GAP_WIDTH_PIXELS = 10;

  return (
    <div
      className="ecr-container flex flex-row justify-center items-center w-full h-[600px] lg:h-[800px] relative overflow-hidden "
      style={isSmallScreen ? { gap: `${GAP_WIDTH_PIXELS}px` } : {}}
    >
      <div
        className="
          flex justify-end items-center relative z-0 
          w-[30%] md:w-1/2 
          mx-auto 
          h-full
        "
      >
        <svg
          fill="none"
          height={isSmallScreen ? "500" : "610"}
          viewBox={isSmallScreen ? "0 0 465 500" : "0 0 930 610"}
          width="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="leftGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="10%" stopColor="#e7e41a" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ff018dfc" />
              <stop offset="100%" stopColor="#1713eb" />
            </linearGradient>
          </defs>

          {/* Small screen adjustments */}
          <g transform={isSmallScreen ? "scale(0.5) translate(0, -50)" : ""}>
            {leftPaths.map((item, i) => (
              <React.Fragment key={`path-${i}`}>
                <path d={item.path} stroke="#1f2937" strokeWidth="2" />
                <path
                  d={item.path}
                  stroke="url(#leftGradient)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="200 300 400 500"
                  strokeDashoffset="2000"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="2000"
                    to="200"
                    dur="4s"
                    repeatCount="indefinite"
                    begin={`${i * 0.8}s`}
                  />
                </path>
              </React.Fragment>
            ))}

            {leftItemsWithMode.map((item, i) => {
              const fontSize = isSmallScreen ? 10 : 12;
              const charWidth = isSmallScreen ? 6 : 7;
              const paddingX = isSmallScreen ? 4 : 6;
              const paddingY = isSmallScreen ? 6 : 8;
              const textWidth = item.text.length * charWidth;
              const iconSize = isSmallScreen ? 14 : 16;
              const TEXT_ICON_GAP = 1;
              const iconBubbleWidth = iconSize + paddingX * 2;
              const fullBubbleWidth =
                iconBubbleWidth + textWidth + TEXT_ICON_GAP;
              const bubbleHeight = fontSize + paddingY * 2;
              const animDuration = `${ANIM_DURATION_SECONDS}s`;
              const animBegin = `${item.startDelay}s`;

              let TEXT_START_KEYTIME = 0.25;
              if (
                item.mode === "icon-to-text" ||
                item.mode === "icon-then-text"
              ) {
                TEXT_START_KEYTIME = Math.min(
                  1,
                  item.swapDistance / getPathLengthEstimate(item.path)
                );
              }

              let widthValues,
                textOpacityValues,
                iconOpacityValues,
                opacityKeyTimes,
                widthKeyTimes;
              let rectXOffset, textXPos;

              if (item.mode === "icon-only") {
                widthValues = `${iconBubbleWidth};${iconBubbleWidth};${iconBubbleWidth};${iconBubbleWidth}`;
                widthKeyTimes = `0;0.2;0.8;1`;
                textOpacityValues = `0;0;0;0;0`;
                iconOpacityValues = `0;1;1;1;0`;
                opacityKeyTimes = `0;0.2;0.4;${FADE_OUT_KEYTIME};1`;
                rectXOffset = -iconBubbleWidth / 2;
                textXPos = 0;
              } else if (item.mode === "icon-to-text") {
                widthValues = `${iconBubbleWidth};${fullBubbleWidth};${fullBubbleWidth};${iconBubbleWidth}`;
                widthKeyTimes = `0;0.2;0.8;1`;
                textOpacityValues = `0;0;1;1;0`;
                iconOpacityValues = `0;1;0;1;0`;
                opacityKeyTimes = `0;0.2;${TEXT_START_KEYTIME};${FADE_OUT_KEYTIME};1`;
                rectXOffset = -iconBubbleWidth / 2;
                textXPos = iconBubbleWidth / 2 + TEXT_ICON_GAP;
              } else {
                widthValues = `${iconBubbleWidth};${fullBubbleWidth};${fullBubbleWidth};${iconBubbleWidth}`;
                widthKeyTimes = `0;0.2;0.8;1`;
                textOpacityValues = `0;1;1;0`;
                iconOpacityValues = `1;0;0;1`;
                opacityKeyTimes = `0;0.2;${TEXT_START_KEYTIME};${FADE_OUT_KEYTIME};1`;
                rectXOffset = -iconBubbleWidth / 2;
                textXPos = iconBubbleWidth / 2 + TEXT_ICON_GAP;
              }

              return (
                <g key={`bubble-${i}`}>
                  <animateMotion
                    begin={animBegin}
                    dur={animDuration}
                    path={item.path}
                    repeatCount="indefinite"
                  />
                  <rect
                    x={rectXOffset}
                    y={-bubbleHeight / 2}
                    width={iconBubbleWidth}
                    height={bubbleHeight}
                    rx={bubbleHeight / 2}
                    ry={bubbleHeight / 2}
                    fill="#161616"
                    opacity="1"
                  >
                    <animate
                      attributeName="width"
                      values={widthValues}
                      keyTimes={widthKeyTimes}
                      dur={animDuration}
                      begin={animBegin}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values={`0;1;1;0`}
                      keyTimes={`0;0.001;${FADE_OUT_KEYTIME};1`}
                      dur={animDuration}
                      begin={animBegin}
                      repeatCount="indefinite"
                    />
                  </rect>
                  <foreignObject
                    x={-iconSize / 2}
                    y={-iconSize / 2}
                    width={iconSize}
                    height={iconSize}
                  >
                    <BiError
                      style={{
                        width: iconSize,
                        height: iconSize,
                        color: "red",
                      }}
                    />
                    <animate
                      attributeName="opacity"
                      values={iconOpacityValues}
                      keyTimes={opacityKeyTimes}
                      dur={animDuration}
                      begin={animBegin}
                      repeatCount="indefinite"
                    />
                  </foreignObject>
                  <text
                    fill="white"
                    fontSize={fontSize}
                    textAnchor="start"
                    dominantBaseline="middle"
                    x={textXPos}
                    y="0"
                  >
                    <animate
                      attributeName="opacity"
                      values={textOpacityValues}
                      keyTimes={opacityKeyTimes}
                      dur={animDuration}
                      begin={animBegin}
                      repeatCount="indefinite"
                    />
                    {item.text}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div
        className={`
          absolute z-20 flex flex-col justify-center items-center text-center p-2 text-white shadow-xl 
          border border-gray-900 rounded-full 
          bg-black bg-opacity-60
          backdrop-filter backdrop-blur-lg backdrop-saturate-150
          
        
          ${
            isSmallScreen
              ? "h-[120px] w-[50px] -mt-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              : "h-[180px] w-[70px] -mt-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
          
        
          lg:h-[180px] lg:w-[70px] lg:-mt-8
          xl:h-[215px] xl:w-[80px] xl:-mt-10
          2xl:h-[280px] 2xl:w-[110px] 2xl:-mt-12
        `}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px) saturate(150%)",
          WebkitBackdropFilter: "blur(10px) saturate(150%)",
        }}
      >
        <div>
          <img
            src={logo}
            alt="Logo"
            className={`
              object-contain
              ${isSmallScreen ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"}
              md:w-[80px] md:h-[80px] 
              lg:w-[100px] lg:h-[100px]
            `}
          />
        </div>
      </div>

      <div className="flex justify-start items-center relative z-0 w-[70%] md:w-1/2 h-full">
        <svg
          fill="none"
          height={isSmallScreen ? "500" : "610"}
          viewBox={isSmallScreen ? "0 0 465 500" : "0 0 930 610"}
          width="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="rightGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5a8d5a" />
              <stop offset="50%" stopColor="#1ee21e" />
              <stop offset="100%" stopColor="#0b380b" />
            </linearGradient>
          </defs>

          {/* Small screen adjustments */}
          <g transform={isSmallScreen ? "scale(0.5) translate(0, -50)" : ""}>
            {rightItems.map((item, i) => {
              const is404 = item.text.includes("404");

              const animDuration = "12s";
              const repeatCount = "indefinite";
              const fill = "remove";

              const STOP_KEYPOINT = is404 ? STOP_POINT_404_KEYPOINT : 1;
              const keyPointsValue = is404 ? `0;${STOP_KEYPOINT}` : null;
              const keyTimesValue = is404 ? "0;1" : null;

              const fontSize = isSmallScreen ? 10 : 12;
              const charWidth = isSmallScreen ? 6 : 7;
              const paddingX = isSmallScreen ? 8 : 12;
              const paddingY = isSmallScreen ? 7 : 9;
              const textWidth = item.text.length * charWidth;
              const iconSize = isSmallScreen ? 14 : 16;
              const GAP = charWidth;
              const iconBubbleWidth = iconSize + paddingX * 2;
              const bubbleHeight = fontSize + paddingY * 2;
              const duration = "12s";
              const begin = `${item.begin}s`;
              let widthValues,
                textOpacityValues,
                iconOpacityValues,
                keyTimes,
                textX;

              const VERTICAL_LINE_PATH = `M750,${y_coords[2] - 30 - 20} L750,${
                y_coords[2] - 30 + 20
              }`;

              if (item.mode === "icon-then-text") {
                const swapTime = item.swapTime1 || 0.3;
                keyTimes = `0;${swapTime};1`;
                const finalTextBubbleWidth =
                  textWidth + iconSize + GAP + paddingX * 2;
                widthValues = `${iconBubbleWidth};${finalTextBubbleWidth};${finalTextBubbleWidth}`;
                iconOpacityValues = `1;0;0`;
                textOpacityValues = `0;1;1`;
                textX = paddingX + iconSize + GAP;
              } else if (item.mode === "icon-text-icon") {
                keyTimes = `0;${item.swapTime1};${item.swapTime2};1`;
                const middleTextBubbleWidth =
                  textWidth + iconSize + GAP + paddingX * 2;
                widthValues = `${iconBubbleWidth};${middleTextBubbleWidth};${middleTextBubbleWidth};${iconBubbleWidth}`;
                textOpacityValues = `0;1;1;0`;
                iconOpacityValues = `1;0;0;1`;
                textX = paddingX + iconSize + GAP;
              } else {
                const textBubbleWidth = textWidth + paddingX * 2;
                keyTimes = `0;${item.swapTime1};1`;
                widthValues = `${textBubbleWidth};${iconBubbleWidth};${iconBubbleWidth}`;
                textOpacityValues = `1;0;0`;
                iconOpacityValues = `0;1;1`;
                textX = paddingX;
              }

              return (
                <React.Fragment key={i}>
                  {is404 && (
                    <path
                      d={item.path}
                      stroke="gray"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                    />
                  )}

                  <path
                    d={item.path}
                    stroke="url(#rightGradient)"
                    strokeWidth="1"
                  />

                  {is404 && (
                    <path
                      d={VERTICAL_LINE_PATH}
                      stroke="gray"
                      strokeWidth="2"
                    />
                  )}

                  <g>
                    <animateMotion
                      begin={begin}
                      dur={animDuration}
                      path={item.path}
                      repeatCount={repeatCount}
                      fill={fill}
                      keyPoints={keyPointsValue}
                      keyTimes={keyTimesValue}
                    ></animateMotion>

                    <rect
                      x={0}
                      y={-bubbleHeight / 2}
                      height={bubbleHeight}
                      rx={bubbleHeight / 2}
                      ry={bubbleHeight / 2}
                      fill="#161616"
                      opacity="1"
                    >
                      <animate
                        attributeName="width"
                        values={widthValues}
                        keyTimes={keyTimes}
                        dur={duration}
                        begin={begin}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1"
                        keyTimes="0;0.001;1"
                        dur={duration}
                        begin={begin}
                        repeatCount="indefinite"
                      />
                    </rect>

                    <foreignObject
                      x={paddingX}
                      y={-iconSize / 2}
                      width={iconSize}
                      height={iconSize}
                    >
                      {item.icon}
                      <animate
                        attributeName="opacity"
                        values={iconOpacityValues}
                        keyTimes={keyTimes}
                        dur={duration}
                        begin={begin}
                        repeatCount="indefinite"
                      />
                    </foreignObject>

                    <text
                      fill="white"
                      fontSize={fontSize}
                      x={textX}
                      y={0}
                      dominantBaseline="middle"
                    >
                      <animate
                        attributeName="opacity"
                        values={textOpacityValues}
                        keyTimes={keyTimes}
                        dur={duration}
                        begin={begin}
                        repeatCount="indefinite"
                      />
                      {item.text}
                    </text>
                  </g>
                </React.Fragment>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default EndorLabs;
