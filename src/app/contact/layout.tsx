import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami', // Output: Hubungi Kami | CV Jasa Sukses Abadi
  description: 'Hubungi CV Jasa Sukses Abadi untuk konsultasi, penjadwalan layanan kalibrasi, tera, dan perbaikan alat ukur. Kami berlokasi di Natar, Lampung Selatan.',
  keywords: [
    'kontak CV Jasa Sukses Abadi',
    'alamat jasa kalibrasi lampung',
    'nomor telepon kalibrasi',
    'lokasi tera metrologi lampung',
    'konsultasi kalibrasi alat ukur'
  ],
  openGraph: {
    title: 'Hubungi CV Jasa Sukses Abadi | Kalibrasi Lampung',
    description: 'Siap kalibrasi? Hubungi tim kami untuk layanan cepat, akurat, dan sesuai standar KAN.',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}