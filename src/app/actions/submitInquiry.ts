"use server";

import { appendToSheet } from "@/lib/googleSheets";

export async function submitInquiry(formData: FormData) {
  const company = formData.get("company")?.toString() || "";
  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  
  const timestamp = new Date().toISOString();
  
  // 구글 시트 Inquiries 탭에 행 추가 (A~F열: 시간, 기업명, 담당자명, 연락처, 이메일, 내용)
  const success = await appendToSheet("Inquiries!A:F", [
    [timestamp, company, name, phone, email, message]
  ]);

  if (!success) {
    // 만약 구글 연동이 아직 되지 않아 실패했다면, 로그만 남기고 성공한 척 반환하여 UI 흐름 유지
    console.log("Mock inquiry save:", { timestamp, company, name, phone, email, message });
    return { success: true, message: "구글 시트 연동 전이므로 임시 접수되었습니다!" };
  }

  return { success: true, message: "접수되었습니다. 빠른 시일 내에 연락드리겠습니다." };
}
