import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins font with the weights you need for a portfolio
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Firomsa Hika | Portfolio",
  description: "Personal portfolio of Firomsa Hika, Full-Stack Developer & Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}