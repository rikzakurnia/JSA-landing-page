"use client";
import React from 'react';
import Image from 'next/image'; // Bisa pakai Image Next.js atau div style background

const AboutHero = () => {
  return (
    // Tambahkan bg-brand-purple sebagai fallback seperti di Hero utama
    <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-purple">
      {/* Background Section - Mirip dengan Hero.tsx */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/about-truck.jpeg')" }}>
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-brand-purple/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/80 via-transparent to-transparent" />
      </div>

      {/* Content Banner */}
      <div className="relative z-10 text-center px-6 mt-16 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight drop-shadow-xl">
          Tentang Kami
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;