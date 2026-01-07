import React from "react";
import "./Feature.css";

const features = [
  { icon: "images/icons/jquery.png", title: "No jQuery Dependency" },
];

const Feature = () => {
  const linePositions = [10, 30, 50, 70, 90]; // percentage left positions
  return (
    <section id="features" className="features-area">
      {/* Background Columns */}
      <div className="bg-columns">
        {linePositions.map((pos, index) => (
          <div key={index} className="column" style={{ left: `${pos}%` }}>
            <div className="light"></div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="section-title text-center">
          <h2>Features</h2>
          <span className="sub-title">Awesome Features</span>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col feature-card"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="single-features-box">
                <div className="icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
