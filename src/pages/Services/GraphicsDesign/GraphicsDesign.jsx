import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaCode, FaCheckCircle } from "react-icons/fa";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import { FaSpinner } from "react-icons/fa";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const GraphicsDesign = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const preloadContent = async () => {
      try {
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

  const servicesData = {
    mainTitle: "Graphics Design Services",
    tagline:
      "Your brand deserves to stand out — and we make sure it does. We create stunning visuals, memorable logos, and complete brand identities that capture your story and connect emotionally with your audience.",
    designServices: [
      {
        category: "Brand Identity Design",
        items: [
          "Logo Design & Branding",
          "Business Card Design",
          "Letterhead & Stationery",
          "Brand Style Guides",
          "Brand Manuals",
          "Visual Identity Systems",
        ],
      },
      {
        category: "Print & Marketing Design",
        items: [
          "Brochures & Flyers",
          "Posters & Banners",
          "Product Packaging",
          "Billboard Designs",
          "Magazine Layouts",
          "Catalog Design",
        ],
      },
      {
        category: "Digital & UI/UX Design",
        items: [
          "Website UI/UX Design",
          "Mobile App Interfaces",
          "Social Media Graphics",
          "Email Newsletter Templates",
          "Digital Ad Banners",
          "Presentation Design",
        ],
      },
      {
        category: "Specialized Design",
        items: [
          "Infographic Design",
          "Icon & Illustration Sets",
          "Motion Graphics",
          "3D Modeling & Rendering",
          "Character Design",
          "Environmental Graphics",
        ],
      },
    ],
    designTools: {
      design: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Figma",
        "Sketch",
      ],
      prototyping: [
        "Adobe XD",
        "Framer",
        "InVision",
        "Proto.io",
        "Marvel",
        "Webflow",
      ],
      motion: [
        "After Effects",
        "Premiere Pro",
        "Cinema 4D",
        "Blender",
        "Final Cut Pro",
      ],
      special: [
        "Procreate",
        "Affinity Designer",
        "Canva",
        "Figma",
        "Sketch",
        "Adobe Creative Cloud",
      ],
    },
    process: [
      {
        step: "01",
        title: "Discovery & Research",
        description: "Understand your brand, audience, and design requirements",
      },
      {
        step: "02",
        title: "Concept & Strategy",
        description: "Create design concepts and strategic visual direction",
      },
      {
        step: "03",
        title: "Design & Iteration",
        description: "Develop designs with client feedback and revisions",
      },
      {
        step: "04",
        title: "Delivery & Assets",
        description: "Finalize and deliver all design files and formats",
      },
    ],
    specialties: [
      {
        title: "Creative Excellence",
        description:
          "Innovative designs that capture attention and communicate effectively",
      },
      {
        title: "Fast Turnaround",
        description: "Quick design delivery without compromising on quality",
      },
      {
        title: "Unlimited Revisions",
        description:
          "We work until you're completely satisfied with the results",
      },
      {
        title: "Multi-format",
        description: "Designs optimized for print, web, and mobile platforms",
      },
    ],
    portfolio: [
      {
        type: "Logo Design",
        count: "150+",
        description: "Unique brand identities created",
      },
      {
        type: "UI/UX Projects",
        count: "80+",
        description: "Digital interfaces designed",
      },
      {
        type: "Print Designs",
        count: "300+",
        description: "Marketing materials delivered",
      },
      {
        type: "Brand Guides",
        count: "50+",
        description: "Comprehensive brand systems",
      },
    ],
    projects: [
      {
        id: 1,
        name: "Brand Identity Pro",
        description:
          "A complete brand identity design system for a modern tech company. Includes logo design, brand guidelines, stationery design, and comprehensive visual identity assets. The design reflects innovation and professionalism while maintaining brand consistency across all platforms.",
        url: "https://brand-identity-pro.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        technologies: ["Adobe Illustrator", "Figma", "Photoshop", "InDesign", "After Effects"],
        features: [
          "Logo Design",
          "Brand Guidelines",
          "Stationery Design",
          "Visual Identity",
          "Social Media Assets",
          "Print Materials",
          "Digital Assets",
          "Brand Manual",
        ],
        category: "Brand Identity",
        status: "Live",
      },
      {
        id: 2,
        name: "UI/UX Design Showcase",
        description:
          "A comprehensive UI/UX design portfolio featuring modern website and mobile app interfaces. Includes wireframes, prototypes, high-fidelity mockups, and interactive design systems. Showcasing user-centered design principles and modern aesthetic.",
        url: "https://uiux-design-showcase.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
        technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "Protopie"],
        features: [
          "Wireframes",
          "Prototypes",
          "High-fidelity Mockups",
          "Design Systems",
          "Interactive Prototypes",
          "User Flows",
          "Responsive Design",
          "Accessibility",
        ],
        category: "UI/UX Design",
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
        .tech-pill {
          background: rgba(255, 132, 2, 0.05);
          border: 1px solid rgba(255, 132, 2, 0.2);
          color: #ff8402;
        }
        .metric-gradient {
          background: linear-gradient(135deg, #ff8402 0%, #ffaa33 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        .graphics-content {
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
        
       
        .service-feature-hover:hover {
          color: #ff8402;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        
      
        .tech-pill-hover:hover {
          background: rgba(255, 132, 2, 0.15);
          border-color: rgba(255, 132, 2, 0.5);
          transform: scale(1.05);
          transition: all 0.2s ease;
        }
       
        
        .portfolio-hover:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(255, 132, 2, 0.3);
          transition: all 0.3s ease;
        }

       
        .design-card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .design-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
        }

       
        .specialty-card-hover:hover {
          transform: translateY(-5px);
          background: rgba(255, 132, 2, 0.05);
          border-color: rgba(255, 132, 2, 0.4);
          transition: all 0.3s ease;
        }
            .process-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

/* md = 768px */
@media (min-width: 768px) {
  .glow-border-bottom {
    width: 400px !important;
  }
}

/* lg = 1024px */
@media (min-width: 1024px) {
  .glow-border-bottom {
    width: 500px !important;
  }
}

/* xl = 1280px */
@media (min-width: 1280px) {
  .glow-border-bottom {
    width: 600px !important;
  }
}
      `}</style>

      <div className="hover-preload">
        {servicesData.designServices.map((service, index) => (
          <div key={index}>
            <h3>{service.category}</h3>
            {service.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        ))}
        {servicesData.specialties.map((specialty, idx) => (
          <div key={idx}>
            <h3>{specialty.title}</h3>
            <p>{specialty.description}</p>
          </div>
        ))}
        {servicesData.process.map((step, idx) => (
          <div key={idx}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
        {servicesData.portfolio.map((item, idx) => (
          <div key={idx}>
            <span>{item.count}</span>
            <h3>{item.type}</h3>
            <p>{item.description}</p>
          </div>
        ))}

        {Object.values(servicesData.designTools)
          .flat()
          .map((tool, idx) => (
            <span key={idx}>{tool}</span>
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
            <span className="text-white">Graphics</span>{" "}
            <span className="text-white">Design</span>
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

        
        <div className="content-layer graphics-content">
          <section className="tech-container p-4 md:p-8 mb-4 md:mb-16 w-11/12 md:w-9/12 mx-auto first-card-position -mt-12 md:-mt-20">
            <div className="text-left md:text-center">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-white">
                Creative Graphics Design
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                Visual Identity • Brand Design • Digital Creativity
              </p>
            </div>
          </section>

          <section className="relative w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6 mt-12 md:mt-12">
           <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1 text-center">
              <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 glow-border-bottom inline-block">
                Our Design Portfolio
              </span>
            </h1>
             
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  ">
              {servicesData.portfolio.map((item, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant portfolio-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <div className="text-3xl font-black mb-2 metric-gradient">
                    {item.count}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white text-hover-instant">
                    {item.type}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4  w-11/12 md:w-9/12 mx-auto mb-4 md:mb-6">
            {servicesData.designServices.map((service, index) => (
              <div 
                key={index} 
                className="tech-container p-4 design-card-hover"
                style={{ position: 'relative', zIndex: 35 }}
              >
                <h3 className="text-xl font-bold mb-4 neon-accent border-b border-[#ff8402]/20 pb-2 text-hover-instant">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="service-feature text-gray-300 text-sm service-feature-hover"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto  ">
            <h2 className="text-2xl font-bold mb-8 text-white text-center  ">
              Our <span className="text-white">Design</span> Tools & Software
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(servicesData.designTools).map(
                ([category, tools]) => (
                  <div key={category} className="text-center">
                    <h3 className="text-lg font-semibold mb-4 neon-accent capitalize text-hover-instant">
                      {category === "design"
                        ? "Design Software"
                        : category === "prototyping"
                        ? "Prototyping Tools"
                        : category === "motion"
                        ? "Motion & 3D"
                        : "Specialized Tools"}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {tools.map((tool, index) => (
                        <span
                          key={index}
                          className="tech-pill px-3 py-1 rounded text-xs font-medium tech-pill-hover"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="tech-container p-4 mb-4 md:mb-6 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white text-center  ">
              Our <span className="text-white">Design</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {servicesData.process.map((step, index) => (
                <div
                  key={index}
                  className="tech-container p-4 text-center design-card-hover"
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

          <section className="tech-container p-4 md:mb-6 w-11/12 md:w-9/12 mx-auto  ">
            <h2 className="text-2xl font-bold mb-8 text-white text-center  ">
              Why Choose <span className="text-white">Our</span> Design Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6  ">
              {servicesData.specialties.map((specialty, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 specialty-card-hover process-card-hover"
                  style={{ position: 'relative', zIndex: 35 }}
                >
                  <h3 className="text-lg font-semibold mb-2 neon-accent text-hover-instant">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{specialty.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="tech-container p-6 md:p-8 mb-6 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Featured <span className="neon-accent">Projects</span>
              </h2>
              <div className="w-24 md:w-32 h-1 my-2 bg-[#ff8402] mx-auto"></div>
              <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                Explore our recent graphics design projects that showcase our creativity
                in building memorable brand identities and stunning visual designs.
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
                        Tools Used
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

          <section className="tech-container p-4 md:-mb-10 w-11/12 md:w-9/12 mx-auto last-card-position  ">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white  ">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's create stunning visual designs that elevate your brand and
                captivate your audience across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-8 rounded transition duration-300 btn-hover-instant">
                  Start Your Design Project
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-instant">
                  View Design Portfolio
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

export default GraphicsDesign;