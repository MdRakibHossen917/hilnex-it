import React, { useState, useEffect, useCallback, useRef } from "react";

const FreeConsultationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const cycleTimer = useRef(null);
  const hideTimer = useRef(null);
  const delayTimer = useRef(null);

  // Esc close
  const handleEscapeKey = useCallback((event) => {
    if (event.key === "Escape") setIsOpen(false);
  }, []);

  // Drawer open/close
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";

      // 🔥 Event: Drawer opened
      if (window.dataLayer)
        window.dataLayer.push({ event: "free_consultation_open" });

      stopCycle();
    } else {
      document.body.style.overflow = "";

      // 🔥 Event: Drawer closed
      if (window.dataLayer)
        window.dataLayer.push({ event: "free_consultation_close" });

      restartCycleAfterDelay();
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscapeKey]);

  // Slide button cycle animation
  const cycleButton = useCallback(() => {
    setShowButton(true);
    setTimeout(() => setButtonVisible(true), 100);

    hideTimer.current = setTimeout(() => {
      setButtonVisible(false);

      setTimeout(() => setShowButton(false), 10000);

      cycleTimer.current = setTimeout(cycleButton, 10000);
    }, 4000);
  }, []);

  const stopCycle = () => {
    clearTimeout(cycleTimer.current);
    clearTimeout(hideTimer.current);
    clearTimeout(delayTimer.current);
    setShowButton(false);
    setButtonVisible(false);
  };

  const restartCycleAfterDelay = () => {
    clearTimeout(delayTimer.current);
    delayTimer.current = setTimeout(() => cycleButton(), 10000);
  };

  useEffect(() => {
    delayTimer.current = setTimeout(() => cycleButton(), 10000);
    return () => stopCycle();
  }, [cycleButton]);

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Event: Free Consultation Lead
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "free_consultation_form_submit",
      });
    }

    alert("Form Submitted!");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      {showButton && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed -mt-29 top-1/2 right-0 -translate-y-1/2 -rotate-90 
            px-4 py-2 text-white text-base font-semibold rounded-t shadow-xl 
            transition-all duration-[4000ms] z-[60]
            ${
              buttonVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[80%] opacity-0"
            }`}
          style={{
            background: "linear-gradient(180deg, #FF0000 0%, #260024 100%)",
          }}
        >
          FREE CONSULTATION
        </button>
      )}

      {/* Drawer */} 
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#080808] 
        shadow-2xl transform transition-transform duration-300 z-60 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 text-white text-3xl z-[70]"
          >
            ✕
          </button>
        )}

        <div className={`p-6 pt-16 transition-opacity duration-300 ${isOpen ? "opacity-100 delay-150" : "opacity-0"}`}>
          <h2 className="text-white text-2xl font-bold mb-3 border-b border-gray-500 pb-2">
            Free Project Consultation
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
            <input type="text" placeholder="Name" required className="border p-2 bg-white text-black" />
            <input type="tel" placeholder="Phone" required className="border p-2 bg-white text-black" />

            <div className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Email" required className="border p-2 bg-white text-black" />
              <select required className="border p-2 bg-white text-black">
                <option value="">Select Subject</option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="software">Software Development</option>
                <option value="digital-marketing">Digital Marketing</option>
              </select>
            </div>

            <textarea rows="4" placeholder="Tell us about your project..." className="border p-2 bg-white text-black" />

            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-opacity z-40 
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      ></div>
    </>
  );
};

export default FreeConsultationButton;
