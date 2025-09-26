// Hero.jsx
import React, { useEffect, useRef } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Typed from "typed.js";
import {
  FaUsers,
  FaProjectDiagram,
  FaGlobe,
  FaAward,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import ParticlesBackground from "../../Shared/ParticlesBackground/ParticlesBackground";
import "./Hero.css";

// Counter Component
const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let start = 0;
    const totalMilSec = duration * 1000;
    const incrementTime = 20;
    const step = end / (totalMilSec / incrementTime);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Stats Data
const stats = [
  {
    id: 1,
    icon: <FaUsers size={24} />,
    number: 1200,
    suffix: "+",
    label: "Clients",
  },
  {
    id: 2,
    icon: <FaProjectDiagram size={24} />,
    number: 350,
    suffix: "+",
    label: "Projects",
  },
  {
    id: 3,
    icon: <FaGlobe size={24} />,
    number: 125,
    suffix: "",
    label: "Countries Served",
  },
  {
    id: 4,
    icon: <FaAward size={24} />,
    number: 150,
    suffix: "+",
    label: "Awards Won",
  },
];

const Hero = () => {
  const typedRef = useRef(null);
  const marqueeRef = useRef(null);

  // Typed.js effect
  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "Software Development",
        "Cyber Security",
        "Web Development",
        "App Development",
        "Graphics Development",
        "Digital Marketing",
        "AI Solutions",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // Smooth Marquee
  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = marquee.innerHTML;
    marquee.innerHTML += content;
    let scroll = 0;
    const speed = 0.1;

    const animate = () => {
      scroll -= speed;
      if (Math.abs(scroll) >= marquee.scrollWidth / 2) scroll = 0;
      marquee.style.transform = `translateX(${scroll}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="hero-section relative bg-black text-white min-h-screen flex flex-col items-center gap-8 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ParticlesBackground />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 mt-25">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left ">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
            Hilnex Limited
          </h3>
          <h1 className="text-xl sm:text-4xl md:text-4xl font-bold  text-[#0072bc]   leading-snug mb-2">
            Elite Web Development & Professional IT Services <br />
            in{" "}
            <span className="text-[#ff8402]">
              <span ref={typedRef}></span>
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            We provide top-notch IT solutions tailored to your business needs.
          </p>

          {/* Neon Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#quoteModal"
              className="neon-btn relative inline-flex px-8 sm:px-10 py-3 text-white font-semibold uppercase tracking-wide rounded-md overflow-hidden"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              CONTACT US
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-6 justify-center md:justify-start text-2xl">
            <a
              href="https://www.facebook.com/HilnexLimited/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877f2] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/hilnexltd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1da1f2] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/hilnex/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0a66c2] transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/hilnex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-full max-w-[600px] flex items-center justify-center rounded-lg shadow-lg">
            <DotLottiePlayer
              src="https://lottie.host/238469c8-ac0c-4373-9919-da86c05a9b16/TOBQJvvS4F.lottie"
              loop
              autoplay
              className="w-[350px] h-[350px]"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded bg-white/20 shadow-lg -mt-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="group flex flex-col sm:flex-row items-center justify-center gap-3 py-4 px-2 border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0 transition-all duration-500 hover:bg-white/15 hover:rounded"
          >
            <div className="text-white flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="flex flex-col mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#ff8402] transition-colors duration-300">
                <Counter end={stat.number} duration={10} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10  mx-auto overflow-hidden border-t border-b border-white/20 py-2   backdrop-blur-sm rounded-lg">
        <div ref={marqueeRef} className="flex whitespace-nowrap gap-8">
          <span className="fjalla-font text-gray-300 text-lg bg-black/40 px-2 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            suscipit, justo ac fermentum placerat, sapien neque tempus elit, a
            viverra ligula nunc nec mauris.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
