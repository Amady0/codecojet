import React from "react";
import imgApp from "../images/appimg.png";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

const AppComponent = () => {
  return (
    <div className="bg-gold">
      <section className="py-[70px] bg-gold relative center">
        <div className="center absolute -top-20 right-0">
          <div className=" w-80 hidden sm:inline-flex">
            <Image
              src={imgApp}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="center absolute left-1/2 -translate-x-1/2 sm:left-0 sm:-translate-x-0">
          <h1 className="text-white font-Playfair text-md sm:text-[29px] max-w-xl text-center sm:text-left">
            Download the Airly app today and transform your A to B.
          </h1>
          <div className="mx-auto text-center w-full sm:text-left">
        <button className='rounded5 mt-5 bg-white hover:shadow-0 text-gold hover:text-white shadow-none font-Mulish hover:border border border-transparent hover:border-white hover:bg-gold px-8 py-4 transtion-all ease-in-out duration-200'>Book a private jet</button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AppComponent;