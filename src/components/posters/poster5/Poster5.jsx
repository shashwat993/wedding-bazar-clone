import React from "react";
import { Divider } from "primereact/divider";

const Poster5 = () => {
  return (
    <div>
      <Divider />
      <div className="poster5 ">
        <div className="flex flex-col justify-center items-center pt-36 text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
          <h1>India's Largest Wedding Venue Booking</h1>
          <h1>Platform with 40000+ venues</h1>
        </div>
        <div className="flex justify-center mt-1">
          <div className=" inline-flex justify-between px-4 md:px-10 bg-white py-4 rounded-md shadow-xl  gap-x-4 md:gap-x-36 ">
            <div className="">
              <img
                src="https://img.weddingbazaar.com/shaadisaga_production/static/new_home/bookinglogo.svg"
                className="w-auto"
              />
            </div>
            <div>
              <p className="bg-[#FF444F] px-2 sm:px-4 md:px-6 py-2 rounded-md text-white  md:text-md text-nowrap">
                Explore new
                <i
                  className="pi pi-angle-right
"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster5;
