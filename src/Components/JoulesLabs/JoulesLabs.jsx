import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaFigma,
  FaAngular,
  FaVuejs,
  FaDocker,
  FaGitAlt,
  FaNpm,
  FaGithub,
  FaJava,
  FaPhp,
  FaJs,
  FaLaravel,
  FaDatabase,
  FaCloud,
  FaServer,
  FaWordpress,
  FaRaspberryPi,
  FaSass,
  FaLess,
  FaBootstrap,
} from "react-icons/fa";

// All icons white with proper labels
const allIcons = [
  { icon: <FaReact />, color: "#ffffff", label: "React" },
  { icon: <FaNodeJs />, color: "#ffffff", label: "Node.js" },
  { icon: <FaHtml5 />, color: "#ffffff", label: "HTML5" },
  { icon: <FaCss3Alt />, color: "#ffffff", label: "CSS3" },
  { icon: <FaPython />, color: "#ffffff", label: "Python" },
  { icon: <FaFigma />, color: "#ffffff", label: "Figma" },
  { icon: <FaAngular />, color: "#ffffff", label: "Angular" },
  { icon: <FaVuejs />, color: "#ffffff", label: "Vue.js" },
  { icon: <FaDocker />, color: "#ffffff", label: "Docker" },
  { icon: <FaGitAlt />, color: "#ffffff", label: "Git" },
  { icon: <FaNpm />, color: "#ffffff", label: "NPM" },
  { icon: <FaGithub />, color: "#ffffff", label: "GitHub" },
  { icon: <FaJava />, color: "#ffffff", label: "Java" },
  { icon: <FaPhp />, color: "#ffffff", label: "PHP" },
  { icon: <FaJs />, color: "#ffffff", label: "JavaScript" },
  { icon: <FaLaravel />, color: "#ffffff", label: "Laravel" },
  { icon: <FaDatabase />, color: "#ffffff", label: "Database" },
  { icon: <FaCloud />, color: "#ffffff", label: "Cloud" },
  { icon: <FaServer />, color: "#ffffff", label: "Server" },
  { icon: <FaWordpress />, color: "#ffffff", label: "WordPress" },
  { icon: <FaRaspberryPi />, color: "#ffffff", label: "Raspberry Pi" },
  { icon: <FaSass />, color: "#ffffff", label: "Sass" },
  { icon: <FaLess />, color: "#ffffff", label: "Less" },
  { icon: <FaBootstrap />, color: "#ffffff", label: "Bootstrap" },
];

