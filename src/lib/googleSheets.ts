import { google } from "googleapis";

export async function getGoogleSheetsAuth() {
  const email = process.env.GOOGLE_CLIENT_EMAIL;
  // Replace escaped newlines with actual newlines in private key
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    return null; // 실 환경변수가 없으면 null 반환 (Fallback 사용을 위해)
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function getSheetData(range: string) {
  const sheets = await getGoogleSheetsAuth();
  if (!sheets) {
    console.warn("No Google Auth configured. Returning empty data for:", range);
    return [];
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });
    return response.data.values || [];
  } catch (error) {
    console.error("Error fetching sheet data for range", range, error);
    return [];
  }
}

export async function appendToSheet(range: string, values: any[][]) {
  const sheets = await getGoogleSheetsAuth();
  if (!sheets) {
    console.warn("No Google Auth configured. Would have written to range:", range);
    return false;
  }

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: values,
      },
    });
    return true;
  } catch (error) {
    console.error("Error appending to sheet:", error);
    return false;
  }
}
