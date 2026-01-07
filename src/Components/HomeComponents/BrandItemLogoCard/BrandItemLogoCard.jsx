import React from "react";
import { FaDonate, FaLaravel, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

const BrandItemLogoCard = () => {
  const ICON_COLOR = "#bbb7b7";
  const BORDER_COLOR = "#333333";
  const BACKGROUND_COLOR = "#1A1A1A";
  const HOVER_COLOR = "#4a4a4a";

  const logos = [
    { icon: <FaReact style={{ color: ICON_COLOR }} />, label: "React" },
    { icon: <FaPhp style={{ color: ICON_COLOR }} />, label: "PHP" },
    { icon: <FaDonate style={{ color: ICON_COLOR }} />, label: ".Net" },
    { icon: <FaFlutter style={{ color: ICON_COLOR }} />, label: "Flutter" },
    { icon: <FaVuejs style={{ color: ICON_COLOR }} />, label: "Vue.js" },
    { icon: <FaLaravel style={{ color: ICON_COLOR }} />, label: "Laravel" },
  ];

  return (
    <section
      className=""
      style={{
        borderTop: `1px solid ${BORDER_COLOR}`,
        borderBottom: `0px solid ${BORDER_COLOR}`,
        backgroundColor: BACKGROUND_COLOR,
      }}
      role="region"
      aria-label="Technology stack and frameworks we work with"
    >
      <h2 className="sr-only">Our Technology Stack</h2>
      
      <ul className="grid w-full grid-cols-3 lg:grid-cols-6">
        {logos.map((item, index) => {
          const isLastColMobile = (index + 1) % 3 === 0;

          return (
            <li
              key={index}
              className={`h-14 sm:h-24 flex items-center justify-center p-4 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-inset`}
              style={{
                borderRight:
                  (index + 1) % 6 !== 0 ? `1px solid ${BORDER_COLOR}` : "none",
                borderBottom: `1px solid ${BORDER_COLOR}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = HOVER_COLOR;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = BACKGROUND_COLOR;
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = HOVER_COLOR;
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = BACKGROUND_COLOR;
              }}
              tabIndex={0}
              role="button"
              aria-label={`${item.label} technology`}
            >
              <div className="flex flex-row items-center gap-2">
                <div
                  className="text-3xl sm:text-4xl"
                  style={{ color: ICON_COLOR }}
                  aria-hidden="true"
                >
                  {React.cloneElement(item.icon, {
                    'aria-hidden': 'true',
                    'focusable': 'false'
                  })}
                </div>

                <span
                  className="text-xs sm:text-base font-medium"
                  style={{ color: ICON_COLOR }}
                >
                  {item.label}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BrandItemLogoCard;