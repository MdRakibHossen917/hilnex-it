import React from "react";
import CellEffect from "../../CellEffect/CellEffect";
import Feature from "../../Shared/Feature/Feature";

const FAQSection = () => {
  const faqData = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner and follow the registration process.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to 'My Account' settings and select 'Edit Profile' to make changes.",
    },
    {
      question: "What services does Hilnex provide?",
      answer: "Hilnex offers comprehensive IT solutions including web development, software development, mobile app development, graphics design, digital marketing, and IT consultancy services.",
    },
    {
      question: "How long does a project typically take?",
      answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, medium applications 2-4 months, and enterprise solutions 6+ months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including bug fixes, feature updates, performance monitoring, security patches, and 24/7 technical support to ensure your solution remains optimal.",
    },
  ];

  const gridBackgroundStyle = {
    backgroundImage: `linear-gradient(90deg, #1a1a1a 1px, transparent 1px), linear-gradient(#1a1a1a 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
  };

  return (
    <div className="relative w-full bg-[#0D0D0D] py-10 md:py-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={gridBackgroundStyle} />
        <CellEffect />
      </div>

      {/* Feature Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Feature />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="text-center text-white flex flex-col items-center justify-center w-full mb-8">
          <div className="glob-map-text text-center w-full">
            <h1
              className="iceberg-regular text-white text-xl w-full uppercase border-t border-b border-white/20 p-3 
                         bg-gradient-to-r from-black via-[#181818] to-black mx-auto text-center"
            >
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-100 border border-base-300"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderColor: "#343435",
                }}
              >
                <input
                  type="radio"
                  name="home-faq-accordion"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title font-semibold text-white">
                  {faq.question}
                </div>
                <div className="collapse-content text-sm text-gray-300">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/faq-company"
              className="inline-block px-8 py-3 bg-[#ff8402] text-white font-semibold rounded-lg hover:bg-[#ff9502] transition-colors"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQSection;

