import React, { useState, useEffect } from "react";
import "./Feature.css";

const Feature = () => {
  const [linePositions, setLinePositions] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        setLinePositions([80, 200, 400, 720, 760, 1400, 1600, 1800]);
      } else if (width >= 1280) {
        setLinePositions([80, 200, 400, 1200, 1400]);
      } else if (width >= 1024) {
        setLinePositions([80, 200, 400, 720, 860, 1020]);
      } else if (width >= 768) {
        setLinePositions([80, 200, 400, 720, 760]);
      } else {
        setLinePositions([20, 80, 160, 240]);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <section id="features" className="features-area">
      <div className="bg-columns">
        {linePositions.map((pos, index) => (
          <div key={index} className="column" style={{ left: `${pos}px` }}>
            <div className="light"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
