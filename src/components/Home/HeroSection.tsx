import Image from 'next/image'
import React from 'react'
import portfoliobg from '../../../public/images/portfoliobg.gif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const HeroSection = () => {
  return (
    <div className='w-full relative  h-screen flex justify-center items-center bg-cover bg-center'
    style={{
      backgroundImage: `url(${portfoliobg.src})`, // Use .src to reference the path
    }}>
     {/* content */}
      <div className=' bg-black/50 h-screen gap-6 flex flex-col items-center justify-center shadow-lg  w-full text-center '>
       
        <h1 className='font-bold text-5xl text-white text-shadow-purple  underline '>Hello my name is Muzammil</h1>
        <h2 className='font-bold text-4xl text-white text-shadow-blue  '>i am a web3 devloper</h2>
      </div>
     

    </div>
  )
}

export default HeroSection
