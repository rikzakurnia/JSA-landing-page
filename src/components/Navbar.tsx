"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}>
    <path d="M412.19 118.66a109 109 0 0 1-9.45-5.5a133 133 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.8 161.8 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.5 167.5 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.5 158.5 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61"/>
  </svg>
);

const WhatsAppIcon = ({className} : {className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000" ><path  d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/></svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = ["Kalibrasi", "Tera", "Konsultan", "Training", "Maintenance & Repair"];

  return (
    // Header menggunakan transform untuk mengangkat seluruh bar saat scroll
    <header className={`fixed w-full z-50 transition-transform duration-500 ${
      isScrolled ? "-translate-y-[40px]" : "translate-y-0"
    }`}>
      {/* 1. TOP INFO BAR - Fixed height 40px agar sinkron dengan transform */}
      <div className="bg-brand-purple text-white/90 h-[40px] px-6 text-[10px] md:text-[11px] font-medium flex items-center border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center uppercase tracking-wider">
          <span className="truncate pr-4">Gang Militer, Perumahan Nuwo Sriwijaya, Lampung Selatan</span>
          <div className="flex items-center gap-4 shrink-0">
            <a href="#" className="hover:text-brand-green transition-colors"><InstagramIcon className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brand-green transition-colors"><TiktokIcon className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative h-8 w-32 sm:h-10 sm:w-44">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              fill 
              className={`object-contain transition-all duration-500 ${!isScrolled && "brightness-0 invert"}`} 
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/" label="Home" isScrolled={isScrolled} />
            <NavLink href="/about" label="Tentang Kami" isScrolled={isScrolled} />
            
            <div className="relative" onMouseEnter={() => setActiveDropdown(true)} onMouseLeave={() => setActiveDropdown(false)}>
              <button className={`flex items-center gap-1 font-semibold hover:text-brand-green transition-colors ${isScrolled ? "text-brand-purple" : "text-white"}`}>
                Layanan <ChevronDown size={14} className={`transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full -left-4 w-56 pt-4 transition-all ${activeDropdown ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden p-2">
                  {services.map((item) => (
                    <Link key={item} href="#" className="block px-4 py-2 text-sm text-brand-purple hover:bg-slate-50 hover:text-brand-green rounded-lg font-bold transition-colors">{item}</Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/articles" label="Artikel" isScrolled={isScrolled} />

            <Link href="/contact" className="px-6 py-2 bg-brand-green hover:bg-brand-purple text-white text-xs font-black rounded-full transition-all uppercase tracking-tight">Contact Us</Link>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-brand-purple" : "text-brand-green"}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`md:hidden fixed inset-0 top-0 bg-white transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} z-[60]`}>
           {/* ... Konten mobile menu sama seperti sebelumnya ... */}
           <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
              <div className="h-8 w-32 relative"><Image src="/images/logo.png" alt="Logo" fill className="object-contain" /></div>
              <button onClick={() => setIsOpen(false)} className="text-brand-purple"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              <Link href="/" className="text-3xl font-black text-brand-purple" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-3xl font-black text-brand-purple" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
              <div className="space-y-4 border-l-4 border-brand-green pl-6 py-2">
                {services.map(s => <Link key={s} href="#" className="block text-lg font-bold text-slate-600" onClick={() => setIsOpen(false)}>{s}</Link>)}
              </div>
              <Link href="/contact" className="mt-4 w-full py-4 bg-brand-purple text-center text-white rounded-2xl font-black text-xl" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, label, isScrolled }: { href: string, label: string, isScrolled: boolean }) => (
  <Link href={href} className={`font-semibold transition-colors hover:text-brand-green ${isScrolled ? "text-brand-purple" : "text-white"}`}>
    {label}
  </Link>
);

export default Navbar;