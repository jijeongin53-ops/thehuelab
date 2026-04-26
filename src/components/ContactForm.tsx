"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { submitInquiry } from "@/app/actions/submitInquiry";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await submitInquiry(formData);
      // For simplicity, we just check if it was successful and use the localized message.
      if (res.success) {
        setMessage(t.contact.msgSuccess);
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage(t.contact.msgError);
      }
    } catch (err) {
      setMessage(t.contact.msgError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="max-w-3xl mx-auto text-center px-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight text-balance">{t.contact.title}</h2>
        <p className="text-gray-400 mb-12 text-balance leading-relaxed">
          {t.contact.desc}
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 md:p-12 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.company}</label>
              <input required name="company" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.name}</label>
              <input required name="name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.phone}</label>
              <input required name="phone" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.email}</label>
              <input required type="email" name="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" />
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.message}</label>
            <textarea required name="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors resize-none"></textarea>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? t.contact.btnSending : (
              <>{t.contact.btnSubmit} <Send className="w-4 h-4" /></>
            )}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm font-medium text-accent-color">
              {message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
