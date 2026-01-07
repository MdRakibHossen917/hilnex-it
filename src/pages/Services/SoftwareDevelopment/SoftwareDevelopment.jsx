import React, { useState, useEffect } from "react";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const SoftwareDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const servicesData = {
    mainTitle: "Software Development Services",
    tagline:
      "We build smart, scalable, and secure software tailored to your business needs.From concept to deployment, our expert developers ensure every product is robust and future-ready.",
    services: [
      {
        category: "Custom Software Development",
        items: [
          "Enterprise Resource Planning (ERP)",
          "Customer Relationship Management (CRM)",
          "Business Process Automation",
          "Inventory Management Systems",
          "HR Management Solutions",
          "Custom Business Applications",
        ],
      },
      {
        category: "Web Applications",
        items: [
          "Single Page Applications (SPA)",
          "Progressive Web Apps (PWA)",
          "Real-time Collaboration Tools",
          "Dashboard & Analytics Platforms",
          "Content Management Systems",
          "E-learning Platforms",
        ],
      },
      {
        category: "Mobile Applications",
        items: [
          "Cross-platform Mobile Apps",
          "Native iOS & Android Development",
          "React Native Applications",
          "Flutter Development",
          "Mobile Game Development",
          "IoT Mobile Solutions",
        ],
      },
      {
        category: "Desktop Applications",
        items: [
          "Windows Desktop Applications",
          "macOS Software Development",
          "Linux Desktop Apps",
          "Electron-based Solutions",
          "Cross-platform Desktop Software",
          "System Utilities & Tools",
        ],
      },
    ],
    technologies: {
      frontend: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Electron",
        "Flutter",
      ],
      backend: ["Node.js", "Python", "Java", "C#", "PHP", "Ruby"],
      database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
      cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    },
    process: [
      {
        step: "01",
        title: "Requirement Analysis",
        description:
          "Deep dive into your business needs and technical requirements",
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "Create scalable and maintainable software architecture",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "Iterative development with continuous testing and feedback",
      },
      {
        step: "04",
        title: "Deployment & Maintenance",
        description: "Seamless deployment and ongoing support & updates",
      },
    ],
    specialties: [
      {
        title: "High Performance",
        description: "Optimized software for maximum speed and efficiency",
      },
      {
        title: "Secure & Reliable",
        description: "Enterprise-grade security and 99.9% uptime guarantee",
      },
      {
        title: "Multi-platform",
        description: "Solutions that work across all devices and platforms",
      },
      {
        title: "Scalable Architecture",
        description: "Grow your software as your business expands",
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
        
        body, html {
          background-color: #0d0d0d;
          font-family: 'Inter', sans-serif;
          color: #e0e0e0;
          overflow-x: hidden;
          width: 100%;
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
        
        /* Scroll fix - remove negative margins that cause overflow */
        .first-card-position {
          margin-top: -80px;
          margin-bottom: 20px;
        }
        
        .last-card-position {
          margin-top: 20px;
          margin-bottom: 40px;
        }
        
        @media (max-width: 768px) {
          .first-card-position {
            margin-top: -60px;
            margin-bottom: 15px;
          }
          
          .last-card-position {
            margin-top: 15px;
            margin-bottom: 30px;
          }
        }
        
        /* Content layers */
        .content-layer {
          position: relative;
          z-index: 30;
        }
        
        .effect-layer {
          position: absolute;
          z-index: 5;
          pointer-events: none;
        }
        
        .software-content {
          position: relative;
          z-index: 40;
          overflow: visible;
        }

        /* Hover effects */
        .btn-hover-instant {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-hover-instant:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 132, 2, 0.5);
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

        .specialty-card-hover:hover {
          transform: translateY(-5px);
          background: rgba(255, 132, 2, 0.05);
          border-color: rgba(255, 132, 2, 0.4);
          transition: all 0.3s ease;
        }

        /* Main container fix */
        .main-container {
          width: 100%;
          overflow: visible;
          position: relative;
        }
      `}</style>

      <section className="relative w-full h-[300px] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <ParticlesBackground />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <header className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-2xl md:text-2xl xl:text-5xl font-black mb-2 md:mb-6">
            <span className="text-white">Software</span>{" "}
            <span className="text-white">Development</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {servicesData.tagline}
          </p>
        </header>
      </section>

      <div className="main-container relative mx-auto w-full py-8 md:py-12 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer software-content">
          <section className="tech-container p-4 md:p-8 w-11/12 md:w-9/12 mx-auto first-card-position">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-2xl xl:text-3xl font-bold text-white">
                Platforms Software Development
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                Innovation • Scalability • Excellence
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4 w-11/12 md:w-9/12 mx-auto mb-8 md:mb-12 mt-8">
            {servicesData.services.map((service, index) => (
              <div
                key={index}
                className="tech-container card-hover-instant process-card-hover p-6"
                style={{ position: "relative", zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2">
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

          <section className="tech-container p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Our <span className="text-white">Technology</span> Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(servicesData.technologies).map(
                ([category, techs]) => (
                  <div key={category} className="text-center">
                    <h3 className="text-lg font-semibold mb-4 neon-accent capitalize">
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

          <section className="tech-container p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">
              Our <span className="text-white">Development</span> Methodology
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicesData.process.map((step, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-2xl font-black mb-3 neon-accent">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">
              Why Choose <span className="text-white">Our</span> Software Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="tech-container text-center p-6 specialty-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-lg font-semibold mb-2 neon-accent">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-8 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 neon-accent">
                Ready to Build Your Custom Software?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's transform your business ideas into powerful, scalable
                software solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-8 rounded transition duration-300 btn-hover-instant">
                  Start Your Project
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-instant">
                  View Case Studies
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default SoftwareDevelopment;