import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Dental Clinic Web Application",
    desc: "A production-grade, patient-centric healthcare platform featuring treatment catalogs, interactive consultation inquiry forms, and responsive mobile-first architecture.",
    live: "https://dental-clinic-topaz-three.vercel.app/",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "REST APIs"],
    status: "Live Production"
  },
  {
    title: "Interactive 3D Developer Portfolio",
    desc: "A high-performance personal portfolio engineered with a dual-orbit rotational skill ecosystem, dynamic dark/light theme engine, and integrated contact messaging.",
    live: "https://govindpatidar-portfolio.vercel.app/",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
    status: "Live Production"
  },
  {
    title: "Hotel Management Platform",
    desc: "Comprehensive hospitality dashboard engineered for room allocation, reservation flow tracking, and streamlined front-desk administration.",
    live: "https://hotel-management-pi-self.vercel.app/",
    tags: ["React", "State Architecture", "Modular UI", "Tailwind CSS", "Vercel"],
    status: "Live Production"
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-24 px-6 border-t border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-[#080b12] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 size={13} />
            Featured Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects & Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Real-world web applications deployed live on Vercel with responsive UI.
          </p>
        </div>

        {/* Project Grid: 3 Columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                    0{idx + 1} / Web Application
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 size={13} />
                    {proj.status}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-4 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-black font-semibold text-xs hover:bg-cyan-600 dark:hover:bg-cyan-400 transition shadow-sm active:scale-95"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}