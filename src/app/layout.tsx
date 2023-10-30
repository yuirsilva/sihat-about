import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const baseUrl = process.env["NEXT_PUBLIC_VERCEL_URL"]
  ? `https://${process.env["NEXT_PUBLIC_VERCEL_URL"]}`
  : "http://localhost:3000";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Radiology", "Artificial Intelligence", "Brain tumor"],
  authors: [
    {
      name: "Yuri Silva",
      url: "https://portfolio-yidate.vercel.app",
    },
  ],
  creator: "SihatLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@sihatlabs",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable
        )}
      >
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
