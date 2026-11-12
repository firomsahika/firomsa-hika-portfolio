import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firomsa Hika Telila | Senior Full-Stack Software Engineer",
  description:
    "Senior Full-Stack Software Engineer with extensive experience architecting scalable web platforms, distributed microservices, and high-throughput REST/gRPC APIs in TypeScript, Java, and Python.",
  authors: [{ name: "Firomsa Hika Telila" }],
  keywords: [
    "Firomsa Hika Telila",
    "Senior Full-Stack Software Engineer",
    "Software Engineer",
    "TypeScript",
    "Java Spring Boot",
    "Next.js",
    "gRPC",
    "Microservices",
    "ASTU",
    "Addis Ababa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050505] text-neutral-100">{children}</body>
    </html>
  );
}
