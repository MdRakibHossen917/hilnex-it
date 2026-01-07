import React from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="text-center lg:text-center md:mb-8">
     
      <Link to="/" className="inline-block">
        <img
          src={logoBlack}
          alt="Hilnex Logo"
          className="w-40 mx-auto lg:mx-0 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default Logo;