import Hero from "@/components/Hero";
import Business from "@/components/Business";
import CEOProfile from "@/components/CEOProfile";
import History from "@/components/History";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden selection:bg-accent-color selection:text-white">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 h-20 border-b border-white/10 bg-black/50 backdrop-blur-md z-50 flex items-center px-6 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg"></div>
          <span className="text-xl font-bold tracking-tight text-white">THE HUE LAB</span>
        </div>
        <nav className="ml-auto hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Business</a>
          <a href="#about" className="hover:text-white transition-colors">About CEO</a>
          <a href="#history" className="hover:text-white transition-colors">History</a>
          <a href="#contact" className="hover:text-white transition-colors text-accent-color">Contact Us</a>
        </nav>
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
        <p>© {new Date().getFullYear()} The Hue Lab. All rights reserved.</p>
        <p className="mt-1">부산시 영도구 봉래나루로 33, 305호 | 대표 번호: 010-8203-0046</p>
      </footer>
    </main>
  );
}
