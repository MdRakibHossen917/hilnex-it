import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { Link } from "react-router-dom";
import Footer_Bg from "../../../assets/Footer/fBG.png";
import Footer_Hilnex from "../../../assets/Footer/Hilnex_Footer.png";
import footerLogoBlackBlue from "../../../assets/Footer/footerLogoBlackBlue.png";
import bKash from "../../../assets/payment/bkash.png";
import Nagad from "../../../assets/payment/Nagad.png";
import Rocket from "../../../assets/payment/Rocket.png";
import Upay from "../../../assets/payment/Upay.png";
import Visa from "../../../assets/payment/Visa.png";
import Mastercard from "../../../assets/payment/Mastercard.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbMessages, TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const titleStyle = "text-white font-bold mb-2 text-base md:underline";
  const linkStyle =
    "text-gray-400 hover:text-white block mb-1 text-sm  4  transition duration-300";

  const socialIcons = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      url: "https://www.facebook.com/md.rakib.hossen.41751",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rakibhossen917/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/MdRakibHossen917",
    },
    {
      icon: <FaXTwitter />,
      label: "Twitter",
      url: "#",
    },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-condition" },
    { name: "Resources", path: "/resources" },
    { name: "Pricing", path: "/package" },
    { name: "SiteMap", path: "/site-map" },
    { name: "FAQ", path: "/faq-company" },
  ];

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "App Development", path: "/services/app-development" },
    { name: "Software Development", path: "/services/software-development" },
    { name: "Graphic Design", path: "/services/graphics-design" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Cyber Security", path: "/services/it-consultancy" },
    { name: "Technical Support", path: "/contact-us" },
    { name: "Customer Support", path: "/contact-us" },
  ];

  const paymentMethods = [bKash, Nagad, Rocket, Upay, Visa, Mastercard];

  const handleSocialClick = (url, label) => {
    console.log(`Opening ${label}: ${url}`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#282828] ">
      <div className="w-11/12 md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 3xl:w-9/12 mx-auto relative z-30 top-20 md:top-53 ">
        <div className="flex flex-col lg:hidden justify-between items-start bg-gray-200 text-black  p-4 md:p-2 shadow-2xl gap-4 md:gap-2 border-2 border-dashed border-gray-400 translate-y-[80px] md:translate-y-[20px] mx-1 -mt-40 md:-mt-55 ">
          <Link
            to="/"
            className="flex items-center cursor-pointer w-full justify-start"
          >
            <img
              src={footerLogoBlackBlue}
              alt="Hilnex Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          <div className="flex items-center gap-2 md:gap-3 w-full justify-start">
            <RiCustomerService2Fill className="text-[#d87205] text-5xl md:text-7xl flex-shrink-0" />
            <span className="text-black text-lg text-left gap-1">
              Sales (10AM - 8PM) <br />
              <a
                href="tel:+8801711894488"
                className="hover:text-blue-600 transition-colors text-lg md:text-xl"
              >
                09649-888833
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-4 cursor-pointer w-full justify-start">
            <TbMessages className="text-[#d87205] text-5xl md:text-7xl flex-shrink-0" />
            <span className="text-black text-[18px] text-left">
              Live Chat (24/7) <br />
              <span className="text-[15px] text-gray-600">
                (Wait for the time of prayers GMT+6)
              </span>
            </span>
          </div>
        </div>

        <div className="hidden  lg:flex flex-row justify-between items-center bg-gray-200 text-black p-4 md:p-6 rounded shadow-2xl gap-4 md:gap-6 border-2 border-dashed border-gray-400 lg:-mt-45  mx-7 md:mx-1 ">
          <Link
            to="/"
            className="flex items-center cursor-pointer w-full md:w-auto justify-center"
          >
            <img
              src={footerLogoBlackBlue}
              alt="Hilnex Logo"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto justify-center md:justify-start">
            <RiCustomerService2Fill className="text-black text-3xl md:text-4xl flex-shrink-0" />
            <span className="text-base md:text-lg text-center md:text-left">
              Sales (10AM - 8PM): <br />
              <a
                href="tel:+8801711894488"
                className="font-semibold hover:text-blue-600 transition-colors text-lg md:text-xl"
              >
                +8801711894488
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-4 cursor-pointer w-full md:w-auto justify-center md:justify-start">
            <TbMessages className="text-black text-3xl md:text-4xl flex-shrink-0" />
            <span className="text-base md:text-lg font-medium text-center md:text-left">
              Live Chat (24/7) <br />
              <span className="text-sm md:text-base text-gray-600">
                (GMT+6 Time Zone)
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-20 md:mt-25 ">
        <img
          src={Footer_Bg}
          alt="Footer Background"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative w-full h-auto min-h-[300px]  overflow-hidden">
        <div className="absolute inset-0 z-20 w-full h-full block md:hidden">
          <div className="grid grid-rows-4 h-full">
            {[1, 2, 3, 4].map((i) => (
              <DotLottiePlayer
                key={i}
                src="https://lottie.host/c9291a7c-050c-4e03-962f-f5cb2518b96a/z6Da8DsEJH.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-10 w-full h-full hidden md:block">
          <DotLottiePlayer
            src="https://lottie.host/c9291a7c-050c-4e03-962f-f5cb2518b96a/z6Da8DsEJH.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="absolute inset-0 bg-[#000000] opacity-70 z-20" />

        <div className="relative z-30 flex items-center mt-10 lg:mt-15 xl:mt-17 2xl:mt-18">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-1
                  w-full md:w-9/12 mx-auto lg:w-9/12 xl:w-9/12"
          >
            {/* ABOUT US */}
            <div className="md:col-span-2 lg:col-span-1 mt-8 md:mt-16 lg:mt-0 xl:mt-0 2xl:mt-0">
              <h3 className={titleStyle}>About Us</h3>
              <p className="text-gray-400 mb-5 leading-relaxed text-sm  md:leading-8">
                HiLNEX Limited delivers innovative IT solutions, cloud services,
                and best cybersecurity to empower businesses.
                <span className="block md:hidden lg:hidden xl:block 2xl:block">
                  We provide future-ready technology, smart strategies, and
                  digital transformation solutions that drive growth,
                  efficiency, and long-term success.
                </span>
              </p>

              {/* Payment Methods */}
              <div className="-mt-0.5">
                <h1 className={titleStyle}>We Accept</h1>

                {/* Mobile */}
                <div className="grid grid-cols-6 border border-gray-600 md:hidden mt-4 mb-4.5">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`w-full h-10 flex justify-center items-center 
              bg-black/30 border-gray-600 backdrop-blur-sm shadow-lg hover:scale-105 
              transition-transform duration-300 mx-auto
              ${index !== paymentMethods.length - 1 ? "border-r" : ""}`}
                    >
                      <img
                        src={method}
                        alt={`Payment Method ${index + 1}`}
                        className="w-10 object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* md and above */}
                <div className="hidden md:grid grid-cols-6 border border-gray-600 mt-4 mb-4.5 px-1">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={`md-${index}`}
                      className={`w-full h-14 flex justify-center items-center 
              bg-black/30 border-gray-600 backdrop-blur-sm shadow-lg hover:scale-110 
              transition-transform duration-300 mx-auto
              ${index !== paymentMethods.length - 1 ? "border-r" : ""}`}
                    >
                      <img
                        src={method}
                        alt={`Payment Method ${index + 1}`}
                        className="w-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:px-4 mb-4 md:col-span-1">
              <h3 className={titleStyle}>Quick Links</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 md:gap-0">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className={`${linkStyle} md:py-1`}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUR SERVICES */}
            <div className=" mb-4 md:col-span-1 ">
              <h3 className={titleStyle}>Our Services</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 md:gap-0 ">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link to={service.path} className={`${linkStyle} md:py-1 `}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT WITH US */}
            <div className="md:col-span-1 lg:col-span-1 ">
              <h3 className={titleStyle}>Connect with Us</h3>

              <div className="space-y-1 mt-4 text-gray-400 mb-4 md:mb-8">
                {/* Phone */}
                <div className="flex items-start md:items-center">
                  <div className="w-7 h-7 bg-[#333] rounded flex items-center justify-center p-2 mr-3">
                    <FaPhoneAlt size={15} className="text-gray-300 text-lg" />
                  </div>
                  <p className="text-sm ">
                    <a
                      href="tel:09649888833"
                      className="hover:text-white transition-colors mr-2"
                    >
                      09649-888833 ,
                    </a>
                    <a
                      href="tel:+8801711894488"
                      className="hover:text-white transition-colors"
                    >
                      01711-894488
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-start md:items-center space-x-2">
                  <div className="w-7 h-7 bg-[#333] rounded flex items-center justify-center p-2 mr-3">
                    <FaEnvelope size={15} className="text-gray-300 text-lg" />
                  </div>
                  <p className="text-sm md:text-sm">
                    <a
                      href="mailto:info@hilnex.com"
                      className="hover:text-white transition-colors mr-2"
                    >
                      info@hilnex.com ,
                    </a>
                    <a
                      href="mailto:hilnex@yahoo.com"
                      className="hover:text-white transition-colors"
                    >
                      hilnex@yahoo.com
                    </a>
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-7 h-7 bg-[#333] rounded flex items-center justify-center p-2 mr-3">
                    <FaMapMarkerAlt
                      size={15}
                      className="text-gray-300 text-lg"
                    />
                  </div>
                  <address className="not-italic text-sm   leading-relaxed md:leading-7">
                    Muktobangla Complex, Suite-124, Level-6, Mirpur-1,
                    Dhaka-1216, Bangladesh.
                  </address>
                </div>
              </div>

           
              <div className="overflow-hidden rounded w-full max-w-[450px] md:max-w-[520px] mx-auto md:mx-0 mb-4 block md:hidden lg:block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.556462038167!2d90.350589276024!3d23.79880368691518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e891d73199%3A0x3f02d2ada4987cde!2sHiLNEX%20Limited!5e0!3m2!1sen!2sbd!4v1760341820428!5m2!1sen!2sbd"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hilnex Location Map"
                  className="w-full rounded"
                />
              </div>
            </div>
          
            <div
              className="overflow-hidden rounded w-full max-w-[450px] md:max-w-[520px] mx-auto md:mx-0 mb-4 
hidden md:block lg:hidden xl:hidden 2xl:hidden "
            >
              <h1 className="text-white text-base font-semibold mb-2 md:underline">
                Google Map Location
              </h1>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.556462038167!2d90.350589276024!3d23.79880368691518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e891d73199%3A0x3f02d2ada4987cde!2sHiLNEX%20Limited!5e0!3m2!1sen!2sbd!4v1760341820428!5m2!1sen!2sbd"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hilnex Location Map"
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 bg-[#1A1A1A]  ">
        <div className="w-11/12 md:w-9/12   mx-auto py-2 md:py-4 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-6">
          <p className="text-gray-500 text-center md:text-left text-sm md:text-lg   leading-relaxed">
            © 2025 HiLNEX Limited. All rights reserved.
          </p>

          <div
            className="
        relative z-[60]
        flex justify-between items-center
        w-full md:w-[280px] lg:w-[320px]
        text-xl md:text-2xl
        cursor-pointer 
        border border-white/20  
        bg-transparent
      "
          >
            {socialIcons.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.label}`}
                className="
            transition-all duration-300 
            text-white/80 hover:text-white  
            flex-1 flex items-center justify-center
            h-8 border-r border-white/20 last:border-r-0
          "
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#282828] w-full">
        <div className="w-full flex justify-center">
          <img
            src={Footer_Hilnex}
            alt="Hilnex Company Logo"
            className="max-h-full w-11/12 md:w-10/12 lg:w-9/12 xl:w-9/12 mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
