import React, { useEffect, useRef } from "react";
import developmentImg from "../../../assets/Image/development-circle.png";
import GlobeBGImage from "../../../assets/Image/GlobeBGImage.png";
import "./OurSolutionsMobile.css";
import { DotLottiePlayer } from "@dotlottie/react-player";
import XIco from "../../../assets/ficon.png";

const OurSolutionsMobile = () => {
  const textRef = useRef(null);

  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }

      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 30);
          const end = start + Math.floor(Math.random() * 30);
          this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        let output = "";
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];

          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const scramble = new TextScramble(textRef.current);
    scramble.setText("OUR DEVELOPMENT SERVICES");

    const interval = setInterval(() => {
      scramble.setText("OUR DEVELOPMENT SERVICES");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-full sm:hidden flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${GlobeBGImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="region"
      aria-label="Our Development Services"
    >
      {/* Animated Heading */}
      <h1
        ref={textRef}
        className="iceberg-regular text-white text-xl w-full uppercase border border-white/20 p-3  
        bg-gradient-to-r from-black via-[#181818] to-black mx-auto text-center"
        aria-label="Our Development Services"
      >
        OUR DEVELOPMENT SERVICES
      </h1>

      {/* Main Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-white my-5 overflow-hidden"
        role="main"
      >
        {/* Rotating Background Image */}
        <img
          src={developmentImg}
          alt="Circular web development technology background"
          className="spin-slow pointer-events-none w-full max-w-[320px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px] object-contain"
        />

        {/* Animated Lottie Player */}
        <div
          className="absolute flex items-center justify-center text-center font-bold text-white 
          bg-black border-2 border-white rounded-full
          text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl
          w-[9.5rem] sm:w-[9.5rem] md:w-[10rem] lg:w-[11rem] xl:w-[13rem]
          h-[9.5rem] sm:h-[9.5rem] md:h-[10rem] lg:h-[11rem] xl:h-[13rem]
          p-0"
          role="img"
          aria-label="Animated technology development visualization"
        >
          <DotLottiePlayer
            src="https://lottie.host/238469c8-ac0c-4373-9919-da86c05a9b16/TOBQJvvS4F.lottie"
            loop
            autoplay
            className="w-[170px] h-[170px]"
            aria-label="Animation showing web development process"
          />
        </div>
      </div>

      {/* Screen Reader Description */}
      <div className="sr-only">
        <p>
          This section showcases our comprehensive development services including 
          web development, software solutions, and mobile applications. The animated 
          visualization represents our dynamic approach to technology development.
        </p>
      </div>
    </section>
  );
};

export default OurSolutionsMobile;