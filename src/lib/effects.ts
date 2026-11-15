import { prefersReducedMotion } from "./accessibility";
import { $$ } from "./dom";

type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  opacity: number;
};

const tiltedCards = new WeakSet<HTMLElement>();

export function initGlobalEffects() {
  if (prefersReducedMotion()) return;

  initParticleCanvas();
  initTiltCards();
}

function initParticleCanvas() {
  const canvas = document.querySelector<HTMLCanvasElement>("#particle-canvas");
  const context = canvas?.getContext("2d");

  if (!canvas || !context || canvas.dataset.initialized) return;

  canvas.dataset.initialized = "true";

  let width = 0;
  let height = 0;
  let particles: Particle[] = [];
  const mouse = { x: null as number | null, y: null as number | null, radius: 150 };
  const particleCount = 60;
  const connectionDistance = 120;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(particleCount, Math.floor((width * height) / 20000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      velocityX: (Math.random() - 0.5) * 0.4,
      velocityY: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
      if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const distanceX = particle.x - mouse.x;
        const distanceY = particle.y - mouse.y;
        const distance = Math.hypot(distanceX, distanceY);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          particle.x += distanceX * force * 0.02;
          particle.y += distanceY * force * 0.02;
        }
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(163, 117, 255, ${particle.opacity})`;
      context.fill();
    });

    for (let first = 0; first < particles.length; first += 1) {
      for (let second = first + 1; second < particles.length; second += 1) {
        const distance = Math.hypot(
          particles[first].x - particles[second].x,
          particles[first].y - particles[second].y,
        );

        if (distance < connectionDistance) {
          context.beginPath();
          context.moveTo(particles[first].x, particles[first].y);
          context.lineTo(particles[second].x, particles[second].y);
          context.strokeStyle = `rgba(163, 117, 255, ${(1 - distance / connectionDistance) * 0.12})`;
          context.lineWidth = 0.5;
          context.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }, { passive: true });
  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });
}

function initTiltCards() {
  $$<HTMLElement>("[data-tilt]").forEach((card) => {
    if (tiltedCards.has(card)) return;

    tiltedCards.add(card);
    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const rotateX = ((event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)) * -5;
      const rotateY = ((event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });
}
