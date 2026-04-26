"use client";

import { motion } from "framer-motion";

const historyData = [
  {
    year: "2026",
    title: "글로벌 관광 마케팅 자동화 파이프라인 구축",
    description: "K-콘텐츠 관광마케팅 아카데미 베스트 콘텐츠 선정 및 다개국어 AI 챗봇 인프라 지원.",
  },
  {
    year: "2025",
    title: "부산여대 라이즈 사업 전용 AI 에듀테크 솔루션 납품",
    description: "교육 현장의 비효율을 80% 감소시키는 맞춤형 학생 관리 AI 시스템 구축 및 운영사 선정.",
  },
  {
    year: "2024",
    title: "엔터프라이즈 B2B 업무 자동화 성공 사례 확보",
    description: "취업박람회 운영 자동화 툴킷 도입 및 다수 기업 협약 체결로 운영 비용 획기적 절감.",
  },
  {
    year: "2023",
    title: "관광스타트업 성장부문 선정 및 AI 기술 적용 실증",
    description: "행정안전부 '공감e가득' 사업 및 부산경제진흥원 기술창업 인큐베이팅 선정.",
  },
];

export default function History() {
  return (
    <section id="history" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-accent-color uppercase mb-2">History & References</h2>
        <h3 className="text-3xl md:text-5xl font-bold">성공을 증명하는 발자취</h3>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {historyData.map((item, idx) => (
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
                <h4 className="font-bold text-xl text-white">{item.title}</h4>
              </div>
              <p className="text-accent-color font-mono font-semibold mb-3">{item.year}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
