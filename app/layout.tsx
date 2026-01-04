import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Clarity Cartel | All-Purpose Consulting",
  description: "Clarity Cartel helps you cut noise and make sharp decisions.",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-[#050509] text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

