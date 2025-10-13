import React from "react";
import faceImg from "../../../assets/face.jpg";
import logo1 from "../../../assets/Brand/bioXin.png";
import logo2 from "../../../assets/Brand/brack.jpg";
import logo3 from "../../../assets/Brand/islami.png";
import logo4 from "../../../assets/Brand/uniliver.png";
import logo5 from "../../../assets/Brand/lux.jpg";

// Divider component
const Divider = () => <hr className="my-4 border-gray-700" />;

const FaceRecognition = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-9/12 mx-auto p-6 bg-black text-gray-100 shadow-xl">
        {/* Case Studies Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Case Studies</h1>
            <p className="text-gray-300 mb-6 text-lg">
              Check out our case studies that show how innovative <br />{" "}
              solutions transformed businesses.
            </p>
          </div>
          <button className="border border-blue-500 text-blue-400 px-6 py-4 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
            See all Case Studies &gt;
          </button>
        </div>

        {/* Partner Logos */}
        <div className="flex space-x-4 mb-8 ">
          <div className="h-20 w-30 bg-gray-800 border border-gray-700 flex items-center justify-center rounded ">
            <img
              src={logo1}
              alt="bioXin"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-20 w-30  bg-gray-800 border border-gray-700 flex items-center justify-center rounded ">
            <img
              src={logo2}
              alt="brack"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-20 w-30   bg-gray-800 border border-gray-700 flex items-center justify-center rounded">
            <img
              src={logo3}
              alt="citybank"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-20 w-30  bg-gray-800 border border-gray-700 flex items-center justify-center rounded">
            <img
              src={logo4}
              alt="citybank"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-20 w-30  bg-gray-800 border border-gray-700 flex items-center justify-center rounded">
            <img
              src={logo5}
              alt="citybank"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Case Study Card */}
        <div className="flex flex-col md:flex-row bg-black shadow-lg overflow-hidden ">
          {/* Image Section */}
          <div className="md:w-5/12">
            <img
              src={faceImg}
              alt="Facial Recognition Visualization"
              className="w-full h-full object-cover shadow-3xl rounded-lg"
            />
          </div>

          {/* Text & Stats Section */}
          <div className="md:w-7/12 p-8">
            <h4 className="font-semibold text-blue-400 uppercase mb-2 text-3xl">
              AI & ML, LMS
            </h4>
            <h2 className="text-3xl font-bold text-white mb-4">
              Streamlining Attendance at IIITK with Facial <br /> Recognition
            </h2>
            <p className="text-gray-300 mb-6">
              The Indian Institute of Information Technology, Kottayam (IIITK)
              is an <br /> autonomous engineering institute located in Valavoor,
              Palai, Kottayam <br /> District, Kerala, India.
            </p>

            <button className="text-blue-400 font-semibold flex items-center cursor-pointer mb-6 hover:underline">
              View Case Study &rarr;
            </button>

            <Divider />

            {/* Stats */}
            <div className="flex space-x-12 mt-4">
              <div>
                <h1 className="text-4xl font-bold text-blue-400">80%</h1>
                <p className="text-gray-400 text-sm">Processing Time Reduced</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-blue-400">99.5%</h1>
                <p className="text-gray-400 text-sm">
                  Facial Recognition Accuracy Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
