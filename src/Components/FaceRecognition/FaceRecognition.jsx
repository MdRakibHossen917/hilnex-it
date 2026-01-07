import React from "react";
import "./FaceRecognition.css";
import riskOne from "../../assets/riskOne.png";
import riskTwo from "../../assets/riskTwo.png";
import faceImage from "../../assets/faceImage.jpg";

const FaceRecognition = () => {
  return (
    <div className="bg-black w-full   ">
      <div className="cyber-security-container w-9/12  mx-auto">
        <div className="main-content flex items-center justify-between py-20">
          {/* Vertical Title */}
          {/* <div className="flex justify-center mt-16">
            <img
              className="w-96 md:w-80 sm:w-64 shadow-2xl rounded-lg object-cover"
              src={faceImage}
              alt="Profile"
            />
          </div> */}

          <div>
            <img
              className="w-96 mt-16 shadow-3xl"
              src={faceImage}
              alt="faceImage.jpg"
            />
          </div>
          <div>
            <h1 className="vertical-title absolute  right-[420px]  top-[510px]  -translate-y-1/2 rotate-270 origin-left tracking-[10px] text-[#FF730F] text-2xl z-50">
              FACERECOGNITION
            </h1>
          </div>

          {/* False card */}
          <div className="relative mt-18 h-96">
            <div className="id-card bg-[#181818] border border-[#181818] rounded-lg w-40 h-96 shadow-2xl absolute left-[110px]">
              <div className="flex flex-col items-center justify-center h-full">
                {/* Content empty   */}
              </div>
            </div>
          </div>

          {/* Right Section - ID Card */}
          <div className="relative -mt-55 ">
            <div
              className="id-card bg-[#181818] border border-[#181818] rounded-lg p-4 w-64 shadow-2xl absolute right-0"
              style={{ left: "400px" }}
            >
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-24 h-24  bg-gray-700 mb-4 overflow-hidden border-2 border-[#181818]">
                  <img
                    src={faceImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h2 className="text-[#FF730F] text-xl font-bold   text-center">
                  Oliviar
                </h2>

                {/* Email */}
                <div className="flex items-center   w-full justify-center">
                  <span className="text-[#807b78] mr-2 text-lg">📧</span>
                  <span className="text-gray-300 text-sm break-all">
                    john.doe@example.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center w-full justify-center">
                  <span className="text-[#FF730F] mr-2 text-lg">📱</span>
                  <span className="text-gray-300 text-sm">
                    +1 (555) 123-4567
                  </span>
                </div>
                {/* text */}
                <p className="text-green-800 text-xl font-bold   text-center">
                  Successful Found Data
                </p>

                {/* Button */}
                <button className="bg-[#086a18] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#05370d] transition duration-300">
                  Detected
                </button>
              </div>
            </div>
          </div>

          <div>
            {/* Middle Section - SVG */}
            <section className="ecr flex justify-center items-center flex-1">
              <svg
                fill="none"
                width="600"
                height="400"
                viewBox="0 0 930 610"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-graphic"
              >
                {/* 1st orange side - 15 lines with 30px gap */}
                <g mask="url(#mask0_3659_4639)">
                  <g>
                    <path
                      d="M20,103L266,103"
                      stroke="url(#paint29_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="3s;op1.end+3s"
                      dur="3s"
                      id="op1"
                      path="M20,103L266,103"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,133L266,133"
                      stroke="url(#paint30_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="4s;op2.end+4s"
                      dur="3s"
                      id="op2"
                      path="M20,133L266,133"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,163L266,163"
                      stroke="url(#paint31_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="2.5s;op3.end+3s"
                      dur="3s"
                      id="op3"
                      path="M20,163L266,163"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,193L266,193"
                      stroke="url(#paint32_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="3.5s;op4.end+3.5s"
                      dur="3s"
                      id="op4"
                      path="M20,193L266,193"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,223L266,223"
                      stroke="url(#paint33_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="2s;op5.end+3s"
                      dur="3s"
                      id="op5"
                      path="M20,223L266,223"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,253L266,253"
                      stroke="url(#paint34_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="2.5s;op6.end+2.5s"
                      dur="3s"
                      id="op6"
                      path="M20,253L266,253"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,283L266,283"
                      stroke="url(#paint35_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="1.3s;op7.end+3s"
                      dur="3s"
                      id="op7"
                      path="M20,283L266,283"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,313L266,313"
                      stroke="url(#paint36_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="2.3s;op8.end+3s"
                      dur="3s"
                      id="op8"
                      path="M20,313L266,313"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,343L266,343"
                      stroke="url(#paint37_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="3.3s;op9.end+3s"
                      dur="3s"
                      id="op9"
                      path="M20,343L266,343"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,373L266,373"
                      stroke="url(#paint38_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="4.3s;op10.end+3s"
                      dur="3s"
                      id="op10"
                      path="M20,373L266,373"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,403L266,403"
                      stroke="url(#paint39_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="5.3s;op11.end+3s"
                      dur="3s"
                      id="op11"
                      path="M20,403L266,403"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,433L266,433"
                      stroke="url(#paint40_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="3.3s;op12.end+3s"
                      dur="3s"
                      id="op12"
                      path="M20,433L266,433"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,463L266,463"
                      stroke="url(#paint41_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="1.3s;op13.end+3s"
                      dur="3s"
                      id="op13"
                      path="M20,463L266,463"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,493L266,493"
                      stroke="url(#paint42_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="4.3s;op14.end+3s"
                      dur="3s"
                      id="op14"
                      path="M20,493L266,493"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,523L266,523"
                      stroke="url(#paint43_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="5.3s;op15.end+3s"
                      dur="3s"
                      id="op15"
                      path="M20,523L266,523"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,553L266,553"
                      stroke="url(#paint44_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="2.1s;op16.end+3s"
                      dur="3s"
                      id="op16"
                      path="M20,553L266,553"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,583L266,583"
                      stroke="url(#paint45_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="3.1s;op17.end+3s"
                      dur="3s"
                      id="op17"
                      path="M20,583L266,583"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,613L266,613"
                      stroke="url(#paint46_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="4.1s;op18.end+3s"
                      dur="3s"
                      id="op18"
                      path="M20,613L266,613"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,643L266,643"
                      stroke="url(#paint47_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="1.1s;op19.end+3s"
                      dur="3s"
                      id="op19"
                      path="M20,643L266,643"
                    />
                  </circle>

                  <g>
                    <path
                      d="M20,673L266,673"
                      stroke="url(#paint48_linear_3659_4639)"
                    />
                  </g>
                  <circle fill="#FF730F" r="2">
                    <animateMotion
                      begin="5.1s;op20.end+3s"
                      dur="3s"
                      id="op20"
                      path="M20,673L266,673"
                    />
                  </circle>
                </g>
                <div>
                  <img className="w-72" src={riskOne} alt="riskOne" />
                </div>

                {/* 2nd Blue animated middle blue part */}
                <g
                  clipPath="url(#clip1_3659_4639)"
                  transform="translate(50,60)"
                >
                  <g opacity="0.5">
                    <path
                      d="M317 524.51C341.61 524.54 366.78 526.45 390.83 520.05C413.86 513.93 433.78 499.67 452.28 485.17C476.54 466.16 498.88 445.11 521.38 424.09C528.53 417.58 535.86 411.33 543.35 405.34C547.19 402.28 551.07 399.29 555 396.37"
                      stroke="url(#paint7_linear_3659_4639)"
                    ></path>

                    <path
                      d="M317 503.37C337.36 503.39 358.09 504.6 378.28 501.71C382.47 501.11 386.63 500.34 390.75 499.34C405.87 495.69 419.65 488.84 432.6 480.88C439.35 476.72 445.86 472.24 452.21 467.75C453.4 466.9 454.59 466.06 455.78 465.2C471.02 454.21 551.07 390.13 555 387.49"
                      stroke="url(#paint8_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="2s;op26.end+0.1s"
                        dur="3s"
                        id="op26"
                        keyTimes="0;1"
                        path="M317 503.37C337.36 503.39 358.09 504.6 378.28 501.71C382.47 501.11 386.63 500.34 390.75 499.34C405.87 495.69 419.65 488.84 432.6 480.88C439.35 476.72 445.86 472.24 452.21 467.75C453.4 466.9 454.59 466.06 455.78 465.2C471.02 454.21 551.07 390.13 555 387.49"
                        to="0"
                      ></animateMotion>
                    </circle>

                    <path
                      d="M317 482.23C337.34 482.25 358.04 483.35 378.2 480.76C382.39 480.22 386.54 479.53 390.66 478.64C405.77 475.37 419.53 469.21 432.51 462.09C439.26 458.36 445.78 454.35 452.14 450.33C453.33 449.57 454.52 448.81 455.71 448.05C470.95 438.22 551.07 380.97 555 378.61"
                      stroke="url(#paint9_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 461.09C337.32 461.11 357.98 462.11 378.13 459.8C382.32 459.32 386.47 458.71 390.58 457.92C405.67 455.03 419.44 449.58 432.43 443.28C439.19 440 445.71 436.44 452.08 432.9C453.27 432.23 454.46 431.56 455.65 430.89C470.9 422.21 551.08 371.81 555.01 369.72"
                      stroke="url(#paint10_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="2.4s;op28.end+0.1s"
                        dur="3s"
                        id="op28"
                        keyTimes="0;1"
                        path="M317 461.09C337.32 461.11 357.98 462.11 378.13 459.8C382.32 459.32 386.47 458.71 390.58 457.92C405.67 455.03 419.44 449.58 432.43 443.28C439.19 440 445.71 436.44 452.08 432.9C453.27 432.23 454.46 431.56 455.65 430.89C470.9 422.21 551.08 371.81 555.01 369.72"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 439.95C337.3 439.97 357.93 440.86 378.06 438.85C382.25 438.43 386.4 437.9 390.5 437.22C405.58 434.71 419.33 429.96 432.35 424.48C439.11 421.64 445.63 418.53 452.01 415.47C453.21 414.89 454.4 414.31 455.58 413.73C470.83 406.21 551.08 362.64 555 360.83"
                      stroke="url(#paint11_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 418.81C337.28 418.83 357.88 419.62 377.99 417.9C382.18 417.55 386.32 417.1 390.41 416.51C405.48 414.38 419.21 410.32 432.25 405.68C439.01 403.28 445.54 400.63 451.93 398.05C453.13 397.56 454.32 397.07 455.5 396.58C470.76 390.21 551.07 353.48 554.99 351.95"
                      stroke="url(#paint12_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="2s;op30.end+0.1s"
                        dur="3s"
                        id="op30"
                        keyTimes="0;1"
                        path="M317 418.81C337.28 418.83 357.88 419.62 377.99 417.9C382.18 417.55 386.32 417.1 390.41 416.51C405.48 414.38 419.21 410.32 432.25 405.68C439.01 403.28 445.54 400.63 451.93 398.05C453.13 397.56 454.32 397.07 455.5 396.58C470.76 390.21 551.07 353.48 554.99 351.95"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 397.67C337.26 397.69 357.82 398.37 377.91 396.94C382.1 396.65 386.24 396.28 390.32 395.79C405.37 394.04 419.09 390.67 432.16 386.87C438.92 384.9 445.46 382.73 451.85 380.61C453.05 380.21 454.24 379.81 455.43 379.4C470.7 374.19 551.07 344.29 554.99 343.04"
                      stroke="url(#paint13_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 376.53C337.24 376.55 357.77 377.13 377.84 375.99C382.03 375.76 386.16 375.47 390.24 375.09C405.28 373.71 418.98 371.04 432.08 368.08C438.84 366.55 445.39 364.84 451.79 363.19C452.99 362.88 454.18 362.57 455.37 362.25C470.64 358.2 551.08 335.13 555 334.16"
                      stroke="url(#paint14_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="1.3s;op32.end+0.1s"
                        dur="3s"
                        id="op32"
                        keyTimes="0;1"
                        path="M317 376.53C337.24 376.55 357.77 377.13 377.84 375.99C382.03 375.76 386.16 375.47 390.24 375.09C405.28 373.71 418.98 371.04 432.08 368.08C438.84 366.55 445.39 364.84 451.79 363.19C452.99 362.88 454.18 362.57 455.37 362.25C470.64 358.2 551.08 335.13 555 334.16"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 355.39C337.21 355.41 357.71 355.88 377.77 355.04C381.96 354.87 386.09 354.66 390.16 354.38C405.18 353.38 418.87 351.4 432 349.28C438.76 348.19 445.32 346.94 451.73 345.77C452.93 345.55 454.12 345.33 455.31 345.1C470.59 342.2 551.09 325.97 555.01 325.28"
                      stroke="url(#paint15_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 334.26C337.19 334.28 357.66 334.64 377.7 334.1C381.89 333.99 386.01 333.86 390.07 333.69C405.08 333.07 418.74 331.78 431.91 330.49C438.67 329.83 445.23 329.05 451.65 328.35C452.85 328.22 454.04 328.08 455.23 327.95C470.52 326.21 551.08 316.81 554.99 316.4"
                      stroke="url(#paint16_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="2.9s;op34.end+0.1s"
                        dur="3s"
                        id="op34"
                        keyTimes="0;1"
                        path="M317 334.26C337.19 334.28 357.66 334.64 377.7 334.1C381.89 333.99 386.01 333.86 390.07 333.69C405.08 333.07 418.74 331.78 431.91 330.49C438.67 329.83 445.23 329.05 451.65 328.35C452.85 328.22 454.04 328.08 455.23 327.95C470.52 326.21 551.08 316.81 554.99 316.4"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 313.12C337.17 313.14 357.6 313.4 377.63 313.14C381.82 313.09 385.94 313.05 389.99 312.97C404.99 312.73 418.63 312.12 431.83 311.68C438.59 311.46 445.16 311.14 451.59 310.92C452.79 310.88 453.99 310.83 455.18 310.79C470.47 310.21 551.1 307.65 555.01 307.51"
                      stroke="url(#paint17_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 291.98C337.15 292 357.55 292.15 377.55 292.19C381.74 292.2 385.86 292.24 389.9 292.27C404.88 292.41 418.51 292.48 431.73 292.89C438.49 293.1 445.06 293.25 451.5 293.5C452.7 293.55 453.9 293.59 455.09 293.64C470.39 294.21 551.08 298.49 554.99 298.63"
                      stroke="url(#paint18_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="1.7s;op36.end+0.1s"
                        dur="3s"
                        id="op36"
                        keyTimes="0;1"
                        path="M317 291.98C337.15 292 357.55 292.15 377.55 292.19C381.74 292.2 385.86 292.24 389.9 292.27C404.88 292.41 418.51 292.48 431.73 292.89C438.49 293.1 445.06 293.25 451.5 293.5C452.7 293.55 453.9 293.59 455.09 293.64C470.39 294.21 551.08 298.49 554.99 298.63"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 270.84C337.13 270.86 357.49 270.91 377.48 271.24C381.67 271.31 385.78 271.43 389.82 271.56C404.79 272.08 418.39 272.83 431.65 274.09C438.41 274.73 444.99 275.34 451.44 276.08C452.64 276.22 453.84 276.35 455.03 276.49C470.34 278.22 551.09 289.33 555 289.75"
                      stroke="url(#paint19_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 249.7C337.11 249.72 357.44 249.66 377.41 250.28C381.6 250.42 385.71 250.61 389.74 250.84C404.69 251.74 418.28 253.17 431.57 255.28C438.33 256.35 444.92 257.43 451.38 258.64C452.58 258.87 453.78 259.09 454.97 259.32C470.28 262.21 551.09 280.15 555.01 280.85"
                      stroke="url(#paint20_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="1.3s;op38.end+0.1s"
                        dur="3s"
                        id="op38"
                        keyTimes="0;1"
                        path="M317 249.7C337.11 249.72 357.44 249.66 377.41 250.28C381.6 250.42 385.71 250.61 389.74 250.84C404.69 251.74 418.28 253.17 431.57 255.28C438.33 256.35 444.92 257.43 451.38 258.64C452.58 258.87 453.78 259.09 454.97 259.32C470.28 262.21 551.09 280.15 555.01 280.85"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 228.56C337.09 228.58 357.39 228.42 377.34 229.33C381.53 229.53 385.63 229.8 389.65 230.14C404.59 231.41 418.16 233.53 431.48 236.48C438.24 237.98 444.83 239.53 451.3 241.22C452.5 241.53 453.7 241.85 454.9 242.16C470.22 246.2 551.09 270.98 555 271.96"
                      stroke="url(#paint21_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 207.42C337.07 207.44 357.33 207.17 377.26 208.38C381.45 208.64 385.55 209 389.56 209.43C404.49 211.08 418.03 213.87 431.39 217.68C438.15 219.61 444.75 221.61 451.23 223.79C452.43 224.19 453.63 224.59 454.83 225C470.16 230.2 551.09 261.81 555 263.07"
                      stroke="url(#paint22_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="1.1s;op40.end+0.1s"
                        dur="3s"
                        id="op40"
                        keyTimes="0;1"
                        path="M317 207.42C337.07 207.44 357.33 207.17 377.26 208.38C381.45 208.64 385.55 209 389.56 209.43C404.49 211.08 418.03 213.87 431.39 217.68C438.15 219.61 444.75 221.61 451.23 223.79C452.43 224.19 453.63 224.59 454.83 225C470.16 230.2 551.09 261.81 555 263.07"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 186.28C337.05 186.3 357.28 185.93 377.19 187.42C381.38 187.74 385.47 188.18 389.48 188.72C404.39 190.75 417.92 194.22 431.31 198.88C438.07 201.24 444.68 203.71 451.16 206.37C452.36 206.86 453.56 207.35 454.76 207.85C470.09 214.2 551.09 252.65 555 254.19"
                      stroke="url(#paint23_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 165.14C337.03 165.16 357.22 164.68 377.12 166.47C381.31 166.85 385.4 167.37 389.4 168.01C404.3 170.42 417.82 174.56 431.22 180.08C437.98 182.86 444.6 185.81 451.09 188.94C452.3 189.52 453.5 190.1 454.69 190.69C463.37 194.94 551.09 243.49 555 245.3"
                      stroke="url(#paint24_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="1.8s;op42.end+0.1s"
                        dur="3s"
                        id="op42"
                        keyTimes="0;1"
                        path="M317 165.14C337.03 165.16 357.22 164.68 377.12 166.47C381.31 166.85 385.4 167.37 389.4 168.01C404.3 170.42 417.82 174.56 431.22 180.08C437.98 182.86 444.6 185.81 451.09 188.94C452.3 189.52 453.5 190.1 454.69 190.69C463.37 194.94 551.09 243.49 555 245.3"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 144C337 144.02 357.17 143.43 377.05 145.52C381.24 145.96 385.32 146.56 389.31 147.31C404.19 150.1 417.7 154.91 431.13 161.29C437.89 164.5 444.52 167.92 451.02 171.53C452.23 172.2 453.43 172.87 454.63 173.55C469.98 182.22 551.1 234.34 555 236.43"
                      stroke="url(#paint25_linear_3659_4639)"
                    ></path>
                    <path
                      d="M317 122.86C336.98 122.88 357.11 122.19 376.97 124.57C381.16 125.07 385.24 125.75 389.22 126.6C404.09 129.77 417.6 135.23 431.04 142.48C437.81 146.11 444.43 150 450.94 154.09C452.15 154.85 453.35 155.61 454.55 156.38C465.24 163.22 482.37 176.14 492.03 183.14C496.25 186.19 551.09 225.16 554.99 227.53"
                      stroke="url(#paint26_linear_3659_4639)"
                    ></path>
                    <circle
                      className="blue-circle"
                      fill="#2296DD"
                      opacity="1"
                      r="2"
                    >
                      <animateMotion
                        begin="1.1s;op44.end+0.1s"
                        dur="3s"
                        id="op44"
                        keyTimes="0;1"
                        path="M317 122.86C336.98 122.88 357.11 122.19 376.97 124.57C381.16 125.07 385.24 125.75 389.22 126.6C404.09 129.77 417.6 135.23 431.04 142.48C437.81 146.11 444.43 150 450.94 154.09C452.15 154.85 453.35 155.61 454.55 156.38C465.24 163.22 482.37 176.14 492.03 183.14C496.25 186.19 551.09 225.16 554.99 227.53"
                        to="0"
                      ></animateMotion>
                    </circle>
                    <path
                      d="M317 101.72C336.96 101.74 357.06 100.94 376.9 103.61C396.78 106.28 413.89 113.4 430.96 123.68C438.99 128.49 446.81 133.73 454.49 139.22C469.85 150.2 499.23 174.43 499.23 174.43L510.13 183.69L543.4 210.47C543.4 210.47 551.1 215.99 555 218.64"
                      stroke="url(#paint27_linear_3659_4639)"
                    ></path>
                  </g>
                </g>

                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_F659_4639"
                    x1="485"
                    x2="812.27"
                    y1="245.68"
                    y2="245.68"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_3659_4639"
                    x1="485.08"
                    x2="486"
                    y1="367.81"
                    y2="367.81"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear_3659_4639"
                    x1="485.12"
                    x2="486"
                    y1="263.84"
                    y2="263.84"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint3_linear_3659_4639"
                    x1="485.29"
                    x2="486"
                    y1="282.73"
                    y2="282.73"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint4_linear_3659_4639"
                    x1="485.29"
                    x2="486"
                    y1="342.95"
                    y2="342.95"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint5_linear_3659_4639"
                    x1="485.51"
                    x2="486"
                    y1="302.01"
                    y2="302.01"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint6_linear_3659_4639"
                    x1="485.51"
                    x2="486"
                    y1="323.67"
                    y2="323.67"
                  >
                    <stop
                      stopColor="#2296DD"
                      offset="0.26"
                      stopOpacity="0"
                    ></stop>
                    <stop
                      stopColor="#2296DD"
                      offset="0.46"
                      stopOpacity="0.7"
                    ></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.76"
                      stopOpacity="0.5"
                    ></stop>
                  </linearGradient>

                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint8_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="202.004"
                    y2="202.004"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint9_linear_3659_4639"
                    x1="-25.4325"
                    x2="801.356"
                    y1="439.617"
                    y2="396.286"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint10_linear_3659_4639"
                    x1="-26"
                    x2="801.923"
                    y1="212.959"
                    y2="212.959"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint11_linear_3659_4639"
                    x1="-26.0259"
                    x2="801.898"
                    y1="400.599"
                    y2="400.599"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint12_linear_3659_4639"
                    x1="-26.0176"
                    x2="801.897"
                    y1="222.734"
                    y2="222.734"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint13_linear_3659_4639"
                    x1="-26.0088"
                    x2="801.906"
                    y1="390.333"
                    y2="390.333"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint14_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="232.463"
                    y2="232.463"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint15_linear_3659_4639"
                    x1="-25.4329"
                    x2="801.356"
                    y1="409.068"
                    y2="365.738"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint16_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="242.193"
                    y2="242.193"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint17_linear_3659_4639"
                    x1="-25.4328"
                    x2="801.356"
                    y1="427.803"
                    y2="384.473"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint18_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="251.928"
                    y2="251.928"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint19_linear_3659_4639"
                    x1="-25.4328"
                    x2="801.356"
                    y1="446.538"
                    y2="403.208"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint20_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="261.663"
                    y2="261.663"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint21_linear_3659_4639"
                    x1="-25.4328"
                    x2="801.356"
                    y1="465.273"
                    y2="421.943"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint22_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="271.398"
                    y2="271.398"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint23_linear_3659_4639"
                    x1="-25.4328"
                    x2="801.356"
                    y1="484.008"
                    y2="440.678"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint24_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="281.133"
                    y2="281.133"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint25_linear_3659_4639"
                    x1="-25.4328"
                    x2="801.356"
                    y1="502.743"
                    y2="459.413"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint26_linear_3659_4639"
                    x1="-26"
                    x2="801.897"
                    y1="290.868"
                    y2="290.868"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint27_linear_3659_4639"
                    x1="-25.4328"
                    x2="801.356"
                    y1="521.478"
                    y2="478.148"
                  >
                    <stop stopColor="#EF4900" stopOpacity="0"></stop>
                    <stop stopColor="#EF4900" offset="0.2"></stop>
                    <stop stopColor="#FF9715" offset="0.37"></stop>
                    <stop stopColor="#2296DD" offset="0.61"></stop>
                    <stop stopColor="#2259E9" offset="0.81"></stop>
                    <stop
                      stopColor="#2259E9"
                      offset="0.84"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint28_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="301"
                    y2="301"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop stopColor="#fff" offset="0.51"></stop>
                    <stop
                      stopColor="#fff"
                      offset="0.51"
                      stopOpacity="0.3"
                    ></stop>
                    <stop stopColor="#fff" offset="1" stopOpacity="0.3"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint29_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="103"
                    y2="103"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint30_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="121"
                    y2="121"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint31_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="139"
                    y2="139"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint32_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="157"
                    y2="157"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint33_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="175"
                    y2="175"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint34_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="193"
                    y2="193"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint35_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="211"
                    y2="211"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint36_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="229"
                    y2="229"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint37_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="247"
                    y2="247"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint38_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="265"
                    y2="265"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint39_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="283"
                    y2="283"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint40_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="301"
                    y2="301"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint41_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="319"
                    y2="319"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint42_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="337"
                    y2="337"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint43_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="355"
                    y2="355"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint44_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="373"
                    y2="373"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint45_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="391"
                    y2="391"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint46_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="409"
                    y2="409"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint47_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="427"
                    y2="427"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint48_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="445"
                    y2="445"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint49_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="463"
                    y2="463"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint50_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="481"
                    y2="481"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint51_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="499"
                    y2="499"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint51_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="499"
                    y2="499"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint51_linear_3659_4639"
                    x1="20"
                    x2="266"
                    y1="499"
                    y2="499"
                  >
                    <stop stopColor="#FF730F" stopOpacity="0.3"></stop>
                    <stop stopColor="#FF730F" offset="0.51"></stop>
                    <stop
                      stopColor="#FF730F"
                      offset="0.51"
                      stopOpacity="0"
                    ></stop>
                    <stop stopColor="#FF730F" offset="1" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
