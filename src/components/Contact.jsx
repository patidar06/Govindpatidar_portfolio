import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquareShare 
} from 'lucide-react';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaWhatsapp 
} from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // EmailJS credentials yahan dalna:
    emailjs.sendForm(
      'service_7seab59',
      'template_mc3keq2',
      formRef.current,
      'QFGxjJF7cH5tLoo7D'
    ).then(
      () => {
        setLoading(false);
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus(null), 6000);
      },
      (error) => {
        console.error(error);
        setLoading(false);
        setStatus('error');
      }
    );
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/in/govind-patidar-3a08a628b",
      color: "hover:bg-[#0A66C2] hover:text-white"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/patidar06",
      color: "hover:bg-slate-800 hover:text-white"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/917877983356?text=Hi%20Govind,%20I%20saw%20your%20portfolio!",
      color: "hover:bg-[#25D366] hover:text-white"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/patidar_06?stkn=aTMzZDk2cnE0NXh4",
      color: "hover:bg-[#E4405F] hover:text-white"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 px-6 border-t border-slate-200/80 dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail size={13} />
            Let's Talk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Have a project in mind, need a frontend developer, or just want to connect?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Contact Info & Direct Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Details</h3>
              
              {/* Direct Mail */}
              <a 
                href="mailto:gp886895@gmail.com"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">EMAIL ME</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">gp886895@gmail.com</div>
                </div>
              </a>

              {/* Direct WhatsApp Call/Chat */}
              <a 
                href="https://wa.me/917877983356?text=Hi%20Govind,%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                  <MessageSquareShare size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">WHATSAPP / CALL</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">+91 7877983356</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-3 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">LOCATION</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Kota, Rajasthan, India</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">SOCIAL CHANNELS</div>
                <div className="flex gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-all ${item.color}`}
                        title={item.name}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">FULL NAME</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">YOUR MESSAGE</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Hello Govind, I'd like to talk about..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none transition text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/25 transition duration-200 cursor-pointer disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>

              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 justify-center">
                  <CheckCircle2 size={16} /> Message sent successfully! I'll reply soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2 justify-center">
                  <AlertCircle size={16} /> Failed to send message. Please check EmailJS configuration.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}