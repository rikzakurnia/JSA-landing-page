"use client";
import React from 'react';
import { BadgeCheck, Target, FileSignature } from 'lucide-react';

const AboutAdvantages = () => {
  return (
    <section className="px-6 xl:px-16 py-20 bg-brand-purple relative overflow-hidden">
      {/* Background Pattern/Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="px-6 xl:px-16 max-w-7xl mx-auto relative z-10 text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Siap Menyediakan Layanan Kalibrasi Terbaik Untuk Anda</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-16">Keunggulan Layanan Kami</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AdvantageCard 
            icon={<BadgeCheck size={32} />}
            title="Layanan Terakreditasi"
            desc="Terakreditasi KAN sejak 23 Mei 2018, kami berkomitmen memberikan layanan kalibrasi sesuai standar nasional dan internasional."
          />
          <AdvantageCard 
            icon={<Target size={32} />}
            title="Akurasi & Keandalan Tinggi"
            desc="Setiap alat ukur dikalibrasi dengan presisi tinggi oleh teknisi bersertifikat, menjamin keakuratan hasil dan keandalan penggunaan."
          />
          <AdvantageCard 
            icon={<FileSignature size={32} />}
            title="Laporan Kalibrasi Resmi"
            desc="Setiap layanan disertai dengan sertifikat kalibrasi resmi yang diakui, lengkap dengan hasil pengukuran dan ketidakpastian."
          />
        </div>
      </div>
    </section>
  );
};

// Sub-komponen tetap di sini karena hanya dipakai di file ini
const AdvantageCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 text-left group">
    <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-black text-brand-purple mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default AboutAdvantages;