import "@/app/globals.css";

import type { Metadata } from "next";

import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Restaurant phone service",
    "AI phone agent",
    "Restaurant automation",
    "Toast POS integration",
    "Restaurant ordering system",
    "AI restaurant receptionist",
    "Automated restaurant calls",
    "Restaurant reservation system",
    "Hostess AI",
    "Restaurant hostess automation",
  ],
  authors: [
    {
      name: "Hostess Team",
      url: siteConfig.url,
    },
  ],
  creator: "Hostess",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@tryhostess",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
