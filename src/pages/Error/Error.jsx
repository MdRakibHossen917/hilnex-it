import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../../Components/Shared/ParticlesBackground/ParticlesBackground';
import ErrorRoboot from '../../assets/Auth/ErrorRoboot.png';

const Error = () => {
  const currentUrl = window.location.href;
  const requestedPath = window.location.pathname;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">

      {/* Background Particles */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Card Wrapper */}
      <div className="relative w-full max-w-lg flex flex-col items-center z-20">

        {/* Robot Image Positioned Above Card */}
        <img
          src={ErrorRoboot}
          alt="error-robot"
          className="w-40 h-auto absolute -top-32 drop-shadow-[0px_10px_30px_rgba(0,0,0,0.7)]"
        />

        {/* Card */}
        <div className="bg-[#101828] rounded shadow-sm border px-4 pb-4  md:p-8 pt-9 w-full text-center">

          <h1 className="text-2xl font-normal text-white mb-2">
            404. That's an error.
          </h1>

          <p className="text-gray-300 mb-1  text-xs">
            The requested URL was not found on this server.
          </p>

          <div className="mb-4 p-3 bg-gray-800/50 rounded border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Requested URL:</p>
            <p className="text-orange-400 font-mono text-sm break-all">
              {requestedPath}
            </p>
          </div>

          <p className="text-sm text-gray-400 mb-1">
            That's all we know.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="px-6 py-2 bg-[#ff8402] hover:bg-[#f48005] text-white rounded transition-colors duration-200 text-sm font-medium"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded transition-colors duration-200 text-sm font-medium"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Help Links */}
        <div className="text-center mt-6 space-y-2">
          <div className="space-x-6 text-sm">
            <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Help</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline">Privacy & Terms</a>
          </div>

          {/* Technical Details */}
          <details className="mt-4 text-xs text-gray-400 cursor-pointer">
            <summary className="hover:text-gray-300">Technical details</summary>
            <div className="mt-2 p-3 bg-gray-800 rounded text-left space-y-2">
              <p><span className="text-gray-400">Error:</span> 404 Not Found</p>
              <p><span className="text-gray-400">Requested URL:</span> <span className="text-orange-400 ml-1">{currentUrl}</span></p>
              <p><span className="text-gray-400">Path:</span> <span className="text-orange-400 ml-1">{requestedPath}</span></p>
              <p><span className="text-gray-400">Timestamp:</span> <span className="text-orange-400 ml-1">{new Date().toLocaleString()}</span></p>
              <p className="text-gray-300 mt-2">
                The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Error;
