import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/Story';
import AboutAdvantages from '@/components/about/Advantages';
import AboutTeam from '@/components/about/Team';
import AboutCustomers from '@/components/about/AboutCustomer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Pelajari sejarah, akreditasi KAN, dan tim ahli di balik CV Jasa Sukses Abadi. Mitra kalibrasi terbaik untuk perusahaan Anda.',
  openGraph: {
    title: 'Tentang Kami | CV Jasa Sukses Abadi',
    description: 'Pelajari sejarah, akreditasi KAN, dan tim ahli di balik CV Jasa Sukses Abadi.',
    url: '/about',
  },
};

export default function AboutPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'CV Jasa Sukses Abadi',
        image: 'https://www.jasasuksesabadi.id/images/logo.png', // Sesuaikan URL
        '@id': 'https://www.jasasuksesabadi.id',
        url: 'https://www.jasasuksesabadi.id',
        telephone: '+6281213135257',
        email: 'jsa.lpg@gmail.com',
        address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gang Militer, Perumahan Nuwo Sriwijaya Blok A No. 2 Hajimena, Natar',
        addressLocality: 'Lampung Selatan',
        addressRegion: 'Lampung',
        postalCode: '35362', 
        addressCountry: 'ID'
        },
        // Jika ada koordinat Google Maps spesifik, tambahkan di sini
        // geo: {
        //   '@type': 'GeoCoordinates',
        //   latitude: -5.364440,
        //   longitude: 105.243553
        // }
    };

    return (
        
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <AboutHero />
            <AboutStory />
            <AboutAdvantages />
            <AboutTeam />
            <AboutCustomers/>

        </main>
    );
}