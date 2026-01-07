import React, { useRef, useEffect } from "react";
import p5 from "p5";

const CellEffect = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      const CELL_SIZE = 40;
      const COLOR_R = 79;
      const COLOR_G = 38;
      const COLOR_B = 233;
      const STARTING_ALPHA = 255;
      const PROB_OF_NEIGHBOR = 0.5;
      const AMT_FADE_PER_FRAME = 5;
      const STROKE_WEIGHT = 1;

      let colorWithAlpha;
      let numRows, numCols;
      let currentRow = -1;
      let currentCol = -1;
      let allNeighbors = [];
      let canvasWidth, canvasHeight;

      p.setup = () => {
        const container = sketchRef.current;
        canvasWidth = container.clientWidth;
        canvasHeight = container.clientHeight;

        p.createCanvas(canvasWidth, canvasHeight);

        colorWithAlpha = p.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
        p.noFill();
        p.stroke(colorWithAlpha);
        p.strokeWeight(STROKE_WEIGHT);

        numRows = Math.ceil(canvasHeight / CELL_SIZE);
        numCols = Math.ceil(canvasWidth / CELL_SIZE);

        p.clear();
      };

      p.draw = () => {
        p.clear();

        const mouseX = p.mouseX;
        const mouseY = p.mouseY;

        const row = Math.floor(mouseY / CELL_SIZE);
        const col = Math.floor(mouseX / CELL_SIZE);

        if (row !== currentRow || col !== currentCol) {
          currentRow = row;
          currentCol = col;
          allNeighbors.push(...getRandomNeighbors(row, col));
        }

        if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
          let x = col * CELL_SIZE;
          let y = row * CELL_SIZE;
          p.stroke(colorWithAlpha);
          p.rect(x, y, CELL_SIZE, CELL_SIZE);
        }

        for (let neighbor of allNeighbors) {
          const neighborX = neighbor.col * CELL_SIZE;
          const neighborY = neighbor.row * CELL_SIZE;

          neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
          p.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
          p.rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
        }

        allNeighbors = allNeighbors.filter((n) => n.opacity > 0);
      };

      function getRandomNeighbors(row, col) {
        const neighbors = [];
        for (let dRow = -1; dRow <= 1; dRow++) {
          for (let dCol = -1; dCol <= 1; dCol++) {
            if (dRow === 0 && dCol === 0) continue;

            const neighborRow = row + dRow;
            const neighborCol = col + dCol;

            const isInBounds =
              neighborRow >= 0 &&
              neighborRow < numRows &&
              neighborCol >= 0 &&
              neighborCol < numCols;

            if (isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
              neighbors.push({
                row: neighborRow,
                col: neighborCol,
                opacity: STARTING_ALPHA,
              });
            }
          }
        }
        return neighbors;
      }

      const handleResize = () => {
        const container = sketchRef.current;
        if (container) {
          canvasWidth = container.clientWidth;
          canvasHeight = container.clientHeight;
          p.resizeCanvas(canvasWidth, canvasHeight);
          numRows = Math.ceil(canvasHeight / CELL_SIZE);
          numCols = Math.ceil(canvasWidth / CELL_SIZE);
        }
      };

      const resizeObserver = new ResizeObserver(handleResize);
      if (sketchRef.current) {
        resizeObserver.observe(sketchRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      className="w-full h-full absolute inset-0 pointer-events-none bg-transparent overflow-hidden"
    ></div>
  );
};

export default CellEffect;
