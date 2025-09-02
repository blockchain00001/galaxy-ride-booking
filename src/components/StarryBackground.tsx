import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star particles
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      twinkleSpeed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        brightness: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star, index) => {
        // Update brightness for twinkling effect
        star.brightness += star.twinkleSpeed;
        if (star.brightness > 1 || star.brightness < 0.2) {
          star.twinkleSpeed *= -1;
        }

        // Slowly move stars
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
        const alpha = Math.max(0.2, Math.min(1, star.brightness));
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
        
        if (index % 3 === 0) {
          gradient.addColorStop(0, `hsla(280, 100%, 70%, ${alpha})`);
          gradient.addColorStop(1, `hsla(280, 100%, 70%, 0)`);
        } else if (index % 3 === 1) {
          gradient.addColorStop(0, `hsla(200, 100%, 50%, ${alpha})`);
          gradient.addColorStop(1, `hsla(200, 100%, 50%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(320, 100%, 60%, ${alpha})`);
          gradient.addColorStop(1, `hsla(320, 100%, 60%, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'hsl(var(--background))' }}
    />
  );
};

export default StarryBackground;