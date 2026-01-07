import React, { useState, useEffect } from "react";
import CellEffect from "../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import {
  FaSpinner,
  FaPlay,
  FaRocket,
  FaCheck,
  FaSync,
  FaBolt,
  FaCog,
} from "react-icons/fa";
import RegulerLoadingSpinner from "../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const Package = () => {
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

  const TakaIcon = () => (
    <span className="text-[#ff8402] font-bold text-2xl">৳</span>
  );

  const packagesData = [
    {
      name: "Basic Plan",
      price: "20,000",
      period: "one-time",
      currency: <TakaIcon />,
      description: "Perfect for small businesses and startups",
      features: [
        "Hosting Control Panel (C Panel)",
        "Dynamic and responsive website",
        "Free web admin training",
        "Basic E-commerce setup",
        "Maintenance support 6 months",
        "5 E-mail accounts",
        "Upto 2 revisions",
        "Delivery time: 10 working days",
        "Free 2 GB hosting for 1st year",
        "SEO Friendly web design",
        "Classic home page design",
        "3 Sub-domain accounts",
        "100GB bandwidth",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Standard Plan",
      price: "40,000",
      period: "one-time",
      currency: <TakaIcon />,
      description: "Ideal for growing businesses with more features",
      features: [
        "Hosting Control Panel (C Panel)",
        "Dynamic and responsive website",
        "Free web admin training",
        "Standard E-commerce setup",
        "5 E-mail accounts",
        "Upto 2 revisions",
        "Delivery time: 15 working days",
        "Free 5 GB hosting for 1st year",
        "SEO Friendly web design",
        "Interactive home page design",
        "5 Sub-domain accounts",
        "250GB bandwidth",
      ],
      popular: true,
      buttonText: "Choose Plan",
    },
    {
      name: "Premium Plan",
      price: "60,000",
      period: "one-time",
      currency: <TakaIcon />,
      description: "Advanced features for established businesses",
      features: [
        "Hosting Control Panel (C Panel)",
        "Dynamic and responsive website",
        "Free web admin training",
        "Complete E-commerce setup",
        "Maintenance support 24 months",
        "10 E-mail accounts",
        "Upto 3 revisions",
        "Delivery time: 20 working days",
        "Free 10 GB hosting for 1st year",
        "Elegant customized web design",
        "Interactive home page design",
        "10 Sub-domain accounts",
        "500GB bandwidth",
      ],
      popular: false,
      buttonText: "Choose Plan",
    },
    {
      name: "Professionals Plan",
      price: "90,000",
      period: "one-time",
      currency: <TakaIcon />,
      description: "Professional solutions for serious businesses",
      features: [
        "1 page static website (HTML/CSS Based)",
        "Modern Responsive design",
        "Basic contact form integration",
        "Essential SEO setup (google-ready)",
        "Domain Hosting setup assistance",
        "Free support after the launch 2 months",
        "Social media & Google map integration",
        "Contact form with email integration",
        "SEO friendly page structure and meta optimization",
        "Custom design tailored to your brand",
        "Brand identity design",
        "Business E-mail setup",
        "Security and backup support",
      ],
      popular: false,
      buttonText: "Get Quote",
    },
    {
      name: "Advance Business",
      price: "130,000",
      period: "one-time",
      currency: <TakaIcon />,
      description: "Comprehensive solutions for advanced business needs",
      features: [
        "Fully Dynamic website (WP/LV/RJS)",
        "Secure domain dashboard with analytics",
        "Advanced SEO & speed optimization",
        "SSL security & Backup System",
        "6 Month free Maintenance",
        "Free training for admin panel use",
        "Advanced SEO & Content strategy",
        "UI/UX design enhancement",
        "E-Commerce integration",
        "Data analytics dashboard",
        "Automation and AI tools",
        "Cyber Security & cloud solution",
        "Continuous support & strategy",
      ],
      popular: false,
      buttonText: "Start Project",
    },
    {
      name: "Premium Business",
      price: "160,000",
      period: "one-time",
      currency: <TakaIcon />,
      description: "Ultimate package for enterprise-level solutions",
      features: [
        "Development timeline 60 days",
        "Premium plugins",
        "Dynamic photo & Gallery",
        "Security and technical support - 3 years",
        "Live chat integration",
        "Monthly website backup",
        "Social media branding",
        "Frontend development",
        "Backend development",
        "AI powered business solution",
        "Premium SEO & global ranking strategy",
        "Expert team & digital ecosystem setup",
        "Cyber Security & data protection suite",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ];

  const benefits = [
    "Scalable solutions that grow with your business",
    "Fast delivery with clear project timelines",
    "Comprehensive ongoing support and maintenance",
    "Professional design tailored to your brand",
    "SEO optimization for better search visibility",
    "Mobile-responsive across all devices",
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
          transition: all 0.5s ease-in-out;
        }
        .grid-bg-pattern {
          background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px), 
                           linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .popular-badge {
          position: absolute;
          top: -10px;
          right: 20px;
          background: #ff8402;
          color: #000;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          z-index: 10;
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
        }
        
        .package-pricing-hover:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(255, 132, 2, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .benefit-item-hover:hover {
          transform: translateX(10px);
          color: #ff8402;
          transition: all 0.3s ease;
        }
        
        .feature-item-hover:hover {
          transform: translateX(5px);
          color: #ff8402;
          transition: all 0.3s ease;
        }

        .popular-plan {
          position: relative;
          border: 2px solid #ff8402;
        }
        
        .popular-plan::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
        
          border-radius: 0.5rem;
          z-index: -1;
        }

        @keyframes packagePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .package-icon-hover:hover {
          animation: packagePulse 2s infinite;
          color: #ff8402;
          transition: all 0.3s ease;
        }

        /* Fixed z-index layers */
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

       
        .package-content {
          position: relative;
          z-index: 40;
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
        {packagesData.map((pkg, index) => (
          <div key={index}>
            <h3>{pkg.name}</h3>
            <span>{pkg.price}</span>
            {pkg.features.map((feature, idx) => (
              <span key={idx}>{feature}</span>
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
          <h1 className="text-xl md:text-2xl xl:text-5xl font-black mb-2 md:mb-6">
            
            <span className="text-white">Packages</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Professional web development solutions tailored for businesses of
            all sizes. Choose the perfect package for your digital
            transformation journey.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full md:py-20 grid-bg-pattern">
 
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer package-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-3xl md:text-2xl font-bold text-white">
                Professional Packages
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Custom Solutions • Scalable Packages • Professional Support
              </p>
            </div>
          </section>

          <div className="w-11/12 md:w-9/12 mx-auto  mx-auto mb-6 mt-8 md:mt-12">
            <div className="text-center mb-4 md:mb-8 xl:mb-12">
                <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                Choose Your Perfect Package
                </span>
              </h1>
              
            
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From startups to enterprises, we have the right solution for your
                business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {packagesData.map((pkg, index) => (
                <div
                  key={index}
                  className={`tech-container p-4 flex flex-col h-full package-pricing-hover ${
                    pkg.popular ? "popular-plan" : ""
                  }`}
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  {pkg.popular && (
                    <div className="popular-badge">MOST POPULAR</div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-white text-hover-instant">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <div className="flex items-center justify-center">
                        {pkg.currency}
                        <span className="text-4xl font-bold tech-blue ml-2">
                          {pkg.price}
                        </span>
                      </div>
                      <span className="text-gray-400 block text-sm">
                        {pkg.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>

                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start feature-item-hover"
                        >
                          <FaCheck className="text-[#ff8402] mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 btn-hover-instant ${
                      pkg.popular
                        ? "bg-[#ff8402] text-white hover:bg-[#e67300]"
                        : "bg-[#ff8402] text-white hover:bg-[#e67300]"
                    }`}
                  >
                    {pkg.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-8  w-11/12 md:w-9/12 mx-auto card-hover-instant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white ">
                  Why Choose Our <span className="text-white">Packages</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center benefit-item-hover"
                    >
                      <FaPlay className="tech-blue mr-4 text-sm" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="tech-container p-4 text-center">
                  <FaSync className="text-3xl text-[#ff8402] mb-2 mx-auto package-icon-hover" />
                  <h4 className="font-semibold mb-2 text-white text-sm">
                    Scalable Solutions
                  </h4>
                </div>
                <div className="tech-container p-4 text-center">
                  <FaBolt className="text-3xl text-[#ff8402] mb-2 mx-auto package-icon-hover" />
                  <h4 className="font-semibold mb-2 text-white text-sm">
                    Fast Delivery
                  </h4>
                </div>
                <div className="tech-container p-4 text-center">
                  <FaCog className="text-3xl text-[#ff8402] mb-2 mx-auto package-icon-hover" />
                  <h4 className="font-semibold mb-2 text-white text-sm">
                    Full Support
                  </h4>
                </div>
                <div className="tech-container p-4 text-center">
                  <FaRocket className="text-3xl text-[#ff8402] mb-2 mx-auto package-icon-hover" />
                  <h4 className="font-semibold mb-2 text-white text-sm">
                    SEO Optimized
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white ">
                Need a <span className="text-white">Custom Solution?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Can't find the perfect package? Let's discuss your specific
                requirements and create a tailored solution that fits your
                business needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  Request Custom Package
                </button>
                <button className="border border-[#ff8402] text-[#ff8402] hover:text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant">
                  Schedule Consultation
                </button>
              </div>
             
            </div>
          </section>
        </div>
      </div>

      <div className="mt-5">
        <GlobMapAllPage />
      </div>
    </>
  );
};

export default Package;