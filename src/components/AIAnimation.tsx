"use client";

import React, { useEffect, useRef, useState } from 'react';

const AIAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const characters = '01'; // Binary characters
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fading effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Subtle gradient color for characters
        const gradient = ctx.createLinearGradient(x, y - fontSize, x, y);
        gradient.addColorStop(0, `hsl(var(--neon-blue) / ${Math.random() * 0.5 + 0.2})`);
        gradient.addColorStop(1, `hsl(var(--neon-purple) / ${Math.random() * 0.5 + 0.2})`);
        ctx.fillStyle = gradient;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30 FPS

    return () => clearInterval(interval);
  }, [dimensions]); // Redraw when dimensions change

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full opacity-70"></canvas>
    </div>
  );
};

export default AIAnimation;