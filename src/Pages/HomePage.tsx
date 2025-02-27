"use client";
import Image from 'next/image'
import React from 'react'

import portfoliobg from '../../public/images/portfoliobg.gif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeroSection from '@/components/Home/HeroSection';
import SectionWIdthWrapper from '@/components/Global/SectionWIdthWrapper';
import RetroCard from '@/components/Global/retrocard/RetroCard';


const HomePage = () => {
  return (
    <div
      className="w-full  h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${portfoliobg.src})`, // Use .src to reference the path
      }}
    >
      {/* dull-back-ground-layer */}
      <div className="flex h-full bg-black/40 ">
        {/* Swiper content */}
        <Swiper
          modules={[Pagination, Navigation]}
          direction="horizontal" // Horizontal sliding
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="w-full h-full"
        >
          <SwiperSlide >
            <HeroSection />
          </SwiperSlide>

          <SwiperSlide >
            <SectionWIdthWrapper>
              <h1 className="font-bold text-5xl text-white">About Section</h1>
              <RetroCard/>
            </SectionWIdthWrapper>
          </SwiperSlide>

          <SwiperSlide className="flex h-full items-center justify-center bg-purple-500">
            <div className="text-center">
              <h1 className="font-bold text-5xl text-white">Projects Section</h1>
              <p className="text-xl mt-4 text-white">Check out my projects.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex h-full items-center justify-center bg-red-500">
            <div className="text-center">
              <h1 className="font-bold text-5xl text-white">Contact Section</h1>
              <p className="text-xl mt-4 text-white">Get in touch with me!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage
