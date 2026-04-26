"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Tent } from "lucide-react";

const businesses = [
  {
    title: "AI 솔루션 개발",
    description: "기업의 고유한 데이터를 안전하게 학습하여 도메인 특화 맞춤형 오픈소스 AI 모델을 구축합니다. 더 빠르고 더 날카로운 비즈니스 인사이트를 위한 최적의 엔터프라이즈 솔루션입니다.",
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "AI 업무 자동화 구축",
    description: "사람이 하던 반복되는 비효율적인 업무 사이클을 AI 에이전트로 혁신합니다. 최소의 리소스로 최대의 아웃풋을 내는 자동화 파이프라인 설계.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    className: "md:col-span-1 md:row-span-2 flex flex-col justify-between",
  },
  {
    title: "전시행사기획 대행",
    description: "데이터와 최신 트렌드를 결합한 스마크한 온/오프라인 전시행사를 기획하고 운영합니다. 참가자와 주최자 모두가 완벽하게 몰입하는 생생한 경험을 선사합니다.",
    icon: <Tent className="w-6 h-6 text-purple-400" />,
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Business() {
  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-accent-color uppercase mb-2">Our Businesses</h2>
        <h3 className="text-3xl md:text-5xl font-bold">압도적인 퍼포먼스를 만드는 동력</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(250px,auto)]">
        {businesses.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`glass-card p-8 group hover:bg-white/[0.05] transition-colors relative overflow-hidden ${item.className}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              {item.icon}
            </div>
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
