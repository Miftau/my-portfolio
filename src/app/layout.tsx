import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Yusuf Muftaudeen (Dev. Progress) — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Yusuf Muftaudeen (Dev. Progress) — Results-driven AI Engineer, Full-Stack Developer, and CTO with 6+ years building intelligent SaaS platforms, ML pipelines, LLM integrations, mobile apps, and cloud systems.",
  icons: {
    icon: "/images/LOGO.png",
  },
  openGraph: {
    title:
      "Yusuf Muftaudeen (Dev. Progress) — AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer, Full-Stack Developer, and CTO with 6+ years architecting scalable AI, SaaS, mobile, and cloud platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
