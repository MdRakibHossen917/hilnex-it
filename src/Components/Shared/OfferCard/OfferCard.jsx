import React, { useState, useEffect } from "react";
import { FaClock, FaCheck, FaCheckCircle, FaBolt } from "react-icons/fa";
import { FaComments, FaPenNib, FaCode, FaRocket } from "react-icons/fa";

const OfferCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 6,
    minutes: 30,
    seconds: 0,
  });

  const [isClaimed, setIsClaimed] = useState(false);
  const words = ["Offer"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        else if (minutes > 0)
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        else if (hours > 0)
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        else if (days > 0)
          return {
            ...prev,
            days: days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClaimOffer = () => {
    setIsClaimed(true);
    setTimeout(() => setIsClaimed(false), 3000);
  };

  const features = [
    "Free Domain & Hosting",
    "SEO Optimization",
    "6 Months Support",
    "Mobile Responsive",
    "Security Features",
    "Money Back Guarantee",
  ];

  const originalPrice = 60000;
  const discountPercentage = 20;
  const offerPrice = Math.round(originalPrice * (1 - discountPercentage / 100));
  const savings = originalPrice - offerPrice;

  return (
    <div className="w-full max-w-full mx-auto">
      <div className="w-full text-white text-xl uppercase border-t border-b border-white/20 p-3 bg-gradient-to-r from-black via-[#181818] to-black  block md:hidden ">
        <h1 className="w-full text-2xl iceberg-regular tracking-widest uppercase animated-heading text-center">
          <span className="text-[#e7e5e5] tracking-widest">Limited Time</span>
          {words.map((word, i) => (
            <span key={i} className="word" data-text={word}>
              {word}{" "}
            </span>
          ))}
        </h1>
      </div>

      <div className="w-full flex justify-center bg-[#282828] md:py-8">
        <div className="w-full md:w-9/12 bg-[#282828] rounded-lg  pt-6 relative overflow-hidden shadow-lg">
          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:p-4 md:mt-20">
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #ff8402 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            <div className="space-y-6 hidden p-2 md:block">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  How It Works
                </h2>
                <p className="text-gray-300 text-sm">
                  Simple 4-step process to launch
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Consultation",
                    desc: "We discuss your requirements",
                    icon: <FaComments className="w-4 h-4 text-[#d6d2d2]" />,
                  },
                  {
                    step: "2",
                    title: "Design",
                    desc: "Create mockups for approval",
                    icon: <FaPenNib className="w-4 h-4 text-[#d6d2d2]" />,
                  },
                  {
                    step: "3",
                    title: "Development",
                    desc: "Build your website",
                    icon: <FaCode className="w-4 h-4 text-[#d6d2d2]" />,
                  },
                  {
                    step: "4",
                    title: "Launch",
                    desc: "Go live with support",
                    icon: <FaRocket className="w-4 h-4 text-[#d6d2d2]" />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-[#1a1a1a] rounded"
                  >
                    <div className="w-8 h-8 bg-[#ff8402] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span>{item.icon}</span>
                        <h3 className="text-white font-semibold text-sm">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <div className="text-[#ff8402] font-bold">7-10</div>
                  <div className="text-gray-400 text-xs">Days</div>
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <div className="text-[#ff8402] font-bold">100%</div>
                  <div className="text-gray-400 text-xs">Satisfaction</div>
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded">
                  <div className="text-[#ff8402] font-bold">24/7</div>
                  <div className="text-gray-400 text-xs">Support</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 shadow-xl p-2">
              <div className="text-center hidden md:block ">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Limited Time Offer
                </h2>

                <p className="text-gray-300 text-sm">
                  Boost your business growth {" "}
                  <span className="hidden xl:inline">
                    with premium services at discounted price.
                  </span>
                </p>
              </div>

              <div className="bg-[#1a1a1a] p-3 rounded border border-[#ff8402]/30">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <FaClock className="w-3 h-3 text-[#ff8402]" />
                  <span className="text-white text-sm font-semibold">
                    Offer Ends In:
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-center">
                  {["days", "hours", "minutes", "seconds"].map((unit) => (
                    <div key={unit} className="bg-[#0d0d0d] p-1 rounded">
                      <div className="text-lg font-bold text-white">
                        {timeLeft[unit].toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-400">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-3xl font-bold text-[#ff8402]">
                  ৳{offerPrice}
                </span>
                <span className="text-gray-400 line-through text-lg">
                  ৳{originalPrice}
                </span>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                  Save ৳{savings}
                </span>
              </div>

              <div className="w-full h-[60px] md:h-[100px] bg-[#0d0d0d] border border-[#ff8402]/30 rounded flex items-center justify-center text-white text-base font-semibold mb-3">
                🎁 Free Strategy Included!
              </div>

              <button
                onClick={handleClaimOffer}
                disabled={isClaimed}
                className={`w-full py-3 px-4 rounded font-bold transition-all duration-300 transform hover:scale-105 ${
                  isClaimed
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-[#ff8402] to-[#ffaa00] text-black hover:shadow-lg hover:shadow-[#ff8402]/30"
                }`}
              >
                {isClaimed ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FaCheck className="w-4 h-4" />
                    <span>Offer Claimed!</span>
                  </div>
                ) : (
                  `CLAIM OFFER FOR ৳${offerPrice}`
                )}
              </button>

              <div className="text-center space-y-1 hidden md:block ">
                <p className="text-gray-400 text-xs flex items-center justify-center space-x-1">
                  <FaBolt className="w-3 h-3 text-yellow-400" />
                  <strong>8 spots left</strong>
                  <span>🎯 Free consultation</span>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
