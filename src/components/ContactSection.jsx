import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const validEmail = /.+@.+\..+/i.test(form.email);
  const canSend = form.name.trim() && validEmail && form.message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSend) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-[#06060c] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Let’s build something together</h2>
          <p className="mt-2 text-purple-200/80">Say hello — collaborations, gigs, or just ideas.</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-purple-100/90">Name</label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-purple-200/50 focus:ring-2 focus:ring-purple-400"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-purple-100/90">Email</label>
                <input
                  className={`w-full rounded-xl border px-4 py-3 outline-none placeholder:text-purple-200/50 focus:ring-2 ${validEmail ? 'border-white/10 bg-white/10 focus:ring-purple-400' : 'border-rose-500/40 bg-rose-500/10 focus:ring-rose-400'}`}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {!validEmail && form.email && (
                  <p className="mt-1 text-xs text-rose-300">Please enter a valid email.</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm text-purple-100/90">Message</label>
                <textarea
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-purple-200/50 focus:ring-2 focus:ring-purple-400"
                  rows={5}
                  placeholder="Tell me about your idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                disabled={!canSend}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${canSend ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02]' : 'bg-white/10 text-purple-200/60'}`}
              >
                {sent ? 'Sent — thank you!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <p className="text-purple-100/90">Prefer socials? Find me here:</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 hover:bg-white/20"><Github size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 hover:bg-white/20"><Linkedin size={16} /> LinkedIn</a>
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 hover:bg-white/20"><Mail size={16} /> Email</a>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-4">
              <p className="text-sm text-purple-200/90">Availability: Open to internships, freelance and full-time roles.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
