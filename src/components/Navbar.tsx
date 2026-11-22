"use client";

import type { PageTab } from "@/data/portfolio";

interface NavbarProps {
  activePage: PageTab;
  onSelectPage: (page: PageTab) => void;
}

const NAV_ITEMS: { id: PageTab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage, onSelectPage }: NavbarProps) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar-list">
        {NAV_ITEMS.map((item) => (
          <li className="navbar-item" key={item.id}>
            <button
              type="button"
              className={`navbar-link${activePage === item.id ? " active" : ""}`}
              aria-current={activePage === item.id ? "page" : undefined}
              onClick={() => onSelectPage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
