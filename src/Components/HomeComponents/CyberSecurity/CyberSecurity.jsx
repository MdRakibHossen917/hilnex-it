import React from "react";
import "./CyberSecurity.css";
import riskOne from "../../../assets/riskOne.png";
import riskTwo from "../../../assets/riskTwo.png";

const CyberSecurity = () => {
  return (
    <div
      className="ecr-container elementor-hidden-mobile bg-black   "
      data-id="3e71efd"
      data-element_type="widget"
      data-widget_type="html.default"
    >
      <div className="flex justify-content items-center w-9/12 mx-auto gap-6 ">
        <div>
          <h1 className="text-4xl font-bold text-white text-right mt-20">
            Driving Cyber <br />
            Risk Down to <br />
            Zero
          </h1>
          <p className="text-white text-right text-xl">
            We empower customers of virtually any size to
            <br />
            feel confident in their security posture, readiness, and long-term
            resilience. By combining our solutions with warranty offerings and
            helping you to demonstrate your insurability, we partner with each
            of our customers on their unique journey to end cyber risk.
          </p>
          <div className="flex justify-end">
            <button className="btn-outline px-6 py-2 mt-2">
              <span>Learn More</span>
            </button>
          </div>
        </div>

        <div className="elementor-widget-container p-10">
          <div>
            <h1 className="font-bold text-xl text-[#FF730F] rotate-270 origin-left tracking-[16px] translate-y-[600px]">
              TOTAL CYBER RISK
            </h1>
          </div>

          {/* Left Image - 200px from left */}
          <div className="left-image-container absolute bottom-0 left-0">
            <img
              src={riskOne}
              alt="Risk One"
              className="risk-image risk-one ml-220 mb-25"
              style={{ height: "450px", width: "200px", objectFit: "cover" }}
            />
          </div>
          {/* Left Image - 200px from left */}
          <div className="left-image-container absolute bottom-0 left-0 ">
            <img
              src={riskTwo}
              alt="Risk One"
              className="risk-image risk-one ml-300 mb-30"
              style={{ height: "400px", width: "150px", objectFit: "cover" }}
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-800 relative ml-190 translate-y-[340px]">
              END <br /> CYBER <br /> RISK
            </h2>
          </div>

          {/* The core animated SVG graphic */}
          <section className="ecr">
            <svg
              fill="none"
              height="610"
              viewBox="0 0 930 610"
              width="930"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3659_4639)">
                <path
                  d="M812.27 305.36L768.43 299.84L746.51 297.08C742.86 296.61 739.2 296.19 735.55 295.67L724.61 294.1C722.79 293.83 720.96 293.6 719.14 293.29L713.7 292.31L702.82 290.35L692.02 288.02L686.62 286.85C684.82 286.46 683.04 285.96 681.25 285.53L670.53 282.82C666.96 281.91 663.44 280.79 659.9 279.79L654.59 278.25C653.71 277.99 652.82 277.74 651.94 277.47L649.31 276.61L638.81 273.15C635.29 272.05 631.87 270.68 628.4 269.43C624.95 268.13 621.46 266.93 618.04 265.56L607.8 261.38C606.1 260.67 604.38 260.01 602.69 259.26L597.65 256.99L587.57 252.45L577.65 247.56L572.69 245.11C571.04 244.28 569.44 243.38 567.81 242.51L558.07 237.27C532.32 222.9 507.89 206.17 485 187.54L486.27 186C508.96 204.68 533.21 221.49 558.82 235.97L568.5 241.25C570.12 242.12 571.72 243.03 573.35 243.87L578.28 246.34L588.15 251.27L598.18 255.86L603.2 258.15C604.88 258.91 606.59 259.57 608.28 260.29L618.47 264.52C621.87 265.91 625.35 267.13 628.78 268.44C632.23 269.7 635.64 271.09 639.15 272.21L649.61 275.72L652.23 276.6C653.11 276.88 653.99 277.13 654.87 277.39L660.16 278.96C663.69 279.98 667.2 281.11 670.76 282.04L681.44 284.81C683.22 285.26 684.99 285.76 686.79 286.16L692.18 287.36L702.96 289.75L713.81 291.76L719.24 292.77C721.05 293.09 722.88 293.33 724.69 293.61L735.61 295.24C739.25 295.78 742.91 296.22 746.56 296.71L768.46 299.59L812.26 305.35L812.27 305.36Z"
                  fill="url(#paint0_linear_3659_4639)"
                ></path>
                <path
                  d="M812.27 318.95L769.4 323.58L747.96 325.9L737.24 327.06L726.54 328.37C719.4 329.15 712.32 330.38 705.21 331.42C703.43 331.67 701.66 331.99 699.9 332.32L694.6 333.28C691.07 333.95 687.52 334.51 684.01 335.26L673.47 337.5C671.72 337.88 669.95 338.22 668.21 338.64L662.98 339.91L652.51 342.46L642.12 345.31C614.42 352.92 587.39 362.86 561.24 374.69C557.94 376.11 554.73 377.7 551.5 379.26C548.28 380.83 545.03 382.36 541.82 383.97L532.28 388.96C530.69 389.8 529.09 390.61 527.52 391.47L522.84 394.12L513.48 399.42L504.29 405.02L499.7 407.82L495.2 410.77L486.2 416.67L485.08 415.01L494.15 409.14L498.68 406.21L503.31 403.42L512.57 397.86L522 392.59L526.72 389.96C528.3 389.1 529.91 388.3 531.51 387.47L541.11 382.52C544.33 380.92 547.6 379.41 550.84 377.85C554.09 376.3 557.32 374.73 560.64 373.32C586.93 361.61 614.08 351.81 641.87 344.34L652.29 341.54L662.79 339.05L668.04 337.81C669.79 337.4 671.56 337.07 673.32 336.69L683.88 334.51C687.4 333.78 690.96 333.23 694.49 332.58L699.8 331.64C701.57 331.32 703.34 331.01 705.12 330.77C712.24 329.77 719.33 328.58 726.49 327.84L737.2 326.59L747.92 325.49L769.37 323.3L812.27 318.91V318.95Z"
                  fill="url(#paint1_linear_3659_4639)"
                ></path>
                <path
                  d="M812.27 307.4L769.78 303.55L748.53 301.62L737.91 300.66L727.3 299.57C720.22 298.92 713.17 297.92 706.11 297.01C702.58 296.59 699.07 295.98 695.55 295.45C692.04 294.89 688.52 294.37 685.01 293.78L674.51 291.86L669.26 290.9L664.04 289.81L653.6 287.61C650.12 286.86 646.67 285.98 643.21 285.17C636.27 283.6 629.41 281.69 622.53 279.86C619.08 278.99 615.69 277.9 612.27 276.91C608.86 275.88 605.43 274.93 602.05 273.83L591.9 270.51C590.21 269.95 588.51 269.43 586.83 268.83L581.8 267.03L571.75 263.42L561.8 259.54L556.83 257.6L551.91 255.52L542.08 251.35L532.37 246.9L527.52 244.67L522.73 242.3L513.16 237.55L503.73 232.52L499.02 230L494.39 227.34L485.12 221.99L486.15 220.28L495.34 225.65L499.94 228.33L504.62 230.87L513.98 235.94L523.49 240.73L528.25 243.12L533.08 245.37L542.73 249.87L552.51 254.08L557.4 256.19L562.35 258.16L572.25 262.09L582.25 265.75L587.25 267.57C588.92 268.18 590.61 268.71 592.3 269.28L602.41 272.65C605.78 273.76 609.2 274.73 612.59 275.78C616 276.79 619.37 277.9 622.81 278.79C629.66 280.66 636.5 282.6 643.42 284.21C646.87 285.04 650.31 285.94 653.78 286.71L664.2 288.97L669.41 290.09L674.65 291.08L685.12 293.06C688.62 293.67 692.13 294.21 695.64 294.79C699.15 295.35 702.65 295.98 706.18 296.41C713.22 297.35 720.26 298.39 727.33 299.09L737.93 300.24L748.55 301.27L769.78 303.32L812.25 307.42L812.27 307.4Z"
                  fill="url(#paint2_linear_3659_4639)"
                ></path>
                <path
                  d="M812.27 309.52L770.8 307.28L750.06 306.16C743.15 305.79 736.24 305.43 729.33 304.98C701.69 303.28 674.1 300.6 646.68 296.66C619.26 292.76 591.97 287.79 565.01 281.36C551.51 278.23 538.13 274.61 524.82 270.74C511.52 266.85 498.36 262.47 485.29 257.82L485.98 255.94C498.97 260.66 512.07 265.1 525.32 269.06C538.57 273 551.91 276.69 565.36 279.9C592.23 286.48 619.45 291.6 646.82 295.67C674.19 299.77 701.74 302.61 729.36 304.48C736.26 304.97 743.17 305.37 750.08 305.79L770.81 307.04L812.27 309.53V309.52Z"
                  fill="url(#paint3_linear_3659_4639)"
                ></path>
                <path
                  d="M812.27 316.16L770.81 318.65L750.08 319.9C743.17 320.31 736.26 320.72 729.36 321.21C701.74 323.08 674.19 325.92 646.82 330.02C619.45 334.08 592.23 339.21 565.36 345.79C551.91 349 538.57 352.69 525.32 356.63C512.07 360.59 498.98 365.03 485.98 369.75L485.29 367.87C498.35 363.22 511.51 358.84 524.82 354.95C538.13 351.08 551.51 347.47 565.01 344.33C591.97 337.9 619.26 332.93 646.68 329.03C674.1 325.1 701.69 322.42 729.33 320.71C736.24 320.26 743.15 319.9 750.06 319.53L770.8 318.41L812.27 316.17V316.16Z"
                  fill="url(#paint4_linear_3659_4639)"
                ></path>
                <path
                  d="M812.27 311.68L730.45 310.28C703.18 309.75 675.91 308.91 648.65 307.62C621.4 306.33 594.16 304.7 566.96 302.51C539.76 300.36 512.6 297.67 485.51 294.32L485.76 292.34C512.79 295.85 539.91 298.7 567.08 301.02C594.25 303.38 621.46 305.17 648.69 306.63C675.92 308.09 703.18 309.09 730.45 309.79L812.26 311.69L812.27 311.68Z"
                  fill="url(#paint5_linear_3659_4639)"
                ></path>
                <path
                  d="M812.27 314L730.46 315.9C703.19 316.6 675.94 317.6 648.7 319.06C621.47 320.52 594.25 322.31 567.09 324.67C539.92 326.99 512.8 329.84 485.77 333.35L485.52 331.37C512.61 328.02 539.77 325.34 566.97 323.18C594.17 320.99 621.41 319.36 648.66 318.07C675.91 316.78 703.18 315.94 730.46 315.41L812.28 314.01L812.27 314Z"
                  fill="url(#paint6_linear_3659_4639)"
                ></path>
              </g>

              {/* Blue animated particles and their paths */}
              <g clipPath="url(#clip1_3659_4639)">
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

              {/* Orange animated particles and their paths (Total Cyber Risk) */}
              <mask
                height="420"
                id="mask0_3659_4639"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="246"
                x="20"
                y="91"
              >
                <rect
                  fill="url(#paint28_linear_3659_4639)"
                  height="420"
                  width="246"
                  x="20"
                  y="91"
                ></rect>
              </mask>
              <g mask="url(#mask0_3659_4639)">
                <g clipPath="url(#clip2_3659_4639)">
                  <path
                    d="M20,103L266,103"
                    stroke="url(#paint29_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="3s;op1.end+3s"
                    dur="3s"
                    id="op1"
                    keyTimes="0;1"
                    path="M20,103L266,103"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip3_3659_4639)">
                  <path
                    d="M20,121L266,121"
                    stroke="url(#paint30_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="4s;op2.end+4s"
                    dur="3s"
                    id="op2"
                    keyTimes="0;1"
                    path="M20,121L266,121"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip4_3659_4639)">
                  <path
                    d="M20,139L266,139"
                    stroke="url(#paint31_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="2.5s;op3.end+3s"
                    dur="3s"
                    id="op3"
                    keyTimes="0;1"
                    path="M20,139L266,139"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip5_3659_4639)">
                  <path
                    d="M20,157L266,157"
                    stroke="url(#paint32_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="3.5s;op4.end+3.5s"
                    dur="3s"
                    id="op4"
                    keyTimes="0;1"
                    path="M20,157L266,157"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip6_3659_4639)">
                  <path
                    d="M20,175L266,175"
                    stroke="url(#paint33_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="2s;op5.end+3s"
                    dur="3s"
                    id="op5"
                    keyTimes="0;1"
                    path="M20,175L266,175"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip7_3659_4639)">
                  <path
                    d="M20,193L266,193"
                    stroke="url(#paint34_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="2.5s;op6.end+2.5s"
                    dur="3s"
                    id="op6"
                    keyTimes="0;1"
                    path="M20,193L266,193"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip8_3659_4639)">
                  <path
                    d="M20,211L266,211"
                    stroke="url(#paint35_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="1.3s;op7.end+3s"
                    dur="3s"
                    id="op7"
                    keyTimes="0;1"
                    path="M20,211L266,211"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip9_3659_4639)">
                  <path
                    d="M20,229L266,229"
                    stroke="url(#paint36_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="2.3s;op8.end+3s"
                    dur="3s"
                    id="op8"
                    keyTimes="0;1"
                    path="M20,229L266,229"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip10_3659_4639)">
                  <path
                    d="M20,247L266,247"
                    stroke="url(#paint37_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="3.3s;op9.end+3s"
                    dur="3s"
                    id="op9"
                    keyTimes="0;1"
                    path="M20,247L266,247"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip11_3659_4639)">
                  <path
                    d="M20,265L266,265"
                    stroke="url(#paint38_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="4.3s;op10.end+3s"
                    dur="3s"
                    id="op10"
                    keyTimes="0;1"
                    path="M20,265L266,265"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip12_3659_4639)">
                  <path
                    d="M20,283L266,283"
                    stroke="url(#paint39_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="5.3s;op11.end+3s"
                    dur="3s"
                    id="op11"
                    keyTimes="0;1"
                    path="M20,283L266,283"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip13_3659_4639)">
                  <path
                    d="M20,301L266,301"
                    stroke="url(#paint40_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="3.3s;op12.end+3s"
                    dur="3s"
                    id="op12"
                    keyTimes="0;1"
                    path="M20,301L266,301"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip14_3659_4639)">
                  <path
                    d="M20,319L266,319"
                    stroke="url(#paint41_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="1.3s;op13.end+3s"
                    dur="3s"
                    id="op13"
                    keyTimes="0;1"
                    path="M20,319L266,319"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip15_3659_4639)">
                  <path
                    d="M20,337L266,337"
                    stroke="url(#paint42_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="4.3s;op14.end+3s"
                    dur="3s"
                    id="op14"
                    keyTimes="0;1"
                    path="M20,337L266,337"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip16_3659_4639)">
                  <path
                    d="M20,355L266,355"
                    stroke="url(#paint43_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="5.3s;op15.end+3s"
                    dur="3s"
                    id="op15"
                    keyTimes="0;1"
                    path="M20,355L266,355"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip17_3659_4639)">
                  <path
                    d="M20,373L266,373"
                    stroke="url(#paint44_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="2.3s;op16.end+3s"
                    dur="3s"
                    id="op16"
                    keyTimes="0;1"
                    path="M20,373L266,373"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip18_3659_4639)">
                  <path
                    d="M20,391L266,391"
                    stroke="url(#paint45_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="1.3s;op17.end+3s"
                    dur="3s"
                    id="op17"
                    keyTimes="0;1"
                    path="M20,391L266,391"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip19_3659_4639)">
                  <path
                    d="M20,409L266,409"
                    stroke="url(#paint46_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="1.3s;op18.end+3s"
                    dur="3s"
                    id="op18"
                    keyTimes="0;1"
                    path="M20,409L266,409"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip20_3659_4639)">
                  <path
                    d="M20,427L266,427"
                    stroke="url(#paint47_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="3.3s;op19.end+3s"
                    dur="3s"
                    id="op19"
                    keyTimes="0;1"
                    path="M20,427L266,427"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip21_3659_4639)">
                  <path
                    d="M20,445L266,445"
                    stroke="url(#paint48_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="4.3s;op20.end+3s"
                    dur="3s"
                    id="op20"
                    keyTimes="0;1"
                    path="M20,445L266,445"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip22_3659_4639)">
                  <path
                    d="M20,463L266,463"
                    stroke="url(#paint49_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="5.3s;op21.end+3s"
                    dur="3s"
                    id="op21"
                    keyTimes="0;1"
                    path="M20,463L266,463"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip23_3659_4639)">
                  <path
                    d="M20,481L266,481"
                    stroke="url(#paint50_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="2.3s;op22.end+3s"
                    dur="3s"
                    id="op22"
                    keyTimes="0;1"
                    path="M20,481L266,481"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
                <g clipPath="url(#clip24_3659_4639)">
                  <path
                    d="M20,499L266,499"
                    stroke="url(#paint51_linear_3659_4639)"
                  ></path>
                </g>
                <circle
                  className="orange-circle"
                  fill="#FF730F"
                  opacity="1"
                  r="2"
                >
                  <animateMotion
                    begin="3.3s;op23.end+3s"
                    dur="3s"
                    id="op23"
                    keyTimes="0;1"
                    path="M20,499L266,499"
                    to="0"
                    from="1"
                  ></animateMotion>
                </circle>
              </g>

              {/* Image assets for text and boxes - paths need to be valid */}
              {/* <image height="445" width="20" x="0" xlinkHref="/wp-content/uploads/2024/11/ecr-0.png" y="84"></image> */}
              {/* <image height="620" width="230" x="235" xlinkHref="/wp-content/uploads/2024/11/ecr-1.png" y="4"></image>
            {/* <image height="464" width="230" x="500" xlinkHref="/wp-content/uploads/2024/11/ecr-2.png" y="80"></image>
            <image height="110" width="151" x="758" xlinkHref="/wp-content/uploads/2024/11/ecr-3.png" y="257"></image> */}

              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_3659_4639"
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
                  <stop stopColor="#fff" offset="0.51" stopOpacity="0.3"></stop>
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
              </defs>
            </svg>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
