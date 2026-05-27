import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { 
  ThermometerSun, 
  Gauge, 
  Scale, 
  FlaskConical, 
  CheckCircle2, 
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Kalibrasi', 
  description: 'Jasa kalibrasi alat ukur suhu, tekanan, massa, dan volume. Standar acuan bersertifikat KAN, modern, dan dikerjakan oleh teknisi ahli.',
};

export default function KalibrasiDetailPage() {
  const categories = [
    {
      title: "Suhu & Kelembaban",
      icon: <ThermometerSun size={24} strokeWidth={1.5} />,
      items: [
        "Termometer kaca, digital, analog",
        "Thermo-hygrometer, thermocouple, RTD",
        "Oven suhu, inkubator"
      ],
      method: "Dry block calibrator, chamber suhu, ice bath",
      usage: "Cocok untuk lab, produksi, & penyimpanan"
    },
    {
      title: "Tekanan",
      icon: <Gauge size={24} strokeWidth={1.5} />,
      items: [
        "Pressure gauge analog & digital",
        "Transmitter & pressure switch"
      ],
      method: "Dead weight tester, comparator, pneumatic",
      usage: "Vacuum hingga tekanan tinggi"
    },
    {
      title: "Massa / Timbangan",
      icon: <Scale size={24} strokeWidth={1.5} />,
      items: [
        "Timbangan analitik, presisi, meja, lantai",
        "Anak timbangan standar (E1-M1)",
        "Uji linearitas, repeatability, dan error"
      ],
      method: "Perbandingan langsung dengan standar",
      usage: "Cocok untuk industri, lab, UMKM"
    },
    {
      title: "Volume",
      icon: <FlaskConical size={24} strokeWidth={1.5} />,
      items: [
        "Gelas ukur, labu ukur, pipet, buret",
        "Dispenser otomatis, bejana ukur"
      ],
      method: "Metode gravimetri dan visual",
      usage: "Untuk lab kimia, farmasi, & sekolah"
    }
  ];

  const processes = [
    {
      title: "Kalibrasi Thermohygrometer",
      desc: "Jasa Sukses Abadi melaksanakan kalibrasi thermo-hygrometer dengan menggunakan chamber suhu dan kelembaban terkontrol. Proses ini dilakukan untuk memastikan keakuratan pembacaan suhu dan RH (% kelembaban relatif), guna memenuhi standar teknis di lingkungan penyimpanan maupun produksi.",
      image: "/images/kalibrasi/hygrometer.jpeg",
    },
    {
      title: "Pengujian Termometer Digital dengan Titik Es Lebur",
      desc: "Proses kalibrasi dilakukan dengan metode titik tetap menggunakan campuran es-air (ice bath) untuk menguji ketertelusuran pembacaan suhu terhadap titik referensi 0°C. Sensor suhu dicelupkan dalam media es-air stabil, dan pembacaan dicatat serta dibandingkan dengan standar acuan. Metode ini umum digunakan dalam verifikasi alat ukur suhu seperti thermometer digital atau sensor RTD.",
      image: "/images/kalibrasi/digital-es.jpeg",
    },
    {
      title: "Kalibrasi Suhu (Multi-Channel / Dry Block)",
      desc: "Kalibrasi suhu dilakukan dengan menggunakan dry block calibrator dan thermocouple simulator sebagai standar acuan. Alat ukur suhu multi-channel diuji secara simultan untuk mengetahui deviasi pembacaan terhadap nilai referensi. Seluruh proses dilengkapi dengan pencatatan hasil secara manual maupun digital guna memastikan ketertelusuran terhadap standar nasional.",
      image: "/images/kalibrasi/kalibrasi-suhu.jpeg",
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-0">
      <PageHero title="Layanan Kalibrasi" backgroundImage="/images/layanan.jpg" />

      {/* 1. INTRO SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-3">
          Standar Tertelusur
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mb-5 leading-snug">
          Akurasi Tinggi untuk Setiap Pengukuran
        </h2>
        <p className="text-slate-600 leading-relaxed text-base">
          Jasa Sukses Abadi melayani kalibrasi alat ukur untuk kebutuhan laboratorium, industri, dan instansi pemerintah. Seluruh proses dilakukan oleh teknisi berpengalaman, menggunakan standar acuan bersertifikat dan peralatan kalibrasi modern.
        </p>
      </section>

      {/* 2. RUANG LINGKUP KALIBRASI (Corporate Grid Cards) */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-50 text-brand-purple rounded-full flex items-center justify-center mb-5 border border-slate-100">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-purple mb-4">{cat.title}</h3>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                    <CheckCircle2 size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-slate-100 space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Metode</p>
                  <p className="text-sm font-semibold text-brand-purple">{cat.method}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Penggunaan</p>
                  <p className="text-sm font-semibold text-brand-green">{cat.usage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROSES & DOKUMENTASI (Zig-Zag Layout) */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Dokumentasi Proses</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mt-2">Penerapan Standar di Lapangan</h2>
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
                      Proses 0{index + 1}
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

      {/* 4. CALL TO ACTION */}
      <section className="bg-slate-50 py-20 text-center px-6 border-t border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-brand-purple mb-3">Butuh Layanan Kalibrasi?</h2>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Dapatkan penawaran terbaik dan jadwal tercepat untuk alat ukur Anda.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-lg transition-all duration-300 shadow-md">
          Konsultasi via WhatsApp <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}