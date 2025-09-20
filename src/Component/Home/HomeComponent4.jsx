import React from "react";
import PacegeCard from "../PacegeCard.jsx";
import { MdOutlineLocationOn } from "react-icons/md";

const HomeComponent4 = () => {
  return (
    <>
      <div className="main text-center w-full h-fit py-20 relative font-Story overflow-hidden flex justify-center items-center">
        {/* Blurred background layer */}
        <div className="absolute inset-0 bg-[url(photos/backgraound.jpg)] bg-start blur-[8px] scale-110"></div>

        {/* Content layer - unaffected by blur */}
        <div className="relative z-10 w-full h-full flex items-center flex-col gap-8 ">
          <div className=" text-center gap-2 flex flex-col items-center">
            <p className="text-black text-4xl ">We're associated with</p>
            <img
              className="w-[250px] "
              src="photos/heading-under.svg"
              alt="heading-under"
            />
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col justify-center text-center items-center gap-3">
              <div className="w-60 h-60 bg-white rounded-full text-4xl flex justify-center items-center">
                {" "}
                Logo{" "}
              </div>
              <p className="font-playfair text-2xl">Holy Tourism Bangladesh</p>
              <p className="flex items-center font-playfair text-center">
                <MdOutlineLocationOn /> Box Culvert Road, Dhaka
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-3">
              <div className="w-60 h-60 bg-white rounded-full flex justify-center items-center text-4xl ">
                {" "}
                Logo{" "}
              </div>
              <p className="font-playfair text-2xl">Asiapac International</p>
              <p className="flex items-center font-playfair text-center">
                <MdOutlineLocationOn /> Box Culvert Road, Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent4;
