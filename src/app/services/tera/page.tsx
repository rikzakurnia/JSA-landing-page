import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { 
  Scale, 
  Truck, 
  Droplet, 
  Settings, 
  Database,
  ShieldCheck, 
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Tera dan Tera Ulang', 
  description: 'Layanan tera dan tera ulang alat ukur niaga (metrologi legal) seperti timbangan jembatan, digital, flow meter, dan tangki ukur.',
};

export default function TeraDetailPage() {
  const scopes = [
    { title: "Timbangan Jembatan (Weighbridge)", icon: <Truck size={24} strokeWidth={1.5} /> },
    { title: "Timbangan Digital dan Analog", icon: <Scale size={24} strokeWidth={1.5} /> },
    { title: "Tangki Ukur Mobil (TUM)", icon: <Database size={24} strokeWidth={1.5} /> },
    { title: "Flow Meter", icon: <Droplet size={24} strokeWidth={1.5} /> },
    { title: "Timbangan Otomatis (Bagging Scale)", icon: <Settings size={24} strokeWidth={1.5} /> },
    { title: "Alat Ukur Takar Timbang lainnya", icon: <ShieldCheck size={24} strokeWidth={1.5} /> },
  ];

  const processes = [
    {
      title: "Kalibrasi Timbangan Jembatan (Weighbridge)",
      desc: "Pelaksanaan tera ulang jembatan timbang menggunakan standar anak timbangan kelas M1. Proses ini sangat penting untuk memastikan keakuratan transaksi tonase dan menghindari kerugian finansial pada operasional logistik, pabrik kelapa sawit, maupun pertambangan.",
      image: "/images/tera/terajembatan.webp", 
    },
    {
      title: "Tera dan Tera Ulang Timbangan Digital",
      desc: "Pengujian Timbangan Digital kapasitas 150 Kg di area produksi menggunakan anak timbangan standar kelas M1. Pemeriksaan meliputi uji eksentrisitas, uji kebenaran, dan daya ulang (repeatability) untuk menjamin akurasi sesuai dengan syarat teknis Direktorat Metrologi.",
      image: "/images/tera/timbangan-digital.jpg",
    },
    {
      title: "Kalibrasi Flowmeter Mobil Tangki Ukur & Instalasi Bahan Bakar",
      desc: "Jasa Sukses Abadi melaksanakan tera/tera ulang pada flowmeter mobil tangki bahan bakar ukur di depo pengisian. Proses ini menggunakan master meter atau bejana ukur standar untuk memastikan keakuratan penyerahan volume BBM, guna mencegah kerugian dan memenuhi standar operasional.",
      image: "/images/tera/flowmeter-mobil-tangki.jpeg",
    },
    {
      title: "Tera Timbangan Otomatis (Bagging Scale)",
      desc: "Jasa Sukses Abadi mendampingi pengujian dan penyetelan bagging scale (timbangan otomatis) pada pabrik pupuk. Kami memastikan setiap kantong yang diisi mencapai target berat yang ditetapkan tanpa ada pengurangan volume yang merugikan konsumen.",
      image: "/images/tera/bagging-scale.jpeg",
    },
    {
      title: "Tera Tangki Timbun SPBU di Metro, Lampung",
      desc: "Pelaksanaan tera ukur volume tangki pendam (underground tank) di sebuah stasiun pengisian bahan bakar umum (SPBU) di wilayah Metro. Pengujian menggunakan metode volumetrik untuk penerbitan tabel ukur tangki yang presisi.",
      image: "/images/tera/tangki-tanam.jpeg",
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-0">
      <PageHero title="Layanan Tera" backgroundImage="/images/layanan.jpg" />

      {/* 1. INTRO & SCOPE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-3">
          Layanan Metrologi Legal
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mb-5 leading-snug max-w-3xl mx-auto">
          Kepastian Hukum dan Akurasi Alat Ukur Niaga Anda
        </h2>
        <p className="text-slate-600 leading-relaxed text-base max-w-3xl mx-auto mb-16">
          Kami menyediakan layanan tera dan tera ulang untuk memastikan alat ukur, takar, timbang, dan perlengkapannya (UTTP) yang digunakan dalam transaksi perdagangan beroperasi dengan akurat dan sesuai dengan peraturan Metrologi Legal.
        </p>

        {/* Grid Ruang Lingkup Tera (Corporate Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {scopes.map((scope, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-brand-purple group-hover:text-brand-green transition-colors duration-300">
                {scope.icon}
              </div>
              <h3 className="font-bold text-brand-purple text-sm md:text-base leading-snug">{scope.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PROSES & DOKUMENTASI LAPANGAN (Zig-Zag Layout) */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Dokumentasi Lapangan</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mt-2">Pelaksanaan Tera di Berbagai Industri</h2>
          </div>

          <div className="space-y-16 md:space-y-20">
            {processes.map((proc, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col gap-8 lg:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Image Column */}
                  <div className="w-full md:w-1/2 relative group">
                    <div className={`absolute top-3 ${isEven ? '-left-3' : '-right-3'} w-full h-full bg-slate-100 rounded-2xl -z-10`} />
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <Image 
                        src={proc.image} 
                        alt={proc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="w-full md:w-1/2">
                    <div className="inline-block px-3 py-1.5 bg-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-widest rounded-md mb-4 border border-slate-200">
                      Dokumentasi 0{index + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-brand-purple mb-4 leading-snug">
                      {proc.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {proc.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="bg-slate-50 py-20 text-center px-6 border-t border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-brand-purple mb-3">Jadwalkan Tera Alat Ukur Anda</h2>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Pastikan keakuratan transaksi dan hindari kerugian dengan layanan tera resmi dari kami.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-lg transition-all duration-300 shadow-md">
          Hubungi Admin <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}