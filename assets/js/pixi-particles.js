(() => {
  const container = document.getElementById("pixi-particles");
  if (!container || !window.PIXI) return;

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 58 : 108;
  const maxDistance = isMobile ? 105 : 150;
  const particles = [];
  const colors = [
    0x667eea,
    0x8b5cf6,
    0xf093fb,
    0x22d3ee,
    0x2dd4bf,
    0xa78bfa,
    0xfb7185,
    0xfbbf24,
    0xffffff,
  ];
  const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    active: false,
  };

  const getSafePosition = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cardLeft = width * 0.31;
    const cardRight = width * 0.69;
    const cardTop = height * 0.28;
    const cardBottom = height * 0.78;
    let x = Math.random() * width;
    let y = Math.random() * height;

    if (x > cardLeft && x < cardRight && y > cardTop && y < cardBottom) {
      y = Math.random() > 0.5 ? Math.random() * cardTop : cardBottom + Math.random() * (height - cardBottom);
    }

    return { x, y };
  };

  const init = async () => {
    const app = new PIXI.Application();

    await app.init({
      resizeTo: window,
      backgroundAlpha: 0,
      antialias: true,
      resolution: Math.min(window.devicePixelRatio || 1, 2),
      autoDensity: true,
    });

    container.appendChild(app.canvas);
    app.canvas.style.display = "block";
    app.canvas.style.width = "100%";
    app.canvas.style.height = "100%";

    const lineLayer = new PIXI.Graphics();
    const dotLayer = new PIXI.Container();

    lineLayer.blendMode = "add";
    dotLayer.blendMode = "add";

    app.stage.addChild(lineLayer);
    app.stage.addChild(dotLayer);

    for (let i = 0; i < particleCount; i++) {
      const dot = new PIXI.Graphics();
      const radius = Math.random() * 2.2 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const position = getSafePosition();

      dot.circle(0, 0, radius).fill({ color, alpha: Math.random() * 0.42 + 0.38 });
      dot.x = position.x;
      dot.y = position.y;
      dot.vx = (Math.random() - 0.5) * 0.28;
      dot.vy = (Math.random() - 0.5) * 0.28;
      dot.pulse = Math.random() * Math.PI * 2;
      dot.color = color;

      particles.push(dot);
      dotLayer.addChild(dot);
    }

    window.addEventListener(
      "pointermove",
      (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        mouse.active = true;
      },
      { passive: true },
    );

    window.addEventListener("pointerleave", () => {
      mouse.active = false;
    });

    app.ticker.add((ticker) => {
      const time = app.ticker.lastTime;
      const delta = ticker.deltaTime;
      const width = app.screen.width;
      const height = app.screen.height;

      lineLayer.clear();

      particles.forEach((dot, index) => {
        dot.x += dot.vx * delta;
        dot.y += dot.vy * delta;
        dot.alpha = 0.38 + Math.sin(time / 900 + dot.pulse) * 0.18;

        if (mouse.active && !isMobile) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 160) {
            const force = (1 - distance / 160) * 0.22;
            dot.x += (dx / Math.max(distance, 1)) * force * delta;
            dot.y += (dy / Math.max(distance, 1)) * force * delta;
          }
        }

        if (dot.x < -20) dot.x = width + 20;
        if (dot.x > width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = height + 20;
        if (dot.y > height + 20) dot.y = -20;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex++) {
          const next = particles[nextIndex];
          const dx = dot.x - next.x;
          const dy = dot.y - next.y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const centerX = (dot.x + next.x) / 2;
            const centerY = (dot.y + next.y) / 2;
            const isBehindCard = centerX > width * 0.31 && centerX < width * 0.69 && centerY > height * 0.28 && centerY < height * 0.78;
            const alpha = (1 - distance / maxDistance) * (isBehindCard ? 0.045 : 0.15);
            const color = index % 2 === 0 ? dot.color : next.color;

            lineLayer.moveTo(dot.x, dot.y);
            lineLayer.lineTo(next.x, next.y);
            lineLayer.stroke({ width: 0.9, color, alpha });
          }
        }
      });
    });
  };

  init();
})();
