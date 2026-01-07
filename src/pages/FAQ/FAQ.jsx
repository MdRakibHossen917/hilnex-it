import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaPlay,
  FaCheck,
  FaHeadset,
} from "react-icons/fa";
import CellEffect from "../../Components/CellEffect/CellEffect";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import OfferCard from "../../Components/Shared/OfferCard/OfferCard";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Musking provide?",
      answer:
        "Musking offers comprehensive digital transformation services including web development, mobile applications, cloud solutions, AI integration, and enterprise software development. We help businesses scale and innovate with cutting-edge technology solutions.",
    },
    {
      question: "How does Musking ensure project quality?",
      answer:
        "We follow agile methodologies with continuous testing and quality assurance. Our process includes regular client reviews, automated testing pipelines, code reviews, and performance optimization to deliver robust, scalable solutions that exceed industry standards.",
    },
    {
      question: "What industries does Musking specialize in?",
      answer:
        "We have extensive experience across multiple sectors including fintech, healthcare, e-commerce, logistics, SaaS platforms, and enterprise applications. Our team adapts to your specific industry requirements and compliance needs.",
    },
    {
      question: "What is Musking's development process?",
      answer:
        "Our process includes discovery & planning, UI/UX design, development sprints, quality assurance, deployment, and ongoing support. We maintain transparent communication throughout with regular demos and progress updates.",
    },
    {
      question: "How does Musking handle data security?",
      answer:
        "Security is our top priority. We implement industry-best practices including encryption, secure APIs, regular security audits, compliance with GDPR/HIPAA standards, and secure cloud infrastructure to protect your data and your users' information.",
    },
    {
      question: "What technologies does Musking work with?",
      answer:
        "We work with modern tech stacks including React, Node.js, Python, AWS, Azure, Google Cloud, React Native, Flutter, MongoDB, PostgreSQL, and various AI/ML frameworks. We choose technologies based on project requirements and scalability needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Simple websites take 4-6 weeks, medium applications 2-4 months, and enterprise solutions 6+ months. We provide detailed timelines during our initial consultation based on your specific requirements.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support packages including bug fixes, feature updates, performance monitoring, security patches, and 24/7 technical support to ensure your solution remains optimal and up-to-date.",
    },
  ];

  const benefits = [
    "Expert team with 10+ years of industry experience",
    "Proven track record of successful project delivery",
    "Transparent pricing with no hidden costs",
    "Agile development methodology for flexibility",
    "24/7 customer support and maintenance",
    "Cutting-edge technology stack implementation",
    "Security-first approach to all projects",
    "Regular progress updates and client collaboration",
  ];

  const specifications = [
    {
      category: "Development Process",
      details: [
        "Agile Methodology",
        "Continuous Integration",
        "Quality Assurance",
        "Client Collaboration",
      ],
    },
    {
      category: "Technology Stack",
      details: [
        "Modern Frameworks",
        "Cloud Infrastructure",
        "Database Solutions",
        "Security Protocols",
      ],
    },
    {
      category: "Support & Maintenance",
      details: [
        "24/7 Technical Support",
        "Regular Updates",
        "Security Patches",
        "Performance Monitoring",
      ],
    },
    {
      category: "Project Management",
      details: [
        "Dedicated Manager",
        "Progress Tracking",
        "Timely Delivery",
        "Budget Management",
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
        
        .faq-item {
          background: #000000;
          border: 1px solid rgba(255, 132, 2, 0.2);
          transition: all 0.3s ease-in-out;
        }
        
        .faq-item:hover {
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 0 8px rgba(255, 132, 2, 0.1);
        }

        /* Fixed z-index layers - MarketingSoftware style */
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

        /* Ensure content stays above effects */
        .faq-content {
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
        
        /* Button hover effects */
        .btn-hover-instant {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-hover-instant:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 132, 2, 0.5);
        }
        
        /* Text hover effects */
        .text-hover-instant {
          transition: all 0.3s ease;
        }
        .text-hover-instant:hover {
          color: #ff8402;
          text-shadow: 0 0 8px rgba(255, 132, 2, 0.7);
        }
        
        /* Card hover effects */
        .card-hover-instant {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover-instant:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 30px rgba(255, 132, 2, 0.25);
        }

        /* Benefit item hover */
        .benefit-item-hover:hover {
          transform: translateX(10px);
          color: #ff8402;
          transition: all 0.3s ease;
        }

        /* Spec item hover */
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

      {/* Hero Section with Particles */}
      <section className="relative w-full h-[300px] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <ParticlesBackground />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <header className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-2xl md:text-2xl xl:text-5xl font-black mb-2 md:mb-6">
            <span className="text-white">FAQ</span>
          </h1>
          <p className="text-xs sm:text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our services, processes, and
            technology expertise.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full p-4 sm:p-10 md:py-20 grid-bg-pattern">
        {/* CellEffect with proper z-index - MarketingSoftware style */}
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        {/* All content with higher z-index - MarketingSoftware style */}
        <div className="content-layer faq-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-full md:w-11/12 lg:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                Expert Answers • Process Details • Service Information • Support
                Guidance
              </p>
            </div>
          </section>

          <div className="relative max-w-7xl mx-auto mb-16 mt-8 md:mt-20">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Common Questions
                </span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Find quick answers to the most frequently asked questions about
                our services and processes
              </p>
            </div>

            <section className="tech-container p-6 md:p-8 mb-8 w-full md:w-11/12 lg:w-9/12 mx-auto relative z-20 card-hover-instant">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="faq-item rounded transition-all duration-300"
                    style={{ position: "relative", zIndex: 35 }}
                  >
                    <button
                      className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-900/50 transition-all duration-300 rounded"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-semibold text-lg text-white pr-4 text-hover-instant">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#ff8402] to-[#ff8402] rounded-full flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 hover:scale-110">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-800">
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-full md:w-11/12 lg:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Service <span className="text-white">Specifications</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white ">
                  Why Choose <span className="text-white">Musking</span>
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
                <div className="tech-container p-8 text-center card-hover-instant">
                  <div className="text-6xl text-[#ff8402] mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-400">
                    Get professional advice and solutions tailored to your
                    specific business needs and objectives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 md:p-8 md:-mb-10 w-full md:w-11/12 lg:w-9/12 mx-auto last-card-position">
            <div className="text-center p-2 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-4 max-w-md mx-auto text-base md:text-lg">
                Can't find the answer you're looking for? Please reach out to
                our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-3 bg-gradient-to-r from-[#ff8402] to-[#ff8402] text-white font-semibold rounded flex items-center gap-2 transition-all duration-300 btn-hover-instant">
                  <FaPhoneAlt className="w-4 h-4" />
                  Contact Sales
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Quick response guaranteed • Free consultation • Expert advice
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-8">
        <GlobMapAllPage />
      </div>
    </>
  );
};

export default FAQ;
