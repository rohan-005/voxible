import Image from "next/image";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Radio,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";

type SocialIconProps = {
  className?: string;
};

function GitHubIcon({
  className,
}: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.029-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.832a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.684 0 3.842-2.337 4.687-4.566 4.935.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.578.688.48A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedInIcon({
  className,
}: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.5 3.71 3.5 4.64C3.5 5.55 4.15 6.28 5.21 6.28H5.23C6.34 6.28 7 5.55 7 4.64C6.98 3.71 6.34 3 5.25 3ZM20.5 13.2C20.5 9.83 18.7 8.26 16.3 8.26C14.36 8.26 13.49 9.33 13 10.08V8.5H9.62C9.66 9.55 9.62 19.5 9.62 19.5H13V13.36C13 13.03 13.02 12.7 13.12 12.46C13.36 11.8 13.91 11.12 14.83 11.12C16.04 11.12 16.52 12.04 16.52 13.39V19.5H19.9V13.2H20.5Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/rohan-005",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan005/",
    icon: LinkedInIcon,
  },
  {
    label: "Portfolio",
    href: "https://workwithrohan.vercel.app/",
    icon: ArrowUpRight,
  },
];

const CONTACT_LINKS = [
  {
    label: "rohandhanerwal@gmail.com",
    href: "mailto:rohandhanerwal@gmail.com",
    icon: Mail,
  },
  {
    label: "India",
    href: null,
    icon: MapPin,
  },
];

export default function Footer() {
  return (
    <footer
      id="docs"
      className="relative overflow-hidden border-t border-border bg-background text-foreground"
    >
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Pixel Background */}
      <div className="pixel-grid pointer-events-none absolute inset-0 opacity-20" />

      <Container className="relative">
        {/* Main Footer */}
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-12 lg:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              className="group inline-flex items-center"
              aria-label="Voxible Home"
            >
              <Image
                src="/logo.png"
                alt="Voxible"
                width={2000}
                height={80}
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
              />
            </a>

            <p className="mt-5 max-w-sm font-main text-xs leading-7 text-foreground-muted sm:text-sm">
              A local-first AI content automation platform built for
              technical creators, game developers, and people who ship
              ideas.
            </p>

            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-3 border border-border bg-surface px-3.5 py-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping bg-secondary opacity-30" />
                <span className="relative inline-flex size-2 bg-secondary" />
              </span>

              <span className="font-main text-[10px] uppercase tracking-[0.14em] text-foreground-muted sm:text-[11px]">
                System Operational
              </span>

              <span className="h-3 w-px bg-border" />

              <span className="font-main text-[10px] text-secondary sm:text-[11px]">
                v1.0
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="size-1.5 bg-primary" />

              <h3 className="font-main text-s uppercase tracking-[0.16em] text-foreground">
                Navigate
              </h3>
            </div>

            <div className="flex flex-col gap-3.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 font-main text-s text-foreground-muted transition-colors duration-200 hover:text-primary sm:text-[13px]"
                >
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />

                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="size-1.5 bg-primary" />

              <h3 className="font-main text-s uppercase tracking-[0.16em] text-foreground">
                Socials
              </h3>
            </div>

            <div className="flex flex-col gap-3.5">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-2.5 font-main text-xs text-foreground-muted transition-colors duration-200 hover:text-primary sm:text-[13px]"
                  >
                    <Icon className="size-4 shrink-0" />

                    <span>{social.label}</span>

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="size-1.5 bg-primary" />

              <h3 className="font-main text-s uppercase tracking-[0.16em] text-foreground">
                Contact
              </h3>
            </div>

            <div className="flex flex-col gap-3.5">
              {CONTACT_LINKS.map((contact) => {
                const Icon = contact.icon;

                if (!contact.href) {
                  return (
                    <div
                      key={contact.label}
                      className="flex items-center gap-2.5 font-main text-xs text-foreground-muted sm:text-[13px]"
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.6}
                      />

                      <span>{contact.label}</span>
                    </div>
                  );
                }

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="group flex w-fit items-center gap-2.5 font-main text-xs text-foreground-muted transition-colors duration-200 hover:text-primary sm:text-[13px]"
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.6}
                    />

                    <span>{contact.label}</span>

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>

            {/* Get Started CTA */}
            <a
              href="/register"
              className="group mt-7 inline-flex items-center gap-2.5 border border-primary bg-primary px-5 py-3 font-main text-xs text-white transition-all duration-200 hover:bg-primary-dark sm:text-[13px]"
            >
              <Sparkles
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              <span>Get Started</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

              <span className="absolute bottom-0 right-0 size-1.5 bg-white/70" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-border">
          <span className="absolute left-0 top-1/2 size-1.5 -translate-y-1/2 bg-primary" />
          <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 bg-primary" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="font-main text-[10px] tracking-wide text-foreground-muted sm:text-[11px]">
              © 2026 Voxible. All rights reserved.
            </p>

            <span className="hidden h-3 w-px bg-border sm:block" />

            <p className="font-main text-[10px] text-foreground-muted sm:text-[11px]">
              Built for creators who ship.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="font-main text-[10px] text-foreground-muted transition-colors duration-200 hover:text-primary sm:text-[11px]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="font-main text-[10px] text-foreground-muted transition-colors duration-200 hover:text-primary sm:text-[11px]"
            >
              Terms
            </a>

            <div className="flex items-center gap-2 text-foreground-muted">
              <Radio
                size={12}
                strokeWidth={1.6}
                className="text-secondary"
              />

              <span className="font-main text-[10px] uppercase tracking-[0.1em] sm:text-[11px]">
                Local-first AI
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}