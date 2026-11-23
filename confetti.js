// Tiny confetti burst on a full-screen canvas with id="confetti".
window.Confetti = (() => {
  const colors = ["#3971fb", "#c7d5fc", "#ffe08a", "#fc595f"];
  let canvas, ctx, parts = [], running = false;

  function setup() {
    canvas = document.getElementById("confetti");
    if (!canvas) return false;
    ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = innerWidth * devicePixelRatio;
      canvas.height = innerHeight * devicePixelRatio;
    };
    resize();
    addEventListener("resize", resize);
    return true;
  }

  function burst(count = 140) {
    if (!ctx && !setup()) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const w = canvas.width;
    for (let i = 0; i < count; i++) {
      parts.push({
        x: w / 2 + (Math.random() - 0.5) * w * 0.3,
        y: canvas.height * 0.35,
        vx: (Math.random() - 0.5) * 16 * devicePixelRatio,
        vy: (-Math.random() * 14 - 4) * devicePixelRatio,
        s: (Math.random() * 8 + 5) * devicePixelRatio,
        r: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        c: colors[(Math.random() * colors.length) | 0],
        life: 1,
      });
    }
    if (!running) { running = true; requestAnimationFrame(tick); }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const g = 0.35 * devicePixelRatio;
    parts = parts.filter((p) => p.life > 0 && p.y < canvas.height + 40);
    for (const p of parts) {
      p.vy += g; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life -= 0.006;
      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      ctx.restore();
    }
    if (parts.length) requestAnimationFrame(tick);
    else { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }

  return { burst };
})();
