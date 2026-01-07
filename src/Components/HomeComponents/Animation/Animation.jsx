import React, { useRef, useEffect } from "react";
import CellEffect from "../../CellEffect/CellEffect";
import Feature from "../../Shared/Feature/Feature";

const HomeCard1 = () => {
  return (
    <div
      className="main-container flex   w-full p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      style={{
        border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20#3a3a3a33.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <h1 className="text-2xl md:text-5xl  font-bold text-white mb-2 leading-tight text-white/85">
          Professional & Clean Style
        </h1>
        <p className="text-gray-400 text-lg mb-2">
          Empower Your Business with Smart IT Solutions Transform your digital
          presence with our expert team in Web, Software, App, and Branding. We
          build powerful technology that drives growth and success.
        </p>
        <p className="text-gray-500 text-sm mb-2  ">
          Let’s build something great together.
        </p>

        <a
          href="#"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          Explore with Opal AI
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="bg-gray-900 rounded p-6 shadow-xl relative main-container"
          style={{
              border: "1px solid #343435",
            background: "rgba(36, 36, 37, 0.5)",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="text-sm text-white/90">
              <h3 className="font-semibold">Hi, I'm Tohofa. What can I help you?</h3>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-end">
              <div
                className="p-4 rounded max-w-md"
                style={{
                  background: "rgba(60, 60, 63, 0.5)",
                  border: "1px solid #343435",
                }}
              >
                <p className="text-sm text-white/60">
                  Help me create a campaign schedule using this month's
                  marketing calendar.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div
                className="p-4 rounded max-w-md"
                style={{
                  background: "rgba(96, 96, 97, 0.5)",
                    border: "1px solid #343435",
                }}
              >
                <p className="text-sm text-white/60">
                  Great! I've spun up a detailed schedule for you. Based on
                  data, it looks like you can optimize and increase engagement.
                </p>
              </div>
              <div className="flex items-center ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-900 rounded p-6 shadow-xl relative overflow-hidden main-container grid grid-cols-1 md:grid-cols-2 gap-8  hidden md:block"
          style={{
            border: "1px solid #343435",
            background: "rgba(56, 56, 57, 0.5)",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Modern & Techy Feel
              </h2>
              <p className="text-gray-400 text-sm">
                As a marketer and creator, start using 'data-driven' marketing
                and want to see your team scale campaigns and content while
                delivering real ROI.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <img
              className="rounded-full h-32 w-32 object-cover mb-4 border border-gray-700"
              src="https://placehold.co/200x200/2d2f44/e0e0e0?text=User+Photo"
              alt="Placeholder image of a user"
            />
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-300 mb-2">
                35%
              </h2>
              <p className="text-gray-500 text-sm">Increase in test impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeCard2 = () => {
  return (
    <div
      className="main-container w-full p-4 md:p-8 grid grid-cols-1 gap-8"
      style={{
          border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20#3a3a3a33.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight text-white/85">
            Content and experiences
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            Accelerate the entire content supply chain
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Plan, create, and publish high-quality experiences with AI-powered
            tools fit for you. Generate on-brand content, automate tedious
            tasks, and impress every customer.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Discover Content Orchestration
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col  border  border-[#343435] bg-[#1a1a1a] p-4 rounded">
          <h2 className="text-xl font-bold mb-1 text-white">Visual builder</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/400x400/2a2e45/e0e0e0?text=Visual+Builder+Form"
                alt="Visual Builder"
                className="w-full h-auto"
              />
            </div>

            <div className="rounded overflow-hidden shadow-lg">
              <img
                src="https://placehold.co/400x400/2a2e45/e0e0e0?text=STRIDE+Visual"
                alt="STRIDE Visual"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-1">
        <div className=" border  border-[#343435]  bg-[#1a1a1a] rounded p-4 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">
            Next level website
          </h2>
          <p className="text-gray-400 text-sm mb-2">
            Being a <span className="text-white font-bold">digital leader</span>
            . I want to deliver better customer experiences, drive more
            conversions, and optimize my website.
          </p>
        </div>

        <div className="border  border-[#343435] bg-[#1a1a1a] rounded p-4 shadow-lg hidden md:block">
          <h2 className="text-xl font-semibold text-white mb-2">
            Valtech
            <span className="text-yellow-400 ml-2">★</span>
          </h2>
          <p className="text-gray-400 text-sm">
            How Valtech empowers marketing teams across the globe
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read customer story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="hidden md:flex border  border-[#343435] bg-[#1a1a1a] rounded p-6 shadow-lg flex-col justify-center items-center text-center hidden md:flex">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
            100%
          </h2>
          <p className="text-gray-500 text-sm">boost in website engagement</p>
        </div>
      </div>
    </div>
  );
};

const HomeCard3 = () => {
  return (
    <div
      className="main-container w-full p-4 md:p-8 grid grid-cols-1 gap-8"
      style={{
        border: "1px solid #343435",  
         background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20#3a3a3a33.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight text-white/85">
            Test, personalize, and analyze: good things come in threes
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Create meaningful 1:1 interactions, every time
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Combine the world's best experimentation platform, AI-driven
            personalization, and warehouse-native analytics. What do you get?
            Measurable business impact.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Optimize with Digital Optimization
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded p-4 shadow-lg"
              style={{
                border: "1px solid #343435",
                backgroundColor: "#1a1a1a",
              }}
            >
              <h3 className="text-sm font-semibold mb-2 text-white">
                Experiment
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Glossary bounce rates decrease with more visuals
              </p>
              <p className="text-xs font-semibold text-green-500 mb-2">
                A/B TEST &bull; ACTIVE
              </p>
              <p className="text-xs text-gray-500 mb-2">Threshold</p>
              <div className="relative h-1 w-full bg-gray-700 rounded mb-2">
                <div
                  className="absolute top-0 left-0 h-1 bg-gray-500 rounded"
                  style={{ width: "95%" }}
                ></div>
                <div className="absolute top-0 left-1/2 h-4 w-4 -mt-1.5 transform -translate-x-1/2 rounded-full bg-gray-700"></div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Variation: All variations
              </p>
            </div>
            <div
              className="rounded p-4 shadow-lg"
              style={{
                  border: "1px solid #343435",
                backgroundColor: "#1a1a1a",
              }}
            >
              <h3 className="text-sm font-semibold mb-2 text-white">Results</h3>
              <p className="text-xs text-gray-500 mb-4">Conversion rate</p>
              <div className="flex items-center justify-between text-xs mb-2">
                <span>Original</span>
                <span>4.45%</span>
              </div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-green-500">Variation #1</span>
                <span className="text-green-500">5.18%</span>
              </div>
              <img
                src="https://placehold.co/400x200/2a2e45/e0e0e0?text=Chart"
                alt="Placeholder chart"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div
          className="rounded  p-6 shadow-lg flex flex-col justify-center items-center text-center hidden md:flex "
          style={{    border: "1px solid #343435", backgroundColor: "#1a1a1a" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white 2">
            12%
          </h2>
          <p className="text-gray-500 text-sm">
            of ideas are proven to be winners
          </p>
        </div>

        <div
          className="rounded p-4 shadow-lg"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <h2 className="text-xl font-semibold text-white  ">
            Code smarter, not harder
          </h2>
          <p className="text-gray-400 text-sm">
            As a{" "}
            <span className="text-white font-bold">developer and engineer</span>
            , I want tools that make testing and experience creation a breeze.
          </p>
        </div>

        <div
          className="rounded p-6 shadow-lg hidden md:flex"
          style={{ border: "1px solid #343435", backgroundColor: "#1a1a1a" }}
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            Calendly
            <span className="text-yellow-400 ml-2">★</span>
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Crafting personalized experiences for 20 million users
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read customer story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const HomeCard4 = () => {
  return (
    <div
      className="main-container w-full p-4 md:p-8 grid grid-cols-1 gap-8 "
      style={{
           border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20#3a3a3a33.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight text-white/85">
            Test, personalize, and analyze: good things come in threes
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Create meaningful 1:1 interactions, every time
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Combine the world's best experimentation platform, AI-driven
            personalization, and warehouse-native analytics. What do you get?
            Measurable business impact.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Optimize with Digital Optimization
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded p-4 shadow-lg"
              style={{
                 border: "1px solid #343435",
                backgroundColor: "#1a1a1a",
              }}
            >
              <h3 className="text-sm font-semibold mb-2 text-white">
                Experiment
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Glossary bounce rates decrease with more visuals
              </p>
              <p className="text-xs font-semibold text-green-500 mb-2">
                A/B TEST &bull; ACTIVE
              </p>
              <p className="text-xs text-gray-500 mb-2">Threshold</p>
              <div className="relative h-1 w-full bg-gray-700 rounded mb-2">
                <div
                  className="absolute top-0 left-0 h-1 bg-gray-500 rounded"
                  style={{ width: "95%" }}
                ></div>
                <div className="absolute top-0 left-1/2 h-4 w-4 -mt-1.5 transform -translate-x-1/2 rounded-full bg-gray-700"></div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Variation: All variations
              </p>
            </div>
            <div
              className="rounded p-4 shadow-lg"
              style={{
                
                  border: "1px solid #343435", backgroundColor: "#1a1a1a",
              }}
            >
              <h3 className="text-sm font-semibold mb-2 text-white">Results</h3>
              <p className="text-xs text-gray-500 mb-4">Conversion rate</p>
              <div className="flex items-center justify-between text-xs mb-2">
                <span>Original</span>
                <span>4.45%</span>
              </div>
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="text-green-500">Variation #1</span>
                <span className="text-green-500">5.18%</span>
              </div>
              <img
                src="https://placehold.co/400x200/2a2e45/e0e0e0?text=OMG"
                alt="Placeholder chart"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <div
          className="rounded p-6 shadow-lg flex flex-col justify-center items-center text-center hidden md:flex"
          style={{    border: "1px solid #343435",  backgroundColor: "#1a1a1a" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
            12%
          </h2>
          <p className="text-gray-500 text-sm">
            of ideas are proven to be winners
          </p>
        </div>

        <div
          className="rounded p-6 shadow-lg hidden md:flex"
          style={{     border: "1px solid #343435", backgroundColor: "#1a1a1a" }}
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            Code smarter, not harder
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            As a{" "}
            <span className="text-white font-bold">developer and engineer</span>
            , I want tools that make testing and experience creation a breeze.
          </p>
        </div>

        <div
          className="rounded p-6 shadow-lg"
          style={{    border: "1px solid #343435", backgroundColor: "#1a1a1a" }}
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            Calendly
            <span className="text-yellow-400 ml-2">★</span>
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Crafting personalized experiences for 20 million users
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read customer story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Animation = () => {
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

    if (textRef.current) {
      const scramble = new TextScramble(textRef.current);
      scramble.setText("The Sticky Card Showcase");

      const interval = setInterval(() => {
        scramble.setText("The Sticky Card Showcase");
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  const HomeCards = [
    { id: 1, component: <HomeCard1 /> },
    { id: 2, component: <HomeCard2 /> },
    { id: 3, component: <HomeCard3 /> },
    { id: 4, component: <HomeCard4 /> },
  ];

  const gridBackgroundStyle = {
    backgroundImage: `linear-gradient(90deg, #1a1a1a 1px, transparent 1px), linear-gradient(#1a1a1a 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
  };

  return (
    <div className="relative bg-[#0D0D0D] ">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={gridBackgroundStyle} />
        <CellEffect />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Feature />
      </div>

      <div className="relative z-20">
        <div className="text-center mb-7 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0  md:py-10 lg:py-10 xl:py-10 2xl:py-10">
          <div
            className="iceberg-regular text-white text-xl w-full uppercase border-t border-b border-white/20 p-3  
        bg-gradient-to-r from-black via-[#0D0D0D] to-black mx-auto text-center"
          >
            <h2 ref={textRef} className=" text-white mx-auto text-center ">
              The Sticky Card Showcase
            </h2>
          </div>
        </div>

        <div className="relative min-h-[100vh] md:min-h-[200vh]   md:px-0 ">
          <div className="flex flex-col items-center justify-start relative">
            {HomeCards.map((card, idx) => (
              <div
                key={card.id}
                className="w-11/12 md:w-9/12    sticky mb-4"
                style={{
                  top: `${70 + idx * 10}px`,
                  zIndex: 100 + idx,
                }}
              >
                {card.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
