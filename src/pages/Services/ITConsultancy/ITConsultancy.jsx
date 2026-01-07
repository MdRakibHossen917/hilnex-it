import React, { useState, useEffect } from "react";

import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const ITConsultancy = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const preloadContent = async () => {
      try {
        await Promise.all([new Promise((resolve) => setTimeout(resolve, 300))]);

        setContentLoaded(true);

        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log("Preload completed");
        setContentLoaded(true);
        setTimeout(() => setLoading(false), 800);
      }
    };

    preloadContent();
  }, []);

  const servicesData = {
    mainTitle: "IT Consultancy Services",
    tagline:
      "Navigate the complex tech landscape with confidence. Our IT consultants analyze, plan, and implement solutions that align technology with your business goals. Whether you need cloud migration, system integration, or digital transformation — Hilnex is your trusted technology advisor.",
    consultancyServices: [
      {
        category: "Strategic IT Planning",
        items: [
          "IT Strategy Development",
          "Digital Transformation Roadmap",
          "Technology Assessment & Audit",
          "IT Infrastructure Planning",
          "Cloud Migration Strategy",
          "Digital Innovation Consulting",
        ],
      },
      {
        category: "Cybersecurity Consulting",
        items: [
          "Security Risk Assessment",
          "Cybersecurity Framework Implementation",
          "Compliance & Governance",
          "Incident Response Planning",
          "Security Awareness Training",
          "Penetration Testing & Audits",
        ],
      },
      {
        category: "Cloud Solutions Consulting",
        items: [
          "Cloud Strategy & Architecture",
          "Multi-cloud Implementation",
          "Cloud Cost Optimization",
          "DevOps & CI/CD Consulting",
          "Containerization Strategy",
          "Cloud Security & Compliance",
        ],
      },
      {
        category: "Data & Analytics Consulting",
        items: [
          "Data Strategy Development",
          "Big Data Architecture",
          "Business Intelligence Solutions",
          "Data Governance Framework",
          "Machine Learning Strategy",
          "Data Migration Planning",
        ],
      },
    ],
    expertiseAreas: {
      infrastructure: [
        "Network Architecture",
        "Server Infrastructure",
        "Storage Solutions",
        "Virtualization",
        "Disaster Recovery",
        "IT Operations",
      ],
      security: [
        "Network Security",
        "Endpoint Protection",
        "Identity Management",
        "Data Encryption",
        "Security Monitoring",
        "Compliance",
      ],
      cloud: [
        "AWS Solutions",
        "Microsoft Azure",
        "Google Cloud",
        "Hybrid Cloud",
        "Cloud Native",
        "Serverless Architecture",
      ],
      business: [
        "IT Governance",
        "Risk Management",
        "IT Budgeting",
        "Vendor Management",
        "Project Management",
        "Digital Strategy",
      ],
    },
    process: [
      {
        step: "01",
        title: "Discovery & Assessment",
        description:
          "Comprehensive analysis of your current IT landscape and business needs",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Create tailored IT strategies aligned with your business objectives",
      },
      {
        step: "03",
        title: "Implementation Support",
        description:
          "Guide and support the execution of technology initiatives",
      },
      {
        step: "04",
        title: "Optimization & Review",
        description: "Continuous improvement and performance monitoring",
      },
    ],
    benefits: [
      {
        metric: "40%",
        description: "Average reduction in IT costs",
      },
      {
        metric: "99.9%",
        description: "System uptime guarantee",
      },
      {
        metric: "50%",
        description: "Faster project delivery",
      },
      {
        metric: "200+",
        description: "Successful IT transformations",
      },
    ],
    specialties: [
      {
        title: "Strategic Alignment",
        description:
          "IT solutions perfectly aligned with business goals and objectives",
      },
      {
        title: "Technology Expertise",
        description:
          "Deep knowledge across latest technologies and best practices",
      },
      {
        title: "Risk Mitigation",
        description:
          "Proactive identification and management of technology risks",
      },
      {
        title: "ROI Focused",
        description:
          "Solutions designed to deliver maximum business value and return",
      },
    ],
    industries: [
      {
        name: "Healthcare",
        focus: "HIPAA Compliance, EHR Systems, Telemedicine",
      },
      {
        name: "Finance",
        focus: "FinTech Solutions, Compliance, Security",
      },
      {
        name: "Manufacturing",
        focus: "IoT, Automation, Supply Chain",
      },
      {
        name: "Retail",
        focus: "E-commerce, POS Systems, CRM",
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
        .metric-gradient {
          background: linear-gradient(135deg, #ff8402 0%, #ffaa33 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        
        .consultancy-content {
          position: relative;
          z-index: 40;
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
        
        /* Preloaded Hover Effects */
        .hover-preload {
          opacity: 0;
          position: absolute;
          pointer-events: none;
          z-index: -9999;
        }
        
        
        .btn-hover-instant {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-hover-instant:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 132, 2, 0.5);
        }
        
       
        .text-hover-instant {
          transition: all 0.3s ease;
        }
        .text-hover-instant:hover {
          color: #ff8402;
          text-shadow: 0 0 8px rgba(255, 132, 2, 0.7);
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
        
        
        .benefit-hover:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(255, 132, 2, 0.3);
          transition: all 0.3s ease;
        }

        
        .industry-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 12px 35px rgba(255, 132, 2, 0.25);
          transition: all 0.3s ease;
        }

     
        .consulting-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .consulting-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
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
       
        .glow-border-bottom {
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    to right, 
    transparent 5%, 
    #ff8402 25%,    
    white 50%,      
    #ff8402 75%,    
    transparent 95%
  );
  border-image-slice: 1;
  display: inline-block;
  padding-bottom: 8px;
}

@media (min-width: 768px) {
  .glow-border-bottom {
    width: 400px !important;
  }
}

@media (min-width: 1024px) {
  .glow-border-bottom {
    width: 500px !important;
  }
}

@media (min-width: 1280px) {
  .glow-border-bottom {
    width: 600px !important;
  }
}
      `}</style>

      <div className="hover-preload">
        {servicesData.consultancyServices.map((service, index) => (
          <div key={index}>
            <h3>{service.category}</h3>
            {service.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        ))}
        {servicesData.specialties.map((specialty, idx) => (
          <div key={idx}>
            <h3>{specialty.title}</h3>
            <p>{specialty.description}</p>
          </div>
        ))}
        {servicesData.process.map((step, idx) => (
          <div key={idx}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
        {servicesData.benefits.map((benefit, idx) => (
          <div key={idx}>
            <span>{benefit.metric}</span>
            <p>{benefit.description}</p>
          </div>
        ))}
        {servicesData.industries.map((industry, idx) => (
          <div key={idx}>
            <h3>{industry.name}</h3>
            <p>{industry.focus}</p>
          </div>
        ))}

        {Object.values(servicesData.expertiseAreas)
          .flat()
          .map((expertise, idx) => (
            <span key={idx}>{expertise}</span>
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
            <span className="text-white">IT</span>{" "}
            <span className="text-white">Consultancy</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {servicesData.tagline}
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full  md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer consultancy-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-2xl xl:text-3xl font-bold text-white">
                Strategic IT Consulting
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                Strategy • Security • Cloud • Digital Transformation
              </p>
            </div>
          </section>

          <section className="relative w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6 mt-12 md:mt-8 md:mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicesData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant benefit-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-3xl font-black mb-2 metric-gradient">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1 text-center">
              <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 glow-border-bottom inline-block">
                Industry Expertise
              </span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicesData.industries.map((industry, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant industry-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-white text-hover-instant">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{industry.focus}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4 w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6">
            {servicesData.consultancyServices.map((service, index) => (
              <div
                key={index}
                className="tech-container p-6 consulting-card-hover"
                style={{ position: "relative", zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2 text-hover-instant">
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

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto  ">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center  ">
              Our <span className="text-white">Consulting</span> Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(servicesData.expertiseAreas).map(
                ([category, expertise]) => (
                  <div key={category} className="text-center">
                    <h3 className="text-lg font-semibold mb-4 neon-accent capitalize text-hover-instant">
                      {category === "infrastructure"
                        ? "IT Infrastructure"
                        : category === "security"
                        ? "Cybersecurity"
                        : category === "cloud"
                        ? "Cloud Solutions"
                        : "Business IT"}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {expertise.map((item, index) => (
                        <span
                          key={index}
                          className="tech-pill px-3 py-1 rounded text-xs font-medium tech-pill-hover"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center ">
              Our <span className="text-white">Consulting</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {servicesData.process.map((step, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-2xl font-black mb-3 neon-accent">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white text-hover-instant">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto ">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center ">
              Our <span className="text-white">Consulting</span> Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="text-center p-4 specialty-card-hover process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-lg font-semibold mb-2 neon-accent text-hover-instant">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position  ">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Transform Your IT Strategy?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's work together to develop a comprehensive IT strategy that
                drives business growth, enhances security, and maximizes
                technology investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-8 rounded transition duration-300 btn-hover-instant">
                  Schedule Consultation
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-instant">
                  Download Brochure
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

export default ITConsultancy;
