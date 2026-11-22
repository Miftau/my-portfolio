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
  title: "Yusuf Muftaudeen (Dev. Progress) — Software Engineer & Portfolio",
  description:
    "Personal portfolio of Yusuf Muftaudeen (Dev. Progress), Full-Stack Software Engineer and Creative Director building SaaS platforms, AI labs, mobile apps, and modern web systems.",
  icons: {
    icon: "/images/LOGO.png",
  },
  openGraph: {
    title: "Yusuf Muftaudeen (Dev. Progress) — Software Engineer",
    description:
      "Full-Stack Software Engineer building high-impact SaaS platforms, AI labs, mobile apps, and cloud web experiences.",
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
