"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-brand text-2xl text-primary"
          >
            Voxible
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-main text-xs text-foreground-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid size-9 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={15} />
              ) : (
                <Sun size={15} />
              )}
            </button>

            <button className="px-3 py-2 font-main text-xs text-foreground">
              Sign In
            </button>

            <button className="border border-primary bg-primary px-4 py-2 font-main text-xs text-white transition-opacity hover:opacity-90">
              Start Free
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid size-10 place-items-center border border-border"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={17} />
              ) : (
                <Sun size={17} />
              )}
            </button>

            <button
              type="button"
              className="grid size-10 place-items-center border border-border"
              onClick={() =>
                setIsOpen((prev) => !prev)
              }
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="border-t border-border py-5 md:hidden">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-border px-2 py-4 font-main text-sm text-foreground"
                >
                  {link.label}
                </a>
              ))}

              <div className="grid grid-cols-2 gap-3 pt-5">
                <button className="border border-border px-4 py-3 font-main text-xs">
                  Sign In
                </button>

                <button className="border border-primary bg-primary px-4 py-3 font-main text-xs text-white">
                  Start Free
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}