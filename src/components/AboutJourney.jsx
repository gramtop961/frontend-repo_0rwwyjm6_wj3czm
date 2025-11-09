import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, BookOpen, Certificate, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

const milestones = [
  {
    icon: GraduationCap,
    title: 'FAST-NUCES',
    subtitle: 'Academic Excellence',
    desc: 'Built strong CS foundations while leading creative coding initiatives.',
    color: 'from-violet-500/40 to-fuchsia-500/30',
  },
  {
    icon: Certificate,
    title: 'Stanford ML Cert',
    subtitle: 'Deep Learning Milestone',
    desc: 'Hands-on with CNNs, RNNs, attention mechanisms and model deployment.',
    color: 'from-sky-500/40 to-cyan-500/30',
  },
  {
    icon: Award,
    title: 'Competitions & Hackathons',
    subtitle: 'Awards & Recognition',
    desc: 'Shipped prototypes fast — chatbots, generative visuals, and UX wins.',
    color: 'from-amber-500/40 to-orange-500/30',
  },
  {
    icon: BookOpen,
    title: 'Certifications',
    subtitle: 'Design + Cloud + Data',
    desc: 'UI/UX, Docker, and modern data tooling to round out full‑stack craft.',
    color: 'from-emerald-500/40 to-teal-500/30',
  },
];

function NodeCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-40`} />
      <div className="relative z-10">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <Icon size={18} className="text-white" />
        </div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm text-purple-100/90">{item.subtitle}</p>
        <p className="mt-2 text-sm text-purple-200/80">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AboutJourney() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const pathY = useTransform(scrollYProgress, [0, 1], ['10%', '90%']);

  return (
    <section id="about" ref={ref} className="relative bg-[#090914] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(124,58,237,0.18),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Journey</h2>
          <p className="mt-2 max-w-2xl text-purple-200/80">A winding path through code, design, and intelligent systems.</p>
        </div>

        <div className="relative">
          {/* Curved path */}
          <motion.div
            style={{ top: pathY }}
            className="pointer-events-none absolute left-1/2 h-96 w-[2px] -translate-x-1/2 bg-gradient-to-b from-fuchsia-400/70 via-indigo-400/70 to-cyan-400/70 blur-[1px]"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {milestones.map((m, i) => (
              <NodeCard key={m.title} item={m} index={i} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
