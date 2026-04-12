"use client";
import React from 'react';
import Image from 'next/image';

const Customers = () => {
  // List nama logo sesuai gambar (bisa diganti dengan path file asli nanti)
  const logos = [
    { name: "Waskita", src: "/images/company/waskita.png" },
    { name: "Pelindo", src: "/images/company/pelindo.png" },
    { name: "Sugar Group", src: "/images/company/sgp.png" },
    { name: "AKR", src: "/images/company/akr.png" },
    { name: "Pelindo", src: "/images/company/pelindo.png" },
    { name: "GGF", src: "/images/company/ggf.jpg" },
    // ... tambahkan sisanya
  ];

  return (
    <section className="mt-12 py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-brand-green font-black text-sm uppercase tracking-[0.3em]">Track Record</span>
        <h2 className="text-3xl md:text-4xl font-black text-brand-purple mt-2">Our Trusted Customers</h2>
        {/* <div className="h-1.5 w-20 bg-brand-green mx-auto mt-4 rounded-full" /> */}
      </div>

      {/* Container Slider */}
      <div className="relative flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-20 py-4 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* Gunakan Next.js Image */}
              <div className="relative h-12 md:h-16 w-32 md:w-40 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  fill
                  className="object-contain" // Penting supaya logo tidak gepeng
                  sizes="(max-width: 768px) 120px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-slate-400 text-xs mt-12 font-medium tracking-widest">
        DAN LEBIH DARI 100+ PERUSAHAAN LAINNYA TELAH MEMPERCAYAI KAMI
      </p>
    </section>
  );
};

export default Customers;