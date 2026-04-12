"use client";
import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Calendar, FileText, ExternalLink } from 'lucide-react';

const Certificate = () => {
  return (
    <section className="mt-12 py-20 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* KOLOM KIRI: INFO & DETAIL */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green mb-6">
              <ShieldCheck size={16} className="font-bold" />
              <span className="text-xs font-bold uppercase tracking-widest">Verified Accreditation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-brand-purple mb-6 leading-tight">
              Komitmen pada <br />
              <span className="text-brand-green">Standar Global</span>
            </h2>
            
            <p className="text-slate-600 mb-10 leading-relaxed">
              Sebagai Laboratorium Kalibrasi yang terakreditasi secara resmi, kami menjamin hasil pengukuran yang akurat, tertelusur, dan diakui secara nasional maupun internasional melalui standar <span className="font-bold text-brand-purple">ISO/IEC 17025:2017</span>.
            </p>

            {/* Grid Detail Sertifikat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-green transition-colors">
                <FileText className="text-brand-green mb-3" size={24} />
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Nomor Akreditasi</p>
                <p className="text-brand-purple font-black">LK-257-IDN</p>
              </div>
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-green transition-colors">
                <Calendar className="text-brand-green mb-3" size={24} />
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Masa Berlaku</p>
                <p className="text-brand-purple font-black">Hingga 22 Mei 2027</p>
              </div>
            </div>

            {/* <button className="flex items-center gap-2 px-8 py-4 bg-brand-purple text-white rounded-full font-bold hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20">
              Lihat Ruang Lingkup (PDF) <ExternalLink size={18} />
            </button> */}
          </div>

          {/* KOLOM KANAN: VISUAL SERTIFIKAT */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Dekorasi Aksen */}
              <div className="absolute -inset-4 bg-brand-green/5 rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Frame Sertifikat */}
              <div className="relative bg-white p-1 md:p-2 rounded-2xl shadow-[0_20px_50px_rgba(41,24,96,0.1)] border border-slate-100 overflow-hidden">
                <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-lg">
                  <Image 
                    src="/images/Sertifikat-Akreditasi-JSA.jpg" // Masukkan file image_401605.jpg di sini
                    alt="Sertifikat Akreditasi KAN JSA"
                    fill
                    className="object-contain hover:scale-102 transition-transform duration-700"
                    priority
                  />
                </div>
                
                {/* Logo KAN & ILAC Overlay (Optional styling) */}
                {/* <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center px-2">
                   <div className="flex gap-4 items-center opacity-70">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Accredited by</span>
              
                      <div className="h-6 w-12 bg-slate-200 rounded animate-pulse" /> 
                   </div>
                   <span className="text-[10px] font-bold text-brand-green uppercase">SNI ISO/IEC 17025:2017</span>
                </div> */}
              </div>

              {/* Tag Melayang */}
              {/* <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-4 rounded-2xl shadow-2xl hidden md:block">
                 <p className="text-xs font-bold uppercase tracking-widest opacity-80">Status</p>
                 <p className="text-lg font-black italic">Aktif & Terdaftar</p>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificate; 