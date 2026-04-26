"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ko" | "ja";

type Dictionary = {
  header: {
    business: string;
    about: string;
    history: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    btnContact: string;
    btnAbout: string;
  };
  business: {
    subtitle: string;
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  ceo: {
    title: string;
    role: string;
    address: string;
    phone: string;
    historyTitle: string;
    historyItems: string[];
    bookTitle: string;
    bookItems: string[];
    bookFooter: string;
    certTitle: string;
    certItems: string[];
  };
  history: {
    subtitle: string;
    title: string;
    items: { year: string; title: string; desc: string; }[];
  };
  contact: {
    title: string;
    desc: string;
    company: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    btnSubmit: string;
    btnSending: string;
    msgSuccess: string;
    msgError: string;
  };
};

const dictionaries: Record<Language, Dictionary> = {
  en: {
    header: { business: "Business", about: "About CEO", history: "History", contact: "Contact Us" },
    hero: {
      badge: "Unprecedented Smart Creators",
      titleLine1: "Accelerate Your Future",
      titleLine2: "with theHUElab",
      desc: "From custom AI models to enterprise workflow automation and next-gen event planning. We design overwhelming growth with the most advanced technologies.",
      btnContact: "Start a Project",
      btnAbout: "Discover Us"
    },
    business: {
      subtitle: "Our Businesses",
      title: "Driving Absolute Performance",
      items: [
        { title: "AI Solution Development", desc: "We build domain-specific open-source AI models using your secure enterprise data for sharp insights." },
        { title: "AI Business Automation", desc: "Revolutionize inefficient repetitive workflows with AI agents. Automation pipelines delivering maximum output with minimal resources." },
        { title: "Event Planning Agency", desc: "Data-driven smart offline/online event planning. We deliver fully immersive experiences for both hosts and attendees." }
      ]
    },
    ceo: {
      title: "Rei JI",
      role: "CEO of theHUElab / Smart Creator",
      address: "Room 305, 33 Bongnaenaru-ro, Yeongdo-gu, Busan",
      phone: "010-8203-0046",
      historyTitle: "Key Projects & Career",
      historyItems: [
        "Busan City 'Hi Busan Buy Busan' / G-Star Promo",
        "Smart City Testbed 'IF Challenge' / Busan Tourism Venture Festival",
        "Selected as 'Pre-Tourism Venture Company' by KTO",
        "Former President of Jeonpo Youth Dream Center",
        "Lead Mentor for AI/Smart Tourism ICC",
        "Mentor for K-Digital Training Hackathon / ICT Complex"
      ],
      bookTitle: "Books & Lectures",
      bookItems: [
        "Knowledge Growth for College Students with GPT-4 (Co-author, 23)",
        "Digital Life for Seniors with GPT-4 (Co-author, 23)",
        "Peppermint (Expected 2026)"
      ],
      bookFooter: "Lectures on Travel PD Training / AI Marketing / Business Automation",
      certTitle: "Certifications",
      certItems: [
        "R&D Expert Course Completion",
        "Tourism Industry Advancement Course",
        "MICE Tourism Professional Management Course",
        "Dream Pia Startup Instructor",
        "CSP Barista Skills Cert"
      ]
    },
    history: {
      subtitle: "History & References",
      title: "Our Proven Milestones",
      items: [
        { year: "2026", title: "Global Tourism Marketing Automation", desc: "Awarded Best Content for K-Content Tourism Academy & Multi-language AI Chatbot Support." },
        { year: "2025", title: "AI EdTech Solution for Busan Women's University", desc: "Selected as operator and builder of a custom student management AI reducing inefficiency by 80%." },
        { year: "2024", title: "Enterprise B2B Automation Milestones", desc: "Introduction of Job Fair Automation Toolkit and signed multiple corporate automation agreements." },
        { year: "2023", title: "Tourism Startup Awards & AI Proof of Concept", desc: "Selected for MOIS 'Empathy e-Full' and Busan Economic Promotion Agency Incubator." }
      ]
    },
    contact: {
      title: "Let's Build the Future Together",
      desc: "Leave simple details and theHUElab experts will propose the most optimized AI solutions for you.",
      company: "Company Name",
      name: "Contact Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "How can we help you?",
      btnSubmit: "Request Consultation",
      btnSending: "Sending...",
      msgSuccess: "Your inquiry has been successfully received. We will contact you soon.",
      msgError: "An error occurred. Please try again later."
    }
  },
  ko: {
    header: { business: "비즈니스", about: "대표 소개", history: "연혁", contact: "문의하기" },
    hero: {
      badge: "어디에서도 본 적 없는 스마트크리에이터",
      titleLine1: "미래를 앞당기는",
      titleLine2: "AI 솔루션, theHUElab",
      desc: "커스텀 AI 모델부터 기업 맞춤형 업무 자동화, 차원이 다른 전시행사 대행까지. 가장 진보된 기술로 귀사의 압도적 성장을 디자인합니다.",
      btnContact: "프로젝트 의뢰하기",
      btnAbout: "theHUElab 알아보기"
    },
    business: {
      subtitle: "Our Businesses",
      title: "압도적인 퍼포먼스를 만드는 동력",
      items: [
        { title: "AI 솔루션 개발", desc: "기업의 고유한 데이터를 안전하게 학습하여 도메인 특화 맞춤형 오픈소스 AI 모델을 구축합니다. 더 빠르고 더 날카로운 비즈니스 인사이트를 위한 최적의 엔터프라이즈 솔루션입니다." },
        { title: "AI 업무 자동화 구축", desc: "사람이 하던 반복되는 비효율적인 업무 사이클을 AI 에이전트로 혁신합니다. 최소의 리소스로 최대의 아웃풋을 내는 자동화 파이프라인 설계." },
        { title: "전시행사기획 대행", desc: "데이터와 최신 트렌드를 결합한 스마트한 온/오프라인 전시행사를 기획하고 운영합니다. 참가자와 주최자 모두가 완벽하게 몰입하는 생생한 경험을 선사합니다." }
      ]
    },
    ceo: {
      title: "지정인",
      role: "theHUElab 대표 / 스마트크리에이터",
      address: "부산시 영도구 봉래나루로 33, 305호",
      phone: "010-8203-0046",
      historyTitle: "주요 프로젝트 및 경력",
      historyItems: [
        "부산시 '하이부산바이부산' / G스타 사전 홍보 프로그램",
        "스마트시티 실증랩 'IF챌린지' / 부산관광벤처페스티벌",
        "한국관광공사 '예비관광벤처기업' 선정",
        "前 전포청춘드림센터협의회 회장 / 前 부울경관광벤처협의회 사무국장",
        "AI·스마트관광 분야 ICC 협의회 책임 멘토",
        "K-디지털 트레이닝 해커톤 멘토 / ICT 콤플렉스 전문 멘토"
      ],
      bookTitle: "저서 & 강의",
      bookItems: [
        "GPT-4와 함께하는 대학생 지식 성장 (23년 공저)",
        "GPT-4 신중년 세대의 디지털 라이프 (23년 공저)",
        "페퍼민트 (26년 출간 예정)"
      ],
      bookFooter: "여행PD 양성 / AI 솔루션 활용 마케팅 / 비즈니스 업무 자동화 강의 다수",
      certTitle: "자격 & 인증",
      certItems: [
        "R&D 실무전문가 수료",
        "관광산업고도화 수료",
        "MICE관광전문경영인 수료",
        "드림피아 스타트업 강사",
        "CSP 바리스타 스킬 자격"
      ]
    },
    history: {
      subtitle: "History & References",
      title: "성공을 증명하는 발자취",
      items: [
        { year: "2026", title: "글로벌 관광 마케팅 자동화 파이프라인 구축", desc: "K-콘텐츠 관광마케팅 아카데미 베스트 콘텐츠 선정 및 다개국어 AI 챗봇 인프라 지원." },
        { year: "2025", title: "부산여대 라이즈 사업 전용 AI 에듀테크 솔루션 납품", desc: "교육 현장의 비효율을 80% 감소시키는 맞춤형 학생 관리 AI 시스템 구축 및 운영사 선정." },
        { year: "2024", title: "엔터프라이즈 B2B 업무 자동화 성공 사례 확보", desc: "취업박람회 운영 자동화 툴킷 도입 및 다수 기업 협약 체결로 운영 비용 획기적 절감." },
        { year: "2023", title: "관광스타트업 성장부문 선정 및 AI 기술 적용 실증", desc: "행정안전부 '공감e가득' 사업 및 부산경제진흥원 기술창업 인큐베이팅 선정." }
      ]
    },
    contact: {
      title: "프로젝트에 대해 이야기해볼까요?",
      desc: "간단한 정보를 남겨주시면, theHUElab의 전문가가 가장 최적화된 AI 도입 솔루션을 제안해 드립니다.",
      company: "기업명",
      name: "담당자 성함",
      phone: "연락처",
      email: "이메일",
      message: "문의 내용",
      btnSubmit: "무료 상담 신청하기",
      btnSending: "전송 중...",
      msgSuccess: "접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      msgError: "오류가 발생했습니다. 잠시 후 다시 시도해주세요."
    }
  },
  ja: {
    header: { business: "事業領域", about: "代表紹介", history: "沿革", contact: "お問い合わせ" },
    hero: {
      badge: "かつてないスマートクリエイター",
      titleLine1: "未来を加速する",
      titleLine2: "AIソリューション、theHUElab",
      desc: "カスタムAIモデルから企業の業務自動化、別次元のイベント企画代行まで。最先端の技術で圧倒的な成長をデザインします。",
      btnContact: "プロジェクトを依頼する",
      btnAbout: "theHUElabの詳細"
    },
    business: {
      subtitle: "Our Businesses",
      title: "圧倒的なパフォーマンスを生む力",
      items: [
        { title: "AIソリューション開発", desc: "企業の固有データを安全に学習させ、特定ドメイン向けのカスタムオープンソースAIモデルを構築します。鋭いビジネスインサイトを提供する最適なソリューションです。" },
        { title: "AI業務自動化の構築", desc: "繰り返される非効率な業務サイクルをAIエージェントで革新します。最小のリソースで最大のアウトプットを生み出す自動化パイプラインの設計。" },
        { title: "展示会・イベント企画代行", desc: "データと最新のトレンドを組み合わせたスマートなイベントを企画・運営します。参加者と主催者が共に没入できる体験を提供します。" }
      ]
    },
    ceo: {
      title: "ジ・ジョンイン",
      role: "theHUElab 代表 / スマートクリエイター",
      address: "釜山広域市影島区蓬莱ナル路33, 305号",
      phone: "010-8203-0046",
      historyTitle: "主要プロジェクト・経歴",
      historyItems: [
        "釜山市「ハイ釜山・バイ釜山」 / G-Star広報",
        "スマートシティ実証「IFチャレンジ」 / 釜山観光ベンチャーフェスティバル",
        "韓国観光公社「予備観光ベンチャー企業」選定",
        "前 釜山観光ベンチャー協議会 事務局長",
        "AI・スマート観光 ICC協議会 責任メンター",
        "K-デジタルハッカソン メンター"
      ],
      bookTitle: "著書・講義",
      bookItems: [
        "GPT-4と歩む大学生の知識成長 (共著/23年)",
        "GPT-4 シニア世代のデジタルライフ (共著/23年)",
        "ペパーミント (26年 出版予定)"
      ],
      bookFooter: "旅行PD養成 / AIマーケティング / 業務自動化に関する講義多数",
      certTitle: "資格・認定",
      certItems: [
        "R&D 実務専門家修了",
        "観光産業高度化修了",
        "MICE観光専門経営人修了",
        "ドリームピアスタートアップ講師",
        "CSP バリスタ資格"
      ]
    },
    history: {
      subtitle: "History & References",
      title: "成功を証明する軌跡",
      items: [
        { year: "2026", title: "グローバル観光マーケティング自動化構築", desc: "K-コンテンツアカデミー優秀コンテンツ選定、多言語AIチャットボット導入。" },
        { year: "2025", title: "釜山女子大学向け AIエドテックソリューション", desc: "教育現場の非効率を80%削減する学生管理AIシステムを構築。" },
        { year: "2024", title: "B2B業務自動化の成功事例確保", desc: "就職博覧会の運営自動化ツールキットを導入し、運営コストを画期的に削減。" },
        { year: "2023", title: "観光スタートアップ成長部門選定", desc: "行政安全部の実証事業および釜山経済振興院の技術創業インキュベーションに選定。" }
      ]
    },
    contact: {
      title: "未来を共に構築しましょう",
      desc: "簡単な情報を残していただければ、theHUElabの専門家が最適なAIソリューションをご提案します。",
      company: "会社名",
      name: "担当者名",
      phone: "電話番号",
      email: "メールアドレス",
      message: "お問い合わせ内容",
      btnSubmit: "無料相談を申し込む",
      btnSending: "送信中...",
      msgSuccess: "受け付けました。早急にご連絡いたします。",
      msgError: "エラーが発生しました。後でもう一度お試しください。"
    }
  }
};

type LanguageContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default is 'en' as requested.
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
        {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
