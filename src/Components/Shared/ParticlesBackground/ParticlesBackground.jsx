import React, { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({
  className = "w-full h-full",
  particleCount = 80,
  particleColor = "#8b8b8e",
  linkColor = "#a3a3a3",
  restrictClickToContainer = null,  
}) => {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [clickEnabled, setClickEnabled] = useState(!restrictClickToContainer);
  const particlesRef = useRef(null);

  
  useEffect(() => {
    let active = true;
    initParticlesEngine(loadSlim)
      .then(() => {
        if (active) setIsReady(true);
      })
      .catch((err) => {
        console.error("❌ Particle init error:", err);
        setHasError(true);
      });

    return () => {
      active = false;
    };
  }, []);

 
  useEffect(() => {
    if (!restrictClickToContainer?.current) {
      setClickEnabled(true);
      return;
    }

    const container = restrictClickToContainer.current;

    const checkClickPosition = (e) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX;
      const clickY = e.clientY;

      
      const isInside =
        clickX >= rect.left &&
        clickX <= rect.right &&
        clickY >= rect.top &&
        clickY <= rect.bottom;

  
      setClickEnabled(isInside);
    };

  
    const handleMouseDown = (e) => {
      checkClickPosition(e);
    };

 
    document.addEventListener("mousedown", handleMouseDown, true);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown, true);
    };
  }, [restrictClickToContainer]);


  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: clickEnabled, mode: "push" },
        },
        modes: {
          repulse: { distance: 180, duration: 0.6 },
          push: { quantity: 2 },
        },
      },
      particles: {
        number: {
          value: particleCount,
          density: { enable: true, area: 600 },
        },
        color: { value: particleColor },
        links: {
          enable: true,
          color: linkColor,
          distance: 180,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          outModes: { default: "bounce" },
        },
        opacity: { value: 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    [particleCount, particleColor, linkColor, clickEnabled]
  );

  
  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-100 flex items-center justify-center`}
      >
        <p className="text-xs text-gray-500">⚠️ Particles unavailable</p>
      </div>
    );
  }


  if (!isReady) {
    return (
      <div
        className={`${className} bg-transparent animate-pulse backdrop-blur-sm`}
      />
    );
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className={className}
      ref={particlesRef}
    />
  );
};

export default ParticlesBackground;