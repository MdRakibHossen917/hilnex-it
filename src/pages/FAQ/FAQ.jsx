import React from "react";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";
import GlobMapAllPage from "../../Components/Shared/GlobMapAllPage/GlobMapAllPage";

const FAQ = () => {
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
    {
      question: "What technologies does Hilnex work with?",
      answer: "We work with modern tech stacks including React, Node.js, Python, Angular, .NET, WordPress, Magento, React Native, Flutter, and various cloud platforms like AWS, Azure, and Google Cloud.",
    },
    {
      question: "How does Hilnex ensure project quality?",
      answer: "We follow agile methodologies with continuous testing and quality assurance. Our process includes regular client reviews, automated testing pipelines, code reviews, and performance optimization.",
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Contact us for a free consultation and customized quote based on your project requirements.",
    },
    {
      question: "How can I contact Hilnex for support?",
      answer: "You can reach us via phone at 01300981501, email at mdrakibhossencse@gmail.com, or through our contact form. Our support team is available 24/7 to assist you.",
    },
  ];

  return (
    <>
      <style>{`
        body {
          background-color: #0d0d0d;
          color: #e0e0e0;
        }
        .faq-container {
          background-color: #000000;
        }
        .collapse-title {
          color: #ffffff;
        }
        .collapse-content {
          color: #d1d5db;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <ParticlesBackground />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <header className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-black mb-2 md:mb-6">
            <span className="text-white">Frequently Asked Questions</span>
          </h1>
          <p className="text-xs sm:text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our services, processes, and technology expertise.
          </p>
        </header>
      </section>

      {/* FAQ Section */}
      <div className="relative mx-auto w-full p-4 sm:p-10 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Common Questions
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Find quick answers to the most frequently asked questions
            </p>
          </div>

          <div className="space-y-4 faq-container">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-100 border border-base-300"
              >
                <input
                  type="radio"
                  name="my-accordion-3"
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

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Please reach out to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact-us"
                className="px-8 py-3 bg-[#ff8402] text-white font-semibold rounded-lg hover:bg-[#ff9502] transition-colors"
              >
                Contact Us
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Quick response guaranteed • Free consultation • Expert advice
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <GlobMapAllPage />
      </div>
    </>
  );
};

export default FAQ;
