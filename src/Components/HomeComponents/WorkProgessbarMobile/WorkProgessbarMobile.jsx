import React, { useEffect, useRef, useState } from "react";
import wolfImage from "../../../assets/Brand/wolfYearImage.png";

const WorkProgessbarMobile = () => {
  const [progressValues, setProgressValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const bars = [
    {
      label:
        '70% of security leaders report that their organization experienced at least one "significant cyber attack" in 2024',
      value: 80,
    },
    {
      label:
        "64% of the significant cyber attacks led to a loss of productivity lasting at least three months",
      value: 70,
    },
    {
      label:
        "Only 25% of security leaders can say their organization had not suffered a breach in the last 12 months",
      value: 60,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => setProgressValues([10, 0, 0]), 100);
          setTimeout(() => setProgressValues([80, 0, 0]), 400);
          setTimeout(() => setProgressValues([80, 70, 0]), 900);
          setTimeout(() => setProgressValues([80, 70, 60]), 1400);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <>
      <style>{`
        .dotted-bg {
          background-color: #282828; /* Dark gray base */
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 22px 22px;
          background-repeat: repeat;
        }
.glow-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 12px;
}

.glow-line-left {
  flex: 1;
height: 1.9px;
  background: linear-gradient(
    to right,
    transparent 5%,    
    #ff8402 25%,       
    white 70%         
  );
  border-radius: 50px;
}

.glow-line-right {
  flex: 1;
 height: 1.9px;
  background: linear-gradient(
    to right,
    white 30%,         
    #ff8402 75%,      
    transparent 95%    
  );
  border-radius: 50px;
}

.center-text {
  font-size: 18px;
  font-weight: 400;
  color: white;
  padding: 0 0px;
}






}
      `}</style>

      <div
        ref={sectionRef}
        className="block md:hidden h-[480px] flex flex-col items-center justify-center dotted-bg text-gray-300 px-4"
      >
        <div className="glow-wrapper mb-4">
          <span className="glow-line-left"></span>

          <span className="center-text">IN 2025</span>

          <span className="glow-line-right"></span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-10 w-full max-w-md">
          {bars.map((bar, index) => (
            <div key={index} className="w-full text-center">
              <p className="text-[15px] mb-2 text-gray-200 leading-snug">
                {bar.label}
              </p>
              <div className="relative w-full h-11 bg-transparent rounded-full overflow-hidden border border-gray-600">
                <div
                  className="absolute left-0 top-0 h-8.5 m-1 rounded-full transition-all duration-1000 ease-in-out flex items-center justify-end pr-3"
                  style={{
                    width: `${progressValues[index]}%`,
                    background:
                      "linear-gradient(90deg, #000, #000, #fff, #fff, #fff)",
                  }}
                >
                  <span className="text-sm font-semibold text-[#050A1A]   px-2 py-0.5 rounded">
                    {progressValues[index]}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkProgessbarMobile;
