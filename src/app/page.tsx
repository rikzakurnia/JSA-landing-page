import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Customers from '@/components/Customer';
import Certificate from '@/components/Certificate';
import ContactMap from '@/components/ContactMap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Customers/>
      <Certificate/>
      <ContactMap />
      
      <Footer/>
    </main>
  );
}