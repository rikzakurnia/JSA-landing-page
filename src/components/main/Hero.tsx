"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    // Changed to svh for better mobile browser handling
    <section className="relative min-h-[600px] h-[85svh] w-full flex items-center justify-center overflow-hidden bg-brand-purple">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-brand-purple/70 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* Brand eyebrow — keeps the company name visible above the keyword-rich H1 */}
        <p className="text-brand-green font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 animate-fade-up opacity-0">
          CV Jasa Sukses Abadi
        </p>

        {/* H1 now carries the primary target keywords: "jasa kalibrasi" / "lab kalibrasi" + "Lampung" */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight animate-fade-up opacity-0" style={{ animationDelay: '0.15s' }}>
          Jasa &amp; Lab Kalibrasi Terakreditasi KAN di Lampung
        </h1>

        {/* Adjusted typing container for better mobile wrapping if needed */}
        <div className="flex justify-center w-full overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <p className="text-sm sm:text-lg md:text-lg text-slate-200 font-light border-r-4 border-brand-green whitespace-nowrap animate-typing overflow-hidden px-1 inline-block">
            Kalibrasi Alat Ukur, Timbangan &amp; Tangki Ukur Terpercaya
          </p>
        </div>

        {/* Added animation stagger to buttons — now real internal links (helps crawl + UX) */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link href="/services" className="w-full sm:w-auto px-6 py-4 bg-brand-green hover:scale-105 text-white rounded-full font-bold transition-all duration-300 shadow-xl shadow-brand-green/30 text-sm md:text-sm">
            Lihat Layanan
          </Link>
          <Link href="/about" className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl rounded-full font-bold transition-all duration-300 text-sm md:text-sm hover:scale-105">
            Tentang Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;