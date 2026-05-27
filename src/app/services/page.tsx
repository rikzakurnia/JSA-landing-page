
import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { 
  Gauge, 
  Weight, 
  Briefcase, 
  GraduationCap, 
  Wrench,
  ArrowRight,
  MousePointerClick
} from 'lucide-react';
import { Metadata } from 'next';

const createSlug = (text: string) => {
  return text.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
};

export const metadata: Metadata = {
  title: 'Layanan Kalibrasi & Tera', // Output: Layanan Kalibrasi & Tera | CV Jasa Sukses Abadi
  description: 'Layanan terpadu CV Jasa Sukses Abadi meliputi Kalibrasi bersertifikat KAN, Tera Metrologi Legal, Konsultan ISO/IEC 17025, Training, serta Maintenance & Repair.',
  keywords: [
    'layanan kalibrasi',
    'jasa tera timbangan',
    'konsultan ISO 17025',
    'training metrologi',
    'perbaikan alat ukur',
    'maintenance timbangan digital',
    'sertifikat kalibrasi KAN',
  ],
  openGraph: {
    title: 'Layanan Kalibrasi & Tera Terpadu | CV Jasa Sukses Abadi',
    description: 'Solusi lengkap untuk keakuratan alat ukur Anda. Kami menyediakan layanan kalibrasi, tera, konsultasi, pelatihan, hingga perbaikan.',
    url: '/services',
  },
};

