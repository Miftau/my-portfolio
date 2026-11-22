# Yusuf Muftaudeen (Dev. Progress) — Personal Portfolio

A modern personal portfolio built with **Next.js (App Router)** and **TypeScript**, showcasing recent production SaaS platforms, AI labs, mobile apps, and web engineering projects.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript & React 19
- **Icons:** Lucide React
- **Typography:** Poppins via `next/font/google`

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio locally.

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/` — Next.js App Router layout, global stylesheet, and home route
- `src/components/` — Modular UI components (`Sidebar`, `Navbar`, `AboutSection`, `ResumeSection`, `PortfolioSection`, `ContactSection`)
- `src/data/portfolio.ts` — Structured portfolio data, projects, skills, testimonials, and experience
- `public/images/` — Static images and project showcase previews
