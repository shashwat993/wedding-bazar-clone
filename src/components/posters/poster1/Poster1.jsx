import React from "react";
import { VendorType } from '@/services/VendorCaterogy'
import { VendorCategorySamllScreen } from "../../vendorCategory/VendorCatagory";
import { InspBlogSmallScreen } from "../../InsprationalBlog/InspBlog";

const Poster1 = () => {

  return (
    <div>
    <div className="bg-[#FFF1F3] pt-48 md:pt-2 ">
      <div className="flex justify-around">
        <div>
          <img
            src="https://img.weddingbazaar.com/shaadisaga_production/static/new_home/wedassist.png"
            className="w-12 md:w-auto "
          />
        </div>
        <div className=" flex flex-col gap-1 md:gap-3 items-start justify-center px-10 mb-2 ">
          <div className="text-sm md:text-2xl lg:text-3xl font-bold text-gray-700">
            <h2>Save time and money in planning your wedding</h2>
            <h2>
              with <span className="text-red-600">WedAssist </span>
            </h2>
          </div>
          <h2 className="text-sm hidden md:flex md:text-xl lg:text-2xl font-bold">
            WedAssist- Wedding Planning Assistance Service
          </h2>
          <div className="flex justify-center items-center bg-red-500 text-white py-1 md:p-3 rounded-sm md:rounded-lg shadow-sm text-sm md:text-md mt-2 px-2 md:px-16 lg:px-24">
            <h3>Explore Now</h3>
            <i className="pi pi-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div className="block md:hidden">
       <VendorCategorySamllScreen/>
       <InspBlogSmallScreen/>
      </div>
    </div>
  );
};

export default Poster1;