export default function ServicesPage() {
  // Ukuran icon diubah dari 40 menjadi 32
  const services = [
    {
      title: "Kalibrasi",
      icon: <Gauge size={32} strokeWidth={1.5} />,
      desc: "Layanan kalibrasi alat ukur suhu, tekanan, massa, dan volume. Proses dilakukan oleh teknisi bersertifikat menggunakan standar acuan tertelusur ke KAN. Dilengkapi laporan dan sertifikat resmi untuk mendukung audit dan sistem mutu perusahaan Anda."
    },
    {
      title: "Tera",
      icon: <Weight size={32} strokeWidth={1.5} />,
      desc: "Pelayanan tera dan tera ulang alat ukur niaga seperti timbangan digital dan analog sesuai dengan peraturan metrologi legal. Dikerjakan oleh tenaga ahli berkoordinasi dengan UPTD Metrologi untuk hasil yang sah dan diakui."
    },
    {
      title: "Konsultan",
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      desc: "Pendampingan pengembangan laboratorium kalibrasi, penyusunan dokumen sistem mutu, persiapan ruang, hingga akreditasi ISO/IEC 17025. Solusi konsultasi menyeluruh untuk lembaga yang ingin membangun sistem penerapan yang kompeten dan diakui."
    },
    {
      title: "Training",
      icon: <GraduationCap size={32} strokeWidth={1.5} />,
      desc: "Program pelatihan teknis untuk meningkatkan kompetensi personel di bidang kalibrasi, metrologi, dan manajemen mutu laboratorium. Termasuk pelatihan ISO/IEC 17025 dan Achievement Motivation Training (AMT) untuk membangun etos kerja profesional."
    },
    {
      title: "Maintenance & Repair",
      icon: <Wrench size={32} strokeWidth={1.5} />,
      desc: "Layanan perbaikan dan perawatan alat ukur seperti timbangan, thermo hygrometer, manometer, dan alat laboratorium lainnya. Meliputi pengecekan fungsi, penggantian komponen, dan kalibrasi ulang agar alat tetap optimal dan presisi."
    }
  ];

  const orderSteps = [
    { title: "Hubungi via WhatsApp", desc: "Konsultasikan kebutuhan kalibrasi dan kondisi alat Anda ke admin kami." },
    { title: "Kirim Data Alat", desc: "Berikan detail spesifikasi, merek, dan kapasitas alat yang akan dikalibrasi." },
    { title: "Persetujuan & Jadwal", desc: "Penawaran harga disetujui dan penentuan jadwal pelaksanaan proses kalibrasi." },
    { title: "Pelunasan Pembayaran", desc: "Lakukan pembayaran sesuai dengan invoice resmi yang telah diterbitkan." },
    { title: "Proses Kalibrasi", desc: "Pengerjaan dilakukan secara On-site (di lokasi) atau Antar-Jemput ke lab." },
    { title: "Terima Sertifikat", desc: "Sertifikat kalibrasi resmi diterbitkan dan diserahkan kepada perusahaan Anda." },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <PageHero title="Layanan Kami" backgroundImage="/images/layanan.jpg" />

      {/* 2. SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-green font-bold text-xs uppercase tracking-[0.1em]">Keahlian Kami</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-purple mt-2 mb-4">Layanan Kalibrasi Terpadu</h2>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">
            CV Jasa Sukses Abadi menyediakan berbagai layanan yang mendukung keakuratan pengukuran, kepatuhan standar mutu, dan efisiensi operasional alat ukur Anda.
          </p>
        </div>

        {/* Gap antar card diperkecil sedikit */}
        <div className="flex flex-col gap-6 md:gap-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <Link 
                    href={`/services/${createSlug(service.title)}`}
                    key={index}
                    className={`group flex flex-col ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-brand-green/30 hover:shadow-lg transition-all duration-300`}
                    >
                    
                    {/* Icon Area */}
                    <div className="w-full md:w-[240px] border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50 flex items-center justify-center p-8">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-purple group-hover:text-brand-green transition-colors duration-300">
                        {service.icon}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-7 md:p-8 flex flex-col justify-between">
                        
                        <div>
                        <span className="text-[11px] uppercase tracking-[0.16em] text-brand-green font-bold">
                            Layanan {String(index + 1).padStart(2, '0')}
                        </span>

                        <h3 className="text-xl md:text-2xl font-extrabold text-brand-purple mt-3 mb-4 leading-snug">
                            {service.title}
                        </h3>

                        <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                            {service.desc}
                        </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-green">
                            Pelajari Lebih Lanjut
                            <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </div>

                        <div className="text-slate-300 group-hover:text-brand-green transition-colors duration-300">
                            <ArrowRight size={20} />
                        </div>
                        </div>

                    </div>
                    </Link>
            );
          })}
        </div>
      </section>

      {/* 3. FLOWCHART PEMESANAN */}
      <section className="bg-brand-purple py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Alur Pemesanan</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Proses terstruktur untuk memastikan layanan kalibrasi berjalan lancar.</p>
          </div>

          <div className="relative w-full group">
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-brand-purple to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-purple to-transparent z-20 pointer-events-none" />

            <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-6 md:px-24 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-green/50 hover:[&::-webkit-scrollbar-thumb]:bg-brand-green [&::-webkit-scrollbar-thumb]:rounded-full transition-colors">
              {orderSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex-none w-[280px] md:w-[320px] snap-center flex flex-col items-center text-center px-4"
                >
                  <div className="relative w-full h-14 mb-8 flex items-center justify-center">
                    {index !== orderSteps.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 w-full h-[2px] bg-white/10 top-1/2 -translate-y-1/2 z-0" />
                    )}

                    <div className="relative z-10 w-14 h-14 bg-brand-purple rounded-full border-2 border-brand-green flex items-center justify-center font-black text-xl text-brand-green shadow-lg shadow-brand-green/20 transition-transform hover:scale-110 hover:bg-brand-green hover:text-white cursor-default">
                      {index + 1}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full hover:bg-white/10 transition-colors h-full flex flex-col">
                    <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex md:hidden justify-center items-center gap-2 mt-2 text-brand-green font-bold text-xs uppercase tracking-widest animate-pulse">
              <MousePointerClick size={14} /> Geser untuk melihat
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 -mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-brand-purple mb-4">Punya Kebutuhan Kalibrasi Khusus?</h2>
        <p className="text-slate-500 mb-8">Diskusikan alat dan sistem mutu di tempat Anda dengan tim ahli kami sekarang juga.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/30 hover:-translate-y-1">
          Hubungi Kami <ArrowRight size={20} />
        </Link>
      </section>

    </main>
  );
}