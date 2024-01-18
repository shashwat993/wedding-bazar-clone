import React from 'react'
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Poster6 = () => {
  return (
    <div className= ' bg-[#FFF5F3] w-full h-36 md:h-52 mt-16 sm:mt-20 md:mt-28 flex flex-col gap-4 justify-start md:justify-center '>
      <div className='flex justify-start md:justify-center pl-4'><p className='text-3xl font-extrabold text-[#636363]'>Follow us on</p></div>
      <div className='  flex justify-start md:justify-center  gap-2 md:gap-6 ml-4 md:pl-60 '>
      <FaPinterest size={40} />
      <FaFacebook  size={40}/>
      <p className='text-nowrap flex text-2xl md:text-3xl bg-[#FFDFD8]  rounded-lg'>
      <FaSquareInstagram size={40} />
      @weddingbazaar
      </p>
      

      </div>
    
      
       
    </div>
  )
}

export default Poster6