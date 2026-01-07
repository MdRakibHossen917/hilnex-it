import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email", { autoClose: 2000, theme: "dark" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address", { autoClose: 2000, theme: "dark" });
      return;
    }

    setLoading(true);
    try {
      // API call simulation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`Password reset code sent to ${email}`, { 
        autoClose: 3000, 
        theme: "dark" 
      });
      setEmailSubmitted(true);
      
    } catch (error) {
      toast.error("Something went wrong. Please try again!", { 
        autoClose: 2000, 
        theme: "dark" 
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePincodeSubmit = async (e) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6) {
      toast.error("Please enter the 6-digit code", { autoClose: 2000, theme: "dark" });
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Code verified! Redirecting to reset password...", { 
        autoClose: 2000, 
        theme: "dark" 
      });
      
    } catch (error) {
      toast.error("Invalid code. Please try again!", { autoClose: 2000, theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  const handleResendPincode = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("New code sent to your email!", { autoClose: 2000, theme: "dark" });
    } catch (error) {
      toast.error("Failed to resend code. Try again!", { autoClose: 2000, theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center   md:bg-black  py-8">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded p-6 md:p-8 shadow-2xl border border-gray-800">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {emailSubmitted ? "Enter Verification Code" : "Reset Your Password"}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {emailSubmitted 
                ? `We've sent a 6-digit verification code to ${email}`
                : "Enter your email to receive a verification code"}
            </p>
          </div>

          {/* Email Form */}
          {!emailSubmitted ? (
            <form className="space-y-6" onSubmit={handleForgotPassword}>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded text-white font-semibold transition duration-300 ${
                  loading 
                    ? "bg-orange-400 cursor-not-allowed opacity-50" 
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Code...
                  </span>
                ) : "Send Verification Code"}
              </button>
            </form>
          ) : (
            /* Pincode Form */
            <form className="space-y-6" onSubmit={handlePincodeSubmit}>
              <div>
                <label htmlFor="pincode" className="block text-gray-400 mb-2 text-sm font-medium">
                  6-Digit Verification Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="••••••"
                  required
                  disabled={loading}
                  maxLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300 text-center text-xl tracking-widest font-mono disabled:opacity-50"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Enter the 6-digit code sent to <span className="text-orange-400">{email}</span>
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || pincode.length !== 6}
                className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                  loading || pincode.length !== 6
                    ? "bg-orange-400 cursor-not-allowed opacity-50"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </span>
                ) : "Verify Code"}
              </button>

              <div className="text-center space-y-3">
                <button
                  type="button"
                  onClick={handleResendPincode}
                  disabled={loading}
                  className="text-orange-400 hover:text-orange-300 font-medium transition duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Didn't receive code? Resend
                </button>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setEmailSubmitted(false);
                      setPincode("");
                    }}
                    disabled={loading}
                    className="text-gray-400 hover:text-gray-300 font-medium transition duration-300 text-sm disabled:opacity-50"
                  >
                    Use different email address
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Back to Login Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Remember your password?{" "}
              <Link 
                to="/login" 
                className="text-orange-400 hover:text-orange-300 font-medium transition duration-300 hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;