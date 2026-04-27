import { google } from "googleapis";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import { defaultDictionaries, Language, Dictionary } from "./i18nData";

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

export async function getI18nDictionaries(): Promise<Record<Language, Dictionary>> {
  const data = await getSheetData("Translations!A:E"); // Adjust range as needed
  
  // Start with default dictionaries as a fallback base
  const result = cloneDeep(defaultDictionaries);

  if (!data || data.length < 2) {
    return result;
  }

  // Assuming row 0 is header: ['Key', 'KO', 'EN', 'JA']
  const headers = data[0].map((h: string) => h.toLowerCase().trim());
  const keyIndex = headers.findIndex(h => h === 'key');
  
  if (keyIndex === -1) {
    console.warn("No 'Key' column found in sheet. Returning default dictionaries.");
    return result;
  }

  // Find column indexes for each language
  const langIndexes: Record<Language, number> = {
    ko: headers.findIndex(h => h === 'ko'),
    en: headers.findIndex(h => h === 'en'),
    ja: headers.findIndex(h => h === 'ja'),
  };

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const key = row[keyIndex];
    if (!key) continue;

    for (const lang of Object.keys(langIndexes) as Language[]) {
      const idx = langIndexes[lang];
      if (idx !== -1 && row[idx] !== undefined) {
        set(result[lang], key, row[idx]);
      }
    }
  }

  return result;
}
