import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  RefreshCw, 
  Activity, 
  Search, 
  FileCheck,
  ArrowRight,
  ClipboardList
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Layanan Maintenance & Repair Alat Ukur', 
  description: 'Layanan pemeliharaan preventif, perbaikan komponen, dan rekalibrasi alat ukur laboratorium serta industri.',
};

export default function MaintenanceDetailPage() {
  const services = [
    { title: "Perbaikan Digital & Analog", desc: "Servis komprehensif untuk berbagai alat seperti termometer, timbangan, hingga peralatan lab lainnya.", icon: <Wrench size={24} /> },
    { title: "Pemeliharaan Preventif", desc: "Pemeriksaan berkala untuk mencegah kerusakan dini dan menjaga keandalan alat.", icon: <ShieldCheck size={24} /> },
    { title: "Penggantian Komponen", desc: "Identifikasi dan penggantian suku cadang yang rusak dengan komponen berkualitas.", icon: <Settings size={24} /> },
    { title: "Rekalibrasi Pasca Perbaikan", desc: "Memastikan alat kembali akurat dan memenuhi standar setelah proses perbaikan selesai.", icon: <RefreshCw size={24} /> },
    { title: "Uji Fungsi & Stabilitas", desc: "Pengujian performa untuk memastikan stabilitas hasil pengukuran sebelum alat kembali digunakan.", icon: <Activity size={24} /> },
  ];

  const procedures = [
    { title: "Inspeksi & Diagnosa", desc: "Pengecekan mendalam untuk menentukan sumber kerusakan alat ukur Anda." },
    { title: "Estimasi & Persetujuan", desc: "Transparansi biaya perbaikan dan menunggu konfirmasi dari pelanggan." },
    { title: "Proses Perbaikan", desc: "Pengerjaan teknis, pembersihan, dan penggantian suku cadang yang diperlukan." },
    { title: "Kalibrasi Ulang", desc: "Pengujian akurasi pasca perbaikan agar alat kembali presisi sesuai standar." },
    { title: "Laporan Layanan", desc: "Penyerahan laporan kerja dan tips pemeliharaan agar alat lebih awet." },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-0">
      <PageHero title="Maintenance & Repair" backgroundImage="/images/layanan.jpg" />

      {/* 1. INTRO SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-3">
          Jaga Performa Alat Anda
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-purple mb-5 leading-snug">
          Solusi Perawatan & Perbaikan Alat Ukur Presisi
        </h2>
        <p className="text-slate-600 leading-relaxed text-base">
          Jasa Sukses Abadi menyediakan layanan pemeliharaan dan perbaikan untuk memastikan performa alat tetap optimal, presisi, dan memperpanjang umur pakai peralatan laboratorium maupun industri Anda.
        </p>
      </section>

      {/* 2. JENIS LAYANAN (Grid) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-xl font-bold text-brand-purple mb-8 text-center">Cakupan Layanan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-green/30 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-50 text-brand-purple rounded-full flex items-center justify-center mb-5 border border-slate-100">
                {item.icon}
              </div>
              <h4 className="font-bold text-brand-purple mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROSEDUR PENGERJAAN (Vertical Steps) */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <ClipboardList className="text-brand-green" />
            <h3 className="text-xl font-bold text-brand-purple">Prosedur Pengerjaan</h3>
          </div>

          <div className="space-y-6">
            {procedures.map((proc, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    {index + 1}
                  </div>
                  {index !== procedures.length - 1 && <div className="w-[2px] h-full bg-slate-200 my-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-bold text-brand-purple mb-1">{proc.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-slate-50 py-20 text-center px-6 border-t border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-brand-purple mb-3">Alat Anda Mengalami Kendala?</h2>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Jangan biarkan kerusakan kecil mengganggu operasional Anda. Konsultasikan perbaikan alat dengan teknisi kami.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-lg transition-all duration-300 shadow-md">
          Minta Perbaikan <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}