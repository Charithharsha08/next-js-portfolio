import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Charith Harsha - Software Engineer",
  description:
    "Portfolio of Charith Harsha, a passionate software engineer from Galle, Sri Lanka",
  icons: {
    icon: "/ch-logo.png",
  },
  alternates: {
    canonical: "https://charithharsha.com",
  },
  openGraph: {
    title: "Charith Harsha - Software Engineer",
    description:
      "Explore my portfolio, projects, and achievements in web development and software engineering.",
    url: "https://charithharsha.com",
    siteName: "Charith Harsha Portfolio",
    images: [
      {
        url: "https://charithharsha.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charith Harsha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charith Harsha - Software Engineer",
    description: "Portfolio showcasing projects, skills, and achievements.",
    images: ["https://charithharsha.com/og-image.png"],
  },
};



export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
