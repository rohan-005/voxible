import type { Metadata } from "next";
import {
  Jersey_25,
  Pixelify_Sans,
} from "next/font/google";

import ThemeProvider from "@/components/theme/ThemeProvider";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jersey25 = Jersey_25({
  variable: "--font-jersey",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voxible — Content Automation",
  description:
    "Turn one technical topic into publish-ready content in under five minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${pixelifySans.variable}
          ${jersey25.variable}
        `}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}