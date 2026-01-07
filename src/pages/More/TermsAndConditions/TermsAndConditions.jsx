import React, { useState, useEffect } from "react";
import { FaSpinner, FaPlay, FaFileContract, FaBalanceScale, FaGavel, FaUserShield, FaCheck, FaHeadset } from "react-icons/fa";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const TermsAndConditions = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const preloadContent = async () => {
      try {
        await Promise.all([
          new Promise(resolve => setTimeout(resolve, 300)),
        ]);
        
        setContentLoaded(true);
        
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Preload completed");
        setContentLoaded(true);
        setTimeout(() => setLoading(false), 2000);
      }
    };

    preloadContent();
  }, []);

  const termsSections = [
    {
      icon: <FaFileContract className="text-4xl text-[#ff8402]" />,
      title: "Acceptance of Terms",
      description: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      icon: <FaBalanceScale className="text-4xl text-[#ff8402]" />,
      title: "Use License",
      description: "Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only."
    },
    {
      icon: <FaUserShield className="text-4xl text-[#ff8402]" />,
      title: "Disclaimer",
      description: "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied."
    },
    {
      icon: <FaGavel className="text-4xl text-[#ff8402]" />,
      title: "Limitations",
      description: "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials."
    },
    {
      icon: <FaFileContract className="text-4xl text-[#ff8402]" />,
      title: "Revisions and Errata",
      description: "The materials appearing on our website could include technical, typographical, or photographic errors."
    },
    {
      icon: <FaBalanceScale className="text-4xl text-[#ff8402]" />,
      title: "Links",
      description: "We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site."
    }
  ];

  const keyPoints = [
    "Acceptance of terms is mandatory for service use",
    "Personal use license granted for website access",
    "No warranties provided for website materials",
    "Liability limitations apply to all users",
    "Terms may be updated without prior notice",
    "Governing law applies to all disputes",
    "User content must comply with applicable laws",
    "Account termination possible for violations"
  ];

  const userResponsibilities = [
    "Use services only for lawful purposes",
    "Maintain confidentiality of account credentials",
    "Do not interfere with website operations",
    "Respect intellectual property rights",
    "Provide accurate information when required",
    "Report security vulnerabilities promptly"
  ];

  const benefits = [
    "Clear and transparent terms of service",
    "Legal protection for both users and company",
    "Well-defined user rights and responsibilities",
    "Regular updates to comply with changing laws",
    "Easy-to-understand legal documentation",
    "Quick resolution process for disputes",
    "Protection of intellectual property rights",
    "Fair usage policies for all users"
  ];

  const specifications = [
    {
      category: "Legal Framework",
      details: [
        "Terms of Service Agreement",
        "Privacy Policy Compliance",
        "User Agreement",
        "Service Level Agreement",
      ],
    },
    {
      category: "User Rights",
      details: [
        "Right to Service Access",
        "Data Privacy Protection",
        "Account Management",
        "Content Ownership",
      ],
    },
    {
      category: "Company Rights",
      details: [
        "Service Modification",
        "Content Removal",
        "Account Termination",
        "Policy Updates",
      ],
    },
    {
      category: "Compliance",
      details: [
        "Legal Requirements",
        "Industry Standards",
        "Security Protocols",
        "User Safety",
      ],
    },
  ];

  const additionalInfo = [
    {
      period: "24/7",
      title: "Service Access",
      description: "Our services are accessible round the clock with occasional maintenance"
    },
    {
      period: "Updates",
      title: "Terms Revision",
      description: "We may update terms without prior notice. Continued use implies acceptance"
    },
    {
      period: "Jurisdiction",
      title: "Governing Law",
      description: "All disputes governed by applicable laws of the jurisdiction"
    }
  ];

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
        .tech-blue {
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
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
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

       
        .terms-content {
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
        
      
        .terms-item-hover:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(255, 132, 2, 0.6);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        
        .benefit-item-hover:hover {
          transform: translateX(10px);
          color: #ff8402;
          transition: all 0.3s ease;
        }
        
       
        .point-item-hover:hover {
          transform: translateX(5px);
          border-left: 2px solid #ff8402;
          transition: all 0.3s ease;
        }

       
        .feature-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 12px 35px rgba(255, 132, 2, 0.25);
          transition: all 0.3s ease;
        }

       
        .spec-item-hover:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 132, 2, 0.3);
          box-shadow: 0 8px 25px rgba(255, 132, 2, 0.2);
          transition: all 0.3s ease;
        }

        
        @keyframes termsPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .terms-icon-hover:hover {
          animation: termsPulse 2s infinite;
          color: #ff8402;
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
        {termsSections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
        {keyPoints.map((point, index) => (
          <span key={index}>{point}</span>
        ))}
        {userResponsibilities.map((responsibility, index) => (
          <span key={index}>{responsibility}</span>
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
            <span className="text-white">Terms</span>{" "}
            <span className="text-white">AndConditions</span> 
          </h1>
        <p className="text-xs sm:text-lg text-gray-300 max-w-2xl  mx-auto ">
            Please read these terms and conditions carefully before using our website and services. 
            Your access and use are conditioned on your acceptance of these terms.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full  md:py-20 grid-bg-pattern">
        
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

       
        <div className="content-layer terms-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-12">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Legal Terms & Conditions
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                User Agreement • Legal Compliance • Service Terms • Responsibilities
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto mx-auto mb-6 mt-8 md:mt-20">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Key Terms & Conditions
                </span>
              </h1>
             
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Understanding our terms is essential for using our services responsibly and legally
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {termsSections.map((section, index) => (
                <div 
                  key={index} 
                  className="tech-container p-6 text-center card-hover-instant feature-card-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <div className="feature-icon terms-icon-hover">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-hover-instant">
                    {section.title}
                  </h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Important <span className="text-white">Points</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Key aspects you need to know about our terms and conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center point-item-hover p-3">
                  <FaPlay className="text-[#ff8402] mr-4 text-sm" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Terms <span className="text-white">Specifications</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="tech-container p-6 spec-item-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-[#ff8402] text-hover-instant">
                    {spec.category}
                  </h3>
                  <ul className="space-y-2">
                    {spec.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <FaCheck className="text-[#ff8402] mr-3 text-sm" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto mx-auto card-hover-instant">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-2xl font-bold mb-6 text-white text-hover-instant">
                  User <span className="text-white">Responsibilities</span>
                </h2>
                <div className="space-y-4">
                  {userResponsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-center benefit-item-hover">
                      <FaPlay className="text-[#ff8402] mr-4 text-sm" />
                      <span className="text-gray-300">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tech-container p-6 text-center feature-card-hover">
                <div className="feature-icon terms-icon-hover">
                  <FaUserShield />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Legal Compliance</h3>
                <p className="text-gray-400">
                  Users are responsible for complying with all applicable laws and regulations 
                  while using our services and website.
                </p>
              </div>
            </div>
          </section>

          <section className="tech-container p-4   w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Additional <span className="text-white">Information</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Important details about updates, jurisdiction, and compliance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-2">
              {additionalInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="tech-container p-6 text-center terms-item-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <div className="text-2xl font-bold tech-blue mb-2">{item.period}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Questions About Our <span className="text-white">Terms?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                If you have any questions about these Terms and Conditions, please don't hesitate to contact us. 
                We're here to help clarify any aspects of our legal agreement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant flex items-center justify-center">
                  Contact Legal Team
                </button>
                <button className="border border-[#ff8402] text-[#ff8402] hover:bg-[#ff8402] hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant flex items-center justify-center">
               
                  Download Terms PDF
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Last Updated: December 1, 2024 • Review regularly for updates
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default TermsAndConditions;