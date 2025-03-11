
import { useEffect, useRef } from "react";

const DataVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Particles
    const particles: Particle[] = [];
    const particleCount = Math.floor(canvas.width / 10);
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      connectDistance: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? "#00f0ff" : "#ff7b00";
        this.connectDistance = 150;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce on walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      connect() {
        if (!ctx) return;
        for (let j = 0; j < particles.length; j++) {
          const otherParticle = particles[j];
          const distance = Math.sqrt(
            Math.pow(this.x - otherParticle.x, 2) + 
            Math.pow(this.y - otherParticle.y, 2)
          );
          
          if (distance < this.connectDistance) {
            const opacity = 1 - (distance / this.connectDistance);
            ctx.beginPath();
            ctx.strokeStyle = this.color === otherParticle.color 
              ? `${this.color}${Math.floor(opacity * 15).toString(16)}` 
              : `#ffffff${Math.floor(opacity * 15).toString(16)}`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        particles[i].connect();
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default DataVisualization;
