import React, { useEffect, useRef } from "react";
import developmentImg from "../../assets/Image/development-circle.png";
import "./HilnexItCircle.css";
import vapiBGVideo from "../../assets/video/vapiVideo.mp4";
import coadingVideo from "../../assets/video/coading.mp4";

const HilnexItCircle = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);

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
    scramble.setText("Innovative IT & Web");
    const interval = setInterval(() => {
      scramble.setText("Innovative IT & Web");
    }, 5000);

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center z-20">
      <div className="text-center text-white flex flex-col items-center justify-center md:mt-0 -mb-12 md:px-0 w-full">
        <div className="glob-map-text text-center w-full">
          <h1
            ref={textRef}
            className="iceberg-regular text-white text-xl w-full uppercase border-t border-b border-white/20 p-3 
                       bg-gradient-to-r from-black via-[#181818] to-black mx-auto text-center"
          >
            Innovative IT & Web
          </h1>
        </div>

        <div className="text-white/95 text-sm sm:text-base md:text-lg text-center w-full mt-4">
          <p className="px-[10px]">
            Empowering your digital journey with next-generation technology and
            scalable solutions
          </p>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={vapiBGVideo} type="video/mp4" />
        </video>
      </div>

      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center
                   w-full md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12
                   min-h-[400px] md:min-h-[600px] lg:min-h-[680px] xl:min-h-[750px] 2xl:min-h-[820px] md:ml-20"
      >
        <div className="flex-1 flex items-center justify-center">
          <video
            ref={videoRef}
            src={coadingVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-2xl w-[90%] md:w-[90%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]
                       h-auto max-h-[500px] object-cover"
          />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="relative flex flex-col items-center justify-center text-white">
            <img
              src={developmentImg}
              alt="Web Development Circle"
              className="spin-slow pointer-events-none
                         w-[250px] sm:w-[300px] md:w-[220px] lg:w-[280px] xl:w-[380px]"
            />
            <span
              className="absolute flex items-center justify-center text-center font-bold text-white
                         bg-black border-2 border-white rounded-full
                         text-lg sm:text-xs md:text-xs lg:text-lg xl:text-3xl
                         w-[7rem] md:w-[5rem] lg:w-[8rem] xl:w-[10rem] 2xl:w-[12rem]
                         h-[7rem] md:h-[5rem] lg:h-[8rem] xl:h-[10rem] 2xl:h-[12rem]"
            >
              Our Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HilnexItCircle;
