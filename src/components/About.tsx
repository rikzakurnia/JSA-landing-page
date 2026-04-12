"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: IMAGE COLLAGE */}
        <div className="relative">
          {/* Main Decorative Background (Purple) */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-brand-purple/5 rounded-3xl -z-10" />
          
          {/* Main Image Container */}
          <div className="relative max-h-[640px] rounded-2xl overflow-hidden shadow-2xl border-l-8 border-brand-purple aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
            <Image 
              src="/images/worker-1.png" // Ganti dengan gambar personil kalibrasi
              alt="Tim Kalibrasi JSA"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute -bottom-10 -right-6 md:right-10 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block">
            <Image 
              src="/images/worker-2.png" // Ganti dengan gambar lapangan
              alt="Pekerjaan Lapangan"
              fill
              className="object-cover"
            />
          </div>

          {/* Experience Badge */}
          {/* <div className="absolute top-10 -right-4 bg-brand-green p-4 md:p-6 rounded-2xl shadow-xl text-white z-20">
            <p className="text-3xl md:text-4xl font-black">10+</p>
            <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest leading-tight">Tahun<br/>Pengalaman</p>
          </div> */}
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <span className="text-brand-green font-black text-sm uppercase tracking-[0.3em]">Tentang JSA</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-purple leading-tight">
              Introduction
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              <span className="font-bold text-brand-purple">CV. Jasa Sukses Abadi (JSA)</span> adalah perusahaan swasta nasional yang didirikan di kota Bandar Lampung pada tahun 2014 berdasarkan Akta Pendirian No. 17 Notaris Eli Elyawati Garpi, S.H, M.Kn.
            </p>
            <p>
              Seiring berjalannya waktu, kami berkembang menjadi ahli dalam jasa pengujian alat ukur, mulai dari <span className="text-brand-purple font-semibold italic">Timbangan Kapasitas Besar, Tangki Ukur,</span> hingga <span className="text-brand-purple font-semibold italic">Laboratorium Kalibrasi</span> untuk Thermometer, Thermohygrometer, Timbangan Analitikal dan banyak lagi.
            </p>
            <p>
              Sejak 2017, JSA telah menerapkan standar internasional <span className="font-bold">ISO/IEC 17025:2017</span> dan pada 2018 resmi mendapatkan akreditasi dari <span className="text-brand-green font-bold">Komite Akreditasi Nasional (KAN)</span> dengan nomor akreditasi <span className="underline decoration-brand-green underline-offset-4 font-mono">LK-257-IDN</span>.
            </p>
          </div>

          {/* Accreditation Footer */}
          <div className="pt-4 flex items-center gap-6 border-t border-slate-100 mt-4">
             {/* Gunakan placeholder atau logo KAN asli jika ada */}
             <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 p-1">
                <img src='/images/logo-kan.webp' ></img>
             </div>
             <div>
               <p className="text-brand-purple font-black text-lg">Terakreditasi KAN</p>
               <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">ISO/IEC 17025:2017</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;