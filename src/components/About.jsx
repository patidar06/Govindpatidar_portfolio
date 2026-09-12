import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Building2 
} from 'lucide-react';

export default function About() {
  const academicHighlights = [
    {
      title: "Cumulative CGPA",
      value: "7.45",
      sub: "Out of 10.0 (First Division)",
      badge: "Graduated 2026",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Final Sem SGPA",
      value: "8.30",
      sub: "Semester-VI Distinction",
      badge: "Semester-VI",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Major Project",
      value: "141/150",
      sub: "Grade: O (Outstanding)",
      badge: "Practical Score",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Course Credits",
      value: "100%",
      sub: "120/120 Credits Earned",
      badge: "Full Completion",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-6 border-t border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-[#080b12] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen size={13} />
            Profile & Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Professional industry experience combined with verified university academics.
          </p>
        </div>

        {/* 1. Work Experience / Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white rounded-2xl shadow-lg shadow-indigo-500/20 flex-shrink-0">
                <Briefcase size={30} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                  Professional Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-0.5">
                  Frontend (React) Developer Intern
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-slate-700 dark:text-slate-300 font-semibold text-sm sm:text-base mt-1.5">
                  <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                    <Building2 size={16} /> Shivvilon Solutions
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 text-xs font-normal">
                    <MapPin size={14} /> Rajkot (Work From Office)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold">
                <Calendar size={13} /> 22 Dec 2025 – 01 Jun 2026
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                6 Months On-site Internship
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <p className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                Engineered interactive, responsive user interfaces for modern web applications utilizing <strong>React.js</strong>, modular styling, and modern frontend tools.
              </span>
            </p>
            <p className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                Collaborated directly with on-site development teams to implement client specifications, solve UI/UX challenges, and deliver assignments within strict deadlines.
              </span>
            </p>
            <p className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                Awarded completion certification with commended performance in problem solving, teamwork, and quick adaptability in a production environment.
              </span>
            </p>
          </div>
        </motion.div>

        {/* 2. Main University / Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl shadow-lg shadow-cyan-500/20 flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono">
                  Graduation Degree
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-semibold text-base mt-1">
                  Modi Institute of Management & Technology (MIMT), Kota
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                  University of Kota (UOK) • Regular English Medium
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              <ShieldCheck size={16} /> Verified Marksheet
            </div>
          </div>

          {/* Academic Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {academicHighlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-black/30 border border-slate-200/80 dark:border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      {item.badge}
                    </span>
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-3 border-t border-slate-200 dark:border-white/5 pt-2">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}