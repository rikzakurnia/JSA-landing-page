"use client";
import React from 'react';
import Image from 'next/image';

const AboutStory = () => {
  return (
    <>
      {/* HEADER TENTANG KAMI */}
      <section className="px-6 xl:px-16 py-10 md:py-16 max-w-7xl mx-auto text-center">
        <span className="text-brand-green font-black text-xs uppercase tracking-widest">Tentang Perusahaan</span>
        <h2 className="text-3xl md:text-4xl font-black text-brand-purple mt-4 tracking-tight">
          Penyedia Jasa Kalibrasi Profesional <br className="hidden md:block" /> dan Berpengalaman
        </h2>
      </section>

      {/* CERITA & SEJARAH (Side by Side Layout) */}
      <section className="px-6 xl:px-16 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Kolom Gambar */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/JSA-in-action.jpeg" 
                alt="Proses Kalibrasi Tangki" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply" />
            </div>
            {/* Dekorasi kecil */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Kolom Teks */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-slate-600 leading-relaxed text-sm text-justify">
              <strong className="text-brand-purple font-black">CV. Jasa Sukses Abadi</strong> adalah perusahaan swasta nasional yang didirikan di kota Bandar Lampung pada tahun 2014 berdasarkan Akta Pendirian No. 17 Notaris Eli Elyawati Garpi, S.H, M.Kn., Tanggal 20 Mei 2014.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm text-justify">
              Pada awal berdirinya, perusahaan bergerak di bidang pengadaan barang dan jasa dengan skala kecil. Namun seiring berjalannya waktu menambah gerak di bidang jasa pengujian alat ukur, seperti Timbangan kapasitas besar: yaitu penimbangan Truk, Tangki ukur Tegak untuk penimbunan cairan ataupun tangki silinder datar dan Kalibrasi alat-alat ukur untuk Laboratorium seperti Thermometer, Thermohygrometer, Timbangan Analitical dan masih banyak lagi.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-brand-green rounded-r-xl">
              <p className="text-sm text-slate-700 leading-relaxed">
                Selanjutnya untuk memenuhi kebutuhan dan kepercayaan pelanggan khususnya dibidang kalibrasi, sejak tahun 2017 mulai menerapkan persyaratan internasional Sistem Manajemen Mutu <span className="font-bold text-brand-purple">ISO/IEC 17025:2017</span>, dan pada 23 Mei 2018 mendapatkan akreditasi dari Komite Akreditasi Nasional (KAN) Nomor: No. 2730/3.b2/LK/05/2018, Nomor Akreditasi LK-257-IDN.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;