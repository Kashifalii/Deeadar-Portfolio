import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deedar Ali | Amazon Virtual Assistant & FBA Expert",
  description:
    "Amazon FBA specialist with expertise in private label, wholesale, product research, listing optimization, and Amazon PPC. Helping businesses scale on Amazon.",
  keywords:
    "Amazon FBA, Private Label, Wholesale, Amazon Seller, E-commerce, PPC, Keyword Research",
  author: "Deedar Ali",
  openGraph: {
    title: "Deedar Ali | Amazon FBA Expert",
    description:
      "Professional Amazon Virtual Assistant specializing in FBA scaling and business optimization.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deedar Ali | Amazon FBA Expert",
    description: "Amazon Virtual Assistant & FBA specialist",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
