import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "가온방문요양센터",
  description: "가온 방문요양센터, 인천 서구",
  keywords: [
    "인천 방문요양",
    "서구 방문요양",
    "가온 방문요양",
    "가온 방문요양센터",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-50"}>
        {/* header */}
        <Header />
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
