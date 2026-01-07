import React, { useState, useEffect } from "react";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaCookie,
  FaSync,
  FaExclamationTriangle,
  FaEnvelope,
  FaPlay,
  FaCheck,
  FaHeadset,
} from "react-icons/fa";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const preloadContent = async () => {
      try {
        await Promise.all([new Promise((resolve) => setTimeout(resolve, 300))]);

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

  const privacySections = [
    {
      icon: <FaDatabase className="text-4xl text-[#ff8402]" />,
      title: "Information We Collect",
      description:
        "We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us for support.",
    },
    {
      icon: <FaSync className="text-4xl text-[#ff8402]" />,
      title: "How We Use Your Information",
      description:
        "We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new services.",
    },
    {
      icon: <FaUserLock className="text-4xl text-[#ff8402]" />,
      title: "Information Sharing",
      description:
        "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ff8402]" />,
      title: "Data Security",
      description:
        "We implement appropriate technical and organizational security measures designed to protect your personal information.",
    },
    {
      icon: <FaCookie className="text-4xl text-[#ff8402]" />,
      title: "Cookies & Tracking",
      description:
        "We use cookies and similar tracking technologies to track activity on our service and hold certain information.",
    },
    {
      icon: <FaExclamationTriangle className="text-4xl text-[#ff8402]" />,
      title: "Third-Party Services",
      description:
        "Our service may contain links to other sites that are not operated by us. We advise reviewing their Privacy Policies.",
    },
  ];

  const userRights = [
    {
      title: "Right to Access",
      description: "You can request copies of your personal data",
    },
    {
      title: "Right to Rectification",
      description: "You can request correction of inaccurate information",
    },
    {
      title: "Right to Erasure",
      description: "You can request deletion of your personal data",
    },
    {
      title: "Right to Restrict Processing",
      description: "You can request limitation of how we use your data",
    },
    {
      title: "Right to Data Portability",
      description:
        "You can request transfer of your data to another organization",
    },
    {
      title: "Right to Object",
      description: "You can object to our processing of your personal data",
    },
  ];

  const benefits = [
    "Transparent data collection practices",
    "Bank-level security for all stored information",
    "Complete control over your personal data",
    "Regular security audits and updates",
    "Compliance with international privacy laws",
    "Quick response to data access requests",
    "24/7 security monitoring and protection",
    "Clear data retention and deletion policies",
  ];

  const specifications = [
    {
      category: "Data Protection",
      details: [
        "End-to-End Encryption",
        "Regular Security Audits",
        "Access Controls",
        "Data Backup Systems",
      ],
    },
    {
      category: "Privacy Standards",
      details: [
        "GDPR Compliance",
        "CCPA Compliance",
        "ISO 27001 Certified",
        "Privacy by Design",
      ],
    },
    {
      category: "User Controls",
      details: [
        "Data Access Requests",
        "Account Deletion",
        "Privacy Settings",
        "Consent Management",
      ],
    },
    {
      category: "Legal Compliance",
      details: [
        "Regular Policy Updates",
        "Legal Team Review",
        "User Notification",
        "Compliance Monitoring",
      ],
    },
  ];

  const retentionPeriods = [
    {
      period: "2 Years",
      title: "Inactive Accounts",
      description: "Data from accounts not accessed for 2 years",
    },
    {
      period: "7 Years",
      title: "Financial Records",
      description: "Required for legal and accounting purposes",
    },
    {
      period: "Until Deletion",
      title: "Upon Request",
      description: "Immediate deletion when you request it",
    },
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

       
        .privacy-content {
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
        
       
        .privacy-item-hover:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(255, 132, 2, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
       
        .benefit-item-hover:hover {
          transform: translateX(10px);
          color: #ff8402;
          transition: all 0.3s ease;
        }
        
        .right-item-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 8px 25px rgba(255, 132, 2, 0.2);
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

      
        @keyframes privacyPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .privacy-icon-hover:hover {
          animation: privacyPulse 2s infinite;
          color: #ff8402;
          transition: all 0.3s ease;
        }

       
        @keyframes shieldGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(255, 132, 2, 0.5)); 
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(255, 132, 2, 0.8)); 
          }
        }
        
        .security-icon {
          animation: shieldGlow 2s ease-in-out infinite;
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
        {privacySections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
        {userRights.map((right, index) => (
          <div key={index}>
            <h3>{right.title}</h3>
            <p>{right.description}</p>
          </div>
        ))}
        {benefits.map((benefit, index) => (
          <span key={index}>{benefit}</span>
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
            <span className="text-white">Privacy</span>{" "}
            <span className="text-white">Policy</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect and manage
            your personal information with bank-level security and transparent
            practices.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full  md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer privacy-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Comprehensive Privacy Protection
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Data Security • Transparency • User Control • Compliance
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto mb-6 mt-8 md:mt-20">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Our Privacy Commitments
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                We are committed to protecting your data and transparent
                practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto">
              {privacySections.map((section, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant feature-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="feature-icon privacy-icon-hover">
                    {section.title.includes("Security") ? (
                      <div className="security-icon">{section.icon}</div>
                    ) : (
                      section.icon
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-hover-instant">
                    {section.title}
                  </h3>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-4 md:mb-8 xl:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Your <span className="text-white">Privacy Rights</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                You have complete control over your personal data and how it's
                used
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {userRights.map((right, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center privacy-item-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-3xl mb-4 text-[#ff8402] privacy-icon-hover">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white text-hover-instant">
                    {right.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {right.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Privacy <span className="text-white">Specifications</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="tech-container p-6 spec-item-hover"
                  style={{ position: "relative", zIndex: 35 }}
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

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto card-hover-instant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-hover-instant">
                  Why Trust Our{" "}
                  <span className="text-white">Privacy Policy</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center benefit-item-hover"
                    >
                      <FaPlay className="text-[#ff8402] mr-4 text-sm" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="tech-container p-8 text-center feature-card-hover">
                  <div className="feature-icon security-icon">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Bank-Level Security
                  </h3>
                  <p className="text-gray-400">
                    Your data is protected with enterprise-grade encryption and
                    security protocols
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4     w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Data <span className="text-white">Retention Periods</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                We retain your data only for as long as necessary to provide our
                services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-2">
              {retentionPeriods.map((item, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center right-item-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-4xl font-bold tech-blue mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4   md:-mb-10 w-11/12  md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Privacy <span className="text-white">Questions?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                If you have any questions about our Privacy Policy or how we
                handle your data, our privacy team is here to help you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant flex items-center justify-center">
                  <FaEnvelope className="mr-2" />
                  Contact Privacy Team
                </button>
                <button className="border border-[#ff8402] text-[#ff8402] hover:bg-[#ff8402] hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant flex items-center justify-center">
                  <FaHeadset className="mr-2" />
                  Download Policy PDF
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Last Updated: November 1, 2025 • We never sell your data
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default PrivacyPolicy;
