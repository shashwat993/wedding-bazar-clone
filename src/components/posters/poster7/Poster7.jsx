import React from "react";

const Poster7 = () => {
  return (
    <div className="bg-[#F0F5FC] h-28 flex justify-around">
      <div className="flex flex-col justify-end">
        <img
          src="https://img.weddingbazaar.com/shaadisaga_production/static/new_home/boost.svg"
          className="w-36 sm:w-28 "
        />
      </div>
      <div className="flex flex-col justify-center pr-4 sm-pr-2">
        <p className="text-[#454545] text-md sm:text-lg md:text-xl font-bold ">
        If you are a vendor : To boost your wedding service business
        </p>

        <p className=" text-md md:text-lg text-[#3393E2] text-end hover:underline ">
          Get in touch
          <i className="pi pi-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Poster7;
