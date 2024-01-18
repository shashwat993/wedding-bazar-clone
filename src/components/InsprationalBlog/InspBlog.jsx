import React from 'react'
import {Carousel, CarouselSmall} from '../Carousel'
import blogData from '../../services/InspirationsBlog'


const InspBlog = () => {
 
  return (
    <div>
        <Carousel title='Inspirational Blog' data ={blogData} marginTop={false} />
    </div>
  )
}
const InspBlogSmallScreen = () => {
 
  return (
    <div>
        <CarouselSmall title='Inspirational Blog' data ={blogData} />
    </div>
  )
}

export { InspBlog, InspBlogSmallScreen }