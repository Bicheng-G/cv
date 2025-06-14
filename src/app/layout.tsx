import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";

import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: `${RESUME_DATA.name} | CV`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} | CV`,
    description: RESUME_DATA.about,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: `${RESUME_DATA.name} | CV`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | CV`,
    description: RESUME_DATA.about,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
