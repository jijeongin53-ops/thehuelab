"use client";

import { motion } from "framer-motion";
import { User, MapPin, Phone, BookOpen, Award, Briefcase } from "lucide-react";

export default function CEOProfile() {
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
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent-color to-purple-500 mb-6 flex items-center justify-center text-4xl shadow-lg shadow-accent-color/20">
                👨‍💼
              </div>
              <h3 className="text-3xl font-bold mb-2">지정인</h3>
              <p className="text-accent-color font-medium mb-6">더휴랩 대표 / 스마트크리에이터</p>
              
              <div className="space-y-4 text-sm text-gray-400 mb-8 border-t border-border-color pt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>부산시 영도구 봉래나루로 33, 305호</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>010-8203-0046</span>
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
                <Briefcase className="text-blue-400 w-5 h-5" />
                <h4 className="text-xl font-bold">주요 프로젝트 및 경력</h4>
              </div>
              <ul className="text-gray-300 space-y-3 leading-relaxed">
                <li>• 부산시 '하이부산바이부산' / G스타 사전 홍보 프로그램</li>
                <li>• 스마트시티 실증랩 'IF챌린지' / 부산관광벤처페스티벌</li>
                <li>• 한국관광공사 '예비관광벤처기업' 선정</li>
                <li>• 前 전포청춘드림센터협의회 회장 / 前 부울경관광벤처협의회 사무국장</li>
                <li>• AI·스마트관광 분야 ICC 협의회 책임 멘토</li>
                <li>• K-디지털 트레이닝 해커톤 멘토 / ICT 콤플렉스 전문 멘토</li>
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
                  <BookOpen className="text-yellow-400 w-5 h-5" />
                  <h4 className="text-xl font-bold">저서 & 강의</h4>
                </div>
                <ul className="text-gray-300 space-y-3 text-sm">
                  <li>• GPT-4와 함께하는 대학생 지식 성장 (23년 공저)</li>
                  <li>• GPT-4 신중년 세대의 디지털 라이프 (23년 공저)</li>
                  <li>• 페퍼민트 (26년 출간 예정)</li>
                  <li className="pt-2 border-t border-border-color mt-2 text-gray-400">
                    여행PD 양성 / AI 솔루션 활용 마케팅 / 비즈니스 업무 자동화 강의 다수
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
                  <Award className="text-pink-400 w-5 h-5" />
                  <h4 className="text-xl font-bold">자격 & 인증</h4>
                </div>
                <ul className="text-gray-300 space-y-3 text-sm">
                  <li>• R&D 실무전문가 수료</li>
                  <li>• 관광산업고도화 수료</li>
                  <li>• MICE관광전문경영인 수료</li>
                  <li>• 드림피아 스타트업 강사</li>
                  <li>• CSP 바리스타 스킬 자격</li>
                </ul>
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
