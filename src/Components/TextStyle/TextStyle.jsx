import React from "react";
import "./TextStyle.css";

const TextStyle = () => {
  const text = "Designers Developers";
  const words = text.split(" ");

  return (
    <div className="text-container">
      <h1 className="animated-heading">
        {words.map((word, i) => (
          <span key={i} className="word" data-text={word}>
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextStyle;
