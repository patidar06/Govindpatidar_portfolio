import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2 } from 'lucide-react';

import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGithub, 
  FaGitAlt 
} from 'react-icons/fa';

import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFirebase, 
  SiPostman, 
  SiVercel, 
  SiElectron 
} from 'react-icons/si';

import { TbApi, TbMailFast } from 'react-icons/tb';

// Inner Ring (6 items)
const innerSkills = [
  { name: "React", icon: FaReact, color: "#61DAFB", glow: "rgba(97,218,251,0.35)" },
  { name: "Next.js", icon: SiNextdotjs, customClass: "text-slate-900 dark:text-white", glow: "rgba(255,255,255,0.25)" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", glow: "rgba(49,120,198,0.35)" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E", glow: "rgba(247,223,30,0.35)" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", glow: "rgba(6,182,212,0.35)" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", glow: "rgba(227,79,38,0.35)" }
];

// Outer Ring (9 items)
const outerSkills = [
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", glow: "rgba(255,202,40,0.35)" },
  { name: "Electron.js", icon: SiElectron, color: "#47848F", glow: "rgba(71,132,143,0.35)" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", glow: "rgba(255,108,55,0.35)" },
  { name: "APIs", icon: TbApi, color: "#10B981", glow: "rgba(16,185,129,0.35)" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", glow: "rgba(240,80,50,0.35)" },
  { name: "GitHub", icon: FaGithub, customClass: "text-slate-900 dark:text-white", glow: "rgba(255,255,255,0.25)" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", glow: "rgba(21,114,182,0.35)" },
  { name: "Vercel", icon: SiVercel, customClass: "text-slate-900 dark:text-white", glow: "rgba(255,255,255,0.25)" },
  { name: "EmailJS", icon: TbMailFast, color: "#F59E0B", glow: "rgba(245,158,11,0.35)" }
];

export default function SkillsOrbit() {
  const [isInnerPaused, setIsInnerPaused] = useState(false);
  const [isOuterPaused, setIsOuterPaused] = useState(false);
  
  const [dimensions, setDimensions] = useState({ 
    innerR: 75, 
    outerR: 145, 
    iconSizeInner: 38,
    iconSizeOuter: 42
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 380) {
        setDimensions({ innerR: 66, outerR: 125, iconSizeInner: 34, iconSizeOuter: 38 });
      } else if (w < 640) {
        setDimensions({ innerR: 76, outerR: 145, iconSizeInner: 36, iconSizeOuter: 40 });
      } else if (w < 1024) {
        setDimensions({ innerR: 110, outerR: 200, iconSizeInner: 46, iconSizeOuter: 50 });
      } else {
        setDimensions({ innerR: 135, outerR: 245, iconSizeInner: 50, iconSizeOuter: 54 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-24 px-3 sm:px-6 border-t border-slate-200/80 dark:border-white/5 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu size={13} />
            Dual-Orbit Ecosystem
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Modern Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 px-4">
            Core technologies and modern tools I leverage to build scalable, high-performance web applications..
          </p>
        </div>

        {/* Orbit Arena */}
        <div className="relative w-full h-[400px] sm:h-[560px] lg:h-[620px] flex items-center justify-center select-none overflow-hidden">
          
          {/* Subtle Radial Center Glow */}
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-[90px] pointer-events-none" />

          {/* Central Glowing Developer Core */}
          <div className="z-20 relative flex items-center justify-center pointer-events-none">
            {/* Outer Soft Pulse Ring */}
            <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/15 border border-cyan-500/30 animate-ping opacity-60" />
            
            {/* Main Glowing Sphere */}
            <motion.div 
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/40 border-2 border-white/80 dark:border-cyan-200/50"
            >
              <Code2 size={20} className="sm:w-6 sm:h-6" />
            </motion.div>
          </div>

          {/* Track 1: Inner Orbit Guideline */}
          <div 
            style={{ width: dimensions.innerR * 2, height: dimensions.innerR * 2 }} 
            className="absolute rounded-full border border-cyan-500/20 dark:border-cyan-500/25 border-dashed pointer-events-none"
          />

          {/* Track 2: Outer Orbit Guideline */}
          <div 
            style={{ width: dimensions.outerR * 2, height: dimensions.outerR * 2 }} 
            className="absolute rounded-full border border-slate-300/60 dark:border-white/10 border-dashed pointer-events-none"
          />

          {/* ================= INNER ORBIT (Clockwise - 32s) ================= */}
          <motion.div
            className="absolute z-10"
            style={{ width: dimensions.innerR * 2, height: dimensions.innerR * 2 }}
            animate={{ rotate: isInnerPaused ? undefined : 360 }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            onMouseEnter={() => setIsInnerPaused(true)}
            onMouseLeave={() => setIsInnerPaused(false)}
          >
            {innerSkills.map((skill, index) => {
              const total = innerSkills.length;
              const angle = (index / total) * 2 * Math.PI;
              const x = Math.round(dimensions.innerR * Math.cos(angle));
              const y = Math.round(dimensions.innerR * Math.sin(angle));
              const IconComponent = skill.icon;
              const half = dimensions.iconSizeInner / 2;

              return (
                <div
                  key={skill.name}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: `calc(50% + ${x}px - ${half}px)`,
                    top: `calc(50% + ${y}px - ${half}px)`
                  }}
                >
                  <motion.div
                    animate={{ rotate: isInnerPaused ? undefined : -360 }}
                    transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                    className="group relative flex flex-col items-center cursor-pointer"
                  >
                    <div 
                      style={{ 
                        width: dimensions.iconSizeInner, 
                        height: dimensions.iconSizeInner,
                        boxShadow: `0 0 14px ${skill.glow}`
                      }}
                      className="rounded-xl sm:rounded-2xl bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-115 group-hover:border-cyan-400"
                    >
                      <IconComponent 
                        className={`text-lg sm:text-2xl transition-transform duration-300 ${skill.customClass || ''}`}
                        style={skill.color ? { color: skill.color } : {}}
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-10 sm:top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* ================= OUTER ORBIT (Counter-Clockwise - 48s) ================= */}
          <motion.div
            className="absolute z-10"
            style={{ width: dimensions.outerR * 2, height: dimensions.outerR * 2 }}
            animate={{ rotate: isOuterPaused ? undefined : -360 }}
            transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
            onMouseEnter={() => setIsOuterPaused(true)}
            onMouseLeave={() => setIsOuterPaused(false)}
          >
            {outerSkills.map((skill, index) => {
              const total = outerSkills.length;
              const angle = (index / total) * 2 * Math.PI;
              const x = Math.round(dimensions.outerR * Math.cos(angle));
              const y = Math.round(dimensions.outerR * Math.sin(angle));
              const IconComponent = skill.icon;
              const half = dimensions.iconSizeOuter / 2;

              return (
                <div
                  key={skill.name}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: `calc(50% + ${x}px - ${half}px)`,
                    top: `calc(50% + ${y}px - ${half}px)`
                  }}
                >
                  <motion.div
                    animate={{ rotate: isOuterPaused ? undefined : 360 }}
                    transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
                    className="group relative flex flex-col items-center cursor-pointer"
                  >
                    <div 
                      style={{ 
                        width: dimensions.iconSizeOuter, 
                        height: dimensions.iconSizeOuter,
                        boxShadow: `0 0 16px ${skill.glow}`
                      }}
                      className="rounded-xl sm:rounded-2xl bg-white/95 dark:bg-[#0c121e]/95 border border-slate-200 dark:border-white/15 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-115 group-hover:border-cyan-400"
                    >
                      <IconComponent 
                        className={`text-xl sm:text-2xl transition-transform duration-300 ${skill.customClass || ''}`}
                        style={skill.color ? { color: skill.color } : {}}
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-11 sm:top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xl whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}