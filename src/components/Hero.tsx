"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] text-center px-4 -mt-20 pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-color/30 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl"
      >
        <span className="inline-block py-1 px-3 rounded-full glass-card text-sm text-gray-300 font-medium mb-6">
          {t.hero.badge}
        </span>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
          {t.hero.titleLine1}<br />
          <span className="text-gradient w-full block">{t.hero.titleLine2}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          {t.hero.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            {t.hero.btnContact}
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full glass-card hover:bg-white/10 transition-colors"
          >
            {t.hero.btnAbout}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
