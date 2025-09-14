import React from "react";
import PacegeCard from "../PacegeCard.jsx";

const HomeComponent3 = () => {
  return (
    <>
      <div className="main w-full h-fit bg-linear-to-r from-[#5aa400cb] to-[#00711af2] px-20 pb-10 ">
        <div className="header flex flex-col ">
          <div className="flex gap-5 ">
            <img
              className="w-[80px] "
              src="photos/props-short.png"
              alt="props"
            />
            <img
              className="w-[80px] "
              src="photos/props-short.png"
              alt="props"
            />
          </div>

          <div className=" ml-[110px] mt-[-30px] ">
            <h1 className="text-white text-[35px] font-playfair font-semibold ">
              {" "}
              Available Umrah Packages from Bangladesh{" "}
            </h1>

            <p className="text-[17px] text-white font-poppins mt-4 mb-10 ">
              Plan your Umrah and Ziyarah. Our upcoming Umrah packages will
              encompass a range of options, including economy and premium
              packages, designed to accommodate various budgets and preferences.
            </p>
          </div>
        </div>

<div className=" card-row w-full flex justify-center gap-5  ">

  <PacegeCard/>
  <PacegeCard/>
  <PacegeCard/>

</div>
      


      </div>
    </>
  );
};

export default HomeComponent3;
