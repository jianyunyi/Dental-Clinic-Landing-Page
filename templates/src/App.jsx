import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import OurDoctors from './components/OurDoctors';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <Header />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <OurDoctors />
      <BeforeAfter />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
