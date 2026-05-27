import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zenthro Developers — Trusted SEO & Web Development Agency in Kozhikode",
  description: "Zenthro Developers is a trusted SEO and web development agency in Kozhikode. We design and build premium custom web applications, SaaS platforms, high-converting dashboards, and branding systems for elite startups and enterprise brands.",
  keywords: [
    "SEO Agency Kozhikode",
    "Web Development Agency",
    "Full-Stack Development",
    "SaaS Products",
    "Web Design Agency Kozhikode",
    "Premium Websites",
    "Custom Web Applications",
    "React Native",
    "Next.js Developer",
    "Digital Agency Kozhikode",
    "SEO Services",
    "High-Performance Dashboards",
    "Zenthro Developers"
  ],
  authors: [{ name: "Zenthro Developers" }],
  openGraph: {
    title: "Zenthro Developers — Trusted SEO & Web Development Agency",
    description: "We build modern digital systems engineered for growth. Premium full-stack websites, SaaS platforms, and dashboards for elite brands in Kozhikode.",
    type: "website",
    locale: "en_US",
    siteName: "Zenthro Developers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenthro Developers — Trusted SEO & Web Development Agency",
    description: "Premium web development and SEO services in Kozhikode for growth-focused brands.",
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg-dark text-brand-text-primary selection:bg-brand-primary/30 selection:text-brand-text-primary overflow-x-hidden">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `;(function(){try{var t=localStorage.getItem('zenthro-theme');if(!t){t='light';}document.documentElement.classList.add(t==='light'?'light':'dark');}catch(e){}})()`,
          }}
        />

        {/* Cinematic noise overlay */}
        <div className="noise-overlay" />
        
        {/* Layout content */}
        <ThemeProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
            <ServiceWorkerRegister />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
