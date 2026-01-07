import React, { useState, useEffect } from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaUserTie,
  FaLightbulb,
  FaSpinner,
  FaPlay,
  FaRocket,
  FaCheck
} from "react-icons/fa";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const ContactUs = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-4xl text-[#ff8402]" />,
      title: "Email Us",
      details: "info@musking.com",
      subDetails: "support@musking.com",
    },
    {
      icon: <FaPhone className="text-4xl text-[#ff8402]" />,
      title: "Call Us",
      details: "09649-888833",
      subDetails: "01711-894488",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-[#ff8402]" />,
      title: "Visit Us",
      details: "Muktobangla Complex, Suite-124, Level-6, Mirpur-1, Dhaka",
      subDetails: "",
    },
    {
      icon: <FaClock className="text-4xl text-[#ff8402]" />,
      title: "Business Hours",
      details: "Saturday - Thursday",
      subDetails: "10:00 AM - 7:00 PM",
    },
  ];

 const socialMedia = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/HilnexLimited/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://x.com/hilnexltd",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/hilnex/", 
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/hilnexltd/",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@hilnexltd",
  }
];


  const features = [
    {
      icon: <FaHeadset className="text-4xl text-[#ff8402]" />,
      title: "Quick Response",
      description: "We typically respond within 2-4 business hours"
    },
    {
      icon: <FaUserTie className="text-4xl text-[#ff8402]" />,
      title: "Expert Consultation",
      description: "Get free technical advice from our experts"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ff8402]" />,
      title: "Secure & Confidential",
      description: "Your information is safe with us"
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#ff8402]" />,
      title: "Project Discussion",
      description: "Let's discuss your project requirements in detail"
    }
  ];

  const benefits = [
    "24/7 customer support for urgent inquiries",
    "Free initial consultation and project estimation",
    "Dedicated account manager for enterprise clients",
    "Multi-channel communication options",
    "Quick turnaround time for project discussions",
    "Transparent pricing and detailed proposals",
    "Technical expertise across multiple domains",
    "Proven track record of successful projects"
  ];

  const specifications = [
    {
      category: "Support Channels",
      details: [
        "Email Support",
        "Phone Support",
        "Live Chat",
        "Video Conference",
      ],
    },
    {
      category: "Response Time",
      details: [
        "2-4 Hours (Business)",
        "24 Hours (Maximum)",
        "Urgent Priority",
        "Scheduled Calls",
      ],
    },
    {
      category: "Consultation Types",
      details: [
        "Technical Consultation",
        "Project Planning",
        "Budget Estimation",
        "Solution Design",
      ],
    },
    {
      category: "Communication",
      details: [
        "Multi-language Support",
        "Documentation",
        "Progress Updates",
        "Regular Meetings",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond within 2-4 business hours. For urgent matters, please call us directly."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to understand your project requirements and provide estimates."
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include your project requirements, budget range, timeline, and any specific features you need."
    },
    {
      question: "Do you have social media presence?",
      answer: "Yes! Follow us on Facebook, Twitter, LinkedIn, Instagram, and TikTok for updates and tech insights."
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

       
        .contact-content {
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
        
        
        .contact-item-hover:hover {
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
        
       
        .social-item-hover:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 132, 2, 0.4);
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

       
        .form-input {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 132, 2, 0.3);
          color: #e0e0e0;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: #ff8402;
          box-shadow: 0 0 0 2px rgba(255, 132, 2, 0.2);
        }
        .form-input::placeholder {
          color: #9ca3af;
        }

     
        @keyframes contactPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .contact-icon-hover:hover {
          animation: contactPulse 2s infinite;
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
        {contactInfo.map((info, index) => (
          <div key={index}>
            <h3>{info.title}</h3>
            <p>{info.details}</p>
            <p>{info.subDetails}</p>
          </div>
        ))}
        {features.map((feature, index) => (
          <div key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
        {socialMedia.map((social, index) => (
          <div key={index}>
            <span>{social.name}</span>
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
            <span className="text-white">Contact</span>{" "}
            <span className="text-white">Us</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? Get in touch with our expert team. 
            We're here to help you transform your ideas into reality.
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full   md:py-20 grid-bg-pattern">
        
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>
 
        <div className="content-layer contact-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-12">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Get In Touch With Our Experts
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 tech-blue">
                Quick Response • Expert Consultation • Multi-Channel Support • Project Discussion
              </p>
            </div>
          </section>

          <div className="relative w-11/12 md:w-9/12 mx-auto   mx-auto mb-6 mt-8 md:mt-12">
            <div className="text-center mb-12">
              <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1">
                <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-2 glow-border-bottom block w-full text-center">
                  Contact Information
                </span>
              </h1>
             
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                Multiple ways to reach us. Choose what works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4   ">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="tech-container p-6 text-center card-hover-instant feature-card-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <div className="feature-icon contact-icon-hover">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-hover-instant">
                    {info.title}
                  </h3>
                  <p className="text-gray-400 mb-1">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.subDetails}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="tech-container p-4   mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Contact <span className="text-white">Specifications</span>
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

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
             
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Send Us a <span className="text-white">Message</span>
                </h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input p-3 rounded focus:outline-none w-full"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-input p-3 rounded focus:outline-none w-full"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-input p-3 rounded focus:outline-none w-full"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="6"
                    className="form-input p-3 rounded focus:outline-none resize-none w-full"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded-lg transition duration-300 btn-hover-instant w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>

               
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white ">
                  Why Contact <span className="text-white">Us</span>
                </h2>
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="tech-container p-4 card-hover-instant feature-card-hover"
                      style={{ position: 'relative', zIndex: 35 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="contact-icon-hover">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white text-hover-instant">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="tech-container p-6 card-hover-instant" style={{ position: 'relative', zIndex: 35 }}>
                  <h3 className="text-xl font-bold mb-4 text-white text-hover-instant">
                    Follow Us
                  </h3>
                  <div className="flex justify-center space-x-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-container p-3 social-item-hover"
                        title={social.name}
                        style={{ position: 'relative', zIndex: 35 }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4 md:p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto card-hover-instant">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Why Choose Our <span className="text-white">Support</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center benefit-item-hover">
                      <FaPlay className="text-[#ff8402] mr-4 text-sm" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="tech-container p-8 text-center feature-card-hover">
                  <div className="feature-icon contact-icon-hover">
                    <FaHeadset />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>
                  <p className="text-gray-400">
                    We're always here to help you with any questions or concerns about our services
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-container p-4  w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-4 md:mb-8 xl:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white ">
                Frequently Asked <span className="text-white">Questions</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Quick answers to common questions about contacting us
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="tech-container p-6 contact-item-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <h3 className="text-lg font-bold mb-3 text-white text-hover-instant">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white ">
                Ready to <span className="text-white">Start Your Project?</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-4">
                Contact us today and let's discuss how we can help bring your vision to life 
                with our expert development services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#ff8402] hover:bg-[#e67300] text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                
                  Start Project Discussion
                </button>
                <button className="border border-[#ff8402] text-white hover:text-white font-bold py-4 px-8 rounded transition duration-300 btn-hover-instant flex items-center justify-center">
                
                  Schedule Call
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Free consultation • No obligation • Quick response guaranteed
              </p>
            </div>
          </section>
        </div>
      </div>

      <GlobMapAllPage />
    </>
  );
};

export default ContactUs;