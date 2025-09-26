import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaList, FaUser } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Resources", path: "/resources" },
    { name: "Pricing", path: "/pricing" },
  ];

  const dropdownLinks = [
    { name: "Career", path: "/career" },
    { name: "Clients", path: "/clients" },
    { name: "News", path: "/news" },
    { name: "Running", path: "/running" },
    { name: "Library", path: "/library" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 font-poppins ${
        isScrolled
          ? "bg-black bg-opacity-90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Hilnex Logo" className="h-10" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "text-[#00f2bc]" : "text-white"} hover:text-[#00f2bc] transition`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium text-white hover:text-[#00f2bc]">
              More <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-black/80 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[150px] mt-2">
              {dropdownLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `dropdown-link block px-4 py-2 text-white hover:bg-gray-700 transition-colors ${
                      isActive ? "text-[#00f2bc]" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className="flex items-center gap-2 bg-[#00f2bc] text-black px-4 py-2 rounded font-medium hover:bg-green-500 transition"
          >
            <FaUser /> Login
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white transition-all duration-300">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-700 rounded transition-colors ${
                    isActive ? "text-[#00f2bc]" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-2">
              <span className="px-4 py-2 block font-medium">More</span>
              {dropdownLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-2 hover:bg-gray-700 rounded transition-colors ${
                      isActive ? "text-[#00f2bc]" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
