import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { 
  BookOpen, 
  LineChart, 
  Calculator, 
  Award, 
  FileText, 
  ClipboardCheck, 
  Users,
  Presentation,
  Microscope,
  FileBadge,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pelatihan & Training Kalibrasi', 
  description: 'Program pelatihan intensif kalibrasi, laboratorium, sistem manajemen mutu ISO/IEC 17025, dan Achievement Motivation Training (AMT).',
};

export default function TrainingDetailPage() {
  const materials = [
    {
      title: "Dasar Kalibrasi & Metrologi",
      desc: "Pemahaman fundamental mengenai konsep kalibrasi, ketertelusuran, dan penerapan metrologi di lingkungan industri.",
      icon: <BookOpen size={24} strokeWidth={1.5} />
    },
    {
      title: "Interpretasi Hasil Kalibrasi",
      desc: "Teknik membaca, menganalisis, dan menyimpulkan data hasil pengukuran dari sertifikat kalibrasi secara tepat.",
      icon: <LineChart size={24} strokeWidth={1.5} />
    },
    {
      title: "Ketidakpastian Pengukuran",
      desc: "Pelatihan evaluasi dan perhitungan budget ketidakpastian pengukuran (Uncertainty of Measurement) secara matematis.",
      icon: <Calculator size={24} strokeWidth={1.5} />
    },
    {
      title: "Penerapan ISO/IEC 17025",
      desc: "Pengenalan komprehensif terkait persyaratan dan penerapan sistem manajemen mutu ISO/IEC 17025 di laboratorium.",
      icon: <Award size={24} strokeWidth={1.5} />
    },
    {
      title: "Dokumentasi Laboratorium",
      desc: "Cara menyusun, mengendalikan, dan mengelola dokumen mutu laboratorium agar selalu mutakhir dan rapi.",
      icon: <FileText size={24} strokeWidth={1.5} />
    },
    {
      title: "Audit Internal & Koreksi",
      desc: "Persiapan menjadi auditor internal laboratorium yang andal, serta teknik perumusan tindakan korektif dan preventif.",
      icon: <ClipboardCheck size={24} strokeWidth={1.5} />
    },
    {
      title: "Achievement Motivation Training",
      desc: "Program AMT khusus untuk membangun etos kerja positif, kedisiplinan, dan motivasi berprestasi bagi personel teknis.",
      icon: <Users size={24} strokeWidth={1.5} />
    }
  ];

  const methods = [
    {
      title: "Pemaparan Materi Terstruktur",
      desc: "Penyampaian teori oleh trainer yang kompeten dan berpengalaman langsung di bidang metrologi dan kalibrasi operasional.",
      icon: <Presentation size={20} />
    },
    {
      title: "Studi Kasus & Diskusi",
      desc: "Pembahasan real-case yang sering terjadi di lapangan.",
      icon: <Users size={20} />
    },
    {
      title: "Simulasi Praktik",
      desc: "Hands-on experience kalibrasi alat ukur secara langsung.",
      icon: <Microscope size={20} />
    },
    {
      title: "Evaluasi & Ujian",
      desc: "Pre-test & post-test untuk memastikan target kompetensi.",
      icon: <ClipboardCheck size={20} />
    },
    {
      title: "Sertifikat Pelatihan",
      desc: "Pemberian sertifikat resmi bukti legalitas kompetensi.",
      icon: <FileBadge size={20} />
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-0">
      <PageHero title="Pelatihan & Training" backgroundImage="/images/layanan.jpg" />

      {/* 1. INTRO SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-3">
          Tingkatkan Kompetensi
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mb-5 leading-snug">
          Program Pelatihan Intensif dan Praktikal
        </h2>
        <p className="text-slate-600 leading-relaxed text-base">
          Jasa Sukses Abadi menyediakan program pelatihan untuk meningkatkan kompetensi teknis di bidang kalibrasi, operasional laboratorium, serta sistem manajemen mutu. Kami juga menyediakan program motivasi kerja untuk SDM Anda.
        </p>
      </section>

      {/* 2. MATERI PELATIHAN (Mosaic Layout: 2 - 3 - 2) */}
      {/* 2. MATERI PELATIHAN */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {materials.map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300 h-full"
            >
                <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-50 text-brand-purple rounded-full flex items-center justify-center mb-5 border border-slate-100 shrink-0">
                    {item.icon}
                </div>

                <h3 className="text-lg font-bold text-brand-purple mb-3 leading-snug">
                    {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {item.desc}
                </p>
                </div>
            </div>
            ))}
        </div>
        </section>

      {/* 3. METODE PELATIHAN (Clean Dual-Tone Section) */}
      <section className="bg-brand-purple py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Title Area */}
            <div className="w-full lg:w-1/3 text-center lg:text-left sticky top-24">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 text-white rounded-xl mb-4">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                Pendekatan &<br className="hidden lg:block"/> Metode Pelatihan
              </h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                Kami menggabungkan teori komprehensif dengan simulasi praktik langsung (hands-on) untuk memastikan setiap materi dapat diserap dan diimplementasikan dengan baik.
              </p>
            </div>

            {/* Right List Area (Hero Card + 2x2 Grid) */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {methods.map((method, index) => (
                <div 
                  key={index} 
                  // Index 0 (Pemaparan Materi) dibuat memanjang penuh di atas
                  className={`bg-white rounded-xl p-6 shadow-lg ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 shrink-0 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                      {method.icon}
                    </div>
                    <h4 className="text-base font-bold text-brand-purple">{method.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-slate-50 py-20 text-center px-6 border-t border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-brand-purple mb-3">Tingkatkan Skill Tim Laboratorium Anda</h2>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Konsultasikan kebutuhan in-house training untuk perusahaan Anda dan dapatkan silabus yang disesuaikan dengan kebutuhan teknis Anda.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-lg transition-all duration-300 shadow-md">
          Hubungi Kami <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}