import React from "react";
import Xcon from "../../../assets/LoadingSpinner/HilnexLodingSpinner.gif";  

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src={Xcon}
        alt="Loading Icon"
        className="max-w-6xl   animate-spin-slow" 
      />
    </div>
  );
};

export default LoadingSpinner;