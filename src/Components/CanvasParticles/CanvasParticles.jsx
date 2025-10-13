// CanvasParticles.jsx
import React, { useEffect, useRef } from "react"; // React এবং Hooks import

const CanvasParticles = () => {
  const canvasRef = useRef(null); // Canvas element এর reference রাখতে useRef

  useEffect(() => {
    const canvas = canvasRef.current; // canvas element কে reference দিয়ে access করা
    const ctx = canvas.getContext("2d"); // 2D rendering context

    const parent = canvas.parentElement; // canvas এর parent element
    let width = parent.clientWidth; // parent এর width
    let height = parent.clientHeight; // parent এর height

    canvas.width = width; // canvas width সেট করা
    canvas.height = height; // canvas height সেট করা

    /*** Pointer State ***/
    const pointer = { x: -9999, y: -9999, active: false, moving: false }; 
    // pointer অবস্থা (mouse position ও active state)
    let moveTimeout; // pointer movement timeout

    // mouse বা touch এর position update করার ফাংশন
    const setPointerActive = (x, y) => {
      pointer.x = x; 
      pointer.y = y;
      pointer.active = true; // pointer active
      pointer.moving = true; // pointer moving
      clearTimeout(moveTimeout); // আগের timeout clear
      moveTimeout = setTimeout(() => (pointer.moving = false), 150); // 150ms পরে moving false
    };

    // pointer reset করার ফাংশন
    const resetPointer = () => {
      pointer.active = false; 
      pointer.moving = false;
      pointer.x = -9999; 
      pointer.y = -9999;
    };

    // mouse এবং touch events handle করা
    parent.addEventListener("mousemove", (e) => setPointerActive(e.offsetX, e.offsetY));
    parent.addEventListener("touchmove", (e) =>
      setPointerActive(
        e.touches[0].clientX - parent.offsetLeft, 
        e.touches[0].clientY - parent.offsetTop
      )
    );
    parent.addEventListener("mouseout", resetPointer); // mouse parent থেকে বের হলে reset
    parent.addEventListener("touchend", resetPointer); // touch শেষ হলে reset

    /*** Grid Config ***/
    const GRID_SIZE = 30; // grid এর size
    const cols = Math.ceil(width / GRID_SIZE); // column সংখ্যা
    const rows = Math.ceil(height / GRID_SIZE); // row সংখ্যা
    const gridCells = new Float32Array(cols * rows); // grid cell এর state
    const getIndex = (col, row) => row * cols + col; // 2D থেকে 1D index convert

    // animation function
    const animate = () => {
      ctx.clearRect(0, 0, width, height); // canvas clear

      // pointer active হলে grid glow
      if (pointer.active) {
        const col = Math.floor(pointer.x / GRID_SIZE); // pointer column
        const row = Math.floor(pointer.y / GRID_SIZE); // pointer row
        if (col >= 0 && col < cols && row >= 0 && row < rows) {
          // grid cell alpha increase
          gridCells[getIndex(col, row)] = Math.max(gridCells[getIndex(col, row)], 0.8);
        }
      }

      // grid draw করা
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = getIndex(col, row); // grid cell index
          const alpha = gridCells[idx] * 0.8; // transparency
          if (alpha > 0.01) {
            ctx.strokeStyle = `rgba(0,150,255,${alpha})`; // neon blue stroke
            ctx.lineWidth = 1.5; // line width
            ctx.strokeRect(col * GRID_SIZE, row * GRID_SIZE, GRID_SIZE, GRID_SIZE); // draw rect
          }
          gridCells[idx] *= 0.9; // alpha fade out
        }
      }

      requestAnimationFrame(animate); // next frame animation
    };
    animate(); // animation start

    // Cleanup function
    return () => {
      parent.removeEventListener("mousemove", setPointerActive);
      parent.removeEventListener("touchmove", setPointerActive);
      parent.removeEventListener("mouseout", resetPointer);
      parent.removeEventListener("touchend", resetPointer);
    };
  }, []); // empty dependency => run once

  return (
    <canvas
      ref={canvasRef} // canvas ref
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" // tailwind classes
    />
  );
};

export default CanvasParticles; // export component


