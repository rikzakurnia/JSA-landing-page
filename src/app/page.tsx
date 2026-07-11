import React from 'react';
// import Navbar from '@/components/Navbar';
import Hero from '@/components/main/Hero';
import About from '@/components/main/About';
import Customers from '@/components/main/Customer';
import Certificate from '@/components/main/Certificate';
import ContactMap from '@/components/main/ContactMap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV Jasa Sukses Abadi | Layanan Kalibrasi Alat Ukur Terakreditasi KAN',
  description: 'Ahli jasa pengujian dan kalibrasi alat ukur, timbangan kapasitas besar, hingga tangki ukur di Bandar Lampung. Terakreditasi KAN (ISO/IEC 17025:2017).',
  keywords: [
    'jasa kalibrasi lampung',
    'kalibrasi timbangan besar',
    'kalibrasi tangki ukur',
    'laboratorium kalibrasi',
    'akreditasi KAN LK-257-IDN',
    'ISO/IEC 17025:2017',
    'CV Jasa Sukses Abadi',
  ],
  openGraph: {
    title: 'CV Jasa Sukses Abadi | Kalibrasi Terpercaya di Lampung',
    description: 'Layanan kalibrasi alat ukur terakreditasi KAN untuk wilayah Lampung dan sekitarnya. Akurat, tertelusur, dan berstandar internasional.',
    url: '/',
  },
};

// LocalBusiness structured data — helps Google understand who/where you are and
// surface the site for local "jasa kalibrasi lampung" style searches + rich results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.jasasuksesabadi.com/#business',
  name: 'CV Jasa Sukses Abadi',
  alternateName: 'JSA Lampung',
  description:
    'Jasa dan laboratorium kalibrasi alat ukur, timbangan kapasitas besar, dan tangki ukur di Lampung. Terakreditasi KAN (LK-257-IDN) dengan standar ISO/IEC 17025:2017.',
  url: 'https://www.jasasuksesabadi.com',
  telephone: '+62-812-1313-5257',
  email: 'jsa.lpg@gmail.com',
  image: 'https://www.jasasuksesabadi.com/images/logo.png',
  logo: 'https://www.jasasuksesabadi.com/images/logo.png',
  priceRange: 'Rp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gang Militer, Perumahan Nuwo Sriwijaya Blok A No. 2, Natar',
    addressLocality: 'Lampung Selatan',
    addressRegion: 'Lampung',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -5.3638194,
    longitude: 105.2176906,
  },
  hasMap: 'https://maps.app.goo.gl/UFRtEc25QNv8WESCA',
  sameAs: [
    'https://www.instagram.com/labkalibrasi.jsa/',
    'https://www.tiktok.com/@cv_jasa_sukses_abadi',
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Lampung' },
    { '@type': 'City', name: 'Bandar Lampung' },
    { '@type': 'AdministrativeArea', name: 'Lampung Selatan' },
    { '@type': 'AdministrativeArea', name: 'Sumatera Selatan' },
    { '@type': 'City', name: 'Palembang' },
    { '@type': 'AdministrativeArea', name: 'Banten' },
  ],
  knowsAbout: [
    'Jasa kalibrasi',
    'Laboratorium kalibrasi',
    'Kalibrasi timbangan',
    'Kalibrasi tangki ukur',
    'Tera dan tera ulang',
    'ISO/IEC 17025:2017',
  ],
  hasCredential: 'Akreditasi KAN LK-257-IDN (ISO/IEC 17025:2017)',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Customers/>
      <Certificate/>
      <ContactMap />

      {/* <Footer/> */}
    </main>
  );
}