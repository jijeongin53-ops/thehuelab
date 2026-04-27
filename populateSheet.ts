import { google } from "googleapis";
import { defaultDictionaries } from "./src/lib/i18nData";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const flattenObject = (obj: any, prefix = ""): Record<string, string> => {
  return Object.keys(obj).reduce((acc: Record<string, string>, k: string) => {
    const pre = prefix.length ? prefix + "." : "";
    if (typeof obj[k] === "object" && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else if (Array.isArray(obj[k])) {
      obj[k].forEach((item: any, i: number) => {
        if (typeof item === "object") {
           Object.assign(acc, flattenObject(item, `${pre}${k}.${i}`));
        } else {
           acc[`${pre}${k}.${i}`] = item;
        }
      });
    } else {
      acc[pre + k] = obj[k];
    }
    return acc;
  }, {});
};

async function run() {
  const email = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !privateKey || !spreadsheetId) {
    console.error("Missing credentials");
    return;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  console.log("Checking if Translations tab exists...");
  const sheetMeta = await sheets.spreadsheets.get({ spreadsheetId });
  const hasTranslations = sheetMeta.data.sheets?.some(s => s.properties?.title === "Translations");

  if (!hasTranslations) {
    console.log("Creating Translations tab...");
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: "Translations" } } }]
      }
    });
  }

  const flatKo = flattenObject(defaultDictionaries.ko);
  const flatEn = flattenObject(defaultDictionaries.en);
  const flatJa = flattenObject(defaultDictionaries.ja);

  // Collect all unique keys
  const keys = Array.from(new Set([
    ...Object.keys(flatKo),
    ...Object.keys(flatEn),
    ...Object.keys(flatJa),
  ]));

  const rows = [["Key", "KO", "EN", "JA"]];
  
  for (const key of keys) {
    rows.push([
      key,
      flatKo[key] || "",
      flatEn[key] || "",
      flatJa[key] || "",
    ]);
  }

  console.log(`Writing ${rows.length} rows to Translations!A:D...`);
  
  // Clear first
  await sheets.spreadsheets.values.clear({
    spreadsheetId,
    range: "Translations!A:D"
  });

  // Write
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: "Translations!A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: rows
    }
  });

  console.log("Done!");
}

run().catch(console.error);
