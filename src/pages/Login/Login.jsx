import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import loginRobot from "../../assets/Auth/LoginRoboot.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "http://localhost:5000";

  
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => console.log("API test:", data))
      .catch((err) => console.error("API connection error:", err));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email || !password) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
      
        localStorage.setItem("authToken", data.data.token);
        localStorage.setItem("userEmail", data.data.user.email);
        localStorage.setItem("userName", data.data.user.name);
        localStorage.setItem("userData", JSON.stringify(data.data.user));

       
        window.dispatchEvent(new Event("authStateChange"));

        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 1500,
          theme: "dark",
        });

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(data.message || "Login failed!", {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Network error. Please try again.", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center    ">
        <div className="relative w-full flex flex-col items-center">

          <img
            src={loginRobot}
            alt="login-robot"
            onClick={() => navigate("/")}
            className="
    w-40 h-auto 
    absolute -top-31 z-10
    drop-shadow-[0px_10px_30px_rgba(0,0,0,0.7)]
    block lg:hidden
  "
          />

          <div className="bg-gray-900 backdrop-blur-xl px-5 pt-4 md:p-5 rounded w-full max-w-md  md:shadow-2xl">
       
            <div className="text-center  ">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Sign in to your account
              </p>
            </div>

        
            <form className="space-y-1" onSubmit={handleLogin}>
    
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                />
              </div>

               
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="password"
                    className="block text-gray-400 text-sm font-medium"
                  >
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-orange-400 hover:text-orange-300 transition duration-300"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 pr-12 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-gray-400 hover:text-orange-400 transition duration-300 p-1"
                  disabled={loading}
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  disabled={loading}
                  className="w-4 h-4 text-orange-500 bg-gray-800 border-gray-700 rounded focus:ring-orange-500 focus:ring-2"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>

        
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded text-white font-semibold transition duration-300 ${
                  loading
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 transform hover:scale-105"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Logging in...
                  </div>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            <div className="flex items-center mt-6  md:my-6">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-3 text-gray-400 text-lg">OR</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            <div className="hidden md:flex items-center justify-center gap-x-2.5 p-1">
              <button className="btn bg-white w-1/2 text-black border-[#e5e5e5] flex items-center justify-center gap-2">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path fill="#fff" d="m0 0H512V512H0"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <button className="btn bg-[#1A77F2] text-white w-1/2 border-[#005fd8] flex items-center justify-center gap-2">
                <svg
                  aria-label="Facebook logo"
                  width="16"
                  height="16"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
                Login with FB
              </button>
            </div>

            <div className="flex md:hidden items-center justify-center gap-4 transform translate-y-[16px]">
              <button className="w-10 h-10 rounded-full bg-white     flex items-center justify-center">
                <svg
                  aria-label="Google logo"
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
              </button>

              <button className="w-10 h-10 rounded-full bg-[#1A77F2] flex items-center justify-center">
                <svg
                  aria-label="Facebook logo"
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                  ></path>
                </svg>
              </button>
            </div>

            <p className="hidden md:block text-sm text-gray-400 text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-orange-400 hover:text-orange-300 font-medium transition duration-300"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="md:hidden text-sm text-gray-400 text-center mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-orange-400 hover:text-orange-300 font-medium transition duration-300"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
