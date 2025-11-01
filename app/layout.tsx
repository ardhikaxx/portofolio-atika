import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atika Wardatul Hasanah - Freelance Digital Designer",
  description: "Freelance digital designer specializing in poster design, banners, Instagram feed design, and product design. Crafting beautiful digital experiences with attention to detail and passion for innovation.",
  keywords: [
    "freelance designer",
    "digital designer", 
    "poster design",
    "banner design",
    "Instagram feed design",
    "product design",
    "graphic designer",
    "creative designer Indonesia"
  ].join(", "),
  authors: [{ name: "Atika Wardatul Hasanah" }],
  creator: "Atika Wardatul Hasanah",
  openGraph: {
    title: "Atika Wardatul Hasanah - Freelance Digital Designer",
    description: "Crafting beautiful digital experiences with attention to detail and passion for innovation. Let's create something amazing together.",
    type: "website",
    locale: "id_ID",
    siteName: "Atika Wardatul Hasanah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atika Wardatul Hasanah - Freelance Digital Designer",
    description: "Crafting beautiful digital experiences with attention to detail and passion for innovation.",
    creator: "@atikawardatul",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}