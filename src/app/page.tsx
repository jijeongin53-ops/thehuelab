"use client";

import Hero from "@/components/Hero";
import Business from "@/components/Business";
import CEOProfile from "@/components/CEOProfile";
import History from "@/components/History";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden selection:bg-accent-color selection:text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 h-20 border-b border-white/10 bg-black/50 backdrop-blur-md z-50 flex items-center px-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight text-white">theHUElab</span>
        </div>
        
        <nav className="ml-auto hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 mr-8">
          <a href="#services" className="hover:text-white transition-colors">{t.header.business}</a>
          <a href="#about" className="hover:text-white transition-colors">{t.header.about}</a>
          <a href="#history" className="hover:text-white transition-colors">{t.header.history}</a>
          <a href="#contact" className="hover:text-white transition-colors text-accent-color">{t.header.contact}</a>
        </nav>

        {/* Language Switcher */}
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as any)}
            className="bg-transparent text-sm text-gray-300 font-medium focus:outline-none cursor-pointer appearance-none"
          >
            <option value="en" className="bg-black text-white">EN</option>
            <option value="ko" className="bg-black text-white">KR</option>
            <option value="ja" className="bg-black text-white">JP</option>
          </select>
        </div>
      </header>

      <div className="pt-20">
        <Hero />
        <Business />
        <CEOProfile />
        <History />
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} theHUElab. All rights reserved.</p>
        <p className="mt-1">{t.ceo.address} | Tel: {t.ceo.phone}</p>
      </footer>
    </main>
  );
}
