import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { SystemSettingsProvider } from "@/lib/system-settings-context";
import { AudioProvider } from "@/lib/music/audio-context";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Utkarsh Singh",
  },
  description: siteConfig.description,
  applicationName: "Utkarsh Singh Portfolio",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/me.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    url: siteConfig.url,
    type: "website",
    images: [{ url: siteConfig.image, width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              inLanguage: "en",
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SystemSettingsProvider>
            <AudioProvider>
              {children}
            </AudioProvider>
          </SystemSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
