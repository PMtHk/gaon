import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "가온방문요양센터",
  description: "가온 방문요양센터를 찾아주셔서 감사합니다.",
  keywords: [
    "인천 방문요양",
    "서구 방문요양",
    "가온 방문요양",
    "가온 방문요양센터",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "",
    title: "가온방문요양센터",
    description: "가온 방문요양센터를 찾아주셔서 감사합니다.",
  },
  verification: {
    other: {
      "naver-site-verification": "4336bfec899147cd3b8282fd013e0f11dad11d89",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-50"}>
        {/* <Header />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer /> */}
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
