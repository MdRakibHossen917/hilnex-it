import React from "react";
import Hero from "../../Components/HomeComponents/Hero/Hero";
import Code from "../../Components/HomeComponents/Code/Code";
 

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />

      {/* always visible */}
      <div className="relative z-10">
        <Code />
      </div>
    </div>
  );
};

export default Home;