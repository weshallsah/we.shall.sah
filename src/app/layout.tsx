import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Sah - Backend Engineer",
  description: "Portfolio of Vishal Sah, a backend engineer specializing in Web3 protocols, smart contracts, and secure infrastructure. Explore my projects in blockchain, API gateways, and scalable systems.",
  keywords: ["backend", "web3", "blockchain", "smart contracts", "node.js", "solidity", "infrastructure", "portfolio"],
  authors: [{ name: "Vishal Sah" }],
  creator: "Vishal Sah",
  openGraph: {
    title: "Vishal Sah - Backend Engineer",
    description: "Portfolio of Vishal Sah, a backend engineer specializing in Web3 protocols, smart contracts, and secure infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Sah - Backend Engineer",
    description: "Portfolio of Vishal Sah, a backend engineer specializing in Web3 protocols, smart contracts, and secure infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
