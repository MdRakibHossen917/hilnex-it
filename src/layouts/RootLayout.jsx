import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar/Navbar";
 
 

const RootLayout = () => {
  return (
  <div className="">
      <Navbar />
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
  
        
    </div>
  );
};

export default RootLayout;