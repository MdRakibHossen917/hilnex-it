import React from "react";

const Skeleton = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-gray-500/30 rounded-md ${className}`}
      style={{
        display: "inline-block",
        width: "auto",
        height: "auto",
        minWidth: "20px", 
        minHeight: "10px",
      }}
    ></div>
  );
};

export default Skeleton;
