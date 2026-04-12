"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M412.19 118.66a109 109 0 0 1-9.45-5.5a133 133 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.8 161.8 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.5 167.5 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.5 158.5 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-purple text-white pt-24 pb-12 px-6 xl:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* KOLOM 1: BRAND (Lebih lebar di desktop) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative h-10 w-40">
              <Image 
                src="/images/logo.png" 
                alt="Logo JSA" 
                fill 
                className="object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Memberikan solusi kalibrasi yang akurat dan terpercaya. Kami berkomitmen untuk menjaga standar industri melalui pengujian yang presisi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-brand-green transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-brand-green transition-colors">
                <TiktokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* KOLOM 2: QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-green mb-8">
              Navigasi
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Layanan</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: SERVICES */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-green mb-8">
              Layanan Utama
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li className="hover:text-white cursor-pointer transition-colors">Kalibrasi Industri</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tera & Tera Ulang</li>
              <li className="hover:text-white cursor-pointer transition-colors">Training ISO 17025</li>
              <li className="hover:text-white cursor-pointer transition-colors">Maintenance Alat</li>
            </ul>
          </div>

          {/* KOLOM 4: CONTACT INFO */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-green mb-8">
              Hubungi Kami
            </h4>
            <div className="space-y-6 text-sm font-bold">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Alamat</span>
                <p className="text-slate-300 leading-snug">Gang Militer, Perumahan Nuwo Sriwijaya Blok A No. 2, Natar, Lampung Selatan</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Email & Phone</span>
                <p className="text-slate-300">jsa.lpg@gmail.com</p>
                <p className="text-slate-300">+62 812 1313 5257</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <span>© {currentYear}</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>CV Jasa Sukses Abadi</span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.15em] text-white/40">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-green transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;