import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import Code from "../../Components/Home/Code/Code";

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />

      {/* Make sure Code always visible */}
      <div className="relative z-10">
        <Code />
      </div>
    </div>
  );
};

export default Home;
