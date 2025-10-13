(function () {
  /*** Canvas Setup ***/
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  /*** Pointer State ***/
  const pointer = { x: -9999, y: -9999, active: false, moving: false };

  /*** Grid Configuration ***/
  const GRID_SIZE = 40;
  let cols = Math.ceil(width / GRID_SIZE);
  let rows = Math.ceil(height / GRID_SIZE);
  const gridCells = new Float32Array(cols * rows);
  const getIndex = (col, row) => row * cols + col;

  /*** Particle Configuration ***/
  const PARTICLE_COUNT = 400;
  const PARTICLE_COLORS = ['0,255,255', '255,0,255', '255,255,0', '0,150,255', '255,100,200'];
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.5 + 0.5;

    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: Math.random() * 0.5 + 0.3,
      length: Math.random() * 15 + 10,
      color: color,
    });
  }

  /*** Handle Window Resize ***/
  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    cols = Math.ceil(width / GRID_SIZE);
    rows = Math.ceil(height / GRID_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);

  /*** Animation Loop ***/
  function animate() {
    ctx.clearRect(0, 0, width, height);

    updateGridGlow();
    drawGrid();
    updateParticles();

    requestAnimationFrame(animate);
  }

  /*** Grid Glow Logic ***/
  function updateGridGlow() {
    if (!pointer.active) return;

    const col = Math.floor(pointer.x / GRID_SIZE);
    const row = Math.floor(pointer.y / GRID_SIZE);

    if (pointer.moving) {
      const offsets = [
        [0, 0], [0, -1], [0, 1], [0, -2], [0, 2],
        [-1, 0], [1, 0], [-1, 1], [1, -1],
      ];

      offsets.forEach(([dc, dr]) => {
        const c = col + dc;
        const r = row + dr;
        if (c >= 0 && c < cols && r >= 0 && r < rows && Math.random() < 0.6) {
          gridCells[getIndex(c, r)] = Math.max(gridCells[getIndex(c, r)], 0.7);
        }
      });
    } else if (col >= 0 && col < cols && row >= 0 && row < rows) {
      gridCells[getIndex(col, row)] = Math.max(gridCells[getIndex(col, row)], 0.8);
    }
  }

  function drawGrid() {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const index = getIndex(col, row);
        const alpha = gridCells[index] * 0.8; // No pulse
        if (alpha > 0.01) {
          ctx.strokeStyle = `rgba(0,150,255,${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(col * GRID_SIZE, row * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
        gridCells[index] *= 0.9; // fade out
      }
    }
  }

  /*** Particle Logic ***/
  function updateParticles() {
    particles.forEach((p) => {
      let { x, y, vx, vy, alpha, color } = p;

      const dx = pointer.x - x;
      const dy = pointer.y - y;
      const dist = Math.hypot(dx, dy);

      if (dist < 100) {
        const force = (1 - dist / 100) * 0.3;
        vx += (dx / dist) * force;
        vy += (dy / dist) * force;
        alpha += 0.5 * (1 - dist / 100);
      }

      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + vx * 5, y + vy * 5);
      ctx.stroke();

      // Update position with wrapping
      p.x = (x + vx + width) % width;
      p.y = (y + vy + height) % height;

      // Apply velocity damping and randomness
      p.vx = vx * 0.98 + (Math.random() * 0.2 - 0.1) * 0.1;
      p.vy = vy * 0.98 + (Math.random() * 0.2 - 0.1) * 0.1;
      p.alpha = alpha;
    });
  }

  /*** Pointer Event Handling ***/
  let moveTimeout;
  function setPointerActive(x, y) {
    pointer.x = x;
    pointer.y = y;
    pointer.active = true;
    pointer.moving = true;
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(() => {
      pointer.moving = false;
    }, 150);
  }

  window.addEventListener('mousemove', e => setPointerActive(e.clientX, e.clientY));
  window.addEventListener('touchstart', e => setPointerActive(e.touches[0].clientX, e.touches[0].clientY));
  window.addEventListener('touchmove', e => setPointerActive(e.touches[0].clientX, e.touches[0].clientY));

  function resetPointer() {
    pointer.active = false;
    pointer.moving = false;
    pointer.x = -9999;
    pointer.y = -9999;
  }

  window.addEventListener('mouseout', resetPointer);
  window.addEventListener('touchend', resetPointer);

  /*** Start Animation ***/
  animate();
})();
