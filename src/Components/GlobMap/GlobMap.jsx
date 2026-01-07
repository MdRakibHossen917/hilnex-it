import React, { useRef, useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "./GlobMap.css";

const GlobMap = () => {
  const playerRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const playAnimation = () => {
      if (playerRef.current) {
        playerRef.current.stop();
        playerRef.current.play();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playAnimation();
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) playAnimation();
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    // Text Scramble Effect
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
    scramble.setText("Our Worldwide Network");

    const interval = setInterval(() => {
      scramble.setText("Our Worldwide Network");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="glob-map-section flex flex-col lg:flex-row items-center justify-center overflow-hidden"
    >
      <div className="glob-map-text text-center w-full mb-4">
        <p
          ref={textRef}
          className="iceberg-regular text-white text-xl uppercase border-t border-b border-white/20 p-3  
          bg-gradient-to-r from-black via-[#181818] to-black w-full text-center"
        >
          Our Worldwide Network
        </p>
      </div>

      <div
        className="glob-map-content crop-image w-full lg:w-1/2 
        h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden"
      >
        <DotLottiePlayer
          ref={playerRef}
          src="https://lottie.host/ee374747-2949-4b9b-a5f9-b1652910af05/jTsuRlhrLh.lottie"
          loop={true}
          autoplay={true}
          className="w-full h-full transform scale-150 sm:scale-110"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default GlobMap;
