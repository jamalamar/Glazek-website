import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glazek LLC - Professional Glazing & Glass Solutions | Texas",
  description: "Expert glazing contractors specializing in curtain walls, storefronts, commercial windows, and complete glass systems. Professional installation throughout Texas with advanced safety protocols.",
  keywords: ["glazing contractor", "curtain wall installation", "storefront glazing", "commercial windows", "glass installation", "facade specialists", "Texas glazing", "curtain wall systems", "structural glazing"],
  authors: [{ name: "Glazek LLC" }],
  creator: "Glazek LLC",
  publisher: "Glazek LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://glazekllc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Glazek LLC - Professional Glazing & Glass Solutions",
    description: "Expert glazing contractors specializing in curtain walls, storefronts, commercial windows, and complete glass systems. Professional installation throughout Texas.",
    url: 'https://glazekllc.com',
    siteName: 'Glazek LLC',
    images: [
      {
        url: '/images/hero-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Modern glass building facade - Glazek LLC professional glazing work',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glazek LLC - Professional Glazing & Glass Solutions",
    description: "Expert glazing contractors specializing in curtain walls, storefronts, and commercial windows throughout Texas.",
    images: ['/images/hero-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Glazek LLC",
    "description": "Professional glazing contractors specializing in curtain walls, storefronts, commercial windows, and complete glass systems.",
    "url": "https://glazekllc.com",
    "logo": "https://glazekllc.com/images/hero-og.jpg",
    "telephone": "+13465385428",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Texas"
      }
    ],
    "serviceType": [
      "Curtain Wall Installation",
      "Storefront Glazing",
      "Commercial Window Installation",
      "Structural Glazing",
      "Facade Installation",
      "Glass System Installation"
    ],
    "knowsAbout": [
      "Glazing",
      "Curtain Walls",
      "Storefronts", 
      "Commercial Windows",
      "Structural Glazing",
      "Facade Systems"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
