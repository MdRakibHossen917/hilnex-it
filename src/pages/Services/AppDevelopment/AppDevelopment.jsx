import React, { useState, useEffect } from "react";

import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import { FaSpinner } from "react-icons/fa";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const AppDevelopment = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const preloadContent = async () => {
      try {
        // Fixed video preload - using HTMLVideoElement properly
        if (videobg) {
          const video = document.createElement("video");
          video.src = videobg;
          video.preload = "auto";
        }

        await Promise.all([new Promise((resolve) => setTimeout(resolve, 500))]);

        setContentLoaded(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log("Preload completed");
        setContentLoaded(true);
        setTimeout(() => setLoading(false), 1000);
      }
    };

    preloadContent();
  }, []);

  const servicesData = {
    mainTitle: "App Development Services",
    tagline:
      "Connect with your audience anytime, anywhere. Our mobile app team crafts seamless, feature-rich applications for both Android and iOS, ensuring superior performance and delightful user experiences.",
    appTypes: [
      {
        category: "Mobile App Development",
        items: [
          "iOS Native Apps (Swift, Objective-C)",
          "Android Native Apps (Kotlin, Java)",
          "Cross-platform React Native",
          "Flutter Applications",
          "Progressive Web Apps (PWA)",
          "Hybrid Mobile Applications",
        ],
      },
      {
        category: "Web Application Development",
        items: [
          "Single Page Applications (SPA)",
          "Progressive Web Apps (PWA)",
          "Real-time Web Applications",
          "E-commerce Web Apps",
          "Enterprise Web Portals",
          "CMS-based Applications",
        ],
      },
      {
        category: "App Categories",
        items: [
          "E-commerce & Retail Apps",
          "Social Media Applications",
          "Healthcare & Fitness Apps",
          "Education & E-learning Platforms",
          "On-demand Service Apps",
          "Gaming & Entertainment Apps",
        ],
      },
      {
        category: "App Services",
        items: [
          "UI/UX Design & Prototyping",
          "App Store Optimization (ASO)",
          "API Integration & Development",
          "Cloud Backend Solutions",
          "App Maintenance & Support",
          "Performance Optimization",
        ],
      },
    ],
    technologies: {
      mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Java", "Xamarin"],
      frontend: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Next.js",
        "Nuxt.js",
      ],
      backend: [
        "Node.js",
        "Python",
        "Firebase",
        "MongoDB",
        "PostgreSQL",
        "AWS",
      ],
      tools: ["Git", "Docker", "Jenkins", "Figma", "Android Studio", "Xcode"],
    },
    process: [
      {
        step: "01",
        title: "Strategy & Planning",
        description:
          "Define app goals, target audience, and feature requirements",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Create intuitive and engaging user interfaces and experiences",
      },
      {
        step: "03",
        title: "Development & Testing",
        description:
          "Agile development with continuous testing and quality assurance",
      },
      {
        step: "04",
        title: "Deployment & Launch",
        description:
          "App store submission, deployment, and post-launch support",
      },
    ],
    features: [
      {
        title: "Cross-Platform",
        description: "Build once, run everywhere with cross-platform solutions",
      },
      {
        title: "High Performance",
        description: "Optimized apps with fast loading and smooth performance",
      },
      {
        title: "Beautiful UI/UX",
        description:
          "Engaging designs that provide exceptional user experience",
      },
      {
        title: "Secure & Reliable",
        description: "Enterprise-grade security and 99.9% uptime guarantee",
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
          border-radius: 0.2rem;
          box-shadow: 0 0 2px rgba(255, 132, 2, 0.15);
          transition: all 0.5s ease-in-out;
        }
        .grid-bg-pattern {
          background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), 
                           linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .service-feature {
          position: relative;
          padding-left: 1.5rem;
        }
        .service-feature:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #ff8402;
          font-weight: bold;
        }
        .tech-badge {
          background: rgba(255, 132, 2, 0.1);
          border: 1px solid rgba(255, 132, 2, 0.3);
          color: #ff8402;
        }
        .tech-pill {
          background: rgba(255, 132, 2, 0.05);
          border: 1px solid rgba(255, 132, 2, 0.2);
          color: #ff8402;
        }
        .platform-card {
          background: linear-gradient(135deg, rgba(255, 132, 2, 0.05) 0%, rgba(255, 132, 2, 0.02) 100%);
          border: 1px solid rgba(255, 132, 2, 0.15);
        }
        
   
        .first-card-position {
          transform: translateY(-50%);
          margin-bottom: -100px;
        }
        
        .last-card-position {
          transform: translateY(50%);
          margin-top: -100px;
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

       
        .content-layer {
          position: relative;
          z-index: 30;
        }
        
        .effect-layer {
          position: absolute;
          z-index: 5;
          pointer-events: none;
        }
        
        .background-layer {
          z-index: 1;
        }

    
        .appdev-content {
          position: relative;
          z-index: 40;
        }
      
        .hover-preload {
          opacity: 0;
          position: absolute;
          pointer-events: none;
          z-index: -9999;
        }
        
    
        .btn-hover-effect {
          transition: all 0.3s ease-in-out;
        }
        .btn-hover-effect:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255, 132, 2, 0.4);
        }
        
       

       
        .card-hover-instant {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover-instant:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 30px rgba(255, 132, 2, 0.25);
        }

     
        .service-feature-hover:hover {
          color: #ff8402;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }

        
        .tech-pill-hover:hover {
          background: rgba(255, 132, 2, 0.15);
          border-color: rgba(255, 132, 2, 0.5);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }

   
        .process-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        
        .feature-card-hover:hover {
          transform: translateY(-5px);
          background: rgba(255, 132, 2, 0.05);
          border-color: rgba(255, 132, 2, 0.4);
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="hover-preload">
        {servicesData.appTypes.map((service, index) => (
          <div key={index}>
            <h3>{service.category}</h3>
            {service.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
        {servicesData.features.map((feature, idx) => (
          <div key={idx}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

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

        <header className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-2xl md:text-2xl xl:text-5xl font-black mb-2 md:mb-6">
            <span className="text-white">App</span>{" "}
            <span className="text-white">Development</span>
          </h1>

          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {servicesData.tagline}
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full   md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer appdev-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-2xl xl:text-3xl font-bold text-white">
                Platforms App Development
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                Mobile • Web • Cross-Platform • Native
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4 w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6 mt-12 md:mt-12">
            {servicesData.appTypes.map((service, index) => (
              <div
                key={index}
                className="tech-container p-6 card-hover-instant"
                style={{ position: "relative", zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2  ">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="service-feature text-gray-300 text-sm service-feature-hover"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="tech-container p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto  ">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center  ">
              Our <span className="text-white">Technology</span> Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {Object.entries(servicesData.technologies).map(
                ([category, techs]) => (
                  <div key={category} className="text-center">
                    <h3 className="text-lg font-semibold mb-4 neon-accent capitalize  ">
                      {category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {techs.map((tech, index) => (
                        <span
                          key={index}
                          className="tech-pill px-3 py-1 rounded text-xs font-medium tech-pill-hover"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center  ">
              Key <span className="text-white">Features</span> & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 ">
              {servicesData.features.map((feature, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center feature-card-hover process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-white ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-8 mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center  ">
              Our <span className="text-white">App Development</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {servicesData.process.map((step, index) => (
                <div
                  key={index}
                  className="text-center p-4 process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-2xl font-black mb-3 neon-accent">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white text-hover-effect">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4   md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position  ">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4  ">
                Ready to Build Your Next App?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's create a stunning, high-performance app that engages your
                users and drives business growth across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-8 rounded transition duration-300 transform btn-hover-effect">
                  Start Your App Project
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-effect">
                  View App Portfolio
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="">
        <GlobMapAllPage />
      </div>
    </>
  );
};

export default AppDevelopment;
