import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Terminal, ArrowUp, Heart, Sparkles, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: 'https://linkedin.com/in/govind-patidar-3a08a628b',
      hoverColor: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/10'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/patidar06',
      hoverColor: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-400 hover:bg-slate-500/10'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/917877983356',
      hoverColor: 'hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/patidar_06?stkn=aTMzZDk2cnE0NXh4',
      hoverColor: 'hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-500/10'
    }
  ];

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/5 bg-white dark:bg-[#07090e] transition-colors duration-300 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/10">
          
          {/* Col 1: Brand & Status (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Terminal size={18} />
              </div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                GOVIND<span className="text-cyan-600 dark:text-cyan-400">.DEV</span>
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Frontend Engineer specializing in React, Next.js, and high-performance user interfaces. Dedicated to clean architecture and smooth micro-interactions.
            </p>

            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for full-time frontend roles & contracts
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect & Socials (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect & Location
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                Kota, Rajasthan, India
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                gp886895@gmail.com
              </p>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2.5 pt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                    className={`w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all duration-200 ${social.hoverColor}`}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Govind Patidar. Crafted with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500 inline" />
            <span>in React & Tailwind.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 transition text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}