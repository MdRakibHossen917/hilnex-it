import React, { useState, useEffect } from "react";
import {
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
  FaCogs,
  FaExpandArrowsAlt,
  FaPlay,
} from "react-icons/fa";
import { RiCpuLine, RiDashboardLine, RiSettings5Line } from "react-icons/ri";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import VpsServerImage from "../../../assets/solutions/Vps.webp";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const VPSServer = () => {
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

  const TakaIcon = () => (
    <span className="text-[#ff8402] font-bold text-2xl">৳</span>
  );

  const features = [
    {
      icon: <RiCpuLine className="text-4xl text-[#ff8402]" />,
      title: "High Performance CPUs",
      description:
        "Latest generation Intel & AMD processors for optimal performance",
    },
    {
      icon: <FaServer className="text-4xl text-[#ff8402]" />,
      title: "SSD Storage",
      description: "Lightning-fast NVMe SSDs for improved loading times",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-[#ff8402]" />,
      title: "Gigabit Network",
      description: "High-speed connectivity with 99.9% uptime guarantee",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ff8402]" />,
      title: "DDoS Protection",
      description: "Advanced security measures to protect your infrastructure",
    },
    {
      icon: <FaExpandArrowsAlt className="text-4xl text-[#ff8402]" />,
      title: "Easy Scaling",
      description: "Scale resources up or down based on your needs",
    },
    {
      icon: <RiDashboardLine className="text-4xl text-[#ff8402]" />,
      title: "Control Panel",
      description: "User-friendly control panel for easy server management",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "499",
      period: "/month",
      currency: <TakaIcon />,
      cpu: "1 vCPU",
      ram: "2GB RAM",
      storage: "50GB SSD",
      bandwidth: "1TB",
      features: [
        "1 vCPU Core",
        "2GB RAM",
        "50GB SSD Storage",
        "1TB Bandwidth",
        "Basic Support",
      ],
      icon: <FaCloud className="text-3xl text-[#ff8402] mb-4" />,
    },
    {
      name: "Business",
      price: "1,299",
      period: "/month",
      currency: <TakaIcon />,
      cpu: "4 vCPU",
      ram: "8GB RAM",
      storage: "200GB SSD",
      bandwidth: "4TB",
      features: [
        "4 vCPU Cores",
        "8GB RAM",
        "200GB SSD Storage",
        "4TB Bandwidth",
        "Priority Support",
        "DDoS Protection",
      ],
      icon: <FaCogs className="text-3xl text-[#ff8402] mb-4" />,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "2,499",
      period: "/month",
      currency: <TakaIcon />,
      cpu: "8 vCPU",
      ram: "16GB RAM",
      storage: "500GB SSD",
      bandwidth: "8TB",
      features: [
        "8 vCPU Cores",
        "16GB RAM",
        "500GB SSD Storage",
        "8TB Bandwidth",
        "24/7 Premium Support",
        "Advanced DDoS Protection",
        "Free Backups",
      ],
      icon: <RiSettings5Line className="text-3xl text-[#ff8402] mb-4" />,
    },
  ];

  const benefits = [
    "Full root access and control",
    "24/7 expert technical support",
    "Instant deployment within minutes",
    "Free SSL certificates included",
    "Automated daily backups",
    "Multiple OS choices (Linux/Windows)",
    "99.9% uptime guarantee",
    "Easy resource scaling",
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

   
        .vps-content {
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
        
     
        .vps-pricing-hover:hover {
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
        
        .image-hover-instant {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .image-hover-instant:hover {
          transform: scale(1.08);
          box-shadow: 0 0 30px rgba(255, 132, 2, 0.3);
        }
        
        .feature-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 12px 35px rgba(255, 132, 2, 0.25);
          transition: all 0.3s ease;
        }
         
        @keyframes serverPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .server-icon-hover:hover {
          animation: serverPulse 2s infinite;
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
        {plans.map((plan, index) => (
          <div key={index}>
            <h3>{plan.name}</h3>
            <span>{plan.price}</span>
            {plan.features.map((feature, idx) => (
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
          <h1 className="text-2xl md:text-2xl xl:text-5xl font-black mb-2 md:mb-6">
            <span className="text-white">VPS</span>{" "}
            <span className="text-white">Server</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Experience reliable and scalable VPS hosting for your business. Our
            VPS servers provide high performance, security, and full control
            over your hosting environment.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full  md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer vps-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16  w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20 ">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl xl:text-3xl font-bold text-white ">
                High-Performance VPS Servers
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                SSD Storage • Full Root Access • 24/7 Support
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6 mt-12 md:mt-12">
            <div className="text-center mb-4">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Powerful Features
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Everything you need for optimal server performance and
                reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tech-container p-4 md:p-6 text-center card-hover-instant feature-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="feature-icon server-icon-hover">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-hover-instant">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-4 md:mb-8 xl:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white ">
                Affordable VPS Plans
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Choose the perfect VPS plan for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3  gap-2 md:gap-3 xl:gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`tech-container p-4 text-center relative vps-pricing-hover ${
                    plan.popular ? "popular-plan" : ""
                  }`}
                  style={{ position: "relative", zIndex: 35 }}
                >
                  {plan.popular && (
                    <div className="popular-badge">MOST POPULAR</div>
                  )}
                  <div className="flex justify-center">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white text-hover-instant">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      {plan.currency}
                      <span className="text-4xl font-bold tech-blue ml-2">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-gray-400 block">{plan.period}</span>
                  </div>
                  <div className="mb-6 space-y-2">
                    <div className="text-white font-semibold">{plan.cpu}</div>
                    <div className="text-white font-semibold">{plan.ram}</div>
                    <div className="text-white font-semibold">
                      {plan.storage}
                    </div>
                    <div className="text-white font-semibold">
                      {plan.bandwidth} Bandwidth
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 btn-hover-instant ${
                      plan.popular
                        ? "bg-[#ff8402] text-white hover:bg-[#e67300]"
                        : "bg-[#ff8402] text-white hover:bg-[#e67300]"
                    }`}
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  w-11/12 md:w-9/12 mx-auto ">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white ">
                  Why Choose Our VPS ?
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

              <div className="flex justify-center">
                <div className="p-4 rounded-xl bg-[#0d1117]/50 shadow-inner">
                  <img
                    src={VpsServerImage}
                    alt="Virtual Private Server (VPS) infrastructure illustration showing cloud computing and dedicated hosting environment"
                    className="rounded mx-auto image-hover-instant w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position ">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white ">
                Ready to Launch Your VPS Server
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8">
                Join thousands of businesses that trust our VPS hosting
                solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  Launch Your Server
                </button>
                <button className="border border-[#ff8402]  hover:text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  <span className="ml-2">View Pricing</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                * All prices are in Bangladeshi Taka (BDT) • No hidden costs •
                Cancel anytime
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default VPSServer;
