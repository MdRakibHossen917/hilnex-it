import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaCode, FaCheckCircle } from "react-icons/fa";
import CellEffect from "../../../Components/CellEffect/CellEffect";
import GlobMapAllPage from "../../../Components/Shared/GlobMapAllPage/GlobMapAllPage";
import ParticlesBackground from "../../../Components/Shared/ParticlesBackground/ParticlesBackground";
import RegulerLoadingSpinner from "../../../Components/Shared/RegulerLoadingSpinner/RegulerLoadingSpinner";

const DigitalMarketing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const servicesData = {
    mainTitle: "Digital Marketing Services",
    tagline:
      "Grow your brand with data-driven digital strategies that deliver real results. Our marketing experts specialize in SEO, social media, paid campaigns, and content strategy to boost your reach and ROI. At Hilnex, we don't just market — we create digital impact.",
    marketingServices: [
      {
        category: "Search Engine Optimization",
        items: [
          "On-Page SEO Optimization",
          "Off-Page SEO & Link Building",
          "Technical SEO Audit",
          "Local SEO Services",
          "E-commerce SEO",
          "International SEO",
        ],
      },
      {
        category: "Social Media Marketing",
        items: [
          "Social Media Strategy",
          "Content Creation & Management",
          "Paid Social Advertising",
          "Community Management",
          "Influencer Marketing",
          "Social Media Analytics",
        ],
      },
      {
        category: "Content Marketing",
        items: [
          "Content Strategy Development",
          "Blog Writing & Management",
          "Video Content Production",
          "Email Marketing Campaigns",
          "Content Distribution",
          "Content Performance Analysis",
        ],
      },
      {
        category: "Paid Advertising",
        items: [
          "Google Ads Management",
          "Facebook & Instagram Ads",
          "LinkedIn Advertising",
          "Programmatic Advertising",
          "Retargeting Campaigns",
          "Conversion Rate Optimization",
        ],
      },
    ],
    toolsPlatforms: {
      analytics: [
        "Google Analytics",
        "Google Search Console",
        "SEMrush",
        "Ahrefs",
        "Hotjar",
        "Google Tag Manager",
      ],
      advertising: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Twitter Ads",
        "TikTok Ads",
        "Programmatic Platforms",
      ],
      social: [
        "Hootsuite",
        "Buffer",
        "Sprout Social",
        "Later",
        "Canva",
        "Adobe Creative Cloud",
      ],
      automation: [
        "Mailchimp",
        "HubSpot",
        "ActiveCampaign",
        "ConvertKit",
        "Marketo",
        "Salesforce",
      ],
    },
    process: [
      {
        step: "01",
        title: "Strategy & Analysis",
        description:
          "Audit your current presence and develop data-driven strategies",
      },
      {
        step: "02",
        title: "Implementation",
        description:
          "Execute campaigns across multiple channels with precision",
      },
      {
        step: "03",
        title: "Optimization",
        description: "Continuously monitor and optimize for maximum ROI",
      },
      {
        step: "04",
        title: "Reporting & Insights",
        description: "Provide detailed analytics and actionable insights",
      },
    ],
    results: [
      {
        metric: "250%",
        description: "Average increase in organic traffic",
      },
      {
        metric: "180%",
        description: "ROI improvement for our clients",
      },
      {
        metric: "95%",
        description: "Client satisfaction rate",
      },
      {
        metric: "300+",
        description: "Successful campaigns delivered",
      },
    ],
    specialties: [
      {
        title: "Data-Driven Approach",
        description:
          "Strategies based on comprehensive data analysis and insights",
      },
      {
        title: "Targeted Campaigns",
        description: "Precise audience targeting for maximum conversion rates",
      },
      {
        title: "Continuous Optimization",
        description: "Ongoing campaign refinement for better performance",
      },
      {
        title: "Transparent Reporting",
        description: "Clear, detailed reports showing your marketing ROI",
      },
    ],
    channels: [
      {
        name: "Search Marketing",
        platforms: "Google, Bing, Yahoo",
      },
      {
        name: "Social Media",
        platforms: "Facebook, Instagram, LinkedIn, Twitter",
      },
      {
        name: "Content & SEO",
        platforms: "Blogs, Videos, Infographics",
      },
      {
        name: "Email Marketing",
        platforms: "Newsletters, Automation, Campaigns",
      },
    ],
    projects: [
      {
        id: 1,
        name: "SEO Campaign Pro",
        description:
          "A comprehensive SEO campaign that increased organic traffic by 300% for an e-commerce platform. Includes technical SEO audit, on-page optimization, content strategy, link building, and local SEO implementation with detailed analytics and reporting.",
        url: "https://seo-campaign-pro.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console", "Google Ads"],
        features: [
          "Technical SEO Audit",
          "On-page Optimization",
          "Content Strategy",
          "Link Building",
          "Local SEO",
          "Analytics Dashboard",
          "Keyword Research",
          "Performance Tracking",
        ],
        category: "SEO Campaign",
        status: "Live",
      },
      {
        id: 2,
        name: "Social Media Success",
        description:
          "A complete social media marketing campaign that grew followers by 400% and engagement by 250% across Facebook, Instagram, LinkedIn, and Twitter. Includes content creation, paid advertising, influencer partnerships, and community management.",
        url: "https://social-media-success.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
        technologies: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Hootsuite", "Canva"],
        features: [
          "Content Creation",
          "Paid Advertising",
          "Influencer Marketing",
          "Community Management",
          "Analytics Reports",
          "Engagement Tracking",
          "Campaign Optimization",
          "ROI Measurement",
        ],
        category: "Social Media Campaign",
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
        
        body, html {
          background-color: #0d0d0d;
          font-family: 'Inter', sans-serif;
          color: #e0e0e0;
          overflow-x: hidden;
          width: 100%;
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
        
        /* Content layers */
        .content-layer {
          position: relative;
          z-index: 30;
        }
        
        .effect-layer {
          position: absolute;
          z-index: 5;
          pointer-events: none;
        }
        
        .marketing-content {
          position: relative;
          z-index: 40;
          overflow: visible;
        }
       
        /* Fixed positioning - remove problematic transforms */
        .first-card-position {
          margin-top: -80px;
          margin-bottom: 20px;
        }
        
        .last-card-position {
          margin-top: 20px;
          margin-bottom: 40px;
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
            margin-top: -60px;
            margin-bottom: 15px;
          }
          
          .last-card-position {
            margin-top: 15px;
            margin-bottom: 30px;
          }
        }
        
        /* Hover effects */
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
        
        .metric-hover:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(255, 132, 2, 0.3);
          transition: all 0.3s ease;
        }

        .process-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 15px 40px rgba(255, 132, 2, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .specialty-card-hover:hover {
          transform: translateY(-5px);
          background: rgba(255, 132, 2, 0.05);
          border-color: rgba(255, 132, 2, 0.4);
          transition: all 0.3s ease;
        }

        .channel-card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 132, 2, 0.4);
          box-shadow: 0 12px 35px rgba(255, 132, 2, 0.25);
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

        /* Main container fix */
        .main-container {
          width: 100%;
          overflow: visible;
          position: relative;
        }
      `}</style>

      <section className="relative w-full h-[300px] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <ParticlesBackground />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <header className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-2xl md:text-2xl xl:text-5xl font-black mb-2 md:mb-6">
            <span className="text-white">Digital</span>{" "}
            <span className="text-white">Marketing</span>
          </h1>
          <p className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {servicesData.tagline}
          </p>
        </header>
      </section>

      <div className="main-container relative mx-auto w-full py-8 md:py-12 grid-bg-pattern">
        <div className="effect-layer absolute inset-0 h-full">
          <CellEffect />
        </div>

        <div className="content-layer marketing-content">
          <section className="tech-container p-4 md:p-8 w-11/12 md:w-9/12 mx-auto first-card-position">
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-2xl xl:text-3xl font-bold text-white">
                Data-Driven Digital Marketing
              </h2>
              <div className="w-12 md:w-90 h-1 my-1 bg-[#ff8402] md:mx-auto"></div>
              <p className="text-xs md:text-lg text-gray-300 mt-2 neon-accent">
                SEO • Social Media • PPC • Content Strategy
              </p>
            </div>
          </section>

          <section className="relative w-11/12 md:w-9/12 mx-auto mb-8 md:mb-12 mt-8">
            <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1 text-center">
              <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 glow-border-bottom inline-block">
                Proven Marketing Results
              </span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicesData.results.map((result, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant metric-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <div className="text-3xl font-black mb-2 metric-gradient">
                    {result.metric}
                  </div>
                  <p className="text-gray-300 text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative w-11/12 md:w-9/12 mx-auto mb-8 md:mb-12">
            <h1 className="text-[#dbd9d9] text-2xl font-semibold tracking-wide mb-1 text-center">
              <span className="text-xl md:text-2xl xl:text-3xl font-bold mb-8 glow-border-bottom inline-block">
                Marketing Channels We Master
              </span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicesData.channels.map((channel, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center card-hover-instant channel-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-white text-hover-instant">
                    {channel.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{channel.platforms}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-4 w-11/12 md:w-9/12 mx-auto mb-8 md:mb-12">
            {servicesData.marketingServices.map((service, index) => (
              <div
                key={index}
                className="tech-container p-4 md:p-6 card-hover-instant"
                style={{ position: "relative", zIndex: 35 }}
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

          <section className="tech-container p-4 md:p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Our <span className="text-white">Marketing</span> Tools & Platforms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(servicesData.toolsPlatforms).map(
                ([category, tools]) => (
                  <div key={category} className="text-center">
                    <h3 className="text-lg font-semibold mb-4 neon-accent capitalize text-hover-instant">
                      {category === "analytics"
                        ? "Analytics Tools"
                        : category === "advertising"
                        ? "Advertising Platforms"
                        : category === "social"
                        ? "Social Media Tools"
                        : "Marketing Automation"}
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

          <section className="tech-container p-4 md:p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Our <span className="text-white">Marketing</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {servicesData.process.map((step, index) => (
                <div
                  key={index}
                  className="tech-container p-6 text-center process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
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

          <section className="tech-container p-4 md:p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
              Our <span className="text-white">Marketing</span> Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
              {servicesData.specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="tech-container text-center p-6 specialty-card-hover process-card-hover"
                  style={{ position: "relative", zIndex: 35 }}
                >
                  <h3 className="text-lg font-semibold mb-2 neon-accent text-hover-instant">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="tech-container p-6 md:p-8 mb-8 w-11/12 md:w-9/12 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Featured <span className="neon-accent">Projects</span>
              </h2>
              <div className="w-24 md:w-32 h-1 my-2 bg-[#ff8402] mx-auto"></div>
              <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                Explore our recent digital marketing campaigns that showcase our expertise
                in driving growth, engagement, and measurable results for businesses.
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
                        Tools & Platforms Used
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

          <section className="tech-container p-4 md:p-8 w-11/12 md:w-9/12 mx-auto last-card-position">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Grow Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's develop a data-driven digital marketing strategy that
                drives real results and maximizes your return on investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff8402] hover:bg-[#e67600] text-black font-semibold py-3 px-8 rounded transition duration-300 btn-hover-instant">
                  Start Your Campaign
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 border border-[#ff8402]/30 btn-hover-instant">
                  Get Free Marketing Audit
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

export default DigitalMarketing;