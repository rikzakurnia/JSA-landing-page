import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.jasasuksesabadi.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CV Jasa Sukses Abadi | Jasa Kalibrasi Profesional Lampung",
    template: "%s | CV Jasa Sukses Abadi", // Output misal: Tentang Kami | CV Jasa Sukses Abadi
  },
  description:
    "Penyedia layanan kalibrasi alat ukur, timbangan, dan tangki terpercaya. Terakreditasi KAN dan menerapkan ISO/IEC 17025:2017.",
  keywords: [
    "jasa kalibrasi",
    "kalibrasi lampung",
    "tera timbangan",
    "kalibrasi tangki",
    "CV Jasa Sukses Abadi",
    "ISO 17025",
    "kalibrasi alat ukur",
  ],
  authors: [{ name: "CV Jasa Sukses Abadi" }],
  openGraph: {
    title: "CV Jasa Sukses Abadi | Jasa Kalibrasi Profesional",
    description: "Penyedia layanan kalibrasi terakreditasi KAN untuk kebutuhan industri Anda.",
    url: SITE_URL,
    siteName: "CV Jasa Sukses Abadi",
    images: [
      {
        url: "/images/logo.png", // Siapkan gambar 1200x630px untuk thumbnail link WhatsApp/FB
        width: 1200,
        height: 630,
        alt: "CV Jasa Sukses Abadi Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar/>
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer/>
      <WhatsAppFloating></WhatsAppFloating>
    </html>
  );
}
