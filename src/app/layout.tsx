import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikuhitsu（肉筆） - AI時代の人間制作証明",
  description:
    "あなたが描いた絵が、AIではなくあなた自身の手によるものだと、暗号で証明する。イラストレーター・漫画家・映像作家のためのC2PA準拠の制作証明サービス。",
  openGraph: {
    title: "Nikuhitsu（肉筆） - AI時代の人間制作証明",
    description:
      "あなたが描いた絵が、AIではなくあなた自身の手によるものだと、暗号で証明する。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikuhitsu（肉筆） - AI時代の人間制作証明",
    description:
      "あなたが描いた絵が、AIではなくあなた自身の手によるものだと、暗号で証明する。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
