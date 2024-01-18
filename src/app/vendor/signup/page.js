"use client";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';




const Signup = () => {
    const VendorCategory = [
        { name: "Photographer", code: "NY" },
        { name: "Editor", code: "RM" },
        { name: "Decorators", code: "LDN" },
        { name: "Jewellery", code: "IST" },
        { name: "Wedding", code: "PRS" },
      ];
  return (
    <div className="">
      <div className="bg-white px-8 sm:px-16 md:px-24 flex flex-col md:flex-row justify-around py-10 ">
        <div>
          <h2 className="text-3xl font-extrabold ">
            Boost You Business with PixelSparx
          </h2>
        </div>
        <div>
          <div className="my-5">
            <p className="text-2xl font-bold  text-nowrap">
              Signup To PixelSparx
            </p>

            <form>
             <div className="flex flex-col gap-4">
             <div className="flex flex-column gap-2">
                <label htmlFor="fullname">Full Name</label>
                <InputText id="fullname" keyfilter="alpha"  />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="nameofBusiness">Name of Business</label>
                <InputText id="nameofBusiness" keyfilter="alpha"  />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="email">Email</label>
                <InputText id="email" keyfilter="email"  />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="phone">Phone Number</label>
                <InputText id="phone" keyfilter="num"  />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="password">Password</label>
                <Password id="password" toggleMask />
              </div>
           
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
