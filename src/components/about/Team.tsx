"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

const AboutTeam = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-brand-purple">
          Tim CV Jasa Sukses Abadi
        </h2>
        <div className="h-1.5 w-24 bg-brand-green rounded-full mx-auto mt-6" />
      </div>

      <div className="flex flex-col items-center space-y-12">
        {/* Level 1: Pemilik */}
        <TeamMember
          name="Fery Nugraha"
          role="Pemilik"
          isMain
          image="/images/team/om-feri.jpeg"
        />

        {/* Garis Vertikal Penghubung */}
        <div className="hidden md:block w-px h-8 bg-slate-200 -my-8" />

        {/* Level 2: Manajer */}
        <TeamMember
          name="Risti Graharti"
          role="Manajer"
          image="/team/risti.jpg"
        />

        <div className="hidden md:block w-px h-8 bg-slate-200 -my-8" />

        {/* Level 3 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 relative">
          {/* Garis Horizontal Penghubung */}
          <div className="hidden md:block absolute top-0 left-1/2 w-[calc(100%-8rem)] h-px bg-slate-200 -translate-x-1/2" />
          <div className="hidden md:block absolute top-0 left-12 w-px h-6 bg-slate-200" />
          <div className="hidden md:block absolute top-0 right-12 w-px h-6 bg-slate-200" />

          <div className="pt-0 md:pt-6">
            <TeamMember
              name="Yanwar Prihata"
              role="Supervisor"
              image="/team/yanwar.jpg"
            />
          </div>

          <div className="pt-0 md:pt-6">
            <TeamMember
              name="Dinda"
              role="Administrasi"
              image="/team/dinda.jpg"
            />
          </div>
        </div>

        <div className="hidden md:block w-px h-16 bg-slate-200 -my-8 relative left-[-10rem]" />

        {/* Level 4 */}
        <div className="w-full max-w-4xl pt-8 border-t border-dashed border-slate-200 mt-8">
          <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Tim Teknisi
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TeamMember
              name="Sumo"
              role="Teknisi"
              isSmall
              image="/team/sumo.jpg"
            />

            <TeamMember
              name="Sidik"
              role="Teknisi"
              isSmall
              image="/team/sidik.jpg"
            />

            <TeamMember
              name="Topik"
              role="Teknisi"
              isSmall
              image="/team/topik.jpg"
            />

            <TeamMember
              name="Adam"
              role="Teknisi"
              isSmall
              image="/team/adam.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type TeamMemberProps = {
  name: string;
  role: string;
  image?: string;
  isMain?: boolean;
  isSmall?: boolean;
};

const TeamMember = ({
  name,
  role,
  image,
  isMain = false,
  isSmall = false,
}: TeamMemberProps) => {
  // State untuk melacak apakah gambar gagal di-load (error)
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex flex-col items-center ${isSmall ? "scale-90" : ""}`}>
      <div
        className={`relative bg-slate-100 rounded-full overflow-hidden border-4 border-white shadow-lg ${
          isMain ? "w-32 h-32" : "w-24 h-24"
        }`}
      >
        {/* Tampilkan gambar hanya jika prop image ada DAN tidak terjadi error */}
        {image && !imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImgError(true)} // Jika gambar gagal diload (tidak ketemu/rusak), ubah state error jadi true
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User
              className={`text-slate-300 ${
                isMain ? "w-16 h-16" : "w-12 h-12"
              }`}
            />
          </div>
        )}
      </div>

      <div className="text-center mt-4 bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-100">
        <h4
          className={`font-black text-brand-purple ${
            isMain ? "text-xl" : "text-lg"
          }`}
        >
          {name}
        </h4>

        <p className="text-brand-green text-xs font-bold uppercase tracking-widest mt-1">
          {role}
        </p>
      </div>
    </div>
  );
};

export default AboutTeam;