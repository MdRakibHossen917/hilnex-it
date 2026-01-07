import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/Auth/LoginImage.png";
import ParticlesBackground from "../../Components/Shared/ParticlesBackground/ParticlesBackground";

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-20 w-full md:max-w-6xl md:bg-black/80 md:backdrop-blur-xl rounded shadow-2xl p-4 sm:m-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center hidden lg:flex">
            <img
              src={LoginImage}
              alt="login-robot-Image"
              onClick={() => navigate("/")}
              className="max-w-xs md:max-w-sm rounded shadow-2xl object-cover cursor-pointer"
            />
          </div>

          <div className="flex-1 w-full relative z-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
