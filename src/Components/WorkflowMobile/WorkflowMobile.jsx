import React, { useEffect, useRef } from "react";
import {
  FaClipboardList,
  FaProjectDiagram,
  FaDraftingCompass,
  FaCode,
  FaBug,
  FaRocket,
  FaLifeRing,
} from "react-icons/fa";
import "./WorkflowMobile.css";

const WorkflowMobile = () => {
  const textRef = useRef(null);

  useEffect(() => {
    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }

      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 30);
          const end = start + Math.floor(Math.random() * 30);
          this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        let output = "";
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];

          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }

      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const scramble = new TextScramble(textRef.current);
    scramble.setText("Our Development Workflow  ");

    const interval = setInterval(() => {
      scramble.setText("Our Development Workflow  ");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const timelineSteps = [
    {
      icon: <FaClipboardList />,
      title: "Requirement Gathering",
      description:
        "We start by understanding your goals, target audience, and brand identity.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Planning & Strategy",
      description:
        "We build a roadmap with clear timelines, features, and structure.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Design & Prototyping",
      description:
        "We craft visual mockups focusing on usability, appeal, and experience.",
    },
    {
      icon: <FaCode />,
      title: "Development & Implementation",
      description:
        "We develop the solution using optimized code and secure technologies.",
    },
    {
      icon: <FaBug />,
      title: "Testing & Quality Assurance",
      description:
        "We test thoroughly to ensure performance, responsiveness, and bug-free functionality.",
    },
    {
      icon: <FaRocket />,
      title: "Launch & Delivery",
      description:
        "We launch your project smoothly with full functionality and optimization.",
    },
    {
      icon: <FaLifeRing />,
      title: "Ongoing Support & Maintenance",
      description:
        "We provide continuous updates, improvements, and technical support post-launch.",
    },
  ];

  return (
    <section className="workflow-mobile-section block md:hidden">
      <div className="workflow-container">
        <p
          ref={textRef}
          className="iceberg-regular text-white text-xl w-full uppercase border-t border-b border-white/20 p-3  
        bg-gradient-to-r from-black via-[#181818] to-black mx-auto text-center   -mt-1
      "
        >
          Innovative IT & Web
        </p>

        <div className="workflow-timeline">
          <div className="timeline-outer">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`timeline-card ${index % 2 === 0 ? "odd" : "even"}`}
              >
                <div className="timeline-slno">{step.icon}</div>
                <div className="timeline-info">
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-description text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowMobile;
