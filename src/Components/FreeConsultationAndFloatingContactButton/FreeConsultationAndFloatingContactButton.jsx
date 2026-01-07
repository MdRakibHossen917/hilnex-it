import React, { useState, useEffect, useRef, useCallback } from "react";
import crossIcon from "../../assets/flatIcon/close.png";
import hourIcon from "../../assets/flatIcon/24-hours.png";
import facebook from "../../assets/flatIcon/facebook.png";
import whatsApp from "../../assets/flatIcon/whatsapp.png";
import telegram from "../../assets/flatIcon/telegram.png";
import phone_call from "../../assets/flatIcon/phone-call.png";

// Optimized timing constants
const ANIMATION_DURATION = 100;    // 0.3 seconds slide animation
const SHOW_DURATION = 4000;        // 8 seconds static show
const MENU_CLOSE_DELAY = 300;      // 0.3 seconds menu close animation
const CYCLE_GAP = 20;             // 0.5 seconds gap between buttons
const INITIAL_DELAY = 1000;        // 2 seconds initial delay

const FreeConsultationAndFloatingContactButton = () => {
  // --- State Management ---
  const [contactOpen, setContactOpen] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);
  const [contactButtonVisible, setContactButtonVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showConsultationButton, setShowConsultationButton] = useState(false);
  const [consultationButtonVisible, setConsultationButtonVisible] = useState(false);
  
  // --- Cycle Control ---
  const cycleTimers = useRef({});
  const isCycling = useRef(false);

  // -----------------------------------------------------
  // Cycle Control Functions
  // -----------------------------------------------------

  const stopAllCycles = useCallback(() => {
    Object.values(cycleTimers.current).forEach(clearTimeout);
    cycleTimers.current = {};
    isCycling.current = false;
  }, []);

  const startCycling = useCallback(() => {
    if (isDrawerOpen || contactOpen) return;
    
    stopAllCycles();
    isCycling.current = true;
    cycleButtons();
  }, [isDrawerOpen, contactOpen, stopAllCycles]);

  const toggleContactMenu = () => {
    if (contactOpen) {
      // Closing menu: hide contact menu first
      setContactOpen(false);
      // Then slide out contact button and start consultation cycle
      setContactButtonVisible(false);
      
      cycleTimers.current.menuCloseTransition = setTimeout(() => {
        setShowContactButton(false);
        // Start consultation button cycle after contact button is gone
        cycleTimers.current.restartAfterMenuClose = setTimeout(() => {
          startConsultationCycle();
        }, CYCLE_GAP);
      }, ANIMATION_DURATION);
    } else {
      // Opening menu: stop all cycles and show menu
      stopAllCycles();
      setContactOpen(true);
      setShowContactButton(true);
      setContactButtonVisible(true);
    }
  };

  // -----------------------------------------------------
  // Individual Cycle Functions
  // -----------------------------------------------------

  const startConsultationCycle = useCallback(() => {
    if (isDrawerOpen || contactOpen) return;
    
    stopAllCycles();
    isCycling.current = true;

    console.log("🔄 Starting CONSULTATION Cycle");

    // Show consultation button
    setShowConsultationButton(true);
    cycleTimers.current.consultationVisible = setTimeout(() => {
      setConsultationButtonVisible(true);
      console.log("📋 Consultation Button VISIBLE");
    }, 50);

    // Hide consultation button after show duration
    cycleTimers.current.consultationHide = setTimeout(() => {
      setConsultationButtonVisible(false);
      console.log("📋 Consultation Button HIDING");
    }, ANIMATION_DURATION + SHOW_DURATION);

    // Remove consultation button and start contact cycle after gap
    cycleTimers.current.consultationRemove = setTimeout(() => {
      setShowConsultationButton(false);
      console.log("📋 Consultation Button REMOVED");
      
      cycleTimers.current.consultationToContactGap = setTimeout(() => {
        startContactCycle();
      }, CYCLE_GAP);
      
    }, ANIMATION_DURATION + SHOW_DURATION + ANIMATION_DURATION);

  }, [isDrawerOpen, contactOpen, stopAllCycles]);

  const startContactCycle = useCallback(() => {
    if (isDrawerOpen || contactOpen) return;
    
    stopAllCycles();
    isCycling.current = true;

    console.log("🔄 Starting CONTACT Cycle");

    // Show contact button
    setShowContactButton(true);
    cycleTimers.current.contactVisible = setTimeout(() => {
      setContactButtonVisible(true);
      console.log("📞 Contact Button VISIBLE");
    }, 50);

    // Hide contact button after show duration
    cycleTimers.current.contactHide = setTimeout(() => {
      setContactButtonVisible(false);
      console.log("📞 Contact Button HIDING");
    }, ANIMATION_DURATION + SHOW_DURATION);

    // Remove contact button and restart consultation cycle after gap
    cycleTimers.current.contactRemove = setTimeout(() => {
      setShowContactButton(false);
      console.log("📞 Contact Button REMOVED");
      
      cycleTimers.current.contactToConsultationGap = setTimeout(() => {
        startConsultationCycle();
      }, CYCLE_GAP);
      
    }, ANIMATION_DURATION + SHOW_DURATION + ANIMATION_DURATION);

  }, [isDrawerOpen, contactOpen, stopAllCycles, startConsultationCycle]);

  // Main cycle function (for initial start)
  const cycleButtons = useCallback(() => {
    startConsultationCycle();
  }, [startConsultationCycle]);

  // -----------------------------------------------------
  // Effects for Perfect Timing
  // -----------------------------------------------------

  // Handle drawer open/close
  useEffect(() => {
    if (isDrawerOpen) {
      console.log("🚪 Drawer OPEN - Stopping cycles");
      stopAllCycles();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (!contactOpen) {
        console.log("🚪 Drawer CLOSED - Starting cycles");
        cycleTimers.current.drawerRestart = setTimeout(startCycling, 500);
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen, contactOpen, stopAllCycles, startCycling]);

  // Initial start
  useEffect(() => {
    console.log("🎬 Component MOUNTED - Starting initial cycle");
    cycleTimers.current.initialStart = setTimeout(startCycling, INITIAL_DELAY);

    return () => {
      console.log("🧹 Component UNMOUNTED - Cleaning up");
      stopAllCycles();
    };
  }, [startCycling, stopAllCycles]);

  // Handle ESC key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        if (isDrawerOpen) {
          setIsDrawerOpen(false);
        }
        if (contactOpen) {
          setContactOpen(false);
          setContactButtonVisible(false);
          setTimeout(() => {
            setShowContactButton(false);
            cycleTimers.current.escapeRestart = setTimeout(() => {
              startConsultationCycle();
            }, CYCLE_GAP);
          }, ANIMATION_DURATION);
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isDrawerOpen, contactOpen, startConsultationCycle]);

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* FREE CONSULTATION BUTTON */}
      {showConsultationButton && !isDrawerOpen && !contactOpen && (
        <button
          onClick={() => {
            stopAllCycles();
            setIsDrawerOpen(true);
          }}
          className={`fixed -mt-29 top-1/2 right-0 transform -translate-y-1/2 -rotate-90 origin-bottom-right
            text-base text-white px-4 py-2 font-semibold rounded-t shadow-xl hover:shadow-2xl
            transition-all duration-300 ease-out z-[60]
            ${
              consultationButtonVisible
                ? "translate-x-0 opacity-100" 
                : "translate-x-full opacity-0" 
            }`}
          style={{
            background: "linear-gradient(180deg, #FF0000 0%, #260024 100%)",
          }}
          aria-label="Open free consultation form"
        >
          FREE CONSULTATION
        </button>
      )}

      {/* CONSULTATION DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#080808] shadow-2xl transform transition-transform duration-300 ease-in-out z-60 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isDrawerOpen && (
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="fixed top-4 right-4 z-[70] text-white text-3xl font-bold hover:text-red-500 transition"
          >
            ✕
          </button>
        )}

        <div className={`p-6 pt-16 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 delay-150" : "opacity-0"
        }`}>
          <h2 className="text-white text-2xl font-bold mb-3 border-b border-gray-500 pb-2">
            Free Project Consultation
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4 w-full">
            <input type="text" placeholder="Name" className="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white text-black" required />
            <input type="tel" placeholder="Phone" className="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white text-black" required />

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input type="email" placeholder="Email" className="flex-1 border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white text-black" required />
              <select className="flex-1 border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white text-black" required>
                <option value="">Select Subject</option>
                <option value="web-design">Web Development</option>
                <option value="web-development">Software Development</option>
                <option value="app-development">App Development</option>
                 <option value="graphics">Graphics Design</option>
                    <option value="ai-solutions">AI Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="hosting-solutions">Hosting Solutions</option>
                <option value="call-center-solutions">Call Center Solutions</option>
                <option value="it-consultancy">IT Consultancy</option>
              </select>
            </div>

            <textarea placeholder="Tell us about your project/needs..." rows="4" className="w-full border border-red-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-600 bg-white text-black" required></textarea>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* FLOATING CONTACTS BUTTON */}
      {(showContactButton || contactOpen) && !isDrawerOpen && (
        <div 
          className={`fixed bottom-35 right-0 flex flex-col items-center z-[60] 
            transition-all duration-300 ease-out 
            ${contactButtonVisible || contactOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          {/* Chat Links */}
          <div
            className={`flex flex-col items-center mb-3 transition-all duration-300 ease-out
              ${contactOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-90 pointer-events-none"}`}
          >
            <a href="https://wa.me/8801711894488" target="_blank" rel="noopener noreferrer" className="mb-2 rounded shadow-md hover:scale-110 transition-all duration-300">
              <img src={whatsApp} alt="WhatsApp" className="w-10 h-10 rounded" />
            </a>
            <a href="https://t.me/hilnexltd" target="_blank" rel="noopener noreferrer" className="mb-2 rounded shadow-md hover:scale-110 transition-all duration-300">
              <img src={telegram} alt="Telegram" className="w-10 h-10 rounded" />
            </a>
            <a href="https://m.me/hilnexlimited" target="_blank" rel="noopener noreferrer" className="mb-2 rounded shadow-md hover:scale-110 transition-all duration-300">
              <img src={facebook} alt="Messenger" className="w-10 h-10 rounded" />
            </a>
            <a href="tel:+8801711894488" className="rounded shadow-md hover:scale-110 transition-all duration-300">
              <img src={phone_call} alt="Call" className="w-10 h-10 rounded" />
            </a>
          </div>

          {/* Toggle Button */}
          <button
            onClick={toggleContactMenu}
            className={`bg-[#E27500] hover:bg-[#c56702] text-white p-2 rounded-lg shadow-xl 
              flex items-center justify-center transition-all duration-300 ease-in-out 
              transform hover:scale-110 active:scale-95
              ${contactOpen ? "rotate-180 bg-blue-600 hover:bg-red-700" : ""}`}
          >
            <img
              src={contactOpen ? crossIcon : hourIcon}
              alt={contactOpen ? "Close" : "Contact"}
              className={`w-7 h-7 transition-transform duration-300 filter brightness-0 invert
                ${contactOpen ? "rotate-180 scale-90" : "rotate-0 scale-100"}`}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FreeConsultationAndFloatingContactButton;