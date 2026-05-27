"use client";
import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Phone, Mail, Clock, Building } from 'lucide-react';



export default function ContactPage() {
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !telepon) return;

    const text = `Halo, saya ingin mengajukan kalibrasi.\nNama: ${nama}\nTelepon: ${telepon}`;
    const encodedText = encodeURIComponent(text);
    
    const waUrl = `https://api.whatsapp.com/send/?phone=6281213135257&text=${encodedText}&type=phone_number&app_absent=0`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <PageHero title="Hubungi Kami" backgroundImage="/images/contact-bg.jpg" />

      {/* 2. FORM WHATSAPP SECTION */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-brand-purple mb-4 tracking-tight">
          Siap Kalibrasi? Hubungi Kami
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed text-sm md:text-base">
          Tim kami siap membantu Anda dalam penjadwalan layanan kalibrasi dengan cepat, akurat, dan sesuai standar. Hubungi kami sekarang untuk konsultasi atau pemesanan!
        </p>

        <form onSubmit={handleWhatsApp} className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Rikza Kurnia"
            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-slate-700 bg-white"
          />
          <input
            type="tel"
            required
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            placeholder="Contoh: 083170547710"
            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all text-slate-700 bg-white"
          />
          <button
            type="submit"
            /* Mengubah warna button menjadi brand-green */
            className="w-full py-4 mt-2 bg-brand-green hover:bg-brand-purple text-white font-bold rounded-xl transition-all duration-300 tracking-widest text-sm uppercase shadow-lg shadow-brand-green/30 hover:-translate-y-1"
          >
            Kirim Via WhatsApp
          </button>
        </form>
      </section>

      {/* 3. CONTACT CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Kantor Pusat */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-left group">
            <h3 className="text-xl font-black text-brand-purple mb-6 border-b border-slate-100 pb-4">Kantor Pusat</h3>
            <div className="flex gap-4">
              {/* Mengubah warna icon menjadi brand-green */}
              <div className="text-brand-green mt-1 shrink-0 group-hover:scale-110 transition-transform">
                <Building size={24} />
              </div>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                Gang Militer, Perumahan Nuwo Sriwijaya Blok A No. 2 Hajimena, Natar, Lampung Selatan, Lampung
              </p>
            </div>
          </div>

          {/* Card 2: Admin */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-left group">
            <h3 className="text-xl font-black text-brand-purple mb-6 border-b border-slate-100 pb-4">Admin</h3>
            <div className="flex gap-4 mb-5">
              <div className="text-brand-green mt-1 shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <p className="text-slate-700 font-black leading-relaxed">
                081213135257
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-slate-400 mt-1 shrink-0">
                <Clock size={20} />
              </div>
              <div className="text-slate-500 text-sm space-y-2 font-medium">
                <p>Senin - Jumat : 08.00 - 16.00 WIB</p>
                <p>Sabtu : 08.00 - 14.00 WIB</p>
              </div>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-left group">
            <h3 className="text-xl font-black text-brand-purple mb-6 border-b border-slate-100 pb-4">Email</h3>
            <div className="flex gap-4">
              <div className="text-brand-green mt-1 shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <p className="text-slate-700 font-black leading-relaxed">
                jsa.lpg@gmail.com
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="w-full h-[400px] md:h-[500px] bg-slate-200 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-purple/5 border border-slate-200 relative group">
           <iframe
             title="Lokasi CV Jasa Sukses Abadi"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3477097142213!2d105.21511031007178!3d-5.36381405365409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cfd139e9fcf1%3A0x5e7511f10769778c!2sCV.%20Jasa%20Sukses%20Abadi!5e0!3m2!1sen!2sid!4v1775987339098!5m2!1sen!2sid"
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen={true}
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             className="grayscale-[0.2] contrast-[1.1] absolute inset-0"
           ></iframe>
        </div>
      </section>
    </main>
  );
}