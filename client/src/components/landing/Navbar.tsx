"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      ).filter(Boolean) as HTMLElement[];

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.replace("#", ""));
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "border-b transition-all duration-300",
        isScrolled
          ? "border-border bg-background/95 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "border-border/70 bg-background/85 backdrop-blur-md",
      ].join(" ")}
    >
      {/* Top pixel accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <Container>
        <nav className="relative flex h-20 items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Voxible Home"
          >
            <div className="relative flex items-center">
              <Image
                src="/logo.png"
                alt="Voxible"
                width={2000}
                height={80}
                priority
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
              />

              {/* Small brand pixel */}
              <span className="absolute -right-1 top-1 size-1.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </a>

          {/* Desktop Center Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            <div className="flex items-center border border-border bg-surface/70 p-1 shadow-[0_4px_18px_rgba(0,0,0,0.025)] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={[
                      "group relative flex h-9 items-center px-4",
                      "font-main text-[11px]",
                      "transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground",
                    ].join(" ")}
                  >
                    {/* Active pixel */}
                    <span
                      className={[
                        "mr-2 size-1.5 transition-all duration-200",
                        isActive
                          ? "bg-primary opacity-100"
                          : "bg-border opacity-0 group-hover:opacity-100",
                      ].join(" ")}
                    />

                    {link.label}

                    {/* Active underline */}
                    <span
                      className={[
                        "absolute bottom-0 left-4 right-4 h-px",
                        "origin-left bg-primary",
                        "transition-transform duration-300",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden items-center gap-5 md:flex lg:hidden">
            {NAV_LINKS.slice(0, 3).map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={[
                    "font-main text-[11px] transition-colors duration-200",
                    isActive
                      ? "text-primary"
                      : "text-foreground-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-2 md:flex">
            {/* System Status */}
            <div className="mr-1 hidden items-center gap-2 border border-border bg-surface px-2.5 py-2 xl:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping bg-secondary opacity-30" />
                <span className="relative inline-flex size-2 bg-secondary" />
              </span>

              <span className="font-main text-[9px] uppercase tracking-[0.12em] text-foreground-muted">
                System Live
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={[
                "group relative grid size-10 place-items-center",
                "overflow-hidden border border-border bg-surface",
                "text-foreground",
                "transition-all duration-200",
                "hover:border-primary/60 hover:text-primary",
              ].join(" ")}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              <span className="absolute inset-0 translate-y-full bg-primary-soft transition-transform duration-300 group-hover:translate-y-0" />

              {theme === "light" ? (
                <Moon
                  size={15}
                  strokeWidth={1.6}
                  className="relative z-10"
                />
              ) : (
                <Sun
                  size={15}
                  strokeWidth={1.6}
                  className="relative z-10"
                />
              )}

              <span className="absolute bottom-0 right-0 size-1.5 bg-primary" />
            </button>

            {/* Sign In */}
            <button
              type="button"
              className={[
                "group relative h-10 overflow-hidden",
                "px-3 font-main text-[11px]",
                "text-foreground-muted",
                "transition-colors duration-200",
                "hover:text-foreground",
              ].join(" ")}
            >
              <span className="relative z-10">
                Sign In
              </span>

              <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            {/* Primary CTA */}
            <button
              type="button"
              className={[
                "group relative flex h-10 items-center gap-2",
                "overflow-hidden border border-primary",
                "bg-primary px-4",
                "font-main text-[11px] text-white",
                "transition-all duration-200",
                "hover:bg-primary-dark",
              ].join(" ")}
            >
              <Sparkles
                size={13}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              <span>Start Free</span>

              <ArrowUpRight
                size={13}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

              {/* CTA pixel detail */}
              <span className="absolute bottom-0 right-0 size-1.5 bg-white/70" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={[
                "relative grid size-10 place-items-center",
                "border border-border bg-surface",
                "text-foreground",
                "transition-colors duration-200",
                "hover:border-primary hover:text-primary",
              ].join(" ")}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <Moon
                  size={16}
                  strokeWidth={1.6}
                />
              ) : (
                <Sun
                  size={16}
                  strokeWidth={1.6}
                />
              )}

              <span className="absolute bottom-0 right-0 size-1 bg-primary" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className={[
                "relative grid size-10 place-items-center",
                "border transition-colors duration-200",
                isOpen
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface text-foreground hover:border-primary hover:text-primary",
              ].join(" ")}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X
                  size={18}
                  strokeWidth={1.6}
                />
              ) : (
                <Menu
                  size={18}
                  strokeWidth={1.6}
                />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="absolute left-0 top-full h-[calc(100svh-5rem)] w-full border-t border-border bg-background/98 backdrop-blur-xl md:hidden">
          <Container className="h-full">
            <div className="flex h-full flex-col py-5">
              {/* Mobile status */}
              <div className="mb-5 flex items-center justify-between border border-border bg-surface px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping bg-secondary opacity-30" />
                    <span className="relative inline-flex size-2 bg-secondary" />
                  </span>

                  <span className="font-main text-[9px] uppercase tracking-[0.14em] text-foreground-muted">
                    Voxible System
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-secondary">
                  <Check
                    size={12}
                    strokeWidth={1.7}
                  />

                  <span className="font-main text-[9px] uppercase tracking-[0.1em]">
                    Operational
                  </span>
                </div>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col">
                {NAV_LINKS.map((link, index) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={[
                        "group flex items-center justify-between",
                        "border-b border-border px-1 py-5",
                        "transition-colors duration-200",
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-main text-[9px] text-foreground-muted">
                          0{index + 1}
                        </span>

                        <span className="font-heading text-lg">
                          {link.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="text-foreground-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </a>
                  );
                })}
              </div>

              {/* Mobile Footer Actions */}
              <div className="mt-auto">
                <div className="mb-4 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className={[
                      "h-12 border border-border",
                      "bg-surface px-4",
                      "font-main text-xs text-foreground",
                      "transition-colors duration-200",
                      "hover:border-primary hover:text-primary",
                    ].join(" ")}
                  >
                    Sign In
                  </button>

                  <button
                    type="button"
                    className={[
                      "group flex h-12 items-center justify-center gap-2",
                      "border border-primary bg-primary px-4",
                      "font-main text-xs text-white",
                      "transition-colors duration-200",
                      "hover:bg-primary-dark",
                    ].join(" ")}
                  >
                    Start Free

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-main text-[9px] uppercase tracking-[0.12em] text-foreground-muted">
                    Local-first AI
                  </span>

                  <span className="font-main text-[9px] text-foreground-muted">
                    v1.0
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}