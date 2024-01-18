import React from 'react'

const Poster4 = () => {
  return (
    <div className='bg-[#FFEAEE] h-28 flex justify-around'>
        <div className='flex flex-col justify-end'>
            <img src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/expert.svg' className='w-36 sm:w-28 ' />
        </div>
        <div className='flex flex-col justify-center pr-4 sm-pr-2'>
            <p className='text-[#454545] text-md sm:text-lg md:text-xl lg:text-2xl font-bold '>Need help planning your wedding? We are here to help!</p>
            
            
            <p className=' text-md md:text-lg text-red-400 text-end hover:underline '>Get in touch
            <i className='pi pi-angle-right'></i>
             </p>
        </div>

    </div>
  )
}

export default Poster4
