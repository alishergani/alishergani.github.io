"use client";

import { motion } from "framer-motion";
import { AnimatedEntrance } from "./animated-entrance";
import { SectionContainer } from "./section-container";

const metrics = [
  { label: "Years Experience", value: "6+" },
  { label: "Products Built", value: "4+" },
  { label: "Industries", value: "3" },
  { label: "Features Shipped", value: "100+" },
];

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "NestJS",
  "Nx",
  "single-spa",
  "GraphQL",
  "Microfrontends",
  "Performance Optimization",
  "Code Review",
  "Mentoring",
];

const experiences = [
  {
    company: "DAR",
    role: "Senior Frontend Developer",
    period: "Jan 2026 — Present",
    subtitle: "React • Nx • single-spa • NestJS",
    responsibilities: [
      "Developed React microfrontends",
      "Built backend and BFF services",
      "Maintained shared TypeScript contracts",
      "Participated in architecture decisions",
      "Improved release stability",
      "Collaborated cross-functionally to deliver features reliably",
    ],
  },
  {
    company: "Alatau City Market",
    role: "Senior Frontend Developer",
    period: "Apr 2024 — Sep 2025",
    subtitle: "Travel Platform",
    responsibilities: [
      "Developed product features",
      "Mentored developers",
      "Conducted code reviews",
      "Participated in architecture discussions",
      "Improved maintainability and team delivery workflows",
    ],
  },
  {
    company: "Kaspi.kz",
    role: "Frontend Developer",
    period: "Jun 2022 — Jan 2023",
    subtitle: "Marketplace",
    responsibilities: [
      "Worked with MithrilJS",
      "Maintained legacy systems",
      "Improved code quality",
      "Delivered features within a large fintech ecosystem",
    ],
  },
];

const projects = [
  { title: "AI Interview Assistant", stack: "React + OpenAI" },
  { title: "Travel Platform", stack: "Next.js + TypeScript" },
  { title: "LMS Platform", stack: "Nx + single-spa" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl border border-portfolio-accent/70 bg-portfolio-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300";
const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-xl border border-portfolio-border bg-white/5 px-5 py-3 text-sm font-semibold text-portfolio-text transition hover:-translate-y-0.5 hover:border-portfolio-accent/70 hover:text-sky-200";

export function PortfolioPage() {
  return (
    <main className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-[-260px] h-[520px] bg-accent-radial" />

      <SectionContainer id="home" className="pt-6 sm:pt-8">
        <AnimatedEntrance>
          <div className="relative min-h-[86vh] overflow-hidden rounded-3xl border border-white/10 bg-portfolio-card">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.88),rgba(15,23,42,0.64)),radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.22),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.2),rgba(15,23,42,0.75)),url('/hero-bg.svg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

            <header className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
              <p className="text-sm font-medium tracking-[0.16em] text-white/90">Alisher M</p>
              <nav className="hidden items-center gap-6 md:flex">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs uppercase tracking-[0.18em] text-slate-200/85 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </header>

            <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 pb-16 pt-12 text-center sm:px-10">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/70 bg-slate-900/70 text-3xl font-semibold text-white shadow-glow sm:h-32 sm:w-32">
                AM
              </div>

              <p className="mt-7 inline-flex rounded-full border border-white/20 bg-black/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-200">
                Senior Frontend Engineer
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Building fintech, travel and scalable web platforms.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200/90">
                6+ years of experience delivering production-grade products across fintech, travel,
                LMS and marketplace domains. Worked with DAR • Kaspi.kz • Jusan Travel • Kassa24.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  className={primaryButtonClass}
                  href="https://www.linkedin.com/in/alisher-meldebek-293099216/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className={secondaryButtonClass}
                  href="https://github.com/alishergani"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a className={secondaryButtonClass} href="/resume">
                  CV
                </a>
                <a className={secondaryButtonClass} href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </AnimatedEntrance>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <AnimatedEntrance key={item.label} delay={index * 0.08}>
              <div className="rounded-2xl border border-portfolio-border bg-portfolio-card p-6 shadow-[0_14px_50px_rgba(2,6,23,0.45)]">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-portfolio-muted">{item.label}</p>
              </div>
            </AnimatedEntrance>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="pt-28">
        <AnimatedEntrance>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-portfolio-muted">
            I&apos;m a Senior Frontend Engineer with 6+ years of experience building fintech,
            marketplace, travel and LMS products. I specialize in React, TypeScript, frontend
            architecture, microfrontends and performance optimization. Currently working on LMS
            systems within Nx monorepo architecture, contributing to frontend systems, backend
            integrations and engineering practices. I actively mentor engineers, lead code reviews
            and contribute to architecture decisions across teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimatedEntrance>
      </SectionContainer>

      <SectionContainer id="experience" className="pt-28">
        <AnimatedEntrance>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Experience</h2>
        </AnimatedEntrance>
        <div className="relative mt-10 space-y-6 border-l border-white/10 pl-6 sm:pl-10">
          {experiences.map((item, index) => (
            <AnimatedEntrance key={`${item.company}-${item.period}`} delay={index * 0.06}>
              <div className="relative rounded-2xl border border-portfolio-border bg-portfolio-card p-7">
                <div className="absolute -left-[34px] top-10 h-3 w-3 rounded-full bg-portfolio-accent shadow-glow sm:-left-[46px]" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-portfolio-accent">
                  {item.company}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-portfolio-muted">
                  {item.subtitle} • {item.period}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300 sm:text-base">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-1 text-portfolio-accent">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedEntrance>
          ))}
        </div>
        <AnimatedEntrance delay={0.25}>
          <p className="mt-8 text-sm text-portfolio-muted">
            Earlier experience: Kassa24 (Frontend Developer, payment integrations and widgets),
            iBEC Systems (Junior Software Engineer).
          </p>
        </AnimatedEntrance>
      </SectionContainer>

      {/* <SectionContainer id="projects" className="pt-28">
        <AnimatedEntrance>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
        </AnimatedEntrance>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((item, index) => (
            <AnimatedEntrance key={item.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-card"
              >
                <div className="relative h-44 border-b border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-900 to-cyan-400/10">
                  <div className="absolute inset-4 rounded-xl border border-white/10 bg-white/5" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-portfolio-muted">{item.stack}</p>
                </div>
              </motion.article>
            </AnimatedEntrance>
          ))}
        </div>
      </SectionContainer> */}

      <SectionContainer id="philosophy" className="pt-28">
        <AnimatedEntrance>
          <div className="glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Engineering Philosophy</h2>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300">
              Strong products are built where technology and people work together. I believe
              engineering is not only about writing code but also about building systems, processes
              and teams that scale.
            </p>
          </div>
        </AnimatedEntrance>
      </SectionContainer>

      <SectionContainer id="contact" className="pt-28">
        <AnimatedEntrance>
          <div className="rounded-3xl border border-portfolio-accent/30 bg-gradient-to-r from-sky-400/10 via-slate-900 to-cyan-300/10 p-8 sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-portfolio-accent">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Open to opportunities
            </h2>
            <p className="mt-3 text-lg text-slate-300">Remote | EU | International</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className={primaryButtonClass}
                href="https://www.linkedin.com/in/alisher-meldebek-293099216/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className={secondaryButtonClass} href="mailto:alishermeldebek@gmail.com">
                Email
              </a>
              <a
                className={secondaryButtonClass}
                href="https://github.com/alishergani"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </AnimatedEntrance>
      </SectionContainer>
    </main>
  );
}
