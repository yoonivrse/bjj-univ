import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "전국 대학생 주짓수 대회",
  description: "T.A.P 주최 전국 대학생 주짓수 대회 공식 홈페이지입니다.",
  keywords: "전국대학생주짓수대회, 전대주, TAP, tap, 이대, 서강대, 주짓수 대회, 대학생 주짓수 대회",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}


