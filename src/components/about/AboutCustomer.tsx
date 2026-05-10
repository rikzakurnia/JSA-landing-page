"use client";
import React from 'react';
import Image from 'next/image';

const AboutCustomers = () => {
  const logos = [
    { name: "Waskita", src: "/images/company/waskita.png" },
    { name: "Pelindo", src: "/images/company/pelindo.png" },
    { name: "Sugar Group", src: "/images/company/sgp.png" },
    { name: "AKR", src: "/images/company/akr.png" },
    { name: "GGF", src: "/images/company/GGF.jpg" },
    { name: "Torabika", src: "/images/company/torabika.png" },
    { name: "Kimia Farma", src: "/images/company/kimia-farma.png" },
    { name: "Nestle", src: "/images/company/nestle.png" },
    { name: "Fermentech", src: "/images/company/fermentech.png" },
    { name: "Gold Coin", src: "/images/company/gold-coin.webp" },
    { name: "hokkan", src: "/images/company/hokkan.jpg" },
    { name: "PP", src: "/images/company/PP.png" },
    { name: "PUPR", src: "/images/company/pupr.png" },
    { name: "WIKA", src: "/images/company/wika.png" },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-brand-green font-black text-xs uppercase tracking-[0.1em]">Kemitraan</span>
        <h2 className="text-3xl md:text-4xl font-black text-brand-purple mt-2 mb-16">Telah Dipercaya Oleh</h2>

        {/* Static Flex Layout: Akan menyusun logo secara rapi dan otomatis turun ke baris bawah jika ruang habis */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <LogoItem key={`client-${index}`} logo={logo} />
          ))}
        </div>
        
        <p className="text-center text-slate-400 text-[10px] md:text-xs mt-20 font-bold tracking-widest uppercase opacity-70">
          Dan lebih dari 100+ perusahaan lainnya telah mempercayai kami
        </p>
      </div>
    </section>
  );
};

// Sub-komponen
const LogoItem = ({ logo }: { logo: { name: string, src: string } }) => (
  // Menghapus flex-shrink-0 agar bisa menyesuaikan, menambahkan hover:scale agar lebih interaktif
  <div className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110">
    <div className="relative h-12 md:h-16 w-28 md:w-36 flex items-center justify-center">
      <Image
        src={logo.src}
        alt={`Logo ${logo.name}`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 110px, 160px"
      />
    </div>
  </div>
);

export default AboutCustomers;