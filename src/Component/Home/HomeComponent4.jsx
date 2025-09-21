import React from "react";
import PacegeCard from "../PacegeCard.jsx";
import { MdOutlineLocationOn } from "react-icons/md";

const HomeComponent4 = () => {
  return (
    <>
      <div className="main text-center w-full h-fit py-12 sm:py-16 lg:py-20 relative font-Story overflow-hidden flex justify-center items-center px-4 sm:px-6 lg:px-0">
        {/* Blurred background layer */}
        <div className="absolute inset-0 bg-[url(photos/backgraound.jpg)] bg-cover bg-center blur-[8px] scale-110"></div>

        {/* Content layer - unaffected by blur */}
        <div className="relative z-10 w-full h-full flex items-center flex-col gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="text-center gap-2 flex flex-col items-center">
            <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold"> We are approved by all these airlines</p>
            <img
              className="w-[180px] sm:w-[220px] lg:w-[250px]"
              src="photos/heading-under.svg"
              alt="heading-under"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-full justify-center items-center">


            <div className="flex flex-col justify-center items-center text-center gap-3 w-full max-w-[300px] lg:max-w-none">
              <div className="w-48 h-48 p-10 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-white rounded-full flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                {" "}
                <img src="https://upload.wikimedia.org/wikipedia/en/4/48/Logo_of_Saudia.svg" alt="Logo" />
                {" "}
              </div>
              <p className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold">Saudi Airlines</p>
              <p className="flex items-center justify-center font-playfair text-start text-sm sm:text-base">
                <MdOutlineLocationOn className="mr-2 flex-shrink-0" /> Sonargaon Hotel, Kazi Nazrul Islam Avenue Dhaka, Bangladesh
              </p>
            </div>
            
            <div className="flex flex-col justify-center items-center text-center gap-3 w-full max-w-[300px] lg:max-w-none">
              <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-white rounded-full flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                {" "}
                <img src="https://www.logo.wine/a/logo/Biman_Bangladesh_Airlines/Biman_Bangladesh_Airlines-Logo.wine.svg" alt="Logo" />
                {" "}
              </div>
              <p className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold">Biman <br/> Bangladesh Airlines</p>
              <p className="flex items-center justify-center font-playfair text-start text-sm sm:text-base">
                <MdOutlineLocationOn className="mr-2 flex-shrink-0" /> Balaka Bhaban, Kurmitola, Dhaka, Bangladesh
              </p>
            </div>
            
            <div className="flex flex-col justify-center items-center text-center gap-3 w-full max-w-[300px] lg:max-w-none">
              <div className="w-48 h-48 p-2 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-white rounded-full flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                {" "}
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Gulf-Air-logo.png" alt="Logo" />
                {" "}
              </div>
              <p className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold">Gulf Airlines</p>
              <p className="flex items-center justify-center font-playfair text-start text-sm sm:text-base">
                <MdOutlineLocationOn className=" mr-2 flex-shrink-0" /> Hassan Center, 8th Floor, Gulshan-1, Dhaka
              </p>
            </div>
            
            <div className="flex flex-col justify-center items-center text-center gap-3 w-full max-w-[300px] lg:max-w-none">
              <div className="w-48 h-48 p-10 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-white rounded-full flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl shadow-lg">
                {" "}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Qatar_Airways_logo.svg/2560px-Qatar_Airways_logo.svg.png" alt="Logo" />
                {" "}
              </div>
              <p className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold">Qatar Airways</p>
              <p className="flex items-center justify-center font-playfair text-start text-sm sm:text-base">
                <MdOutlineLocationOn className="mr-2 flex-shrink-0" /> SPL Western Tower, Level-03, Dhaka
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent4;
