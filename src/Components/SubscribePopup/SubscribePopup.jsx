import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import callRequest from "../../assets/Brand/callRequest.png";
import "./SubscribePopup.css";
import { RxCross2 } from "react-icons/rx";

const SubscribePopup = () => {
  const location = useLocation();

  const hidePopupRoutes = ["/login", "/register", "/live-chat"];

  useEffect(() => {
    if (hidePopupRoutes.includes(location.pathname)) return;

    const timer = setTimeout(() => {
      const popup = document.querySelector(".subscribe-popup");
      if (popup) popup.style.display = "flex";
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Removed GTM dataLayer tracking
    alert("Form Submitted");
  };

  const closePopup = () => {
    const popup = document.querySelector(".subscribe-popup");
    if (popup) popup.style.display = "none";
    // Removed GTM dataLayer tracking
  };

  return (
    <div className="subscribe-popup">
      <div className="popup-content">
    
        <button 
          className="close-btn" 
          onClick={closePopup}
          aria-label="Close subscription popup"
        >
          <RxCross2 size={25} className="close-icon" />
        </button>

        <div className="popup-image-container">
          <img
            src={callRequest}
            alt="Free Consultation"
            className="popup-image"
          />
        </div>

        <div className="popup-body">
          <h2>Get Free Consultation</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              required
              className="text-gray-800"
              aria-label="Enter your name"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="text-gray-800"
              aria-label="Enter your phone number"
            />

         
            <button 
              type="submit" 
              className="bg-black text-white"
              aria-label="Request a free consultation call"
            >
              Request a Call
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribePopup;