"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-color/30 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl"
      >
        <span className="inline-block py-1 px-3 rounded-full glass-card text-sm text-gray-300 font-medium mb-6">
          어디에서도 본 적 없는 스마트크리에이터
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          미래를 앞당기는<br />
          <span className="text-gradient">AI 솔루션, 더휴랩</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          커스텀 AI 모델부터 기업 맞춤형 업무 자동화, 차원이 다른 전시행사 대행까지.
          가장 진보된 기술로 귀사의 압도적 성장을 디자인합니다.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            프로젝트 의뢰하기
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full glass-card hover:bg-white/10 transition-colors"
          >
            더휴랩 알아보기
          </a>
        </div>
      </motion.div>
    </section>
  );
}
