import { useEffect, useRef } from 'react';

const GalaxyCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, centerX, centerY;

    // Lines and boxes for galaxy effect
    const lines = [];
    const boxes = [];
    const numLines = 120;
    const numBoxes = 200;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
    };

    // Initialize galaxy elements
    const initGalaxy = () => {
      // Create radial lines
      for (let i = 0; i < numLines; i++) {
        const angle = Math.random() * 2 * Math.PI;
        lines.push({ angle, length: Math.random() * 300 + 150 });
      }

      // Create orbiting boxes/stars
      for (let i = 0; i < numBoxes; i++) {
        boxes.push({
          angle: Math.random() * 2 * Math.PI,
          distance: Math.random() * 450 + 50,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.002 + 0.001
        });
      }
    };

    // Animation function
    const animateGalaxy = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw radial lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      lines.forEach(line => {
        const x = centerX + Math.cos(line.angle) * line.length;
        const y = centerY + Math.sin(line.angle) * line.length;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      // Draw orbiting boxes
      boxes.forEach(box => {
        box.angle += box.speed;
        const x = centerX + Math.cos(box.angle) * box.distance;
        const y = centerY + Math.sin(box.angle) * box.distance;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(x, y, box.size, box.size);
      });

      animationRef.current = requestAnimationFrame(animateGalaxy);
    };

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initGalaxy();
    animateGalaxy();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default GalaxyCanvas;
