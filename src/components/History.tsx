"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function History() {
  const { t } = useLanguage();

  return (
    <section id="history" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16 px-2">
        <h2 className="text-sm font-semibold tracking-widest text-accent-color uppercase mb-2">{t.history.subtitle}</h2>
        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{t.history.title}</h3>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {t.history.items.map((item, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background group-hover:bg-accent-color group-hover:border-accent-color transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            
            {/* Timeline content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-xl text-white whitespace-pre-wrap leading-snug">{item.title}</h4>
              </div>
              <p className="text-accent-color font-mono font-semibold mb-3">{item.year}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
