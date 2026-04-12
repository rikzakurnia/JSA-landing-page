"use client";
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactMap = () => {
  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      {/* Container utama dengan gap yang luas */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
        
        {/* KOLOM KIRI (Desktop) / ATAS (Mobile): PETA GOOGLE MAPS */}
        <div className="lg:w-2/3 min-h-[400px] md:min-h-[550px] bg-slate-100 rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl shadow-brand-purple/10 border border-slate-200 relative">
           <iframe
             title="Lokasi CV Jasa Sukses Abadi"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3477097142213!2d105.21511031007178!3d-5.36381405365409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cfd139e9fcf1%3A0x5e7511f10769778c!2sCV.%20Jasa%20Sukses%20Abadi!5e0!3m2!1sen!2sid!4v1775987339098!5m2!1sen!2sid"
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen={true}
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             className="grayscale-[0.2] contrast-[1.1]"
           ></iframe>
        </div>

        {/* KOLOM KANAN (Desktop) / BAWAH (Mobile): INFORMASI KANTOR */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div className="mb-10">
            <span className="text-brand-green font-bold text-xs md:text-sm uppercase tracking-[0.2em]">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-purple mt-2 mb-6">Kantor Kami</h2>
            <div className="h-1.5 w-20 bg-brand-green rounded-full" />
          </div>

          <div className="space-y-10">
            {/* Nama & Deskripsi */}
            <div>
              <h3 className="text-2xl font-black text-brand-purple mb-3 tracking-tight">CV Jasa Sukses Abadi</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Penyedia layanan kalibrasi terpercaya dengan standar akurasi tinggi untuk mendukung kualitas dan keandalan alat ukur Anda.
              </p>
            </div>

            {/* Detail Kontak */}
            <div className="space-y-7">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/5 rounded-xl flex items-center justify-center text-brand-purple border border-brand-purple/5">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alamat Workshop</p>
                  <p className="text-sm md:text-base text-brand-purple font-semibold leading-relaxed">
                    Gang Militer, Perumahan Nuwo Sriwijaya Blok A No. 2 Hajimena, Natar, Lampung Selatan, Lampung
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/5 rounded-xl flex items-center justify-center text-brand-purple border border-brand-purple/5">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Telepon / WA</p>
                  <p className="text-sm md:text-base text-brand-purple font-black">+62 812 1313 5257</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/5 rounded-xl flex items-center justify-center text-brand-purple border border-brand-purple/5">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Resmi</p>
                  <p className="text-sm md:text-base text-brand-purple font-black">jsa.lpg@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3477097142213!2d105.21511031007178!3d-5.36381405365409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cfd139e9fcf1%3A0x5e7511f10769778c!2sCV.%20Jasa%20Sukses%20Abadi!5e0!3m2!1sen!2sid!4v1775987339098!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
export default ContactMap;