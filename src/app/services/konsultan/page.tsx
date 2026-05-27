import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { 
  FileText, 
  Award, 
  PenTool, 
  Calculator, 
  GraduationCap, 
  Lightbulb,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  FileBadge,
  BrainCircuit,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Konsultan Kalibrasi & Sistem Mutu', 
  description: 'Pendampingan penyusunan SOP, akreditasi ISO/IEC 17025, desain laboratorium, hingga pelatihan SDM kalibrasi.',
};

export default function KonsultanDetailPage() {
  const scopes = [
    {
      title: "Penyusunan & Review SOP",
      desc: "Pembuatan dan peninjauan Standar Operasional Prosedur (SOP) kalibrasi agar sesuai dengan regulasi dan standar akreditasi nasional.",
      icon: <FileText size={24} strokeWidth={1.5} />
    },
    {
      title: "Pendampingan ISO/IEC 17025",
      desc: "Konsultasi intensif dan bimbingan terstruktur menuju akreditasi ISO/IEC 17025 untuk laboratorium pengujian dan kalibrasi.",
      icon: <Award size={24} strokeWidth={1.5} />
    },
    {
      title: "Desain Laboratorium",
      desc: "Perencanaan tata letak (layout) dan spesifikasi ruangan laboratorium kalibrasi yang memenuhi standar lingkungan kerja ideal.",
      icon: <PenTool size={24} strokeWidth={1.5} />
    },
    {
      title: "Evaluasi Ketidakpastian",
      desc: "Bimbingan teknis dalam menghitung dan mengevaluasi budget ketidakpastian pengukuran (Uncertainty of Measurement).",
      icon: <Calculator size={24} strokeWidth={1.5} />
    },
    {
      title: "Pelatihan Teknis Internal",
      desc: "Pelatihan (In-house training) untuk meningkatkan pemahaman dan kompetensi teknis personel laboratorium di perusahaan Anda.",
      icon: <GraduationCap size={24} strokeWidth={1.5} />
    },
    {
      title: "Konsultasi Investasi Alat",
      desc: "Saran pemilihan alat ukur (master kalibrator) yang tepat guna dan efisien secara biaya (cost-effective) sesuai kebutuhan.",
      icon: <Lightbulb size={24} strokeWidth={1.5} />
    }
  ];

  const benefits = [
    {
      title: "Efisiensi Sistem Internal",
      desc: "Meningkatkan kecepatan dan efisiensi sistem kalibrasi internal perusahaan tanpa mengorbankan kualitas.",
      icon: <TrendingUp size={20} />
    },
    {
      title: "Kesesuaian Standar",
      desc: "Memastikan seluruh operasional dan dokumen selaras dengan standar akreditasi yang berlaku.",
      icon: <CheckCircle2 size={20} />
    },
    {
      title: "Siap Audit & Sertifikasi",
      desc: "Membantu laboratorium Anda memiliki kesiapan administratif yang matang saat menghadapi proses audit.",
      icon: <FileBadge size={20} />
    },
    {
      title: "SDM Lebih Kompeten",
      desc: "Mencetak personel kalibrasi yang tidak hanya mampu mengoperasikan alat, tetapi juga paham konsep metrologi.",
      icon: <BrainCircuit size={20} />
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-0">
      <PageHero title="Konsultan Sistem Mutu" backgroundImage="/images/layanan.jpg" />

      {/* 1. INTRO SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-3">
          Konsultasi Profesional
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mb-5 leading-snug">
          Bangun Sistem Kalibrasi dan Mutu Pengukuran yang Andal
        </h2>
        <p className="text-slate-600 leading-relaxed text-base">
          Jasa Sukses Abadi memberikan layanan konsultasi menyeluruh untuk mendukung laboratorium, industri, dan instansi. Kami membimbing Anda membangun sistem kalibrasi yang terstandarisasi dan siap menghadapi akreditasi.
        </p>
      </section>

      {/* 2. CAKUPAN LAYANAN (Corporate Grid) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopes.map((scope, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 text-brand-purple rounded-full flex items-center justify-center mb-5 border border-slate-100">
                {scope.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-purple mb-3">{scope.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {scope.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TUJUAN & MANFAAT (Clean Dual-Tone Section) */}
      <section className="bg-brand-purple py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Title Area */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                Mengapa Memilih Jasa Konsultan Kami?
              </h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                Investasi pada sistem mutu yang tepat akan menghemat biaya operasional, mencegah kesalahan teknis, dan meningkatkan kredibilitas bisnis Anda di mata klien.
              </p>
            </div>

            {/* Right List Area (Solid Corporate Cards) */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 shrink-0 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="text-base font-bold text-brand-purple">{benefit.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-slate-50 py-20 text-center px-6 border-t border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-brand-purple mb-3">Siap Membangun Laboratorium Terstandarisasi?</h2>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Diskusikan kebutuhan akreditasi dan sistem mutu Anda bersama konsultan berpengalaman kami hari ini.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-lg transition-all duration-300 shadow-md">
          Konsultasi Sekarang <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}