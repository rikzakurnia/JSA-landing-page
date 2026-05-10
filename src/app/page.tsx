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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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