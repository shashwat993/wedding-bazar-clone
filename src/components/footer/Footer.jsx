import React from "react";
import { Divider } from "primereact/divider";
import Phorographer from "./Phorographer";

const Footer = () => {
  return (
    <div className="bg-[#F2EEEF] px-4 sm:px-8 md:px-12 lg:px-14 pt-4 md:pt-8 pb-12 md:pb-24">
      <div className="flex flex-col gap-3 md:gap-5">
        <div>
          <p className="text-xl  font-bold">More About Us</p>
        </div>
        <div>
        <div className="flex flex-wrap text-[#EC4899] text-sm">
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            About us
          </p>
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            {" "}
            Careers
          </p>
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            {" "}
            Contact Us
          </p>
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            Privacy Policy
          </p>
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            Site map
          </p>
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            Terms and Conditions
          </p>
          <p className="border-r-[1px] border-[#747474]  px-1 my-1 hover:underline transition duration-300 ease-in-out ">
            Wedding Guest Post
          </p>
        </div>
        <div className="mt-2">
            <p className="text-[12px] text-[#747474]">© Copyright 2024 WeddingBazaar (Matrimony.com Group) - All Rights Reserved</p>
            <Divider/>
        </div>
        
        </div>
        
      </div>
      <div>
        <p className="text-xl font-semibold ">Wedding Vendors in over 100 cities</p>
        <Phorographer/>
        <Phorographer/>
        <Phorographer/>
        <Phorographer/>
        <Phorographer/>
        <Phorographer/>
        <Phorographer/>
        <Phorographer/>
      </div>
    </div>
  );
};

export default Footer;
