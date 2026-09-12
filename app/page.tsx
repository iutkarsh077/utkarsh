import type { Metadata } from "next";
import { PortfolioOutline, PortfolioStructuredData } from "@/components/seo/portfolio-outline";
import { siteConfig } from "@/config/site";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Full-Stack Engineer | Next.js & AI Products",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    type: "website",
    images: [siteConfig.image],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
};

export default function Home() {
  return (
    <>
      <PortfolioStructuredData />
      <PortfolioOutline />
      <HomeClient />
    </>
  );
}
