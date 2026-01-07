import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
  FaComments,
  FaBullseye,
  FaEye,
  FaUsers,
} from "react-icons/fa";
import CellEffect from "../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";
import OfferCard from "../../Components/Shared/OfferCard/OfferCard";
import RegulerLoadingSpinner from "../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const ServiceIcon = ({ serviceName, className }) => {
  const iconProps = { className };

  const iconMap = {
    "Web Development": <FaCode {...iconProps} />,
    "App Development": <FaMobileAlt {...iconProps} />,
    "Software Development": <FaLaptopCode {...iconProps} />,
    "Graphic Design": <FaPalette {...iconProps} />,
    "Digital Marketing": <FaChartLine {...iconProps} />,
    "Cyber Security": <FaShieldAlt {...iconProps} />,
    "Technical Support": <FaHeadset {...iconProps} />,
    "Customer Support": <FaComments {...iconProps} />,
  };

  return iconMap[serviceName] || <FaCode {...iconProps} />;
};

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const companyData = {
    name: "HiLNEX Limited",
    tagline:
      "Hilnex Limited is a next-generation IT solutions company based in Bangladesh.Our expertise spans Web & Software Development, Mobile Apps, Branding, Digital Marketing, and IT Consultancy.",
    story:
      "Born in 2018 with a vision to redefine technology, Hilnex started as a small team of dreamers who believed innovation should be simple, powerful, and human-focused. What began as a bold startup idea has evolved into a trusted global tech partner — delivering intelligent digital transformation, secure cloud solutions, and custom software that empower businesses to thrive in a fast-changing world",
    team: "Our strength lies in our diversity and dedication. We are a global team of 80+ innovators—AI specialists, cloud architects, and design thinkers—all united by a commitment to ethical technology and continuous learning. We prioritize expertise, empathy, and initiative, fostering a collaborative culture that translates directly to client success.",
    mission:
      "To accelerate business growth through creative technology, scalable solutions, and long-term digital strategy — turning ideas into impact.",
    vision:
      "To become a global leader in intelligent software and digital transformation — where innovation meets reliability, and technology empowers every success story.",
    coreServices: [
      "Web Development",
      "App Development",
      "Software Development",
      "Graphic Design",
      "Digital Marketing",
      "Cyber Security",
      "Technical Support",
      "Customer Support",
    ],
    contact: {
      phone1: "01300981501",
      phone2: "",
      email1: "mdrakibhossencse@gmail.com",
      email2: "",
      address:
        "Muktobangla Complex, Suite-124, Level-6, Mirpur-1, Dhaka-1216, Bangladesh.",
    },
    whyUs: [
      {
        reason:
          "Innovative by Design: We merge creativity with cutting-edge tech like AI, Cloud & Web3 to keep your business future-ready.",
        icon: "code",
      },
      {
        reason:
          "Transparent & Trusted: Open communication and ethical development are the foundations of every partnership.",
        icon: "lock",
      },
      {
        reason:
          "Driven by Results: From startups to enterprises, we deliver measurable impact — faster, smarter, and more efficiently.",
        icon: "handshake",
      },
      {
        reason:
          "Built for Growth: Your success fuels ours. We don't just develop software — we develop long-term partnerships.",
        icon: "zap",
      },
    ],
  };

  if (loading) {
    return <RegulerLoadingSpinner />;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        
        body {
          background-color: #0d0d0d;
          font-family: 'Inter', sans-serif;
          color: #e0e0e0;
        }
        .neon-accent {
          color: #ff8402;
          text-shadow: 0 0 2px rgba(255, 132, 2, 0.5);
        }
        .tech-container {
          position: relative;
          background-color: #000000;
          border: 1px solid rgba(255, 132, 2, 0.2);
          border-radius: 0.1rem;
          box-shadow: 0 0 2px rgba(255, 132, 2, 0.15);
          transition: all 0.5s ease-in-out;
        }
      
        .grid-bg-pattern {
          background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), 
                           linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        
        .first-card-position {
          transform: translateY(-50%);
          margin-bottom: -100px;
        }
        
        .last-card-position {
          transform: translateY(50%);
          margin-top: -120px;
        }
        
        @media (max-width: 768px) {
          .first-card-position {
            transform: translateY(-30%);
            margin-bottom: -60px;
          }
          
          .last-card-position {
            transform: translateY(30%);
            margin-top: -60px;
          }
        }
      `}</style>

      <section className="relative w-full h-[300px] md:h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{ opacity: 1 }}
        >
          <ParticlesBackground />
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50"
          style={{ transition: "none", opacity: 1 }}
        ></div>

        <header className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6  ">
          <h1 className="text-2xl md:text-2xl xl:text-5xl  font-black mb-2 md:mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-white">Hilnex</span>{" "}
            <span className="text-white">Limited</span>
          </h1>
          <p className="text-xs sm:text-xl text-center text-gray-300 max-w-3xl mx-auto">
            {companyData.tagline}
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full  md:py-20 grid-bg-pattern">
        <div className="absolute inset-0 h-full">
          <CellEffect />
        </div>

        <section className="tech-container p-4 md:p-8 mb-4 md:mb-16   w-11/12 md:w-9/12 mx-auto relative z-20 first-card-position  -mt-12 md:-mt-20">
          <div className="text-left md:text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Empowering Your Digital Future
            </h2>
            <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
            <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
              Innospationt • Solutions • Growth
            </p>
          </div>
        </section>

        <section className="tech-container p-4 md:p-8 mb-4 md:mb-6 w-11/12 md:w-9/12  mx-auto relative z-20 mt-8 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-white text-center tracking-wide">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8 border-t border-b border-[#ff8402]/30 py-6">
            <div className="p-4 relative">
              <FaBullseye className="w-8 h-8 absolute -top-4 left-1/2 transform -translate-x-1/2 neon-accent" />
              <h3 className="text-2xl font-bold mb-3 neon-accent text-center mt-4">
                Mission
              </h3>
              <p className="text-gray-300 text-center leading-relaxed border-t border-dotted border-[#ff8402]/10 pt-3">
                {companyData.mission}
              </p>
            </div>

            <div className="p-4 relative md:border-l border-[#ff8402]/20">
              <FaEye className="w-8 h-8 absolute -top-4 left-1/2 transform -translate-x-1/2 neon-accent" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 neon-accent text-center mt-4">
                Vision
              </h3>
              <p className="text-gray-300 text-center leading-relaxed border-t border-dotted border-[#ff8402]/10 pt-3">
                {companyData.vision}
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-5 gap-4 md:gap-4 mb-4 md:mb-6 w-11/12 md:w-9/12  mx-auto">
          <section className="md:col-span-3 tech-container p-4 md:p-8 relative z-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2">
              Our Journey
            </h2>
            <p className="text-gray-300 leading-relaxed mt-4">
              {companyData.story}
            </p>
          </section>

          <section className="md:col-span-2 tech-container p-4 md:p-8 relative z-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2">
              Our Team
            </h2>

            <p className="text-gray-300 leading-relaxed mt-4">
              {companyData.team}
            </p>
          </section>
        </div>

        <section className="tech-container p-8 mb-12 md:mb-6 w-11/12 md:w-9/12  mx-auto relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white text-center">
            The Hilnex Advantage: Why Partner With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            {companyData.whyUs.map((item, index) => (
              <div
                key={index}
                className="flex space-x-4 border-l-4 border-[#ff8402] pl-4 py-2"
              >
                <FaCode className="w-8 h-8 flex-shrink-0 neon-accent mt-1" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-container p-8 -mt-8 md:-mt-0   w-11/12 md:w-9/12  mx-auto relative z-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            <span className="text-white">Get</span> In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaPhoneAlt className="w-8 h-8 mx-auto mb-4 neon-accent" />
              <h3 className="text-lg font-semibold mb-2 neon-accent">Phone</h3>
              <p className="text-gray-300">{companyData.contact.phone1}</p>
              <p className="text-gray-300">{companyData.contact.phone2}</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="w-8 h-8 mx-auto mb-4 neon-accent" />
              <h3 className="text-lg font-semibold mb-2 neon-accent">Email</h3>
              <p className="text-gray-300">{companyData.contact.email1}</p>
              <p className="text-gray-300">{companyData.contact.email2}</p>
            </div>
            <div className="text-center">
              <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-4 neon-accent" />
              <h3 className="text-lg font-semibold mb-2 neon-accent">
                Address
              </h3>
              <p className="text-gray-300 text-sm leading-tight">
                {companyData.contact.address}
              </p>
            </div>
          </div>
        </section>

        <section className="tech-container p-8 -mb-10 w-11/12 md:w-9/12  mx-auto relative z-20 hidden md:block last-card-position">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Our <span className="text-white">Core</span> Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#ff8402]/20 rounded p-6 text-center group hover:border-[#ff8402]/50 hover:bg-[#252525] transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-15">
        <OfferCard />
      </div>
    </>
  );
};

export default AboutUs;
