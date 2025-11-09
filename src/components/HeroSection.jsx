import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-100, Math.min(100, mx / 5)));
    y.set(Math.max(-100, Math.min(100, my / 5)));
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0b0b12] via-[#0a0616] to-[#0b1430] text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-20 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.35),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          style={{ rotateX, rotateY }}
          className="w-full max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-xs uppercase tracking-widest text-purple-200/90">
              <Rocket size={14} className="text-purple-300" />
              <span>Creative Developer • UI/UX • AI/ML/NLP</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi! I’m <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">Usairam Saeed</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-purple-100/90">
              MERN Stack Developer crafting immersive interfaces, designer of intuitive experiences, and an AI/ML/NLP enthusiast weaving data into stories.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#about" className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-800/40 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-400">
                Start the Journey
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <div className="ml-2 flex items-center gap-3">
                <a href="https://github.com/" aria-label="GitHub" className="rounded-lg border border-white/10 bg-white/5 p-2.5 backdrop-blur hover:bg-white/10 transition">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="rounded-lg border border-white/10 bg-white/5 p-2.5 backdrop-blur hover:bg-white/10 transition">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" aria-label="Email" className="rounded-lg border border-white/10 bg-white/5 p-2.5 backdrop-blur hover:bg-white/10 transition">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating nav */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-purple-100/90">
          {[
            ['About', '#about'],
            ['Skills', '#skills'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur transition hover:bg-white/10">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
