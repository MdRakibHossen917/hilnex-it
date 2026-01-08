import React, { useRef, useEffect, useState } from "react";
import CellEffect from "../../CellEffect/CellEffect";
import Feature from "../../Shared/Feature/Feature";

const Card1 = () => {
  return (
    <div
      className="w-full p-6 md:p-8 rounded-lg"
      style={{
        border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Transform Your Digital Presence
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            We deliver cutting-edge web, software, and mobile app development solutions 
            that drive business growth and success.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Our expert team combines creativity with technology to build powerful 
            digital experiences tailored to your business needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            Get Started Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div
              className="rounded-lg p-6 text-center"
              style={{
                border: "1px solid #343435",
                backgroundColor: "rgba(36, 36, 37, 0.5)",
              }}
            >
              <div className="text-4xl font-bold text-[#ff8402] mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div
              className="rounded-lg p-6 text-center"
              style={{
                border: "1px solid #343435",
                backgroundColor: "rgba(36, 36, 37, 0.5)",
              }}
            >
              <div className="text-4xl font-bold text-[#ff8402] mb-2">300+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div
              className="rounded-lg p-6 text-center"
              style={{
                border: "1px solid #343435",
                backgroundColor: "rgba(36, 36, 37, 0.5)",
              }}
            >
              <div className="text-4xl font-bold text-[#ff8402] mb-2">50+</div>
              <div className="text-gray-400 text-sm">Expert Team</div>
            </div>
            <div
              className="rounded-lg p-6 text-center"
              style={{
                border: "1px solid #343435",
                backgroundColor: "rgba(36, 36, 37, 0.5)",
              }}
            >
              <div className="text-4xl font-bold text-[#ff8402] mb-2">10+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div
      className="w-full p-6 md:p-8 rounded-lg"
      style={{
        border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-400 text-lg">
          Comprehensive IT solutions to elevate your business
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Web Development",
            description: "Custom websites and web applications built with latest technologies",
            icon: "🌐"
          },
          {
            title: "Software Development",
            description: "Enterprise software solutions tailored to your business needs",
            icon: "💻"
          },
          {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android",
            icon: "📱"
          },
          {
            title: "Digital Marketing",
            description: "Data-driven marketing strategies to boost your online presence",
            icon: "📈"
          },
          {
            title: "Graphics Design",
            description: "Creative designs that make your brand stand out",
            icon: "🎨"
          },
          {
            title: "IT Consultancy",
            description: "Expert guidance to optimize your IT infrastructure and strategy",
            icon: "💡"
          }
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg"
            style={{
              border: "1px solid #343435",
              backgroundColor: "rgba(36, 36, 37, 0.5)",
            }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div
      className="w-full p-6 md:p-8 rounded-lg"
      style={{
        border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Hilnex?
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Expert Team",
                description: "Highly skilled professionals with years of industry experience"
              },
              {
                title: "Cutting-Edge Technology",
                description: "We use the latest tools and frameworks to deliver top-quality solutions"
              },
              {
                title: "Client-Centric Approach",
                description: "Your success is our priority. We work closely with you every step of the way"
              },
              {
                title: "Proven Track Record",
                description: "Successfully completed 500+ projects with satisfied clients worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#ff8402]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div
            className="p-6 rounded-lg"
            style={{
              border: "1px solid #343435",
              backgroundColor: "rgba(36, 36, 37, 0.5)",
            }}
          >
            <div className="text-5xl font-bold text-[#ff8402] mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction Rate</div>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{
              border: "1px solid #343435",
              backgroundColor: "rgba(36, 36, 37, 0.5)",
            }}
          >
            <div className="text-5xl font-bold text-[#ff8402] mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div
            className="p-6 rounded-lg"
            style={{
              border: "1px solid #343435",
              backgroundColor: "rgba(36, 36, 37, 0.5)",
            }}
          >
            <div className="text-5xl font-bold text-[#ff8402] mb-2">100+</div>
            <div className="text-gray-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card4 = () => {
  return (
    <div
      className="w-full p-6 md:p-8 rounded-lg"
      style={{
        border: "1px solid #343435",
        background: "rgba(26, 26, 26, 0.5)",
        boxShadow: "0 4px 6px rgba(50, 48, 48, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Let's discuss how we can help transform your business with technology
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className="p-6 rounded-lg text-center"
            style={{
              border: "1px solid #343435",
              backgroundColor: "rgba(36, 36, 37, 0.5)",
            }}
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm">01300981501</p>
          </div>
          <div
            className="p-6 rounded-lg text-center"
            style={{
              border: "1px solid #343435",
              backgroundColor: "rgba(36, 36, 37, 0.5)",
            }}
          >
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm">mdrakibhossencse@gmail.com</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#ff8402] text-white font-semibold rounded-lg hover:bg-[#ff9502] transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

const Animation = () => {
  const playerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const playAnimation = () => {
      if (playerRef.current) {
        playerRef.current.stop();
        playerRef.current.play();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playAnimation();
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) playAnimation();
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const tabs = [
    { 
      id: 0, 
      title: "Architecto", 
      icon: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    },
    { 
      id: 1, 
      title: "Corrupti", 
      icon: (
        <>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </>
      )
    },
    { 
      id: 2, 
      title: "Excepturi", 
      icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    },
    { 
      id: 3, 
      title: "Consectetur", 
      icon: (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </>
      )
    },
  ];

  const cards = [
    { id: 1, component: <Card1 /> },
    { id: 2, component: <Card2 /> },
    { id: 3, component: <Card3 /> },
    { id: 4, component: <Card4 /> },
  ];

  const gridBackgroundStyle = {
    backgroundImage: `linear-gradient(90deg, #1a1a1a 1px, transparent 1px), linear-gradient(#1a1a1a 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
  };

  return (
    <div className="relative bg-[#0D0D0D]" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={gridBackgroundStyle} />
        <CellEffect />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Feature />
      </div>

      <div className="relative z-20">
        <div className="text-center mb-7 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 md:py-10 lg:py-10 xl:py-10 2xl:py-10">
          <div
            className="iceberg-regular text-white text-xl w-full uppercase border-t border-b border-white/20 p-3  
        bg-gradient-to-r from-black via-[#0D0D0D] to-black mx-auto text-center"
          >
            <h2 className="text-white mx-auto text-center">
              The Sticky Card Showcase
            </h2>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-[#0D0D0D] text-gray-800 px-4 pb-4">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              rel="noopener noreferrer"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b transition-colors ${
                activeTab === idx
                  ? "border-gray-600 text-white border border-b-0 rounded-t-lg bg-[#1a1a1a]"
                  : "border-gray-600 text-gray-400 hover:text-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                {tab.icon}
              </svg>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[70vh] md:px-4 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-start relative">
            <div className="w-11/12 md:w-9/12">
              {cards[activeTab].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
