import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import { BootScreen } from "@/components/BootScreen";
import { NebulaBackground } from "@/components/NebulaBackground";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.shortName} Mandalones | Web Developer & Business Analyst`,
  description: site.intro,
  keywords: [
    "Jethro Mandalones",
    "Web Developer Philippines",
    "Business Analytics",
    "Information Systems",
    "Laravel Developer",
    "Portfolio",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.shortName} Mandalones | Web Developer & Business Analyst`,
    description: site.intro,
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased bg-bg text-text">
        <NebulaBackground />
        <CursorSpotlight />
        <ScrollProgress />
        <BootScreen />
        {children}
      </body>
    </html>
  );
}
