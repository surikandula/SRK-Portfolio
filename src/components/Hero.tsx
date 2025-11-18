import { useEffect, useRef } from 'react';
import { Mail, Linkedin, ChevronDown } from 'lucide-react';

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-6 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-5xl font-bold">
            SRK
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Surendra Reddy Kandula
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full Stack Application Developer
        </p>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Dynamic and results-oriented Application Developer with 2 years of hands-on experience
          in software development. Specialized in building scalable web applications using React,
          Node.js, and modern cloud technologies.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=surendrakandula79@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </a>

          <a
            href="https://www.linkedin.com/in/surendra-kandula-a63881309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
    </section>
  );
}

export default Hero;
