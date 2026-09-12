import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Zap, Database, ArrowUpRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Frontend Architecture",
    tag: "React & Next.js",
    desc: "Building scalable, clean, and high-performance single-page web applications with reusable component design and robust state handling.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Smartphone,
    title: "Responsive UI/UX Design",
    tag: "Tailwind CSS & Motion",
    desc: "Developing pixel-perfect, 100% mobile-friendly layouts loaded with smooth transitions and subtle micro-interactions.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "API & Backend Integration",
    tag: "REST APIs & Firebase",
    desc: "Seamlessly connecting frontends with cloud databases like Firebase and third-party RESTful APIs with foolproof error handling.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Database,
    title: "Speed & Performance Tuning",
    tag: "Vite & Core Web Vitals",
    desc: "Optimizing bundle chunks, asset rendering, and browser cache to ensure lighting-fast initial load times and smooth 60fps scrolling.",
    color: "from-emerald-500 to-teal-500"
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-24 px-6 border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            Services & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What I Bring To The Table
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Transforming product ideas into production-ready, clean, and reliable web experiences.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {item.tag}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  <span>Production Standard</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}