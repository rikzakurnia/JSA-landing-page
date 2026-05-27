"use client";
import React from 'react';

// 1. Definisikan props yang akan diterima komponen
interface PageHeroProps {
  title: string;
  backgroundImage?: string; // Optional, nanti kita kasih nilai default
}

const PageHero = ({ 
  title, 
  // Nilai default jika prop backgroundImage tidak diisi saat komponen dipanggil
  backgroundImage = '/images/about-truck.jpeg' 
}: PageHeroProps) => {
  return (
    <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-purple">
      {/* Background Section - Menggunakan template literal untuk URL gambar dinamis */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-brand-purple/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/80 via-transparent to-transparent" />
      </div>

      {/* Content Banner */}
      <div className="relative z-10 text-center px-6 mt-16 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Render prop title di sini */}
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight drop-shadow-xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;