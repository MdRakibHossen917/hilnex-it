import React, { useState, useEffect, useRef, useCallback } from "react";
import crossIcon from "../../assets/flatIcon/close.png";
import hourIcon from "../../assets/flatIcon/24-hours.png";
import facebook from "../../assets/flatIcon/facebook.png";
import whatsApp from "../../assets/flatIcon/whatsapp.png";
import telegram from "../../assets/flatIcon/telegram.png";
import phone_call from "../../assets/flatIcon/phone-call.png";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const showTimer = useRef(null);
  const hideTimer = useRef(null);
  const cycleTimer = useRef(null);

  const toggleMenu = () => setOpen(!open);

  // ✅ Cycle logic: show for 3s, hide, wait 10s
  const cycleButton = useCallback(() => {
    setShowText(true);
    hideTimer.current = setTimeout(() => setShowText(false), 3000); // show 3s

    cycleTimer.current = setTimeout(cycleButton, 10000); // repeat every 10s
  }, []);

  const stopCycle = () => {
    clearTimeout(hideTimer.current);
    clearTimeout(cycleTimer.current);
    setShowText(false);
  };

  // ✅ Start cycle on mount
  useEffect(() => {
    cycleTimer.current = setTimeout(cycleButton, 10000); // first show after 10s
    return () => stopCycle();
  }, [cycleButton]);

  return (
    <div className="fixed bottom-35 right-2 flex flex-col items-center z-[100]">
      {/* Chat Links */}
      <div
        className={`flex flex-col items-center mb-3 transition-all duration-500 ease-out transform
          ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-90 pointer-events-none"}`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/8801711894488"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="mb-2 rounded shadow-md hover:scale-110 transition-all duration-300"
        >
          <img src={whatsApp} alt="WhatsApp" className="w-10 h-10 rounded" />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/hilnexltd"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on Telegram"
          className="mb-2 rounded shadow-md hover:scale-110 transition-all duration-300"
        >
          <img src={telegram} alt="Telegram" className="w-10 h-10 rounded" />
        </a>

        {/* Messenger */}
        <a
          href="https://m.me/hilnexlimited"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on Messenger"
          className="mb-2 rounded shadow-md hover:scale-110 transition-all duration-300"
        >
          <img src={facebook} alt="Messenger" className="w-10 h-10 rounded" />
        </a>

        {/* Call */}
        <a
          href="tel:+8801711894488"
          title="Call Us"
          className="rounded shadow-md hover:scale-110 transition-all duration-300"
        >
          <img src={phone_call} alt="Call" className="w-10 h-10 rounded" />
        </a>
      </div>

      {/* Toggle Button */}
      <div className="flex items-center relative">
       

        <button
          onClick={toggleMenu}
          className={`bg-[#E27500] hover:bg-[#c56702] text-white p-2 rounded-lg shadow-xl 
            flex items-center justify-center transition-all duration-500 ease-in-out 
            transform hover:scale-110 active:scale-95
            ${open ? "rotate-180 bg-blue-600 hover:bg-red-700" : ""}`}
          aria-label={open ? "Close contact menu" : "Open contact menu"}
        >
          <img
            src={open ? crossIcon : hourIcon}
            alt={open ? "Close" : "Contact"}
            className={`w-7 h-7 transition-transform duration-500 filter brightness-0 invert
              ${open ? "rotate-180 scale-90" : "rotate-0 scale-100"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButton;
