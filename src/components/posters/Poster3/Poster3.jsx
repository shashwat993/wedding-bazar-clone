import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import { MdVerified } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";

const Poster3 = () => {
  return (
    <div>
      <div className="bg-[#F7FAFE] px-4 md:px-8 py-2 md:py-4 flex flex-col  gap-3 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-xl md:text-2xl text-[#454545] font-extrabold text-pretty">
            Why Wedding Bazaar?
          </h1>
          <h3 className="text-md md:text-xl text-[#454545] font-medium text-pretty ">
            WeddingBazaar is India’s largest wedding planning platform by
            Matrimony.com
          </h3>
        </div>

        <div className="block md:flex md:justify-around font-semibold  md:gap-1 lg:gap-5  ">
          <div className="flex justify-start md:justify-center items-center">
            <VscWorkspaceTrusted size={50} className="p-2 sm:p-1 md:p-0 mr-1 md:mr-2 lg:mr-4" />
            <h3 className="text-md sm:text-lg md:text-lg lg:text-xl text-pretty">
              2 Lakh+ trusted vendors in 40+ cities
            </h3>
          </div>
          <div className="flex justify-start md:justify-center items-center">
            <FcLike size={50} className="p-2 sm:p-1 md:p-0 mr-1 md:mr-2 lg:mr-4" />
            <h3 className="text-md sm:text-lg md:text-lg lg:text-xl text-pretty">
              3 Lakh+ happy customers
            </h3>
          </div>
          <div className="flex justify-start md:justify-center items-center">
            <MdVerified size={50} className="p-2 sm:p-1 md:p-0 mr-1 md:mr-2 lg:mr-4" />
            <h3 className="text-md sm:text-lg md:text-lg lg:text-xl text-pretty">
              Trust of the Matrimony.com group
            </h3>
          </div>
          <div className="flex justify-start md:justify-center items-center">
            <TbBulbFilled size={50} className="p-2 sm:p-1 md:p-0 mr-1 md:mr-2 lg:mr-4 " />
            <h3 className="text-md sm:text-lg md:text-lg lg:text-xl text-pretty">
              Latest wedding planning ideas & inspiration
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster3;
