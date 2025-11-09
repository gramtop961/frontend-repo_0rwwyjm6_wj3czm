import { motion } from 'framer-motion';

const skills = [
  { label: 'React', color: 'from-sky-400 to-blue-400', x: -28, y: -6, size: 120 },
  { label: 'Tailwind', color: 'from-cyan-400 to-sky-300', x: -8, y: 12, size: 100 },
  { label: 'Vite', color: 'from-indigo-400 to-violet-400', x: -38, y: 18, size: 84 },
  { label: 'Node', color: 'from-emerald-400 to-teal-400', x: 10, y: -8, size: 110 },
  { label: 'Express', color: 'from-green-400 to-emerald-300', x: 28, y: 2, size: 96 },
  { label: 'MongoDB', color: 'from-amber-400 to-orange-400', x: 38, y: -2, size: 104 },
  { label: 'AI/ML/NLP', color: 'from-pink-400 to-fuchsia-400', x: 4, y: 26, size: 128 },
  { label: 'Figma', color: 'from-purple-400 to-fuchsia-400', x: -2, y: -28, size: 90 },
];

function FloatingSphere({ label, color, x, y, size }) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${color} shadow-[0_0_40px_-10px_rgba(168,85,247,0.8)] select-none`}
      style={{ width: size, height: size, left: `calc(50% + ${x}%)`, top: `calc(50% + ${y}%)`, transform: 'translate(-50%, -50%)' }}
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      whileHover={{ scale: 1.07 }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-xs sm:text-sm font-semibold text-white drop-shadow">{label}</span>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-xl" />
    </motion.div>
  );
}

export default function SkillsGalaxy() {
  return (
    <section id="skills" className="relative bg-[#0a0a12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Skills Constellation</h2>
          <p className="mt-2 max-w-2xl text-purple-200/80">A galaxy of capabilities — hover to explore clusters across Frontend, Backend, UI/UX and AI/ML/NLP.</p>
        </div>
      </div>

      <div className="relative mx-auto mt-4 h-[520px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0b18] to-[#0b0f24] p-2">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 40 40\'><g fill=\'none\' stroke=\'rgba(255,255,255,0.06)\' stroke-width=\'0.5\'><path d=\'M0 0.5H40\'/><path d=\'M0 10.5H40\'/><path d=\'M0 20.5H40\'/><path d=\'M0 30.5H40\'/><path d=\'M0.5 0V40\'/><path d=\'M10.5 0V40\'/><path d=\'M20.5 0V40\'/><path d=\'M30.5 0V40\'/></g></svg>')] opacity-60" />
        {skills.map((s) => (
          <FloatingSphere key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
