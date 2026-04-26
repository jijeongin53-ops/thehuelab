"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, BookOpen, Award, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function CEOProfile() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-white/[0.01] border-y border-border-color">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Profile Header (Left) */}
          <div className="lg:col-span-4 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center shadow-lg shadow-accent-color/20 overflow-hidden relative border-2 border-white/10 shrink-0">
                <img src="/profile.jpg" alt="theHUElab CEO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{t.ceo.title}</h3>
              <p className="text-accent-color font-medium mb-6 leading-relaxed">{t.ceo.role}</p>
              
              <div className="space-y-4 text-sm text-gray-400 mb-8 border-t border-border-color pt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="leading-snug">{t.ceo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{t.ceo.phone}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Profile Details (Right - Scrolling) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-400 w-5 h-5 shrink-0" />
                <h4 className="text-xl font-bold">{t.ceo.historyTitle}</h4>
              </div>
              <ul className="text-gray-300 space-y-3 leading-relaxed">
                {t.ceo.historyItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-yellow-400 w-5 h-5 shrink-0" />
                  <h4 className="text-xl font-bold">{t.ceo.bookTitle}</h4>
                </div>
                <ul className="text-gray-300 space-y-3 text-sm">
                  {t.ceo.bookItems.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                  <li className="pt-2 border-t border-border-color mt-2 text-gray-400">
                    {t.ceo.bookFooter}
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-pink-400 w-5 h-5 shrink-0" />
                  <h4 className="text-xl font-bold">{t.ceo.certTitle}</h4>
                </div>
                <ul className="text-gray-300 space-y-3 text-sm">
                  {t.ceo.certItems.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
