import React from "react";
import { CarouselCustomArrows } from "./DefaultCarousel";
import SearchBar from "./SearchBar";

const Carousel = () => {


  return (
    <div className="w-full h-96 relative z-0 mt-10">
      <CarouselCustomArrows/>
      <SearchBar />
    </div>
  );
};

export default Carousel;
