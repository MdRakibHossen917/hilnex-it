import React from "react";
import workFlow from "../../assets/Image/WorkFlow.png";
import GlobeBGImage from "../../assets/Image/GlobeBGImage.png";
import "./WorkflowDiagram.css";

export default function WorkflowDiagram() {
  const dotPatternStyle = {};

  const dotPatternClasses =
    "bg-black " +
    "bg-[radial-gradient(circle,#ffffff1a_1px,transparent_1px)] " +
    "[background-size:16px_16px]";

  return (
    <div className="w-9/12 mx-auto flex flex-col items-center py-5 xl:py-20 bg-black relative overflow-hidden">
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 z-0  hidden sm:block md:hidden w-400px h-450px ${dotPatternClasses}`}
        style={dotPatternStyle}
      ></div>

      <div
        className="absolute inset-0 z-0 hidden md:block "
        style={{
          backgroundImage: `url(${GlobeBGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 text-center px-4 mx-auto">
        <h1 className="iceberg-regular text-xl sm:text-3xl md:text-4xl text-white font-bold mb-2">
          Hilnex Software Solutions From idea to delivery — one complete digital
          journey.
        </h1>
        <p className="text-white/80 mb-6 text-sm sm:text-base md:text-lg">
          Smart planning. Smooth execution. Technology that drives your success.
        </p>
      </div>

      <div
        className="relative z-20 w-full  md:h-[400px] lg:h-[450px] bg-cover bg-center rounded-xl shadow-lg mx-auto px-4  "
        style={{ backgroundImage: `url(${workFlow})` }}
      ></div>

      <div className="relative z-20 w-full lg:w-3/4 mt-8 flex items-center justify-center">
        <div className="flex items-center gap-4 bg-black/70 px-6 py-3 rounded   shadow-lg">
          <div className="heartbeat-equalizer flex items-end gap-1 h-8">
            <div className="heartbeat-bar bar1"></div>
            <div className="heartbeat-bar bar2"></div>
            <div className="heartbeat-bar bar3"></div>
            <div className="heartbeat-bar bar4"></div>
            <div className="heartbeat-bar bar5"></div>
            <div className="heartbeat-bar bar6"></div>
          </div>
          <div className="heartbeat-equalizer flex items-end gap-1 h-8">
            <div className="heartbeat-bar bar1"></div>
            <div className="heartbeat-bar bar2"></div>
            <div className="heartbeat-bar bar3"></div>
            <div className="heartbeat-bar bar4"></div>
            <div className="heartbeat-bar bar5"></div>
            <div className="heartbeat-bar bar6"></div>
          </div>

          <span className="text-white font-semibold text-sm sm:text-lg md:text-xl whitespace-nowrap px-2">
            Ongoing Support
          </span>

          <div className="heartbeat-equalizer flex items-end gap-1 h-8">
            <div className="heartbeat-bar bar1"></div>
            <div className="heartbeat-bar bar2"></div>
            <div className="heartbeat-bar bar3"></div>
            <div className="heartbeat-bar bar4"></div>
            <div className="heartbeat-bar bar5"></div>
            <div className="heartbeat-bar bar6"></div>
            <div className="heartbeat-bar bar7"></div>
          </div>
          <div className="heartbeat-equalizer flex items-end gap-1 h-8">
            <div className="heartbeat-bar bar1"></div>
            <div className="heartbeat-bar bar2"></div>
            <div className="heartbeat-bar bar3"></div>
            <div className="heartbeat-bar bar4"></div>
            <div className="heartbeat-bar bar5"></div>
            <div className="heartbeat-bar bar6"></div>
            <div className="heartbeat-bar bar7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
