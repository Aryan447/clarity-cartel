// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clarity Cartel | All-Purpose Consulting",
  description: "Clarity Cartel helps you cut noise and make sharp decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}

