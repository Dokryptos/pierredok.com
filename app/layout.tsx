import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Intro from "@/components/animation/intro";
import Navbar from "@/components/layouts/navbar";

const neueHaas = localFont({
  src: [
    {
      path: "../fonts/Neue_Haas_Grotesk-Text_unobfuscated.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-neue_Haas",
});

const ppMontreal = localFont({
  src: [
    {
      path: "../fonts/PPNeueMontrealMono-Regular.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-ppMontreal",
});

export const metadata: Metadata = {
  title: "Pierre Dok - Fullstack Developer",
  description:
    "I’m Pierre Docquin, a freelance full-stack developer passionate about crafting high-quality websites. I love working with beautiful images and refined designs to create engaging digital experiences. With a strong attention to detail, I enhance projects through motion, animation, and subtle interactions. Every website is built with performance and smooth usability in mind. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>

      <body
        className={`${neueHaas.variable} ${ppMontreal.variable} font-neueHaas text-[10px]/[150%] antialiased`}
      >
        <Intro />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
