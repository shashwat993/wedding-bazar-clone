import React from 'react'
import {Carousel, CarouselSmall} from '../Carousel'
import { VendorType } from '@/services/VendorCaterogy'


const VendorCategory = () => {
 
  return (
    <div>
        <Carousel title='Vendor Category' data = {VendorType} marginTop={false} />
    </div>
  )
}

const VendorCategorySamllScreen = () => {
 
  return (
    <div>
        <CarouselSmall title='Vendor Category' data = {VendorType} />
    </div>
  )
}

export  {VendorCategory, VendorCategorySamllScreen}