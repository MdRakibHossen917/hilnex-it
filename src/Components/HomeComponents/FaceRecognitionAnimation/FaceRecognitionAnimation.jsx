import React from "react";
import "./FaceRecognitionAnimation.css";
import faceImage from "../../../assets/face.jpg";
import CellEffect from "../../CellEffect/CellEffect";
import IdCardMobile from "../../../assets/Brand/IdCard.png";
import IdCardLarge from "../../../assets/Brand/LiveDetectionTwo.png";
import LiveDetection from "../../../assets/Brand/LiveDetectionOne.png";

const FaceRecognitionAnimation = () => {
  const totalLines = 18;
  const imageHeight = 427;
  const startY = 7;
  const gap = imageHeight / totalLines;

  const cardWidth = 160;
  const cardHeight = 438;
  const cardX = 120;
  const cardY = imageHeight / 2 - cardHeight / 2;

  const orangeStartX = -55;
  const orangeEndX = cardX + 100;

  const imgSrc =
    faceImage ||
    "https://via.placeholder.com/550x530/000000/FFFFFF?text=Face+Image";

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(90deg, #1a1a1a 1px, transparent 1px),
      linear-gradient(#1a1a1a 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  };

  const words = ["RECOGNITION"];

  // SVG content as string to avoid React animation issues
  const svgContent = `
    <defs>
      <linearGradient id="orangeLine" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#f46913" stop-opacity="0.2" />
        <stop offset="20%" stop-color="#FF730F" stop-opacity="1" />
        <stop offset="100%" stop-color="#FF730F" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="blueLine" x1="100%" y1="0" x2="0%" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#2296DD" stop-opacity="1" />
        <stop offset="100%" stop-color="#2296DD" stop-opacity="0" />
      </linearGradient>
    </defs>

    <g>
      ${Array.from({ length: totalLines }, (_, i) => {
        const y = startY + i * gap + 4;
        const id = `op${i + 1}`;
        const delay = 3 + i * 0.3;
        
        return `
          <path d="M${orangeStartX},${y}L${orangeEndX},${y}" stroke="url(#orangeLine)" stroke-width="1" fill="none" />
          <circle fill="#FF730F" r="2" opacity="0">
            <animate attributeName="opacity" from="1" to="1" dur="0s" begin="${delay}s" fill="freeze" />
            <animateMotion begin="${delay}s;${id}.end+0.1s" dur="1.5s" repeatCount="indefinite" id="${id}" path="M${orangeStartX},${y}L${orangeEndX},${y}" />
            <animate attributeName="opacity" from="0" to="0" dur="0s" begin="${id}.end" fill="freeze" />
          </circle>
        `;
      }).join('')}
    </g>

    <g transform="translate(-50, -89)">
      <path d="M317 503.37C337.36 503.39 358.09 504.6 378.28 501.71C382.47 501.11 386.63 500.34 390.75 499.34C405.87 495.69 419.65 488.84 432.6 480.88C439.35 476.72 445.86 472.24 452.21 467.75C453.4 466.9 454.59 466.06 455.78 465.2C471.02 454.21 551.07 390.13 555 387.49" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="2s;op26.end+0.1s" dur="3s" id="op26" keyTimes="0;1" path="M317 503.37C337.36 503.39 358.09 504.6 378.28 501.71C382.47 501.11 386.63 500.34 390.75 499.34C405.87 495.69 419.65 488.84 432.6 480.88C439.35 476.72 445.86 472.24 452.21 467.75C453.4 466.9 454.59 466.06 455.78 465.2C471.02 454.21 551.07 390.13 555 387.49" to="0"></animateMotion>
      </circle>
      <path d="M317 482.23C337.34 482.25 358.04 483.35 378.2 480.76C382.39 480.22 386.54 479.53 390.66 478.64C405.77 475.37 419.53 469.21 432.51 462.09C439.26 458.36 445.78 454.35 452.14 450.33C453.33 449.57 454.52 448.81 455.71 448.05C470.95 438.22 551.07 380.97 555 378.61" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 461.09C337.32 461.11 357.98 462.11 378.13 459.8C382.32 459.32 386.47 458.71 390.58 457.92C405.67 455.03 419.44 449.58 432.43 443.28C439.19 440 445.71 436.44 452.08 432.9C453.27 432.23 454.46 431.56 455.65 430.89C470.9 422.21 551.08 371.81 555.01 369.72" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="2.4s;op28.end+0.1s" dur="3s" id="op28" keyTimes="0;1" path="M317 461.09C337.32 461.11 357.98 462.11 378.13 459.8C382.32 459.32 386.47 458.71 390.58 457.92C405.67 455.03 419.44 449.58 432.43 443.28C439.19 440 445.71 436.44 452.08 432.9C453.27 432.23 454.46 431.56 455.65 430.89C470.9 422.21 551.08 371.81 555.01 369.72" to="0"></animateMotion>
      </circle>
      <path d="M317 439.95C337.3 439.97 357.93 440.86 378.06 438.85C382.25 438.43 386.4 437.9 390.5 437.22C405.58 434.71 419.33 429.96 432.35 424.48C439.11 421.64 445.63 418.53 452.01 415.47C453.21 414.89 454.4 414.31 455.58 413.73C470.83 406.21 551.08 362.64 555 360.83" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 418.81C337.28 418.83 357.88 419.62 377.99 417.9C382.18 417.55 386.32 417.1 390.41 416.51C405.48 414.38 419.21 410.32 432.25 405.68C439.01 403.28 445.54 400.63 451.93 398.05C453.13 397.56 454.32 397.07 455.5 396.58C470.76 390.21 551.07 353.48 554.99 351.95" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="2s;op30.end+0.1s" dur="3s" id="op30" keyTimes="0;1" path="M317 418.81C337.28 418.83 357.88 419.62 377.99 417.9C382.18 417.55 386.32 417.1 390.41 416.51C405.48 414.38 419.21 410.32 432.25 405.68C439.01 403.28 445.54 400.63 451.93 398.05C453.13 397.56 454.32 397.07 455.5 396.58C470.76 390.21 551.07 353.48 554.99 351.95" to="0"></animateMotion>
      </circle>
      <path d="M317 397.67C337.26 397.69 357.82 398.37 377.91 396.94C382.1 396.65 386.24 396.28 390.32 395.79C405.37 394.04 418.98 390.67 432.16 386.87C438.92 384.9 445.46 382.73 451.85 380.61C453.05 380.21 454.24 379.81 455.43 379.4C470.7 374.19 551.07 344.29 554.99 343.04" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 376.53C337.24 376.55 357.77 377.13 377.84 375.99C382.03 375.76 386.16 375.47 390.24 375.09C405.28 373.71 418.98 371.04 432.08 368.08C438.84 366.55 445.39 364.84 451.79 363.19C452.99 362.88 454.18 362.57 455.37 362.25C470.64 358.2 551.08 335.13 555 334.16" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="1.3s;op32.end+0.1s" dur="3s" id="op32" keyTimes="0;1" path="M317 376.53C337.24 376.55 357.77 377.13 377.84 375.99C382.03 375.76 386.16 375.47 390.24 375.09C405.28 373.71 418.98 371.04 432.08 368.08C438.84 366.55 445.39 364.84 451.79 363.19C452.99 362.88 454.18 362.57 455.37 362.25C470.64 358.2 551.08 335.13 555 334.16" to="0"></animateMotion>
      </circle>
      <path d="M317 355.39C337.21 355.41 357.71 355.88 377.77 355.04C381.96 354.87 386.09 354.66 390.16 354.38C405.18 353.38 418.87 351.4 432 349.28C438.76 348.19 445.32 346.94 451.73 345.77C452.93 345.55 454.12 345.33 455.31 345.1C470.59 342.2 551.09 325.97 555.01 325.28" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 334.26C337.19 334.28 357.66 334.64 377.7 334.1C381.89 333.99 386.01 333.86 390.07 333.69C405.08 333.07 418.74 331.78 431.91 330.49C438.67 329.83 445.23 329.05 451.65 328.35C452.85 328.22 454.04 328.08 455.23 327.95C470.52 326.21 551.08 316.81 554.99 316.4" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="2.9s;op34.end+0.1s" dur="3s" id="op34" keyTimes="0;1" path="M317 334.26C337.19 334.28 357.66 334.64 377.7 334.1C381.89 333.99 386.01 333.86 390.07 333.69C405.08 333.07 418.74 331.78 431.91 330.49C438.67 329.83 445.23 329.05 451.65 328.35C452.85 328.22 454.04 328.08 455.23 327.95C470.52 326.21 551.08 316.81 554.99 316.4" to="0"></animateMotion>
      </circle>
      <path d="M317 313.12C337.17 313.14 357.6 313.4 377.63 313.14C381.82 313.09 385.94 313.05 389.99 312.97C404.99 312.73 418.63 312.12 431.83 311.68C438.59 311.46 445.16 311.14 451.59 310.92C452.79 310.88 453.99 310.83 455.18 310.79C470.47 310.21 551.1 307.65 555.01 307.51" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 291.98C337.15 292 357.55 292.15 377.55 292.19C381.74 292.2 385.86 292.24 389.9 292.27C404.88 292.41 418.51 292.48 431.73 292.89C438.49 293.1 445.06 293.25 451.5 293.5C452.7 293.55 453.9 293.59 455.09 293.64C470.39 294.21 551.08 298.49 554.99 298.63" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="1.7s;op36.end+0.1s" dur="3s" id="op36" keyTimes="0;1" path="M317 291.98C337.15 292 357.55 292.15 377.55 292.19C381.74 292.2 385.86 292.24 389.9 292.27C404.88 292.41 418.51 292.48 431.73 292.89C438.49 293.1 445.06 293.25 451.5 293.5C452.7 293.55 453.9 293.59 455.09 293.64C470.39 294.21 551.08 298.49 554.99 298.63" to="0"></animateMotion>
      </circle>
      <path d="M317 270.84C337.13 270.86 357.49 270.91 377.48 271.24C381.67 271.31 385.78 271.43 389.82 271.56C404.79 272.08 418.39 272.83 431.65 274.09C438.41 274.73 444.99 275.34 451.44 276.08C452.64 276.22 453.84 276.35 455.03 276.49C470.34 278.22 551.09 289.33 555 289.75" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 249.7C337.11 249.72 357.44 249.66 377.41 250.28C381.6 250.42 385.71 250.61 389.74 250.84C404.69 251.74 418.28 253.17 431.57 255.28C438.33 256.35 444.92 257.43 451.38 258.64C452.58 258.87 453.78 259.09 454.97 259.32C470.28 262.21 551.09 280.15 555.01 280.85" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="1.3s;op38.end+0.1s" dur="3s" id="op38" keyTimes="0;1" path="M317 249.7C337.11 249.72 357.44 249.66 377.41 250.28C381.6 250.42 385.71 250.61 389.74 250.84C404.69 251.74 418.28 253.17 431.57 255.28C438.33 256.35 444.92 257.43 451.38 258.64C452.58 258.87 453.78 259.09 454.97 259.32C470.28 262.21 551.09 280.15 555.01 280.85" to="0"></animateMotion>
      </circle>
      <path d="M317 228.56C337.09 228.58 357.39 228.42 377.34 229.33C381.53 229.53 385.63 229.8 389.65 230.14C404.59 231.41 418.16 233.53 431.48 236.48C438.24 237.98 444.83 239.53 451.3 241.22C452.5 241.53 453.7 241.85 454.9 242.16C470.22 246.2 551.09 270.98 555 271.96" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 207.42C337.07 207.44 357.33 207.17 377.26 208.38C381.45 208.64 385.55 209 389.56 209.43C404.49 211.08 418.03 213.87 431.39 217.68C438.15 219.61 444.75 221.61 451.23 223.79C452.43 224.19 453.63 224.59 454.83 225C470.16 230.2 551.09 261.81 555 263.07" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="1.1s;op40.end+0.1s" dur="3s" id="op40" keyTimes="0;1" path="M317 207.42C337.07 207.44 357.33 207.17 377.26 208.38C381.45 208.64 385.55 209 389.56 209.43C404.49 211.08 418.03 213.87 431.39 217.68C438.15 219.61 444.75 221.61 451.23 223.79C452.43 224.19 453.63 224.59 454.83 225C470.16 230.2 551.09 261.81 555 263.07" to="0"></animateMotion>
      </circle>
      <path d="M317 186.28C337.05 186.3 357.28 185.93 377.19 187.42C381.38 187.74 385.47 188.18 389.48 188.72C404.39 190.75 417.92 194.22 431.31 198.88C438.07 201.24 444.68 203.71 451.16 206.37C452.36 206.86 453.56 207.35 454.76 207.85C470.09 214.2 551.09 252.65 555 254.19" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 165.14C337.03 165.16 357.22 164.68 377.12 166.47C381.31 166.85 385.4 167.37 389.4 168.01C404.3 170.42 417.82 174.56 431.22 180.08C437.98 182.86 444.6 185.81 451.09 188.94C452.3 189.52 453.5 190.1 454.69 190.69C463.37 194.94 551.09 243.49 555 245.3" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="1.8s;op42.end+0.1s" dur="3s" id="op42" keyTimes="0;1" path="M317 165.14C337.03 165.16 357.22 164.68 377.12 166.47C381.31 166.85 385.4 167.37 389.4 168.01C404.3 170.42 417.82 174.56 431.22 180.08C437.98 182.86 444.6 185.81 451.09 188.94C452.3 189.52 453.5 190.1 454.69 190.69C463.37 194.94 551.09 243.49 555 245.3" to="0"></animateMotion>
      </circle>
      <path d="M317 144C337 144.02 357.17 143.43 377.05 145.52C381.24 145.96 385.32 146.56 389.31 147.31C404.19 150.1 417.7 154.91 431.13 161.29C437.89 164.5 444.52 167.92 451.02 171.53C452.23 172.2 453.43 172.87 454.63 173.55C469.98 182.22 551.1 234.34 555 236.43" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <path d="M317 122.86C336.98 122.88 357.11 122.19 376.97 124.57C381.16 125.07 385.24 125.75 389.22 126.6C404.09 129.77 417.6 135.23 431.04 142.48C437.81 146.11 444.43 150 450.94 154.09C452.15 154.85 453.35 155.61 454.55 156.38C465.24 163.22 482.37 176.14 492.03 183.14C496.25 186.19 551.09 225.16 554.99 227.53" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
      <circle class="blue-circle" fill="#2296DD" opacity="1" r="2">
        <animateMotion begin="1.1s;op44.end+0.1s" dur="3s" id="op44" keyTimes="0;1" path="M317 122.86C336.98 122.88 357.11 122.19 376.97 124.57C381.16 125.07 385.24 125.75 389.22 126.6C404.09 129.77 417.6 135.23 431.04 142.48C437.81 146.11 444.43 150 450.94 154.09C452.15 154.85 453.35 155.61 454.55 156.38C465.24 163.22 482.37 176.14 492.03 183.14C496.25 186.19 551.09 225.16 554.99 227.53" to="0"></animateMotion>
      </circle>
      <path d="M317 101.72C336.96 101.74 357.06 100.94 376.9 103.61C396.78 106.28 413.89 113.4 430.96 123.68C438.99 128.49 446.81 133.73 454.49 139.22C469.85 150.2 499.23 174.43 499.23 174.43L510.13 183.69L543.4 210.47C543.4 210.47 551.1 215.99 555 218.64" stroke="#2296DD" stroke-width="1.5" fill="none"></path>
    </g>

    <foreignObject x="${cardX + 10}" y="${cardY}" width="${cardWidth + 100}" height="${cardHeight}" style="overflow: visible">
      <div xmlns="http://www.w3.org/1999/xhtml" class="flex flex-col items-center justify-center text-xs text-white -mb-1 relative" style="overflow: hidden; transform: rotate(0deg); transform-origin: top left; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <img class="" src="${LiveDetection}" alt="LiveDetection.jpg" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
      </div>
    </foreignObject>
  `;

  return (
    <div className="block lg:hidden relative w-full bg-black flex flex-col items-center justify-center overflow-x-hidden py-10">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={gridBackgroundStyle}
      >
        <CellEffect />
      </div>

      <div className="relative z-20 w-full text-center mt-0 lg:mb-12">
        <div className="w-full max-w-full mx-auto">
          <div className="w-full text-white text-xl uppercase border-t border-b border-white/20 p-3 bg-gradient-to-r from-black via-[#181818] to-black mb-5">
            <h1 className="w-full text-xl iceberg-regular tracking-widest uppercase animated-heading text-center">
              <span className="text-[#e7e5e5] tracking-widest">Face </span>
              {words.map((word, i) => (
                <span key={i} className="word" data-text={word}>
                  {word}{" "}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="w-full text-white/95 text-sm sm:text-base md:text-lg text-center mt-6 mb-4 px-5 sm:px-8">
          <p>
            Our AI-powered system identifies and verifies faces instantly.
            <br className="hidden sm:block" />
            No setup required — just scan or upload to see results in real time.
          </p>
        </div>
      </div>

      <div className="w-full md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 flex flex-col md:flex-row items-center justify-center md:ml-25">
        <div className="flex-1 flex flex-col items-center md:items-end max-w-[300px] md:max-w-[400px] mx-auto z-20">
          <img
            src={imgSrc}
            alt="face"
            className="w-full h-auto max-w-[280px] md:max-w-[310px] xl:max-w-[490px]  "
          />

          <div className="text-white uppercase w-full text-center ml-2.5 block md:hidden">
            <h1 className="font-extrabold w-full tracking-[0.68em] text-[#ff8402]">
              Face Detection
            </h1>
          </div>
        </div>

        <div className="flex-1 flex justify-center max-w-[600px] mx-auto my-4 md:my-0 rotate-90 md:rotate-0 z-20">
          <div className="w-full max-w-[500px] md:max-w-[600px]">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <svg
                    class="w-full h-auto"
                    viewBox="0 0 450 ${imageHeight}"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    ${svgContent}
                  </svg>
                `,
              }}
            />
          </div>
        </div>

        <div className="flex justify-center items-center w-full z-20 md:hidden -mt-4">
          <img
            src={IdCardMobile}
            alt="ID Card Mobile"
            className="w-full max-w-[220px] h-auto object-contain"
          />
        </div>

        <div className="flex-1 flex justify-center md:justify-start w-[280px] z-20 hidden md:flex h-[140px] -ml-2">
          <img
            src={IdCardLarge}
            alt="ID Card Large"
            className="w-auto h-[240px] object-contain -mt-13"
          />
        </div>
      </div>
    </div>
  );
};

export default FaceRecognitionAnimation;