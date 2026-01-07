import React, { useState, useEffect } from "react";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import hostedPBXImage from "../../../assets/solutions/hostedPBX.webp";
import {
  FaPhoneAlt,
  FaGlobeAmericas,
  FaChartBar,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaHeadset,
  FaPlay,
} from "react-icons/fa";
import {
  RiCloudLine,
  RiUserSettingsLine,
  RiBarChartBoxLine,
} from "react-icons/ri";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const HostedPBX = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const preloadContent = async () => {
      try {
        const img = new Image();
        img.src = hostedImg;

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

  const features = [
    {
      icon: <FaPhoneAlt className="text-[#ff8402]" />,
      title: "Virtual Phone System",
      description:
        "Complete cloud-based phone system with advanced call routing and management features",
    },
    {
      icon: <FaGlobeAmericas className="text-[#ff8402]" />,
      title: "Multi-Location Support",
      description:
        "Connect multiple offices and remote workers seamlessly under one phone system",
    },
    {
      icon: <FaChartBar className="text-[#ff8402]" />,
      title: "Advanced Analytics",
      description:
        "Real-time call analytics and reporting to optimize your business communications",
    },
    {
      icon: <FaShieldAlt className="text-[#ff8402]" />,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and security protocols to protect your communications",
    },
    {
      icon: <FaExpandArrowsAlt className="text-[#ff8402]" />,
      title: "Auto Scaling",
      description:
        "Automatically scale your phone lines based on business needs and peak hours",
    },
    {
      icon: <FaHeadset className="text-[#ff8402]" />,
      title: "Professional IVR",
      description:
        "Customizable interactive voice response systems for professional call handling",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19.99",
      period: "per user/month",
      features: [
        "Up to 10 users",
        "Basic IVR",
        "Standard Support",
        "1000 min/month",
      ],
      icon: <RiCloudLine className="text-3xl mb-4 text-[#ff8402]" />,
    },
    {
      name: "Business",
      price: "$29.99",
      period: "per user/month",
      features: [
        "Up to 50 users",
        "Advanced IVR",
        "Priority Support",
        "5000 min/month",
        "Call Analytics",
      ],
      icon: <RiUserSettingsLine className="text-3xl mb-4 text-[#ff8402]" />,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "per user/month",
      features: [
        "Unlimited users",
        "Custom IVR",
        "24/7 Support",
        "Unlimited minutes",
        "Advanced Analytics",
        "API Access",
      ],
      icon: <RiBarChartBoxLine className="text-3xl mb-4 text-[#ff8402]" />,
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

        
        .hostedpbx-content {
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
        
       
        .image-hover-instant {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .image-hover-instant:hover {
          transform: scale(1.08);
          box-shadow: 0 0 30px rgba(255, 132, 2, 0.3);
        }
        
  
        .benefit-item-hover:hover {
          transform: translateX(10px);
          color: #ff8402;
          transition: all 0.3s ease;
        }
        
      
        .pricing-card-hover:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(255, 132, 2, 0.6);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

       
        .feature-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 12px 35px rgba(255, 132, 2, 0.25);
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
        {features.map((feature, index) => (
          <div key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
        {pricingPlans.map((plan, index) => (
          <div key={index}>
            <h3>{plan.name}</h3>
            <span>{plan.price}</span>
            {plan.features.map((feature, idx) => (
              <span key={idx}>{feature}</span>
            ))}
          </div>
        ))}

        {[
          "Reduce infrastructure costs by up to 60%",
          "Scale instantly as your business grows",
          "Access advanced features without hardware investment",
          "24/7 professional support and maintenance",
          "Enterprise-grade security and reliability",
        ].map((benefit, index) => (
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
            <span className="text-white">Hosted</span>{" "}
            <span className="text-white">PBX</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Revolutionize your business communication with our cloud-based PBX
            solutions. Scalable, reliable, and feature-rich telephony for modern
            enterprises.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full   md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer hostedpbx-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Cloud Communication Solutions
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Virtual PBX • Multi-Location • Enterprise Grade
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto mb-4 md:mb-4 mt-12 md:mt-20">
            <div className="text-center mb-4">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1 text-center">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 glow-border-bottom inline-block">
                  Powerful Features
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Everything you need to streamline your business communications
                in one platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant feature-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white text-hover-instant">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto ">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white ">
                  Why Choose Our <span className="text-white">Hosted PBX</span>?
                </h2>
                <div className="space-y-4">
                  {[
                    "Reduce infrastructure costs by up to 60%",
                    "Scale instantly as your business grows",
                    "Access advanced features without hardware investment",
                    "24/7 professional support and maintenance",
                    "Enterprise-grade security and reliability",
                  ].map((benefit, index) => (
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

              <div className="flex justify-center">
                <div className="p-4 rounded-xl bg-[#0d1117]/50 shadow-inner">
                  <img
                    src={hostedPBXImage}
                    alt="Cloud-based hosted PBX telephone system illustration showing virtual phone lines and communication networks"
                    className="rounded mx-auto image-hover-instant w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4   w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center text-hover-instant">
              Custom <span className="text-white">Software</span> Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-2">
              <div
                className="tech-container p-4 text-center pricing-card-hover"
                style={{ position: "relative", zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent">
                  Small Business
                </h3>
                <div className="text-xl font-black mb-2 neon-accent">
                  ৳50,000+
                </div>
                <p className="text-gray-400 text-sm mb-4">Starting from</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>Basic Custom Software</li>
                  <li>3 Months Development</li>
                  <li>6 Months Support</li>
                  <li>Basic Features</li>
                  <li>API Integration</li>
                </ul>
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-2 px-6 rounded transition duration-300 btn-hover-instant">
                  Discuss Project
                </button>
              </div>
              <div
                className="tech-container p-6 text-center border-2 border-[#ff8402] popular-plan pricing-card-hover"
                style={{ position: "relative", zIndex: 35 }}
              >
                <div className="popular-badge">RECOMMENDED</div>
                <h3 className="text-xl font-bold mb-4 neon-accent">
                  Enterprise
                </h3>
                <div className="text-xl font-black mb-2 neon-accent">
                  ৳1,50,000+
                </div>
                <p className="text-gray-400 text-sm mb-4">Starting from</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>Advanced Custom Software</li>
                  <li>6 Months Development</li>
                  <li>1 Year Support</li>
                  <li>Advanced Features</li>
                  <li>API Integration</li>
                </ul>
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-2 px-6 rounded transition duration-300 btn-hover-instant">
                  Get Quote
                </button>
              </div>
              <div
                className="tech-container p-6 text-center pricing-card-hover"
                style={{ position: "relative", zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent">
                  Custom Solution
                </h3>
                <div className="text-xl font-black mb-2 neon-accent">
                  ৳3,00,000+
                </div>
                <p className="text-gray-400 text-sm mb-4">Enterprise Grade</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>Complete Business Solution</li>
                  <li>9-12 Months Development</li>
                  <li>2 Years Support</li>
                  <li>All Advanced Features</li>
                  <li>Dedicated Team</li>
                </ul>
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-2 px-6 rounded transition duration-300 btn-hover-instant">
                  Contact Sales
                </button>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position ">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white ">
                Ready to Transform Your Business Communication
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of businesses that trust our Hosted PBX solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  Start Free 30-Day Trial
                </button>
                <button className="border border-[#ff8402] text-[#ff8402] hover:text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant">
                  Schedule Demo
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No credit card required • Setup in minutes • Cancel anytime
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default HostedPBX;
