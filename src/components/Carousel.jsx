import React from "react";
import { Divider } from "primereact/divider";

const CarouselSmall = ({ title, data }) => {
  return (
    <div>
      <div className="relative block md:hidden ">
        <Divider align="left">
          <div className="inline-flex align-items-center p-1">
            <i className="pi pi-user text-xl sm:text-2xl mr-2"></i>
            <b className="text-lg sm:text-xl">{title}</b>
          </div>
        </Divider>
        <div id="carousel">
          {data.map((x, index) => (
            <div
              className="mt-1 rounded-sm sm:rounded-lg  text-center min-w-32"
              key={index}
            >
              <div className="flex justify-center ">
                <img
                  src={x.imageLink}
                  alt={x.name}
                  className="w-[75%] hover:scale-105 transition-transform duration-300 ease-in-out "
                />
              </div>
                <p className="mt-3 text-sm sm:text-md text-pretty font-bold hover:text-[#FA4A6F] transition-colors ">
                  {x.name}{" "}
              </p>
              

              {x.nosofvendors ? (
                <p className=" text-sm sm:text-md font-bold hover:text-[#FA4A6F] transition-colors text-gray-500 ">
                  ({x.nosofvendors}){" "}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ title, data, marginTop }) => {
  
  return (
    <div className="">
      <div className="relative hidden md:block ">
        <Divider align="left">
          <div className="inline-flex align-items-center">
            <i className="pi pi-user text-4xl mr-4"></i>
            <b className="text-2xl">{title}</b>
          </div>
        </Divider>
        <div id="carousel"  className="pb-5">
          {data.map((x, index) => (
            <div
              className="item pt-3  rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              key={index}
            >
              <div className="flex justify-center ">
                <img src={x.imageLink} alt={x.name} />
              </div>
              {
                marginTop?(
                  <p className='mt-[-34px] mb-3 text-lg font-bold hover:text-[#FA4A6F] transition-colors text-white'>
                  {x.name}{" "}
                </p>
                ):(
                  <p className='mt-3 mb-3 text-md font-bold hover:text-[#FA4A6F] transition-colors'>
                {x.name}{" "}
                </p>
                )
              }
               
              
              {x.nosofvendors ? (
                <p className=" text-md font-bold hover:text-[#FA4A6F] transition-colors text-gray-500 ">
                  ({x.nosofvendors}){" "}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export { Carousel, CarouselSmall };
