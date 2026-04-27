import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE HUE LAB",
  description: "Accelerate Your Future with AI",
};

export const revalidate = 60; // Revalidate every 60 seconds

import { LanguageProvider } from "@/lib/i18n";
import { getI18nDictionaries } from "@/lib/googleSheets";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dicts = await getI18nDictionaries();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialDictionaries={dicts}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
