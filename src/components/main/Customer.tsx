"use client";
import React from 'react';
import Image from 'next/image';

const Customers = () => {
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

  // Bagi logo menjadi dua baris
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <section className="mt-12 py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-brand-green font-black text-sm uppercase tracking-[0.1em]">Track Record</span>
        <h2 className="text-3xl md:text-4xl font-black text-brand-purple mt-2">Our Trusted Customers</h2>
      </div>

      <div className="flex flex-col gap-8 relative">
        {/* Gradient Mask (Efek Fade di pinggir) */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* BARIS 1: Gerak ke Kiri */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Group 1 */}
          <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
            {firstRow.map((logo, index) => (
              <LogoItem key={`row1-g1-${index}`} logo={logo} />
            ))}
          </div>
          {/* Group 2 (Duplicate for perfect loop) */}
          <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
            {firstRow.map((logo, index) => (
              <LogoItem key={`row1-g2-${index}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* BARIS 2: Gerak ke Kanan (Reverse) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {/* Group 1 */}
          <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
            {secondRow.map((logo, index) => (
              <LogoItem key={`row2-g1-${index}`} logo={logo} />
            ))}
          </div>
          {/* Group 2 (Duplicate for perfect loop) */}
          <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
            {secondRow.map((logo, index) => (
              <LogoItem key={`row2-g2-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-center text-slate-400 text-[10px] md:text-xs mt-16 font-bold tracking-widest uppercase opacity-70">
        Dan lebih dari 100+ perusahaan lainnya telah mempercayai kami
      </p>
    </section>
  );
};

const LogoItem = ({ logo }: { logo: { name: string, src: string } }) => (
  <div className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
    <div className="relative h-10 md:h-14 w-28 md:w-40 flex items-center justify-center">
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

export default Customers;