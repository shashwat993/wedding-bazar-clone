'use client'
import React from 'react'; 
import {InspBlog} from '@/components/InsprationalBlog/InspBlog';
import Carousel from '@/components/banner/BannerCarousel';
import NavBar from '@/components/navbar/NavBar';
import TrustedVendor from '@/components/trustedVendor.jsx/TrustedVendor';
import {VendorCategory} from '@/components/vendorCategory/VendorCatagory';
import Poster3 from '@/components/posters/Poster3/Poster3';
import Poster4 from '@/components/posters/poster4/Poster4';
import Poster5 from '@/components/posters/poster5/Poster5';
import Poster6 from '@/components/posters/poster6/Poster6';
import Poster7 from '@/components/posters/poster7/Poster7';
import Poster8 from '@/components/posters/poster8/Poster8';
import Footer from '@/components/footer/Footer';
import Poster1 from '@/components/posters/poster1/Poster1';
import Poster2 from '@/components/posters/poster2/Poster2';

export default function Home() {
  return (
    <div>
    <div className='absolute' >
      <NavBar/>
      <Carousel/>
      <VendorCategory/>
      <Poster1/>
      <InspBlog />
      <Poster2/>
      <TrustedVendor/>
      <Poster3/>
      <Poster4/>
      <Poster5/>
      <Poster6/>
      <Poster7 />
      <Poster8/>
      <Footer/>


    </div>
    
    

    </div>
    
  )
}






