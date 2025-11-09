import { motion } from 'framer-motion';
import { Briefcase, Award, Building2 } from 'lucide-react';

const experiences = [
  { title: 'AI Research Intern', place: 'Lab/Startup', desc: 'Prototyped NLP pipelines, vector search, and model serving.', icon: Briefcase, color: 'from-fuchsia-500/30 to-violet-500/30' },
  { title: 'Frontend Engineer (MERN)', place: 'Product Team', desc: 'Shipped design systems and 60fps micro-interactions.', icon: Building2, color: 'from-indigo-500/30 to-sky-500/30' },
  { title: 'Competition Finalist', place: 'Hackathons', desc: 'Built realtime AI apps with polished storytelling.', icon: Award, color: 'from-emerald-500/30 to-teal-500/30' },
];

function SpiralItem({ item, index }) {
  const Icon = item.icon;
  const angle = index * 120;
  const radius = 120 + index * 30;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl w-72">
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.color} opacity-50 blur-xl`} />
        <div className="relative z-10">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Icon size={18} />
          </div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-purple-100/90">{item.place}</p>
          <p className="mt-2 text-sm text-purple-200/80">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSpiral() {
  return (
    <section id="experience" className="relative bg-[#070711] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Experience & Achievements</h2>
          <p className="mt-2 max-w-2xl text-purple-200/80">A spiral of roles, certifications, and wins.</p>
        </div>
      </div>
      <div className="relative mx-auto h-[560px] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0b18] to-[#0b0f24]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
        {experiences.map((e, i) => (
          <SpiralItem key={e.title} item={e} index={i} />
        ))}
      </div>
    </section>
  );
}
