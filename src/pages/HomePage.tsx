import { useState, useEffect } from 'react';

import Category from '@/components/home/sections/Category';
import Cta from '@/components/home/sections/Cta';
import Experience from '@/components/home/sections/Experience';
import HeroSection from '@/components/home/sections/HeroSection';
import Navbar from '@/components/home/sections/Navbar';
import Testimonials from '@/components/home/sections/Testimonial';
import Footer from '@/components/layout/footer';
import { AppSidebar } from '@/components/home/sections/AppSidebar';

export const HomePage = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <>
      {/* <h1 className="font-bold text-5xl">Welcome to the Home Page</h1> */}
      {!isMobile && <Navbar />}
      {isMobile && <AppSidebar />}
      <HeroSection />
      <Experience />
      <Category />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};
