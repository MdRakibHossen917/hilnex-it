import React, { useState, useEffect } from "react";
import CellEffect from "../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import {
  FaPlay,
  FaDownload,
  FaBook,
  FaVideo,
  FaCheck,
  FaHeadset,
} from "react-icons/fa";
import RegulerLoadingSpinner from "../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const Resources = () => {
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

  const resourcesData = {
    categories: [
      {
        title: "Technical Guides",
        items: [
          "Web Development Best Practices",
          "Mobile App Development Guide",
          "Cloud Migration Strategies",
          "Cybersecurity Fundamentals",
          "API Integration Tutorials",
        ],
      },
      {
        title: "Business Resources",
        items: [
          "Digital Transformation Playbook",
          "IT Budget Planning Template",
          "Project Management Frameworks",
          "Client Success Stories",
          "Industry Trend Reports",
        ],
      },
      {
        title: "Tools & Templates",
        items: [
          "Website Audit Checklist",
          "SEO Optimization Kit",
          "Social Media Calendar",
          "Brand Identity Guidelines",
          "Performance Monitoring Tools",
        ],
      },
      {
        title: "Learning Center",
        items: [
          "Video Tutorial Library",
          "Webinar Recordings",
          "Case Studies",
          "Technical Documentation",
          "Certification Programs",
        ],
      },
    ],
  };

  const premiumResources = [
    {
      icon: <FaBook className="text-4xl text-[#ff8402]" />,
      title: "E-Books & Whitepapers",
      description:
        "In-depth guides on emerging technologies and business strategies",
    },
    {
      icon: <FaVideo className="text-4xl text-[#ff8402]" />,
      title: "Video Library",
      description: "Tutorials, demos, and expert interviews",
    },
    {
      icon: <FaDownload className="text-4xl text-[#ff8402]" />,
      title: "Development Tools",
      description: "Custom tools and templates for your projects",
    },
  ];

  const benefits = [
    "Access industry-leading technical guides and best practices",
    "Stay updated with the latest trends and technologies",
    "Save time with ready-to-use templates and tools",
    "Learn from real-world case studies and success stories",
    "Accelerate your projects with proven methodologies",
    "Get certified and enhance your professional skills",
    "24/7 access to continuously updated content",
    "Expert-curated resources for maximum value",
  ];

  const specifications = [
    {
      category: "Resource Types",
      details: [
        "PDF Guides & E-books",
        "Video Tutorials",
        "Code Templates",
        "Case Studies",
      ],
    },
    {
      category: "Access Levels",
      details: [
        "Free Public Resources",
        "Premium Member Access",
        "Enterprise Solutions",
        "Custom Content",
      ],
    },
    {
      category: "Update Frequency",
      details: [
        "Weekly New Content",
        "Monthly Major Updates",
        "Quarterly Reviews",
        "Annual Overhauls",
      ],
    },
    {
      category: "Support",
      details: [
        "Resource Assistance",
        "Technical Guidance",
        "Custom Requests",
        "Community Forum",
      ],
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

       
        .resources-content {
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
        
      
        .resource-item-hover:hover {
          transform: translateX(10px);
          color: #ff8402;
          transition: all 0.3s ease;
        }
        
   
        .premium-card-hover:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 12px 35px rgba(255, 132, 2, 0.25);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes resourcePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .resource-icon-hover:hover {
          animation: resourcePulse 2s infinite;
          color: #ff8402;
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
        {resourcesData.categories.map((category, index) => (
          <div key={index}>
            <h3>{category.title}</h3>
            {category.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        ))}
        {premiumResources.map((resource, index) => (
          <div key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
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
          
            <span className="text-white">Resources</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive collection of guides, tools, and resources
            to accelerate your business growth and technical expertise.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer resources-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16  w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Comprehensive Resource Library
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Technical Guides • Business Resources • Tools & Templates •
                Learning Materials
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto mb-6 mt-8 md:mt-20">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Resource Categories
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Browse through our carefully curated collection of resources
                designed to help you succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              {resourcesData.categories.map((category, index) => (
                <div
                  key={index}
                  className="tech-container p-8 card-hover-instant feature-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white text-hover-instant border-b border-[#ff8402]/30 pb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="flex items-center text-gray-400 hover:text-[#ff8402] transition duration-300 resource-item-hover"
                        >
                          <FaPlay className="text-[#ff8402] mr-3 text-sm" />
                          <span className="text-sm md:text-base">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4   mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-4 md:mb-8 xl:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                <span className="text-white">Premium</span> Resource Access
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Unlock exclusive resources to take your skills to the next level
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 ">
              {premiumResources.map((resource, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center premium-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="flex justify-center resource-icon-hover mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-hover-instant">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4 mb-4 md:mb-6  w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Resource <span className="text-white">Specifications</span>
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

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-full md:w-11/12 lg:w-9/12 mx-auto card-hover-instant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-hover-instant">
                  Why Explore Our <span className="text-white">Resources</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center resource-item-hover"
                    >
                      <FaPlay className="text-[#ff8402] mr-4 text-sm" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="tech-container p-6 text-center feature-card-hover">
                  <div className="text-6xl text-[#ff8402] mb-4 resource-icon-hover">
                    📚
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Knowledge Hub
                  </h3>
                  <p className="text-gray-400">
                    Continuously updated repository of valuable insights and
                    practical resources
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 md:p-8 md:-mb-10 w-full md:w-11/12 lg:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Need <span className="text-white">Specific Resources?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Can't find what you're looking for? Contact our team for
                customized resources tailored to your specific needs and
                challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant flex items-center justify-center">
                  <FaDownload className="mr-2" />
                  Download Resource Catalog
                </button>
                <button className="border border-[#ff8402] text-[#ff8402] hover:bg-[#ff8402] hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant flex items-center justify-center">
                  <FaHeadset className="mr-2" />
                  Request Custom Resources
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Free access • Regular updates • Expert-curated content
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default Resources;
