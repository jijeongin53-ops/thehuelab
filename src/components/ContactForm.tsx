"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { submitInquiry } from "@/app/actions/submitInquiry";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await submitInquiry(formData);
      setMessage(res.message);
      if (res.success) {
        (e.target as HTMLFormElement).reset();
      }
    } catch (err) {
      setMessage("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">프로젝트에 대해 이야기해볼까요?</h2>
        <p className="text-gray-400 mb-12">
          간단한 정보를 남겨주시면, 더휴랩의 전문가가 가장 최적화된 AI 도입 솔루션을 제안해 드립니다.
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
              <label className="block text-sm font-medium text-gray-400 mb-2">기업명</label>
              <input required name="company" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" placeholder="예: 구글 코리아" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">당당자 성함</label>
              <input required name="name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" placeholder="홍길동" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">연락처</label>
              <input required name="phone" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" placeholder="010-0000-0000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">이메일</label>
              <input required type="email" name="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors" placeholder="hello@example.com" />
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">문의 내용</label>
            <textarea required name="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors resize-none" placeholder="어떤 서비스가 필요하신지 자유롭게 적어주세요."></textarea>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? "전송 중..." : (
              <>무료 상담 신청하기 <Send className="w-4 h-4" /></>
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
