"use client";

import { useState } from "react";
import type { PageTab } from "@/data/portfolio";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";

export default function PortfolioApp() {
  const [activePage, setActivePage] = useState<PageTab>("about");

  const handleSelectPage = (page: PageTab) => {
    setActivePage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} onSelectPage={handleSelectPage} />

        <AboutSection active={activePage === "about"} />
        <ResumeSection active={activePage === "resume"} />
        <PortfolioSection active={activePage === "portfolio"} />
        <ContactSection active={activePage === "contact"} />
      </div>
    </main>
  );
}
