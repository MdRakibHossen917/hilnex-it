import React, { useState, useEffect } from "react";
import { 
  FaHome, 
  FaCode, 
  FaServer, 
  FaMobileAlt, 
  FaCloud, 
  FaShieldAlt,
  FaEnvelope,
  FaFileContract,
  FaUserShield,
  FaQuestionCircle,
  FaSitemap,
  FaArrowRight,
  FaPlay,
  FaCheck,
  FaHeadset
} from "react-icons/fa";
import CellEffect from "../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import RegulerLoadingSpinner from "../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const SiteMap = () => {
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

  const siteStructure = [
    {
      category: "Home & Main",
      icon: <FaHome className="text-4xl text-[#ff8402]" />,
      pages: [
        { name: "Home Page", path: "/", description: "Main landing page with overview of services" },
        { name: "About Us", path: "/about", description: "Company information and mission" },
        { name: "Our Team", path: "/team", description: "Meet our expert team members" },
      ]
    },
    {
      category: "Services",
      icon: <FaCode className="text-4xl text-[#ff8402]" />,
      pages: [
        { name: "Web Development", path: "/services/web-development", description: "Custom website and web application development" },
        { name: "Mobile Apps", path: "/services/mobile-apps", description: "iOS and Android mobile application development" },
        { name: "Cloud Solutions", path: "/services/cloud-solutions", description: "Cloud infrastructure and deployment services" },
        { name: "AI Integration", path: "/services/ai-integration", description: "Artificial intelligence and machine learning solutions" },
      ]
    },
    {
      category: "Solutions",
      icon: <FaServer className="text-4xl text-[#ff8402]" />,
      pages: [
        { name: "Enterprise Software", path: "/solutions/enterprise", description: "Custom enterprise software solutions" },
        { name: "E-commerce", path: "/solutions/ecommerce", description: "Online store and marketplace development" },
        { name: "SaaS Products", path: "/solutions/saas", description: "Software as a Service platform development" },
        { name: "API Development", path: "/solutions/api", description: "RESTful API and microservices development" },
      ]
    },
    {
      category: "Resources",
      icon: <FaFileContract className="text-4xl text-[#ff8402]" />,
      pages: [
        { name: "Blog", path: "/blog", description: "Latest articles and tech insights" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and project showcases" },
        { name: "Documentation", path: "/docs", description: "Technical documentation and guides" },
        { name: "Downloads", path: "/downloads", description: "Resources and toolkits" },
      ]
    },
    {
      category: "Legal",
      icon: <FaUserShield className="text-4xl text-[#ff8402]" />,
      pages: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy information" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions of use" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage and preferences" },
      ]
    },
    {
      category: "Support",
      icon: <FaHeadset className="text-4xl text-[#ff8402]" />,
      pages: [
        { name: "Contact Us", path: "/contact", description: "Get in touch with our team" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Support Center", path: "/support", description: "Technical support and help" },
      ]
    }
  ];

  const benefits = [
    "Easy navigation through all website sections",
    "Quick access to important pages and resources",
    "Clear understanding of website structure",
    "Improved user experience and accessibility",
    "Comprehensive overview of all services",
    "Quick links to legal and support pages",
    "Better SEO with organized site structure",
    "Enhanced user journey planning"
  ];

  const specifications = [
    {
      category: "Page Types",
      details: [
        "Informational Pages",
        "Service Pages",
        "Resource Pages",
        "Legal Pages",
      ],
    },
    {
      category: "Navigation",
      details: [
        "Main Menu Items",
        "Footer Links",
        "Quick Access",
        "Breadcrumb Paths",
      ],
    },
    {
      category: "Content Structure",
      details: [
        "Service Categories",
        "Solution Types",
        "Resource Types",
        "Support Channels",
      ],
    },
    {
      category: "User Journey",
      details: [
        "Home to Services",
        "Services to Contact",
        "Resources to Support",
        "Legal Compliance",
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

   
        .sitemap-content {
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
        
      
        .sitemap-item-hover:hover {
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
        
       
        .page-item-hover:hover {
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

        
        @keyframes sitemapPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .sitemap-icon-hover:hover {
          animation: sitemapPulse 2s infinite;
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
        {siteStructure.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
            {category.pages.map((page, idx) => (
              <span key={idx}>{page.name}</span>
            ))}
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
           
            <span className="text-white">Site Map</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our complete website structure and find exactly what you're looking for. 
            Navigate through all our services, resources, and support pages with ease.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full p-4 sm:p-10 md:py-20 grid-bg-pattern">
      
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        
        <div className="content-layer sitemap-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-full md:w-11/12 lg:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Complete Website Structure
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Easy Navigation • Organized Content • Quick Access • User-Friendly
              </p>
            </div>
          </section>

          <div className="relative max-w-7xl mx-auto mb-16 mt-8 md:mt-20">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Website Structure
                </span>
              </h1>
             
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Browse through our organized website structure to find the information and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((category, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant feature-card-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <div className="feature-icon sitemap-icon-hover">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white text-hover-instant">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <div 
                        key={pageIndex} 
                        className="flex items-center justify-between page-item-hover p-2 rounded"
                      >
                        <div className="text-left flex-1">
                          <h4 className="text-white font-semibold text-sm md:text-base">
                            {page.name}
                          </h4>
                          <p className="text-gray-400 text-xs">
                            {page.description}
                          </p>
                        </div>
                        <FaArrowRight className="text-[#ff8402] ml-2 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-full md:w-11/12 lg:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Site Map <span className="text-white">Specifications</span>
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

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-full md:w-11/12 lg:w-9/12 mx-auto card-hover-instant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-hover-instant">
                  Benefits of Our <span className="text-white">Site Map</span>
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
                  <div className="text-6xl text-[#ff8402] mb-4 sitemap-icon-hover">
                   
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Organized Navigation
                  </h3>
                  <p className="text-gray-400">
                    Our well-structured site map ensures you can easily find all services, 
                    resources, and information without any confusion.
                  </p>
                </div>
              </div>
            </div>
          </section>

         

          <section className="tech-container p-4 md:p-8 md:-mb-10 w-full md:w-11/12 lg:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Can't Find What You're <span className="text-white">Looking For?</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-4">
                If you couldn't find the specific page or information you need, 
                our support team is here to help you navigate and find exactly what you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402]   text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                   
                  Contact Support
                </button>
                <button className="border border-[#ff8402] text-[#ff8402]   hover:text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  <FaEnvelope className="mr-2" />
                  Send Message
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Quick assistance • Expert guidance • 24/7 support available
              </p>
            </div>
          </section>
        </div>
      </div>

     <div className="mt-6">
       <GlobMapAllPage />
     </div>
    </>
  );
}

export default SiteMap;