import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Eye, ArrowDown, Code2 } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero({ setActiveSection }) {
  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side: Content & Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="animate-pulse" />
            Frontend Software Engineer
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Govind Patidar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            BCA Graduate crafting responsive web applications with React, Next.js, and Framer Motion. Focused on interactive UI architecture, performance, and clean code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold flex items-center gap-2.5 shadow-lg shadow-cyan-600/25 transition"
            >
              Get In Touch <Send size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-2.5 shadow-sm transition"
            >
              View Projects <Eye size={16} />
            </motion.button>
          </div>

          {/* Quick Stats Highlights */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/10 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">10+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tech Skills</div>
            </div>
            <div>
              <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">2+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Live Apps</div>
            </div>
            <div>
              <div className="text-2xl font-black text-blue-600 dark:text-indigo-400">2026</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">BCA Graduate</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Professional Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Animated Background Aura */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 rounded-[2.5rem] opacity-30 dark:opacity-40 blur-2xl animate-pulse" />

          {/* Outer Glass Card */}
          <div className="relative p-2.5 rounded-[2.2rem] bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-2xl backdrop-blur-md">
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-[1.8rem] overflow-hidden bg-slate-100 dark:bg-slate-950">
              <img
                src={profileImg}
                alt="Govind Patidar"
                className="w-full h-full object-cover object-top filter brightness-105 contrast-[1.02] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Mini Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                <Code2 size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Modern Stack</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">React • Tailwind • Motion</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}