import React, { useState, useEffect } from "react";
import {
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaCheck,
  FaCogs,
  FaGlobe,
  FaPlay,
  FaBolt,
  FaDatabase,
  FaMicrochip,
  FaHdd,
  FaShieldVirus,
} from "react-icons/fa";
import { RiCpuLine, RiDashboardLine, RiServerLine } from "react-icons/ri";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import dedicatedServerImage from "../../../assets/solutions/dedicatedServer.webp";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const DedicatedHosting = () => {
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

  const features = [
    {
      icon: <RiCpuLine className="text-4xl text-[#ff8402]" />,
      title: "Dedicated Resources",
      description:
        "Exclusive access to entire server resources with no sharing or performance bottlenecks",
    },
    {
      icon: <FaMicrochip className="text-4xl text-[#ff8402]" />,
      title: "Enterprise Hardware",
      description:
        "Latest Intel Xeon & AMD EPYC processors with ECC memory for maximum reliability",
    },
    {
      icon: <FaHdd className="text-4xl text-[#ff8402]" />,
      title: "RAID Storage",
      description:
        "Multiple storage configurations with RAID protection for data redundancy",
    },
    {
      icon: <FaShieldVirus className="text-4xl text-[#ff8402]" />,
      title: "Enhanced Security",
      description:
        "Isolated environment with hardware-level security and dedicated firewalls",
    },
    {
      icon: <FaNetworkWired className="text-4xl text-[#ff8402]" />,
      title: "Premium Bandwidth",
      description:
        "High-speed network connectivity with guaranteed bandwidth and low latency",
    },
    {
      icon: <RiDashboardLine className="text-4xl text-[#ff8402]" />,
      title: "Full Root Access",
      description:
        "Complete control over your server environment with full administrative privileges",
    },
  ];

  const plans = [
    {
      name: "Essential Server",
      price: "8,999",
      period: "/month",
      currency: <TakaIcon />,
      cpu: "Intel Xeon E-2236",
      ram: "32GB DDR4",
      storage: "2x 1TB HDD RAID 1",
      bandwidth: "10TB",
      features: [
        "6 Cores / 12 Threads",
        "32GB ECC RAM",
        "2x 1TB HDD RAID 1",
        "10TB Bandwidth",
        "IPMI Access",
        "Basic Support",
      ],
      icon: <RiServerLine className="text-3xl text-[#ff8402] mb-4" />,
    },
    {
      name: "Business Server",
      price: "15,999",
      period: "/month",
      currency: <TakaIcon />,
      cpu: "Intel Xeon Silver 4210",
      ram: "64GB DDR4",
      storage: "2x 480GB SSD + 2x 2TB HDD",
      bandwidth: "20TB",
      features: [
        "10 Cores / 20 Threads",
        "64GB ECC RAM",
        "2x 480GB SSD + 2x 2TB HDD",
        "20TB Bandwidth",
        "Hardware RAID",
        "Priority Support",
      ],
      icon: <FaServer className="text-3xl text-[#ff8402] mb-4" />,
      popular: true,
    },
    {
      name: "Enterprise Server",
      price: "29,999",
      period: "/month",
      currency: <TakaIcon />,
      cpu: "Intel Xeon Gold 6230",
      ram: "128GB DDR4",
      storage: "4x 960GB SSD RAID 10",
      bandwidth: "50TB",
      features: [
        "20 Cores / 40 Threads",
        "128GB ECC RAM",
        "4x 960GB SSD RAID 10",
        "50TB Bandwidth",
        "DDoS Protection",
        "24/7 Premium Support",
      ],
      icon: <FaCogs className="text-3xl text-[#ff8402] mb-4" />,
    },
  ];

  const benefits = [
    "100% dedicated resources with no overselling",
    "Hardware-level isolation for maximum security",
    "Customizable hardware configurations",
    "24/7 on-site hardware support and replacement",
    "Multiple uplink providers for redundancy",
    "Enterprise-grade SLA with 99.99% uptime guarantee",
    "Flexible contract terms with upgrade options",
    "Advanced monitoring and reporting tools",
  ];

  const useCases = [
    {
      title: "High-Traffic Websites",
      description: "Handle millions of visitors with consistent performance",
      icon: <FaGlobe className="text-2xl text-[#ff8402]" />,
    },
    {
      title: "Database Servers",
      description: "Run demanding database applications with low latency",
      icon: <FaDatabase className="text-2xl text-[#ff8402]" />,
    },
    {
      title: "Game Servers",
      description: "Dedicated resources for lag-free gaming experiences",
      icon: <FaBolt className="text-2xl text-[#ff8402]" />,
    },
    {
      title: "Enterprise Applications",
      description:
        "Mission-critical applications requiring maximum reliability",
      icon: <FaShieldAlt className="text-2xl text-[#ff8402]" />,
    },
  ];

  const specifications = [
    {
      category: "Processors",
      details: [
        "Intel Xeon E-series",
        "Intel Xeon Silver",
        "Intel Xeon Gold",
        "AMD EPYC Series",
      ],
    },
    {
      category: "Memory",
      details: [
        "32GB to 512GB DDR4 ECC",
        "2666MHz to 3200MHz",
        "Registered DIMMs",
      ],
    },
    {
      category: "Storage",
      details: [
        "SATA HDD/SSD",
        "NVMe SSDs",
        "Hardware RAID 0/1/5/10",
        "Hot-swap bays",
      ],
    },
    {
      category: "Network",
      details: [
        "1Gbps to 10Gbps ports",
        "Multiple uplinks",
        "DDoS protection",
        "Low latency routing",
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
        .use-case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
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

       
        .dedicated-content {
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
        

        .dedicated-pricing-hover:hover {
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
          box-shadow: 0 20px 40px rgba(255, 132, 2, 0.3);
        }
        

        .use-case-hover:hover {
          transform: translateY(-5px);
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

        
        @keyframes serverGlow {
          0% { text-shadow: 0 0 5px rgba(255, 132, 2, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 132, 2, 0.8); }
          100% { text-shadow: 0 0 5px rgba(255, 132, 2, 0.5); }
        }
        
        .server-icon-hover:hover {
          animation: serverGlow 2s infinite;
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
        {useCases.map((useCase, index) => (
          <div key={index}>
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
        {specifications.map((spec, index) => (
          <div key={index}>
            <h3>{spec.category}</h3>
            {spec.details.map((detail, idx) => (
              <span key={idx}>{detail}</span>
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
            <span className="text-white">Dedicated</span>{" "}
            <span className="text-white">Hosting</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Maximum performance, security, and control with our enterprise-grade
            dedicated servers. Perfect for resource-intensive applications and
            mission-critical workloads.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full md:py-20 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer dedicated-content">
          <section className="tech-container p-4 md:p-8  w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Enterprise Dedicated Servers
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Exclusive Hardware • Full Root Access • 99.99% Uptime
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6 mt-8 md:mt-20">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Enterprise Features
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Unmatched performance and reliability with fully dedicated
                hardware resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant feature-card-hover"
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

          <section className="tech-container p-4   mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-4 md:mb-8 xl:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Enterprise Server Plans
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Choose the perfect dedicated server configuration for your
                business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 xl:gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`tech-container p-8 text-center relative dedicated-pricing-hover ${
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

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto ">
            <h2 className="text-2xl text-3xl font-bold mb-8 text-center text-white ">
              Enterprise Hardware Specifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="tech-container p-6 spec-item-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-hover-instant">
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

          <section className="tech-container p-4  mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-hover-instant">
                Ideal For{" "}
                <span className="text-white">Demanding Workloads</span>
              </h2>
              <p className="text-gray-300 text-base text-lg max-w-3xl mx-auto">
                Perfect solution for applications requiring maximum performance
              </p>
            </div>

            <div className="use-case-grid">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="tech-container p-6 use-case-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="flex items-center mb-4">
                    {useCase.icon}
                    <h3 className="text-xl font-bold ml-3 text-white text-hover-instant">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4 md:p-8   w-11/12 md:w-9/12 mx-auto ">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white ">
                  Why Choose{" "}
                  <span className="text-white">Dedicated Hosting</span>?
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
                    src={dedicatedServerImage}
                    alt="Dedicated server infrastructure illustration showing enterprise-grade hardware and exclusive hosting resources"
                    className="rounded mx-auto image-hover-instant w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-2xl text-3xl font-bold mb-4 text-white ">
                Ready for Maximum Performance
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Get in touch with our experts to design the perfect dedicated
                server solution for your needs
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  Customize Your Server
                </button>
                <button className="border border-[#ff8402] text-white hover:text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                  <span className="ml-2">Get Quote</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                * Custom configurations available • Free setup • 30-day
                money-back guarantee
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default DedicatedHosting;
