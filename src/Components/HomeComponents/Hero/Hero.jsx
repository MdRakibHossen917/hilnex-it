import React, { useEffect, useRef, useMemo, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typed from "typed.js";
import {
  FaUsers,
  FaProjectDiagram,
  FaGlobe,
  FaAward,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaTimes,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import ParticlesBackground from "../../Shared/ParticlesBackground/ParticlesBackground";
import "./Hero.css";

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let start = 0;
    const totalMilSec = duration * 1000;
    const incrementTime = 20;
    const step = Math.max(1, end / (totalMilSec / incrementTime));

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
        return;
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

const Hero = () => {
  const typedRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(
    () => [
      {
        id: 1,
        icon: <FaUsers className="text-white" />,
        number: 1200,
        suffix: "+",
        label: "Clients",
      },
      {
        id: 2,
        icon: <FaProjectDiagram className="text-white" />,
        number: 350,
        suffix: "+",
        label: "Projects",
      },
      {
        id: 3,
        icon: <FaGlobe className="text-white" />,
        number: 125,
        suffix: "",
        label: "Countries",
      },
      {
        id: 4,
        icon: <FaAward className="text-white" />,
        number: 150,
        suffix: "+",
        label: "Awards",
      },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        href: "https://www.facebook.com/md.rakib.hossen.41751",
        icon: <FaFacebookF />,
        color: "hover:text-[#1877f2]",
      },
      {
        href: "https://www.linkedin.com/in/rakibhossen917/",
        icon: <FaLinkedinIn />,
        color: "hover:text-[#0a66c2]",
      },
      {
        href: "https://github.com/MdRakibHossen917",
        icon: <FaGithub />,
        color: "hover:text-[#ffffff]",
      },
      {
        href: "#",
        icon: <FaTwitter />,
        color: "hover:text-[#1da1f2]",
      },
    ],
    []
  );

  const timeSlots = useMemo(
    () => [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
      "05:00 PM",
    ],
    []
  );

  useEffect(() => {
    if (!typedRef.current) return;

    const options = {
      strings: [
        "Web Development",
        "Soft. Development",
        "App Development",
        "Graphics Design",
        "Digital Marketing",
        "Cyber Security",
        "AI Solutions",
        "IT Consultancy",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);
    return threeMonthsLater.toISOString().split("T")[0];
  };

  const handleScheduleClick = () => {
    setShowModal(true);
    setSelectedDate("");
    setSelectedTime("");
    setIsSuccess(false);
  };

  const handleDeleteDateTime = () => {
    setSelectedDate("");
    setSelectedTime("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);

      setTimeout(() => {
        setShowModal(false);
        setSelectedDate("");
        setSelectedTime("");
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      alert("Error scheduling appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ScheduleModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
        <div className="bg-white rounded max-w-md w-full mx-auto animate-slideUp shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">
              Schedule Appointment
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
              aria-label="Close modal dialog"
             
            >
              <FaTimes size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="p-6">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Successfully Scheduled!
                </h3>
                <p className="text-gray-600">
                  Your appointment has been scheduled for {selectedDate} at{" "}
                  {selectedTime}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <FaCalendarAlt className="mr-2 text-[#ff8402]" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getMinDate()}
                    max={getMaxDate()}
                    aria-label="Select appointment date"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff8402] focus:border-transparent text-gray-800 bg-white"
                    style={{ colorScheme: 'light' }}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <FaClock className="mr-2 text-[#ff8402]" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        aria-label={`Select time ${time}`}
                        className={`p-3 text-sm border rounded transition-all ${
                          selectedTime === time
                            ? "bg-[#ff8402] text-white border-[#ff8402]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#ff8402]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {(selectedDate || selectedTime) && (
                  <div className="mb-6 p-4 bg-gray-50 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">
                          Selected Schedule:
                        </p>
                        <p className="font-semibold text-gray-800">
                          {selectedDate} at {selectedTime}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleDeleteDateTime}
                        className="text-red-500 hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1"
                        aria-label="Clear selected date and time"
                        title="Clear selection"
                      >
                        <FaTimes size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className="w-full bg-[#ff8402] text-white py-3 px-4 rounded font-semibold hover:bg-[#e67602] disabled:bg-[#ff8402] disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Scheduling..." : "Confirm Schedule"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <ScheduleModal />

      <section
        ref={heroSectionRef}
        className="hero-section relative bg-black text-white flex flex-col justify-between overflow-hidden md:h-screen"
      >
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
          <ParticlesBackground restrictClickToContainer={heroSectionRef} />
        </div>

        <div className="relative z-30 w-11/12 md:w-9/12 lg:md:w-9/12 mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-2 lg:gap-2 py-3 md:py-8 lg:py-10 flex-1 md:flex-none">
          <div className="flex-1 flex flex-col justify-center text-left w-full mt-4">
            <h1 className="text-[1.5rem] uppercase sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.65rem]  2xl:text-[2.5rem] font-bold mt-20 md:mb-2 leading-tight">
              <span className="bg-gradient-to-r from-white to-[#ffffff] text-transparent bg-clip-text block">
                BEST IT & SOFTWARE
              </span>

              <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] text-transparent text-[1.5rem] uppercase sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.65rem]  2xl:text-[2.5rem]  bg-clip-text block my-1 xl:my-3 md:my-3">
                COMPANY IN BANGLADESH
              </span>

              <span className="text-[1.5rem] uppercase sm:text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.65rem]  2xl:text-[2.5rem]  font-bold mt-3">
                <span className="text-[#fdfdfd]">for</span>{" "}
                <span className="text-[#ff8402]">
                  <span ref={typedRef}></span>
                </span>
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-xs md:text-sm lg:text-lg   max-w-2xl">
              Empowering Businesses Through Technology Build
              <span className="inline lg:hidden">
                <br />
              </span>
              <span className="hidden lg:inline">, </span>
              Grow and Transform Your Brand With Hilnex.
            </p>
            
            <div className="mt-4 md:mt-6 flex flex-col items-center gap-4 w-full max-w-[200px] md:max-w-[250px] lg:max-w-[250px] xl:max-w-[300px]">
              <button
                onClick={handleScheduleClick}
                aria-label="Schedule a free consultation call"
                className="
    neon-btn
    relative inline-flex 
    w-full
    justify-center
    px-6 py-3
    text-lg
    text-white font-semibold tracking-wide
    overflow-hidden transition-all duration-300
    hover:scale-105 active:scale-95
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-[#ff8402] focus:ring-offset-2 focus:ring-offset-black
  "
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Schedule a Call
              </button>

              <div className="flex justify-between items-center w-full text-xl cursor-pointer border border-white/20 overflow-hidden">
                {socialLinks.map((link, index) => {
                  const platformName = link.icon.type.name.replace("Fa", "");
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${platformName}`}
                      className={`
        flex-1 flex items-center justify-center
        h-11 md:h-13 lg:h-15 border-r border-white/20 last:border-r-0
        transition-all duration-300 
        text-white/80 hover:text-white  
        ${link.color}
      `}
                    >
                      {React.cloneElement(link.icon, { "aria-hidden": "true" })}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center md:justify-end w-full">
            <div className="w-full max-w-[400px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] md:mt-1 lg:mt-8 xl:-translate-x-[50px] 2xl:-translate-x-[150px] transform">
              <DotLottieReact
                src="https://lottie.host/1a6ba6cf-6100-4516-83ad-8de76c8ed66f/viHwvdJwpN.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 w-11/12 md:w-9/12 mx-auto mb-6 md:mb-4 lg:mb-6 md:-mt-8   transition-all duration-500 ${
            loading
              ? "blur-sm opacity-60 pointer-events-none"
              : "blur-0 opacity-100"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded shadow-2xl overflow-hidden bg-white/10">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`group flex items-center justify-center py-2 md:py-3 px-4 transition-all duration-300 border-b border-white/20 ${
                  index % 2 === 1 ? "border-l border-white/20" : ""
                } md:border-b-0 ${
                  index < stats.length - 1 ? "md:border-r border-white/20" : ""
                }`}
              >
                <div className="flex items-center gap-5 w-full lg:justify-center">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#797777]/40 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl md:text-2xl">{stat.icon}</div>
                  </div>
                  <div className="flex flex-col justify-center text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-[#ff8402] transition-colors duration-300">
                      <Counter
                        end={stat.number}
                        duration={10}
                        suffix={stat.suffix}
                      />
                    </h3>
                    <p className="text-gray-400 text-base">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full marquee-wrapper1 md:mt-auto">
          <div className="marquee-container">
            <div className="marquee-text">
              {[...Array(5)].map((_, index) => (
                <React.Fragment key={index}>
                  <span className="uppercase">
                    Hilnex Ltd is a trusted IT company in Bangladesh offering
                    web, software, and app development, graphics design, digital
                    marketing, and IT consultancy.
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
