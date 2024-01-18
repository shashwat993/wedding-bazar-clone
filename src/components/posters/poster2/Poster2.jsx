import React from 'react'

const Poster2 = () => {
  return (
    <div>
        <div className='bg-[#FFF1F3] hidden  md:flex justify-around h-72'>
            <div className='flex justify-between gap-0  sm:gap-2 md:gap-4 lg:gap-8'>
              
                    <img src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/mb22.svg' className='pt-10  ' />
                
               
                    <img src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/mb1.svg' className='pb-10 ' />
                
            </div>
            <div className='flex flex-col justify-center  gap-0 sm:gap-1 md:gap-2 lg:gap-3'>
                <div className='text-red-500 text-sm md:text-xl lg:text-2xl font-semibold'>
                    <p>
                    Download Wedding Bazaar app
                    </p>
                    </div>
                <div className='text-[#555555] text-sm md:text-xl lg:text-2xl'> 
                    <p>Plan weddings, book vendors</p>
                    <p>& explore curated ideas</p>
                </div>
                <div className='flex justify-start gap-1 md:gap-2 lg:gap-4'>
                    <img  src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/googleplay.png' className='w-[30%] md:w-[40%] lg:w-full' />
                    <img  src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/apple.png' className='w-[30%] md:w-[40%] lg:w-full' />
                </div>
            </div>
            

        </div>
        <div className='bg-[#FFF1F3] block md:hidden justify-around h-45 '>
            <div className='text-red-500 text-lg sm:text-xl font-semibold flex justify-around'>
            <p>Download Wedding Bazaar app</p>
            </div>
            <div className='flex justify-around mt-3'>
                <div className='flex justify-center'>
                <img src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/mb22.svg' className='w-[60%] sm:w-[75%]' />
                </div>
                <div>
                <div className='text-[#555555] text-md sm:text-xl'> 
                    <p>Plan weddings, book vendors</p>
                    <p>& explore curated ideas</p>
                </div>
                <div className='flex  gap-1 sm:gap-2 justify-start items-center mt-2'>
                    <img  src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/googleplay.png' className='w-[30%] md:w-[40%] lg:w-full' />
                    <img  src='https://img.weddingbazaar.com/shaadisaga_production/static/new_home/apple.png' className='w-[30%] md:w-[40%] lg:w-full' />
                </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Poster2