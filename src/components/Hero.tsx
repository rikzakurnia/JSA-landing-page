"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] h-[95vh] w-full flex items-center justify-center overflow-hidden bg-brand-purple">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-brand-purple/70 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          CV Jasa Sukses Abadi
        </h1>
        
        {/* Typing Animation Wrapper */}
        <div className="flex justify-center w-full overflow-hidden">
          <p className="text-sm sm:text-lg md:text-xl text-slate-200 font-light border-r-4 border-brand-green whitespace-nowrap animate-typing px-2 max-w-fit">
            Layanan Kalibrasi Terbaik Untuk Perusahaan Anda
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <button className="w-full sm:w-auto px-10 py-4 bg-brand-green hover:scale-105 text-white rounded-full font-bold transition-all shadow-xl shadow-brand-green/30 text-sm md:text-base">
            Lihat Layanan
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl rounded-full font-bold transition-all text-sm md:text-base">
            Tentang Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;