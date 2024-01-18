import React, { useState } from "react";
import { Divider } from "primereact/divider";
import Menu from './UserMenu'


const NavBar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleMenu = ()=>{
        setIsClicked(!isClicked)
    }
    
  return (
    <div className=" relative z-10 inset-0">
      <div className="hidden md:block w-full h-16 fixed bg-[#FA4A6F] font-semibold">
        <div className="px-10  md:px-24 flex justify-between items-center h-full text-white md:text-md md:text-lg">
          <div>Logo</div>
          <div className="flex justify-between gap-10">
            <div className=" flex justify-between items-center">
              <p>VENDORS</p>
              <i className="pi pi-angle-down ml-[2px]"></i>
            </div>

            <div className=""> BLOG</div>
            <div className=" flex justify-between items-center">
              <i className="pi pi-search mr-[6px] scale-75"></i>
              <p>SEARCH</p>
            </div>
            <div className=" flex justify-between items-center ">
              <i className="pi pi-heart-fill mr-[6px] scale-75"></i>
              <p>LOGIN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-full h-12 fixed bg-[#FA4A6F] font-semibold">
        <div className="px-4 flex justify-between items-center h-full text-white md:text-md md:text-lg">
          <div>Logo</div>
          <div className="flex justify-between items-center">
           
              <div className=" flex justify-between items-center">
                <i className="pi pi-search mr-[6px] "></i>
              </div>
            
            <Divider layout="vertical" className="p-1" />
            <div onClick={toggleMenu} >
                <i className="pi pi-user"></i>
            </div>
          </div>
        </div>
        {isClicked && (
                <div className="absolute right-[60px] bg-slate-50 mt-[-10px] z-10">
                   <Menu/>
                </div>
            )}
      </div>
      <div>
   
      </div>
   
    </div>
  );
};

export default NavBar;
