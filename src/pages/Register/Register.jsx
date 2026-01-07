import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaArrowLeft,
  FaPhone,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const API_BASE_URL = "http://localhost:5000";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "otp") {
      const numericValue = value.replace(/\D/g, "").slice(0, 6);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 15);

      let formattedValue = numericValue;
      if (numericValue.length > 3 && numericValue.length <= 6) {
        formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
      } else if (numericValue.length > 6) {
        formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
          3,
          6
        )}-${numericValue.slice(6)}`;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneWithoutDashes = phone.replace(/\D/g, "");
    return phoneWithoutDashes.length >= 10;
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name!");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email!");
      return false;
    }

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number!");
      return false;
    }

    if (!validatePhoneNumber(formData.phone)) {
      toast.error("Please enter a valid phone number!");
      return false;
    }

    if (!formData.password) {
      toast.error("Please enter password!");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }

    return true;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!validateStep1()) return;

    setLoading(true);

    try {
      console.log("Sending OTP request...");

      const response = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase(),
          phone: formData.phone.replace(/\D/g, ""),
        }),
      });

      const data = await response.json();
      console.log("OTP Response:", data);

      if (data.success) {
        toast.success("OTP sent to your email!");
        console.log("OTP sent successfully!");

        setStep(2);
      } else {
        toast.error(data.message || "Failed to send OTP");
        console.log("❌ OTP failed:", data.message);
      }
    } catch (error) {
      console.log("Network error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtpAndRegister = async (e) => {
    e.preventDefault();

    if (!formData.otp || formData.otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP!");
      return;
    }

    setLoading(true);

    try {
      console.log("Verifying OTP and registering...");

      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email.toLowerCase(),
          phone: formData.phone.replace(/\D/g, ""),
          password: formData.password,
          otp: formData.otp,
        }),
      });

      const data = await response.json();
      console.log("Registration Response:", data);

      if (data.success) {
        toast.success("Registration Successful! Redirecting...");
        console.log("Registration successful!");

        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userName", formData.name);
        localStorage.setItem("userPhone", formData.phone);
        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message || "Registration failed!");
        console.log("❌ Registration failed:", data.message);
      }
    } catch (error) {
      console.log("Network error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      console.log("Resending OTP...");

      const response = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase(),
          phone: formData.phone.replace(/\D/g, ""),
        }),
      });

      const data = await response.json();
      console.log("Resend OTP Response:", data);

      if (data.success) {
        toast.success("OTP resent to your email!");
        console.log("OTP resent successfully!");

        if (data.debugOtp) {
          console.log("NEW DEBUG OTP:", data.debugOtp);
          toast.info(`New OTP: ${data.debugOtp}`, {
            autoClose: 10000,
          });
        }
      } else {
        toast.error(data.message || "Failed to resend OTP");
        console.log("❌ OTP resend failed:", data.message);
      }
    } catch (error) {
      console.log("Network error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const goBackToStep1 = () => {
    setStep(1);
    setFormData((prev) => ({ ...prev, otp: "" }));
  };

  return (
    <>
      <div className=" flex items-center justify-center  ">
        <div className="bg-gray-900 backdrop-blur-xl px-5 pt-5   rounded shadow-2xl w-full max-w-md   ">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-white mb-2">
              {step === 1 ? "Create Account" : "Verify OTP"}
            </h2>
            <p className="text-gray-400">
              {step === 1
                ? "Sign up to get started"
                : "Enter the OTP sent to your email"}
            </p>
          </div>

          {step === 1 ? (
            <form className="space-y-1 " onSubmit={handleSendOtp}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 mb-2 text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                  placeholder="Full name"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-400 mb-2 text-sm font-medium"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                    placeholder="01700-000000"
                    required
                    disabled={loading}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 mb-2 text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-gray-400 mb-2 text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                  placeholder="••••••••"
                  required
                  minLength="6"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
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

              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-400 mb-2 text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition duration-300"
                  placeholder="••••••••"
                  required
                  minLength="6"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-10 text-gray-400 hover:text-orange-400 transition duration-300 p-1"
                  disabled={loading}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded text-white font-semibold transition duration-300 mt-2 ${
                  loading
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 transform hover:scale-105"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Sending OTP...
                  </div>
                ) : (
                  "Send OTP"
                )}
              </button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleVerifyOtpAndRegister}>
              <div className="text-center mb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-500 rounded-full">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                </div>
                <p className="text-gray-300 mb-2">
                  We sent a 6-digit verification code to:
                </p>
                <p className="text-white font-semibold text-lg break-all">
                  {formData.email}
                </p>
                <p className="text-gray-400 text-sm mt-3">
                  The code will expire in{" "}
                  <span className="text-orange-400">10 minutes</span>
                </p>
              </div>

              <div>
                <label
                  htmlFor="otp"
                  className="block text-gray-400 mb-3 text-sm font-medium"
                >
                  Enter Verification Code
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white text-center text-xl tracking-widest font-mono"
                  placeholder="000000"
                  maxLength="6"
                  inputMode="numeric"
                  required
                  disabled={loading}
                />
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Enter the 6-digit code from your email
                </p>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                    loading
                      ? "bg-orange-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600 transform hover:scale-105"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                      Verifying...
                    </div>
                  ) : (
                    "Verify & Create Account"
                  )}
                </button>

                <div className="flex space-x-3 ">
                  <button
                    type="button"
                    onClick={resendOtp}
                    disabled={loading}
                    className="flex-1 py-2 rounded-lg text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white transition duration-300 text-sm"
                  >
                    Resend OTP
                  </button>

                  <button
                    type="button"
                    onClick={goBackToStep1}
                    disabled={loading}
                    className="flex-1 py-2 rounded-lg text-gray-400 border border-gray-600 hover:border-gray-500 hover:text-white transition duration-300 text-sm flex items-center justify-center"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back
                  </button>
                </div>
              </div>
            </form>
          )}
            <div className="flex items-center mt-4  md:my-4">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-3 text-gray-400 text-lg">OR</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-x-2.5 p-1 mt-3">
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

        

          <div className="flex md:hidden items-center justify-center gap-4 transform translate-y-[20px]">
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

          <div className="hidden md:block my-2 ">
            <p className="text-sm text-gray-400 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-400 hover:text-orange-300 font-medium transition duration-300"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="md:hidden text-sm text-gray-400 text-center mt-8">
          Don't have an account?{" "}
          <Link
            to="/login"
            className="text-orange-400 hover:text-orange-300 font-medium transition duration-300"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