const JoulesLabs = () => {
  const [active, setActive] = useState([]);
  const [hovered, setHovered] = useState(null);

  const gridConfig = useMemo(
    () => ({
      mobile: {
        cols: 6,
        rows: 2,
        blankCols: [],
        iconCount: 12,
        iconSize: "20px",
        boxSize: "32px",
        gap: "8px",
      },
      tablet: {
        cols: 6,
        rows: 1,
        blankCols: [0],
        iconCount: 6,
        iconSize: "24px",
        boxSize: "40px",
        gap: "0px",
      },
      desktop: {
        cols: 8,
        rows: 4,
        blankCols: [10, 11, 12, 13, 18, 19, 20, 21],
        iconSize: "32px",
        boxSize: "48px",
        gap: "0px",
      },
      largeDesktop: {
        cols: 8,
        rows: 4,
        blankCols: [10, 11, 12, 13, 18, 19, 20, 21],
        iconSize: "36px",
        boxSize: "56px",
        gap: "0px",
      },
    }),
    []
  );

  const getCurrentConfig = () => {
    if (typeof window === "undefined") return gridConfig.desktop;
    const width = window.innerWidth;
    if (width < 768) return gridConfig.mobile;
    if (width < 1024) return gridConfig.tablet;
    if (width < 1440) return gridConfig.desktop;
    return gridConfig.largeDesktop;
  };

  const [currentConfig, setCurrentConfig] = useState(getCurrentConfig());

  useEffect(() => {
    const handleResize = () => {
      setCurrentConfig(getCurrentConfig());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCells = useMemo(
    () => currentConfig.cols * currentConfig.rows,
    [currentConfig]
  );

  const blankCells = useMemo(() => currentConfig.blankCols, [currentConfig]);

  const nonBlankIndices = useMemo(
    () =>
      Array.from({ length: totalCells })
        .map((_, idx) => idx)
        .filter((idx) => !blankCells.includes(idx)),
    [totalCells, blankCells]
  );

  const getIconIndexForCell = useCallback(
    (i) => {
      const positionInGrid = nonBlankIndices.indexOf(i);
      return positionInGrid !== -1 ? positionInGrid % allIcons.length : -1;
    },
    [nonBlankIndices]
  );

  useEffect(() => {
    const triggerLights = () => {
      const count = Math.floor(Math.random() * 2) + 6;
      const randomIcons = [];
      while (randomIcons.length < count) {
        const idx = Math.floor(Math.random() * allIcons.length);
        if (!randomIcons.includes(idx)) randomIcons.push(idx);
      }

      randomIcons.forEach((iconIdx, i) => {
        const delay = i * 250 + Math.random() * 250;
        setTimeout(() => {
          setActive((prev) => [...prev, iconIdx]);
          setTimeout(() => {
            setActive((prev) => prev.filter((x) => x !== iconIdx));
          }, 1200 + Math.random() * 600);
        }, delay);
      });
    };

    const interval = setInterval(triggerLights, 3500);
    triggerLights();
    return () => clearInterval(interval);
  }, []);

  const renderGrid = () => {
    const config = currentConfig;

    if (config.rows === 2) {
      return (
        <div
          className={`grid grid-cols-6 gap-2 w-full max-w-md mx-auto overflow-hidden`}
          style={{ gap: config.gap }}
          role="grid"
          aria-label="Technology icons grid"
        >
          {Array.from({ length: totalCells }).map((_, i) => {
            const iconIndex = getIconIndexForCell(i);
            const isBlank = blankCells.includes(i);
            const { icon, color, label } = allIcons[iconIndex] || {};
            const isGlowing = active.includes(iconIndex) || hovered === iconIndex;

            return (
              <div
                key={i}
                className="flex justify-center items-center"
                role="gridcell"
                onMouseEnter={() => !isBlank && setHovered(iconIndex)}
                onMouseLeave={() => !isBlank && setHovered(null)}
              >
                {!isBlank && (
                  <div
                    className="transition-all duration-700 ease-in-out flex items-center justify-center border border-[#333] rounded-sm"
                    style={{
                      width: config.boxSize,
                      height: config.boxSize,
                      color: isGlowing ? color : "rgba(255,255,255,0.25)",
                      textShadow: isGlowing
                        ? `0 0 8px ${color}, 0 0 16px ${color}, 0 0 32px ${color}`
                        : "none",
                      opacity: isGlowing ? 1 : 0.5,
                      fontSize: config.iconSize,
                      backgroundColor: isGlowing
                        ? "rgba(255,255,255,0.1)"
                        : "transparent",
                    }}
                    aria-label={label}
                    title={label}
                  >
                    {React.cloneElement(icon, { 
                      'aria-hidden': 'true',
                      focusable: 'false'
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div
          className={`grid w-full border-t border-l border-[#333] ${
            config.rows === 1
              ? "grid-cols-8 h-[80px] md:h-[100px]"
              : "grid-cols-8 grid-rows-4 h-full"
          }`}
          role="grid"
          aria-label="Technology icons grid"
        >
          {Array.from({ length: totalCells }).map((_, i) => {
            const iconIndex = getIconIndexForCell(i);
            const isBlank = blankCells.includes(i);
            const { icon, color, label } = allIcons[iconIndex] || {};
            const isGlowing = active.includes(iconIndex) || hovered === iconIndex;

            return (
              <div
                key={i}
                className={`flex justify-center items-center transition-all duration-300 ${
                  isBlank ? "bg-transparent" : "border border-r border-[#333]"
                }`}
                role="gridcell"
                onMouseEnter={() => !isBlank && setHovered(iconIndex)}
                onMouseLeave={() => !isBlank && setHovered(null)}
              >
                {!isBlank && (
                  <div
                    className="transition-all duration-700 ease-in-out flex items-center justify-center"
                    style={{
                      width: config.boxSize,
                      height: config.boxSize,
                      color: isGlowing ? color : "rgba(255,255,255,0.25)",
                      textShadow: isGlowing
                        ? `0 0 8px ${color}, 0 0 16px ${color}, 0 0 32px ${color}`
                        : "none",
                      opacity: isGlowing ? 1 : 0.5,
                      fontSize: config.iconSize,
                    }}
                    aria-label={label}
                    title={label}
                  >
                    {React.cloneElement(icon, { 
                      'aria-hidden': 'true',
                      focusable: 'false'
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="w-full bg-[#1A1A1A] flex flex-col overflow-hidden">
      {currentConfig.rows === 2 && (
        <div className="flex md:hidden flex-col">
          <div className="flex flex-col items-end justify-center pb-6 pt-8">
            <div className="w-full max-w-full mx-auto">
              <div 
                className="grid grid-cols-6 grid-rows-2 w-full border-t border-l border-[#333]"
                role="grid"
                aria-label="Mobile technology icons"
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const iconIndex = i % allIcons.length;
                  const { icon, color, label } = allIcons[iconIndex] || {};
                  const isGlowing = active.includes(iconIndex) || hovered === iconIndex;

                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center border-r border-b border-[#333] transition-all duration-300"
                      role="gridcell"
                      onMouseEnter={() => setHovered(iconIndex)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className="transition-all duration-700 ease-in-out flex items-center justify-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          color: isGlowing ? color : "rgba(255,255,255,0.25)",
                          textShadow: isGlowing
                            ? `0 0 6px ${color}, 0 0 12px ${color}, 0 0 24px ${color}`
                            : "none",
                          opacity: isGlowing ? 1 : 0.5,
                          fontSize: "25px",
                        }}
                        aria-label={label}
                        title={label}
                      >
                        {React.cloneElement(icon, { 
                          'aria-hidden': 'true',
                          focusable: 'false'
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mx-auto my-2 text-center">
            <div className="w-full max-w-4xl px-4">
              <h1 className="text-xl iceberg-regular font-bold text-white mb-2 leading-tight">
              Shape Your Digital Future with Hilnex
              </h1>
              <p className="text-lg mx-auto text-gray-300/70 mb-4 leading-relaxed max-w-md sm:max-w-lg">
              We deliver powerful Web, Software, Mobile App, and Digital Solutions
              designed by experts who truly care about your success.
              </p>
              <button 
                className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-300 transition-all text-base focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                aria-label="Get your free consultation today"
              >
                Get Your Free Consultation Today
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center pt-6 pb-8">
            <div className="w-full max-w-full mx-auto">
              <div 
                className="grid grid-cols-6 grid-rows-2 w-full border-t border-l border-[#333]"
                role="grid"
                aria-label="Mobile technology icons second row"
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const iconIndex = (i + 4) % allIcons.length;
                  const { icon, color, label } = allIcons[iconIndex] || {};
                  const isGlowing = active.includes(iconIndex) || hovered === iconIndex;

                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center border-r border-b border-[#333] transition-all duration-300"
                      role="gridcell"
                      onMouseEnter={() => setHovered(iconIndex)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className="transition-all duration-700 ease-in-out flex items-center justify-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          color: isGlowing ? color : "rgba(255,255,255,0.25)",
                          textShadow: isGlowing
                            ? `0 0 6px ${color}, 0 0 12px ${color}, 0 0 24px ${color}`
                            : "none",
                          opacity: isGlowing ? 1 : 0.5,
                          fontSize: "25px",
                        }}
                        aria-label={label}
                        title={label}
                      >
                        {React.cloneElement(icon, { 
                          'aria-hidden': 'true',
                          focusable: 'false'
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tablet and Desktop layouts with similar accessibility fixes */}
      {currentConfig.rows === 1 && (
        <div className="hidden md:flex lg:hidden flex-col my-6 overflow-hidden">
          {/* Similar accessibility fixes for tablet layout */}
          <div className="flex flex-col items-end justify-center pb-2">
            <div className="w-full max-w-9/12 mx-auto">
              <div 
                className="grid grid-cols-7 grid-rows-2 w-full border-t border-l border-[#333]"
                role="grid"
                aria-label="Tablet technology icons"
              >
                {Array.from({ length: 14 }).map((_, i) => {
                  const iconIndex = i % allIcons.length;
                  const { icon, color, label } = allIcons[iconIndex] || {};
                  const isGlowing = active.includes(iconIndex) || hovered === iconIndex;

                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center border-r border-b border-[#333] transition-all duration-300"
                      role="gridcell"
                      onMouseEnter={() => setHovered(iconIndex)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className="transition-all duration-700 ease-in-out flex items-center justify-center"
                        style={{
                          width: "70px",
                          height: "70px",
                          color: isGlowing ? color : "rgba(255,255,255,0.25)",
                          textShadow: isGlowing
                            ? `0 0 8px ${color}, 0 0 16px ${color}, 0 0 32px ${color}`
                            : "none",
                          opacity: isGlowing ? 1 : 0.5,
                          fontSize: "30px",
                        }}
                        aria-label={label}
                        title={label}
                      >
                        {React.cloneElement(icon, { 
                          'aria-hidden': 'true',
                          focusable: 'false'
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center px-8 p-2 my-6">
            <div className="w-full max-w-2xl text-center">
              <h1 className="text-2xl font-bold text-white mb-2 leading-tight iceberg-regular">
                Shape Your Digital Future with Hilnex
              </h1>
              <p className="text-lg w-[450px] mx-auto text-gray-300 mb-2 leading-relaxed">
                We deliver powerful Web, Software, Mobile App, and Digital Solutions
                designed by experts who truly care about your success.
              </p>
              <button 
                className="px-8 py-2 bg-white text-black font-semibold hover:bg-gray-300 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                aria-label="Get your free consultation today"
              >
                Get Your Free Consultation Today
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center pt-2">
            <div className="w-full max-w-9/12 mx-auto">
              <div 
                className="grid grid-cols-7 grid-rows-2 w-full border-t border-l border-[#333]"
                role="grid"
                aria-label="Tablet technology icons second row"
              >
                {Array.from({ length: 14 }).map((_, i) => {
                  const iconIndex = (i + 5) % allIcons.length;
                  const { icon, color, label } = allIcons[iconIndex] || {};
                  const isGlowing = active.includes(iconIndex) || hovered === iconIndex;

                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center border-r border-b border-[#333] transition-all duration-300"
                      role="gridcell"
                      onMouseEnter={() => setHovered(iconIndex)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div
                        className="transition-all duration-700 ease-in-out flex items-center justify-center"
                        style={{
                          width: "70px",
                          height: "70px",
                          color: isGlowing ? color : "rgba(255,255,255,0.25)",
                          textShadow: isGlowing
                            ? `0 0 8px ${color}, 0 0 16px ${color}, 0 0 32px ${color}`
                            : "none",
                          opacity: isGlowing ? 1 : 0.5,
                          fontSize: "30px",
                        }}
                        aria-label={label}
                        title={label}
                      >
                        {React.cloneElement(icon, { 
                          'aria-hidden': 'true',
                          focusable: 'false'
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentConfig.rows === 4 && (
        <div className="hidden lg:block flex-1">
          <div className="w-full h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] flex justify-center items-center p-4 lg:p-8 overflow-hidden">
            <div className="relative w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1843px] h-full flex justify-center items-center">
              {renderGrid()}

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           w-full max-w-[300px] lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[600px]
                           flex flex-col items-center justify-center text-center
                           p-6 lg:p-8 xl:p-10 rounded-md"
                role="region"
                aria-label="Call to action section"
              >
                <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight iceberg-regular">
                  Shape Your Digital Future with Hilnex
                </h1>
                <p className="text-base lg:text-lg xl:text-xl 2xl:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                  We deliver powerful Web, Software, Mobile App, and Digital Solutions
                  designed by experts who truly care about your success.
                </p>
                <button
                  className="px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 lg:py-4 xl:py-4 2xl:py-4
                                 bg-white text-black font-semibold hover:bg-gray-300 transition-all
                                 text-base lg:text-lg xl:text-lg 2xl:text-lg
                                 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                  aria-label="Get your free consultation today"
                >
                  Get Your Free Consultation Today
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoulesLabs;