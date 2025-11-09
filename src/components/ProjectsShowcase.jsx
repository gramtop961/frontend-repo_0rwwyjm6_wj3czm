import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Server, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat + NLP Moderation',
    desc: 'Socket.io chat with sentiment and toxicity filters. Smooth UX, blazing backend.',
    tech: ['React', 'Node', 'Socket.io', 'NLP'],
    icon: MessageSquare,
    accent: 'from-fuchsia-500/30 to-pink-500/30',
  },
  {
    title: 'AI-Powered Docs Search',
    desc: 'Embeddings + semantic search across docs with slick UI and fast API.',
    tech: ['React', 'FastAPI', 'Pinecone', 'Transformers'],
    icon: Cpu,
    accent: 'from-indigo-500/30 to-sky-500/30',
  },
  {
    title: 'MERN SaaS Starter',
    desc: 'Subscriptions, dashboards, component library, and resilient architecture.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    icon: Server,
    accent: 'from-emerald-500/30 to-teal-500/30',
  },
  {
    title: 'REST APIs Visualized',
    desc: 'Glowing data streams showcase the flow from client to server to DB.',
    tech: ['REST', 'OpenAPI', 'CI/CD'],
    icon: Globe,
    accent: 'from-amber-500/30 to-orange-500/30',
  },
];

function ProjectCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.article
      initial={{ opacity: 0, rotateX: -10, y: 40 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl perspective"
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.accent} opacity-50 blur-xl`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <Icon size={18} />
        </div>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="mt-2 text-sm text-purple-100/90">{item.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-purple-100/90">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 h-24 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
          <motion.div
            className="h-full w-[200%] bg-[repeating-linear-gradient(90deg,rgba(99,102,241,0.25)_0_10px,transparent_10px_20px)]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative bg-[#080812] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Projects</h2>
          <p className="mt-2 max-w-2xl text-purple-200/80">Interactive stories told through code — explore the stack and motion.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
