import React from "react";
import TemplateDemo from "./InputSelect";
import { Divider } from "primereact/divider";
import LoadingDemo from "./LoadingDemo";

const SearchBar = () => {
  const VendorCategory = [
    { name: "Photographer", code: "NY" },
    { name: "Editor", code: "RM" },
    { name: "Decorators", code: "LDN" },
    { name: "Jewellery", code: "IST" },
    { name: "Wedding", code: "PRS" },
  ];

  const cities = [
    { name: "Delhi", code: "DL" },
    { name: "Mumbai", code: "MH" },
    { name: "Kolkata", code: "WB" },
    { name: "Chennai", code: "TN" },
    { name: "Bengaluru", code: "KA" },
    { name: "Hyderabad", code: "TS" },
    { name: "Thiruvananthapuram", code: "KL" },
    { name: "Jaipur", code: "RJ" },
    { name: "Lucknow", code: "UP" },
    { name: "Gandhinagar", code: "GJ" },
  ];

  return (
    <div>
      <div className="relative mt-[-180px] hidden md:block m-10 ">
        <p className="text-3xl hidden sm:flex justify-center text-white font-bold mb-5 ">
          India's Largest Wedding Planning Platform
        </p>
        <div className="block sm:flex justify-center items-center">
          <div>
            <TemplateDemo
              searchItem={VendorCategory}
              searchPlaceHolder="Search Vendor Category"
              className="px-10"
            />
          </div>

          <div>
            <Divider layout="vertical" className=" hidden sm:flex" />
          </div>
          <div>
            <TemplateDemo searchItem={cities} searchPlaceHolder="Search City" />
          </div>
          <div className="flex justify-center">
            <LoadingDemo text="Find Vendor" />
          </div>
        </div>
      </div>
      <div className=" relative flex md:hidden justify-center z-10">
        <div className="mt-[-100px] bg-white p-5 rounded-lg shadow-xl flex flex-col gap-5">
          <div>
            <TemplateDemo
              searchItem={VendorCategory}
              searchPlaceHolder="Search Vendor Category"
            />
          </div>

          <div className="">
            <TemplateDemo searchItem={cities} searchPlaceHolder="Search City" />
          </div>
          <div className="flex justify-center  ">
            <LoadingDemo text="Find Vendor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
