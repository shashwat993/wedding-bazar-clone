import React from 'react'
import trustedVendor from '@/services/TrustedVendor'
import { Carousel, CarouselSmall } from '../Carousel'



const TrustedVendor = () => {
  
  return (
    <div>
      <div className='hidden md:block'>
      <Carousel data={trustedVendor} title='Trusted Vendor' marginTop={true}  />
      </div>
      <div className='block md:hidden'>
      <CarouselSmall data={trustedVendor} title='Trusted Vendor'   />
      </div>
     
    </div>
  )
}

export default TrustedVendor