import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronRight} from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import logo from "../../../assets/logo.png";
import logoBlack from "../../../assets/logoBlack.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const [language, setLanguage] = useState("EN");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleNavClick = (path, e) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropdownOpen(null);
    setOpenCategory(null);
    setLangDropdown(false);
    navigate(path);

    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleMobileSubmenuClick = (path, e) => {
    e.preventDefault();

    setDropdownOpen(null);
    setOpenCategory(null);
    setLangDropdown(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const checkAuthStatus = () => {
    const token = localStorage.getItem("authToken");
    const storedUserName = localStorage.getItem("userName");
    const storedUserData = localStorage.getItem("userData");

    if (token) {
      setIsLoggedIn(true);
      setUserName(storedUserName || "");

      if (storedUserData) {
        try {
          const parsedUser = JSON.parse(storedUserData);
          setUserData(parsedUser);
          setUserName(parsedUser.name || storedUserName || "");
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    } else {
      setIsLoggedIn(false);
      setUserName("");
      setUserData(null);
    }
  };

  useEffect(() => {
    checkAuthStatus();

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleAuthChange = () => {
      checkAuthStatus();
    };

    const handleStorageChange = (e) => {
      if (
        e.key === "authToken" ||
        e.key === "userData" ||
        e.key === "userName"
      ) {
        checkAuthStatus();
      }
    };

    window.addEventListener("authStateChange", handleAuthChange);
    window.addEventListener("storage", handleStorageChange);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("authStateChange", handleAuthChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
        setLangDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.height = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
      document.body.style.height = "unset";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScrollCloseDropdowns = () => {
      if (window.innerWidth < 992) {
        setDropdownOpen(null);
        setLangDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScrollCloseDropdowns, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScrollCloseDropdowns);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
    setUserName("");
    setUserData(null);
    setMobileOpen(false);

    window.dispatchEvent(new Event("authStateChange"));

    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Services",
      subLinks: [
        { name: "Web Development", path: "/services/web-development" },
        {
          name: "Software Development",
          path: "/services/software-development",
        },
        { name: "App Development", path: "/services/app-development" },
        { name: "Graphics Design", path: "/services/graphics-design" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "IT Consultancy", path: "/services/it-consultancy" },
      ],
    },
    {
      name: "Solutions",
      subLinks: [
        { name: "Hosted PBX", path: "/solutions/hosted-pbx" },
        { name: "VPS Server", path: "/solutions/vps-server" },
        { name: "Cloud Server", path: "/solutions/cloud-server" },
        { name: "Dedicated Hosting", path: "/solutions/dedicated-hosting" },
        { name: "Musking SMS", path: "/solutions/musking-sms" },
        { name: "Marketing Software", path: "/solutions/marketing-software" },
        { name: "Payment Gateway", path: "/solutions/payment-gateway" },
      ],
    },
    { name: "Resources", path: "/resources" },
    { name: "Package", path: "/package" },
    {
      name: "More",
      subLinks: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Condition", path: "/terms-condition" },
        { name: "Contact Us", path: "/contact-us" },
      ],
    },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 `}>
      <div
        className={`hidden md:block w-full mx-auto transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10 shadow-lg z-50 py-0"
            : "absolute top-0 left-0 bg-transparent z-50 py-2"
        }`}
      >
        <div className={`w-9/12 mx-auto ${isSticky ? "py-2" : "py-0"}`}>
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={(e) => handleNavClick("/", e)}
              className="flex-shrink-0"
            >
              <img
                src={logo}
                alt="Hilnex Logo"
                className={`transition-all duration-300 hover:scale-105 ${
                  isSticky ? "h-8 w-auto" : "h-9 lg:h-10 w-auto"
                }`}
              />
            </NavLink>

           {/* Menu */}
<nav className="flex items-center whitespace-nowrap relative">
  {navLinks.map((link) => (
    <div
      key={link.name}
      className="relative"
      onMouseEnter={() => setDropdownOpen(link.name)}
      onMouseLeave={() => setDropdownOpen(null)}
    >
      {link.subLinks ? (
        <>
          <button
            className={`flex items-center   font-medium hover:text-[#ff8402] px-1 lg:px-2 xl:px-2 py-2 rounded-lg transition-all duration-300 ${
              isSticky
                ? "text-sm lg:text-base text-white"
                : "text-sm lg:text-base xl:text-lg  text-white"
            }`}
          >
            {link.name}
            <FaChevronDown
              className={`ml-1 lg:ml-2 transition-transform duration-300 ${
                dropdownOpen === link.name ? "rotate-180" : ""
              }`}
              size={14}
            />
          </button>
          <div
            className={`absolute left-0 w-48 lg:w-56 xl:w-64 bg-[#0b0b0b]/95 backdrop-blur-xl rounded shadow-2xl border border-white/10 transition-all duration-300 p-2 lg:p-3 xl:p-4 ${
              dropdownOpen === link.name
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
            style={{ top: "100%", zIndex: 40 }}
          >
            <div className="flex flex-col gap-2 lg:gap-3">
              {link.subLinks.map((sub) => (
                <NavLink
                  key={sub.name}
                  to={sub.path}
                  onClick={(e) => handleNavClick(sub.path, e)}
                  className={({ isActive }) =>
                    `block px-1 lg:px-2 py-2 lg:py-2.5 rounded font-medium transition-all duration-300 ${
                      isSticky
                        ? "text-xs lg:text-sm"
                        : "text-xs lg:text-sm xl:text-base"
                    } ${
                      isActive
                        ? "bg-[#ff8402] text-white"
                        : "text-white hover:text-[#ff8402] hover:bg-white/10"
                    }`
                  }
                >
                  {sub.name}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      ) : (
        <NavLink
          to={link.path}
          onClick={(e) => handleNavClick(link.path, e)}
          className={({ isActive }) =>
            `px-1 lg:px-2 xl:px-5 py-2 font-medium transition-all duration-300 ${
              isSticky
                ? "text-sm lg:text-base"
                : "text-sm lg:text-base xl:text-lg  "
            } ${
              isActive
                ? "text-[#ff8402]"
                : "text-white hover:text-[#ff8402]"
            }`
          }
        >
          {link.name}
        </NavLink>
      )}
    </div>
  ))}
</nav>

            {/* User Section */}
            <div className="flex items-center">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div
                    className={`hidden lg:block text-white ${
                      isSticky ? "text-sm" : "text-base"
                    }`}
                  >
                    Welcome, {userName || "User"}
                  </div>

                  <button
                    onClick={handleLogout}
                    className={`flex items-center gap-2 rounded bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md ${
                      isSticky
                        ? "px-3 lg:px-4 py-1.5 text-sm"
                        : "px-3 lg:px-4 py-2 text-sm lg:text-base"
                    }`}
                  >
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  onClick={(e) => handleNavClick("/login", e)}
                  className={`flex items-center   rounded bg-gradient-to-r from-[#ff8402] to-[#ff9a3d] text-white font-semibold   transition-all duration-300 transform hover:scale-105 shadow-md ${
                    isSticky
                      ? "px-2 lg:px-4 py-1 text-sm"
                      : "px-2 lg:px-4 py-1 text-sm lg:text-base"
                  }`}
                >
                  
                  <span className="hidden sm:inline">Login</span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden w-full">
        <div className="w-full mx-auto">
          <nav
            ref={mobileMenuRef}
            className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-[60] w-full max-w-[calc(100vw-16px)] backdrop-blur-[4px] p-1.5 flex items-center justify-between transition-all duration-300 ${
              mobileOpen ? "bg-white rounded-t" : "bg-[#3F3F3F]/80 rounded"
            }`}
          >
            <NavLink
              to="/"
              className="flex items-center justify-center"
              onClick={(e) => handleNavClick("/", e)}
            >
              <img
                src={mobileOpen ? logoBlack : logo}
                alt="Hilnex Logo"
                className="h-8 w-auto transition-all duration-300"
              />
            </NavLink>

            <div className="flex items-center gap-3 mr-2 relative z-[70]">
              {/* Language Button */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangDropdown(!langDropdown);
                  }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    langDropdown || mobileOpen ? "text-black" : "text-white"
                  } ${mobileOpen ? "hover:bg-gray-200" : "hover:bg-white/20"}`}
                >
                  <IoLanguage className="text-xl" />
                </button>

                {langDropdown && (
                  <div
                    className="absolute left-0 top-full mt-1 w-20 bg-white backdrop-blur-[10px] shadow-lg border border-gray-300 z-50 text-black overflow-hidden rounded"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        setLanguage("EN");
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-all ${
                        language === "EN" ? "font-bold bg-gray-300" : "bg-white"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("BN");
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-all ${
                        language === "BN" ? "font-bold bg-gray-300" : "bg-white"
                      }`}
                    >
                      BN
                    </button>
                  </div>
                )}
              </div>

              <button
                ref={hamburgerRef}
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileOpen(!mobileOpen);
                }}
                className="relative flex h-[14px] w-[20px] flex-col items-stretch justify-center z-50"
              >
                <span
                  className={`absolute h-0.5 w-full transition-all duration-300 ${
                    mobileOpen
                      ? "rotate-45 top-1/2 -translate-y-1/2 bg-black"
                      : "top-0 bg-white"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-full transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-0 bg-black"
                      : "top-1/2 -translate-y-1/2 bg-white"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-full transition-all duration-300 ${
                    mobileOpen
                      ? "-rotate-45 top-1/2 -translate-y-1/2 bg-black"
                      : "bottom-0 bg-white"
                  }`}
                ></span>
              </button>
            </div>
          </nav>

          <div
            className={`fixed left-1/2 transform -translate-x-1/2 bg-white backdrop-blur-md transition-all duration-500 overflow-hidden z-[55] rounded-b shadow-xl ${
              mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{
              top: "52px",
              width: "calc(100% - 16px)",
              maxWidth: "calc(100vw - 16px)",
            }}
          >
            <div className="py-4 flex flex-col overflow-y-auto max-h-[70vh]">
              {/* User Info if logged in */}
              {isLoggedIn && userName && (
                <div className="px-3 py-2 bg-gray-100 rounded mx-2 mb-2">
                  <p className="text-sm text-gray-600">Welcome back,</p>
                  <p className="font-bold text-gray-800">{userName}</p>
                </div>
              )}

              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenCategory(
                            openCategory === link.name ? null : link.name
                          )
                        }
                        className="w-full flex justify-between items-center px-3 py-2 font-bold text-gray-700 hover:bg-gray-50 rounded-md transition-all"
                      >
                        <span>{link.name}</span>
                        <span>
                          {openCategory === link.name ? (
                            <FaChevronDown className="text-gray-600" />
                          ) : (
                            <FaChevronRight className="text-gray-600" />
                          )}
                        </span>
                      </button>

                      {openCategory === link.name &&
                        link.subLinks.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            onClick={(e) =>
                              handleMobileSubmenuClick(sub.path, e)
                            }
                            className={({ isActive }) =>
                              `flex items-center justify-between px-6 py-2 rounded-md text-gray-800 hover:text-[#0e0d0d] hover:bg-gray-50 transition-all ${
                                isActive ? "bg-gray-100 text-[#161616]" : ""
                              }`
                            }
                          >
                            <span>{sub.name}</span>
                            {link.name !== "More" && (
                              <FaChevronRight className="text-gray-400 text-sm" />
                            )}
                          </NavLink>
                        ))}

                      {link.name !== "More" && (
                        <hr className="bg-black h-[0.7px] border-0 mx-[12px]" />
                      )}
                    </>
                  ) : (
                    <>
                      <NavLink
                        to={link.path}
                        onClick={(e) => handleNavClick(link.path, e)}
                        className={({ isActive }) =>
                          `block px-3 py-2 font-bold rounded-md text-gray-800 hover:text-[#0e0d0d] hover:bg-gray-50 transition-all ${
                            isActive ? "text-[#161616]" : ""
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>

                      {link.name !== "More" && (
                        <hr className="bg-black h-[0.7px] border-0 mx-[12px]" />
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* DASHBOARD LINK */}

              <hr className="bg-black h-[0.7px] border-0 mx-[12px]" />

              {/* Auth buttons */}
              <div className="mt-4 flex flex-col gap-2 px-3">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-md hover:from-gray-700 hover:to-gray-800 transition-all"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <NavLink
                      to="/register"
                      onClick={(e) => handleNavClick("/register", e)}
                      className="w-full text-center px-4 py-2 border border-black text-black font-bold rounded-md hover:bg-black hover:text-white transition-all"
                    >
                      Sign Up
                    </NavLink>

                    <NavLink
                      to="/login"
                      onClick={(e) => handleNavClick("/login", e)}
                      className="w-full text-center px-4 py-2 bg-gradient-to-r from-[#000000] to-[#000000] text-white font-bold rounded-md hover:from-[#000000] hover:to-[#ff8a1d] transition-all"
                    >
                      Login
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
