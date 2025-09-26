import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
 

const RootLayout = () => {
  return (
  <div className="">
      <Navbar />
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
  
       <div className="relative z-10">
           <Footer />
            </div>
    </div>
  );
};

export default RootLayout;