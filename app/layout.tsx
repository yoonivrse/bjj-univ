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
  title: "전대주 | 전국 대학생 주짓수 대회",
  description: "서강대학교 x 이화여대 주짓수 동아리 T.A.P이 주최하는 전국 대학생 주짓수 대회 공식 홈페이지입니다.",
  keywords: ["전대주", "전국대학생주짓수대회", "주짓수", "BJJ", "대학생 대회", "T.A.P", "서강대", "이화여대"],
  openGraph: {
    title: "전대주 | 전국 대학생 주짓수 대회",
    description: "서강대학교 x 이화여대 주짓수 동아리 T.A.P이 주최하는 전국 대학생 주짓수 대회",
    url: "https://bjj-univ-test.netlify.app",
    siteName: "전대주",
    locale: "ko_KR",
    type: "website",
  },
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 