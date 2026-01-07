import React, { useState, useEffect } from "react";
import "./EndorLabs.css";

// Icons
import { FaGithub } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BiError } from "react-icons/bi";

// Utility function to estimate path length (approx)
const getPathLengthEstimate = (d) => 900;
const ANIM_DURATION_SECONDS = 12;

// Left-side path Y positions
const y1_start = 103;
const y2_start = 139;
const y3_start = 319;
const y4_start = 355;
const y5_start = 391;

// Left paths
const leftPaths = [
  { path: `M20,${y1_start} L320,${y1_start} L370,${y1_start + 37} L900,${y1_start + 37}`, id: 0 },
  { path: `M20,${y2_start} L220,${y2_start} L270,${y2_start + 40} L900,${y2_start + 40}`, id: 1 },
  { path: `M20,${y3_start} L70,${y3_start} L130,${y3_start - 70} L900,${y3_start - 70}`, id: 2 },
  { path: `M20,${y4_start} L170,${y4_start} L200,${y4_start - 40} L900,${y4_start - 40}`, id: 3 },
  { path: `M20,${y5_start} L420,${y5_start} L470,${y5_start - 35} L900,${y5_start - 35}`, id: 4 },
];

// Left-side items
const baseLeftTriangles = [
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

const EndorLabs = () => {
  const [leftItemsWithMode, setLeftItemsWithMode] = useState([]);

  // Generate randomized animation modes for left-side items
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

  useEffect(() => {
    generateNewModes();
    const intervalId = setInterval(generateNewModes, ANIM_DURATION_SECONDS * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const leftEnd = 9.2;
  const y_coords = [y1_start, y2_start, y3_start, y4_start, y5_start];

  // Right-side items
  const rightItems = [
    {
      path: `M20,${y_coords[1]} L500,${y_coords[1]} L550,${y_coords[1] - 40} L900,${y_coords[1] - 40}`,
      text: "Success Data Transfer",
      color: "blue",
      begin: leftEnd + 0.5,
      mode: "icon-then-text",
      swapTime1: 0.3,
      icon: <LuBadgeCheck style={{ width: "20px", height: "20px", color: "cyan" }} />,
    },
    {
      path: `M20,${y_coords[2] - 70} L300,${y_coords[2] - 70} L350,${y_coords[2] - 110} L900,${y_coords[2] - 110}`,
      text: "Processing Large File",
      color: "green",
      begin: leftEnd + 1.0,
      mode: "icon-then-text",
      swapTime1: 0.3,
      icon: <AiOutlineLoading3Quarters style={{ width: "20px", height: "20px", color: "lime" }} />,
    },
    {
      path: `M20,${y_coords[2] - 70} L300,${y_coords[2] - 70} L350,${y_coords[2] - 30} L550,${y_coords[2] - 30}`, // stop at 400
      text: "404 Error Detected Identify",
      color: "red",
      begin: leftEnd + 1.2,
      mode: "icon-then-text",
      swapTime1: 0.3,
      icon: <BiError style={{ width: "20px", height: "20px", color: "#ff0000" }} />,
    }
    
    
    ,
    {
      path: `M20,${y_coords[3]} L500,${y_coords[3]} L550,${y_coords[3] + 40} L900,${y_coords[3] + 40}`,
      text: "211 Insurance Reports",
      color: "blue",
      begin: leftEnd + 1.5,
      mode: "icon-text-icon",
      swapTime1: 0.1,
      swapTime2: 0.9,
      icon: <AiOutlineCheck style={{ width: "22px", height: "22px", color: "lime" }} />,
    },
  ];

  return (
    <div className="ecr-container flex justify-center items-center bg-black w-full h-screen relative overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden md:flex justify-end items-center relative z-0" style={{ width: "1220px" }}>
        <svg fill="none" height="610" viewBox="0 0 930 610" width="100%">
          <defs>
            <linearGradient id="leftGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="20%" stopColor="#e91616" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ff5101" />
              <stop offset="100%" stopColor="#15ff00" />
            </linearGradient>
          </defs>
          <g>
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
              const fontSize = 12;
              const charWidth = 7;
              const paddingX = 6;
              const paddingY = 8;
              const textWidth = item.text.length * charWidth;
              const iconSize = 20;
              const TEXT_ICON_GAP = 1;
              const iconBubbleWidth = iconSize + paddingX * 2;
              const fullBubbleWidth = iconBubbleWidth + textWidth + TEXT_ICON_GAP;
              const bubbleHeight = fontSize + paddingY * 2;
              const animDuration = `${ANIM_DURATION_SECONDS}s`;
              const animBegin = `${item.startDelay}s`;

              let TEXT_START_KEYTIME = 0.25;
              if (item.mode === "icon-to-text" || item.mode === "icon-then-text") {
                TEXT_START_KEYTIME = Math.min(1, item.swapDistance / getPathLengthEstimate(item.path));
              }

              let widthValues, textOpacityValues, iconOpacityValues, opacityKeyTimes, widthKeyTimes;
              let rectXOffset, textXPos;

              if (item.mode === "icon-only") {
                widthValues = `${iconBubbleWidth};${iconBubbleWidth};${iconBubbleWidth};${iconBubbleWidth}`;
                widthKeyTimes = `0;0.2;0.8;1`;
                textOpacityValues = `0;0;0;0;0`;
                iconOpacityValues = `0;1;1;1;0`;
                opacityKeyTimes = `0;0.2;0.4;0.8;1`;
                rectXOffset = -iconBubbleWidth / 2;
                textXPos = 0;
              } else if (item.mode === "icon-to-text") {
                widthValues = `${iconBubbleWidth};${fullBubbleWidth};${fullBubbleWidth};${iconBubbleWidth}`;
                widthKeyTimes = `0;0.2;0.8;1`;
                textOpacityValues = `0;0;1;1;0`;
                iconOpacityValues = `0;1;0;1;0`;
                opacityKeyTimes = `0;0.2;${TEXT_START_KEYTIME};0.8;1`;
                rectXOffset = -iconBubbleWidth / 2;
                textXPos = (iconBubbleWidth / 2) + TEXT_ICON_GAP;
              } else {
                widthValues = `${iconBubbleWidth};${fullBubbleWidth};${fullBubbleWidth};${iconBubbleWidth}`;
                widthKeyTimes = `0;0.2;0.8;1`;
                textOpacityValues = `0;1;1;0`;
                iconOpacityValues = `1;0;0;1`;
                opacityKeyTimes = `0;0.2;${TEXT_START_KEYTIME};0.8;1`;
                rectXOffset = -iconBubbleWidth / 2;
                textXPos = (iconBubbleWidth / 2) + TEXT_ICON_GAP;
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
                    opacity="0"
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
                      values="0;1;1;0"
                      keyTimes={`0;0.2;0.8;1`}
                      dur={animDuration}
                      begin={animBegin}
                      repeatCount="indefinite"
                    />
                  </rect>
                  <foreignObject x={-iconSize / 2} y={-iconSize / 2} width={iconSize} height={iconSize}>
                    <BiError style={{ width: iconSize, height: iconSize, color: "red" }} />
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

      {/* MIDDLE LOGO */}
      <div
        className="absolute z-20 border border-[#333] rounded h-[280px] rounded-full w-[120px] -mt-28 max-w-[90%] flex flex-col justify-center items-center text-center shadow-xl p-2 text-white"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px) saturate(150%)",
          WebkitBackdropFilter: "blur(10px) saturate(150%)",
        }}
      ></div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex justify-end items-center relative z-0" style={{ width: "1220px" }}>
        <svg fill="none" height="610" viewBox="0 0 930 610" width="100%">
          <defs>
            <linearGradient id="rightGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5a8d5a" />
              <stop offset="50%" stopColor="#1ee21e" />
              <stop offset="100%" stopColor="#0b380b" />
            </linearGradient>
          </defs>
          <g>
            {rightItems.map((item, i) => {
              const fontSize = 12;
              const charWidth = 7;
              const paddingX = 12;
              const paddingY = 8;
              const textWidth = item.text.length * charWidth;
              const iconSize = 22;
              const GAP = charWidth;
              const iconBubbleWidth = iconSize + paddingX * 2;
              const bubbleHeight = fontSize + paddingY * 2;
              const duration = "8s";
              const begin = `${item.begin}s`;
              let widthValues, textOpacityValues, iconOpacityValues, keyTimes, textX;

              if (item.mode === "icon-then-text") {
                const swapTime = item.swapTime1 || 0.3;
                keyTimes = `0;${swapTime};1`;
                const finalTextBubbleWidth = textWidth + iconSize + GAP + paddingX * 2;
                widthValues = `${iconBubbleWidth};${finalTextBubbleWidth};${finalTextBubbleWidth}`;
                iconOpacityValues = `1;0;0`;
                textOpacityValues = `0;1;1`;
                textX = paddingX + iconSize + GAP;
              } else if (item.mode === "icon-text-icon") {
                keyTimes = `0;${item.swapTime1};${item.swapTime2};1`;
                const middleTextBubbleWidth = textWidth + iconSize + GAP + paddingX * 2;
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
                  <path d={item.path} stroke="url(#rightGradient)" strokeWidth="1" />
                  <g>
                    <animateMotion
                      begin={begin}
                      dur={duration}
                      path={item.path}
                      repeatCount="indefinite"
                      fill={item.text.includes("404") ? "freeze" : "remove"}
                    />
                    <rect x={0} y={-bubbleHeight / 2} height={bubbleHeight} rx={bubbleHeight / 2} ry={bubbleHeight / 2} fill="#161616">
                      <animate attributeName="width" values={widthValues} keyTimes={keyTimes} dur={duration} begin={begin} repeatCount="indefinite" />
                    </rect>
                    <foreignObject x={paddingX} y={-iconSize / 2} width={iconSize} height={iconSize}>
                      {item.icon}
                      <animate attributeName="opacity" values={iconOpacityValues} keyTimes={keyTimes} dur={duration} begin={begin} repeatCount="indefinite" />
                    </foreignObject>
                    <text fill="white" fontSize={fontSize} x={textX} y={0} dominantBaseline="middle">
                      <animate attributeName="opacity" values={textOpacityValues} keyTimes={keyTimes} dur={duration} begin={begin} repeatCount="indefinite" />
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
