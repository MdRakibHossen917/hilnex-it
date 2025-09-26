import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // lightweight version
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#000000" }, // background black
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Hover to move cursor opposite .
          },
          onClick: {
            enable: true,
            mode: "push", // Click to add a new particle.
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#3928D1", //blue-violet
        },
        links: {
          enable: true,
          color: "#FFFFFF",
          distance: 400, // distance 
          opacity: 0.2, // slim 
          width: 1,
        },
        move: {
          enable: true,
          speed: 2, // runs first speed control
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 90, // show  data-extend-particle-number="40" initially screen show
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "polygon", // style name polygon style
        },
        size: {
          value: 0.1, // size particle  thikness
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="absolute inset-0 -z-10">
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return <></>;
};

export default ParticlesBackground;
