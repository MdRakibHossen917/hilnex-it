import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaCode, FaCheckCircle } from "react-icons/fa";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const WebDevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const servicesData = {
    mainTitle: "Web Development Services",
    tagline:
      "Bring your ideas to life with powerful, high-performing, and visually stunning websites At Hilnex, we design and develop responsive,SEO-optimized, and user-friendly websites that drive engagement and deliver results.",
    services: [
      {
        category: "Frontend Development",
        items: [
          "React.js & Next.js Applications",
          "Vue.js & Nuxt.js Solutions",
          "Angular Enterprise Applications",
          "Responsive Mobile-First Design",
          "Progressive Web Apps (PWA)",
          "Single Page Applications (SPA)",
        ],
      },
      {
        category: "Backend Development",
        items: [
          "Node.js & Express.js APIs",
          "Python Django & Flask",
          "PHP Laravel Development",
          "Database Design & Optimization",
          "RESTful & GraphQL APIs",
          "Serverless Architecture",
        ],
      },
      {
        category: "E-commerce Solutions",
        items: [
          "Custom E-commerce Platforms",
          "WooCommerce & Shopify",
          "Payment Gateway Integration",
          "Inventory Management Systems",
          "Multi-vendor Marketplaces",
          "Order Processing Automation",
        ],
      },
      {
        category: "CMS & Platforms",
        items: [
          "WordPress Custom Development",
          "Headless CMS Implementation",
          "Custom CMS Development",
          "Content Migration Services",
          "Plugin & Theme Development",
          "Platform Optimization",
        ],
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue",
      "Angular",
      "Node.js",
      "Python",
      "PHP",
      "Laravel",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We analyze your requirements and create a detailed project roadmap",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Our designers create intuitive and engaging user interfaces",
      },
      {
        step: "03",
        title: "Development",
        description: "Agile development with regular updates and testing",
      },
      {
        step: "04",
        title: "Deployment & Support",
        description: "Seamless deployment and ongoing maintenance support",
      },
    ],
    projects: [
      {
        id: 1,
        name: "Go Study Henna",
        description:
          "An advanced study abroad platform featuring comprehensive program listings, scholarship opportunities, and student resources. Built with modern web technologies for optimal performance and user experience.",
        longDescription:
          "Go Study Henna is a modern educational platform designed to simplify the study abroad journey. It provides students with easy access to thousands of international programs, scholarship opportunities, and valuable resources. The platform features an intuitive interface, advanced search capabilities, and comprehensive program information to help students make informed decisions about their educational future.",
        url: "https://go-study-henna.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "CSS3"],
        features: [
          "Program Discovery",
          "Scholarship Information",
          "How It Works Guide",
          "Student Testimonials",
          "FAQ Section",
          "Newsletter Subscription",
          "Mobile Responsive",
          "Fast Loading",
        ],
        category: "Educational Platform",
        status: "Live",
      },
      {
        id: 2,
        name: "Winter Sale",
        description:
          "A modern e-commerce platform featuring seasonal sales, product catalogs, and shopping cart functionality. Built with responsive design and optimized for performance during high-traffic sale periods.",
        longDescription:
          "Winter Sale is a cutting-edge e-commerce platform designed to handle seasonal shopping experiences with ease. The platform features an intuitive product browsing system, secure checkout process, and optimized performance to handle high traffic during sale events. With modern design principles and responsive layouts, it provides an excellent shopping experience across all devices.",
        url: "https://wintersale.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800",
        technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vite"],
        features: [
          "Product Catalog",
          "Shopping Cart",
          "Secure Checkout",
          "Responsive Design",
          "Sale Countdown Timer",
          "Product Filtering",
          "Mobile Optimized",
          "Fast Performance",
        ],
        category: "E-commerce Platform",
        status: "Live",
      },
      {
        id: 3,
        name: "Express Delivery",
        description:
          "A comprehensive courier and delivery management platform featuring real-time tracking, order management, and logistics optimization. Built with modern web technologies to handle high-volume delivery operations efficiently.",
        longDescription:
          "Express Delivery is a modern logistics platform designed to streamline courier and delivery services. The platform features real-time package tracking, route optimization, delivery notifications, and comprehensive order management. With intuitive interface and mobile-responsive design, it provides seamless experience for both customers and delivery personnel.",
        url: "https://express-delivery-9e788.web.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800",
        technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript", "React Router"],
        features: [
          "Real-time Tracking",
          "Order Management",
          "Route Optimization",
          "Delivery Notifications",
          "Customer Dashboard",
          "Mobile Responsive",
          "Secure Payment",
          "Analytics Dashboard",
        ],
        category: "Logistics Platform",
        status: "Live",
      },
      {
        id: 4,
        name: "Agro-Vet",
        description:
          "An agricultural and veterinary e-commerce platform providing farmers with quality veterinary medicines, agricultural products, and expert consultation services. Features product catalog, booking system, and comprehensive farm management solutions.",
        longDescription:
          "Agro-Vet is a specialized e-commerce platform designed for farmers and livestock owners. The platform offers a comprehensive range of veterinary medicines, agricultural products, farm equipment, and expert consultation services. With features like product browsing, booking system, article library, and special offers, it serves as a one-stop solution for agricultural needs.",
        url: "https://agro-vet.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
        technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Vite"],
        features: [
          "Product Catalog",
          "Veterinary Consultation",
          "Booking System",
          "Article Library",
          "Special Offers",
          "Order Management",
          "Responsive Design",
          "SEO Optimized",
        ],
        category: "E-commerce Platform",
        status: "Live",
      },
    ],
  };

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
        .service-feature {
          position: relative;
          padding-left: 1.5rem;
        }
        .service-feature:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #ff8402;
          font-weight: bold;
        }
        .tech-badge {
          background: rgba(255, 132, 2, 0.1);
          border: 1px solid rgba(255, 132, 2, 0.3);
          color: #ff8402;
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

      
        .webdev-content {
          position: relative;
          z-index: 40;
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
        
        .tech-badge-hover:hover {
          transform: scale(1.1);
          background: rgba(255, 132, 2, 0.2);
          border-color: rgba(255, 132, 2, 0.5);
          transition: all 0.3s ease;
        }
          

       .process-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 132, 2, 0.5);
          box-shadow: 0 20px 50px rgba(255, 132, 2, 0.2);
        }
        .project-image {
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>

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
            <span className="text-white">Web</span>{" "}
            <span className="text-white">Development</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {servicesData.tagline}
          </p>
        </header>
      </section>

      <div className="relative mx-auto w-full   md:py-20 grid-bg-pattern">
     
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer webdev-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-2xl xl:text-3xl md:text-2xl font-bold text-white">
                Platforms Web Development
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                Innovation • Performance • Excellence
              </p>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="tech-container p-6 md:p-8 mb-8 md:mb-12 w-11/12 md:w-9/12 mx-auto mt-8 md:mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Featured <span className="neon-accent">Projects</span>
              </h2>
              <div className="w-24 md:w-32 h-1 my-2 bg-[#ff8402] mx-auto"></div>
              <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                Explore our recent web development projects that showcase our expertise
                in building modern, scalable, and user-friendly applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {servicesData.projects.map((project) => (
                <div
                  key={project.id}
                  className="tech-container project-card overflow-hidden"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover project-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {project.name}
                        </h3>
                        <span className="px-3 py-1 bg-[#ff8402]/20 border border-[#ff8402]/50 text-[#ff8402] text-xs font-semibold rounded">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300 bg-black/50 px-2 py-1 rounded inline-block">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#ff8402] mb-3 flex items-center">
                        <FaCode className="mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="tech-badge px-3 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#ff8402] mb-3 flex items-center">
                        <FaCheckCircle className="mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start text-xs text-gray-400"
                          >
                            <span className="text-[#ff8402] mr-2 mt-1">▸</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-4 rounded transition duration-300 btn-hover-instant"
                      >
                        <FaGlobe />
                        <span>Visit Live Site</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-instant"
                        >
                          <FaGithub />
                          <span className="hidden sm:inline">View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4   w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6 mt-12 md:mt-12 ">
            {servicesData.services.map((service, index) => (
              <div 
                key={index} 
                className="tech-container p-6 card-hover-instant process-card-hover "
                style={{ position: 'relative', zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2 text-hover-instant">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="service-feature text-gray-300 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="tech-container p-8 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
              <span className="text-white">Technologies</span> We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {servicesData.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-badge px-4 py-2 rounded text-sm font-medium tech-badge-hover"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="tech-container p-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Our <span className="text-white">Development</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {servicesData.process.map((step, index) => (
                <div 
                  key={index} 
                  className="tech-container p-6 text-center process-card-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <div className="text-2xl font-black mb-3 neon-accent">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white text-hover-instant">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tech-container p-4  md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 ">
                Ready to Build Your Web Solution?
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-6">
                Let's discuss your project requirements and create a custom web
                solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-8 rounded transition duration-300 btn-hover-instant">
                  Start Your Project
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-instant">
                  View Portfolio
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      

        <GlobMapAllPage />
      
    </>
  );
};

export default WebDevelopment;