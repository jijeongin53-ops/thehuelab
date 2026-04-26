"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Tent } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Business() {
  const { t } = useLanguage();

  const icons = [
    <Cpu key="0" className="w-6 h-6 text-blue-400" />,
    <Zap key="1" className="w-6 h-6 text-yellow-400" />,
    <Tent key="2" className="w-6 h-6 text-purple-400" />
  ];

  const classNames = [
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-2 flex flex-col justify-between",
    "md:col-span-2 md:row-span-1"
  ];

  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 px-2">
        <h2 className="text-sm font-semibold tracking-widest text-accent-color uppercase mb-2">{t.business.subtitle}</h2>
        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{t.business.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(250px,auto)]">
        {t.business.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`glass-card p-8 group hover:bg-white/[0.05] transition-colors relative overflow-hidden ${classNames[idx]}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              {icons[idx]}
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              {icons[idx]}
            </div>
            <h4 className="text-2xl font-bold mb-4 whitespace-pre-wrap leading-snug">{item.title}</h4>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
