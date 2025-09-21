import React from "react";
import PacegeCard from "../PacegeCard.jsx";

const HomeComponent3 = () => {
  return (
    <>
      <div className="main w-full h-fit bg-gradient-to-r from-[#5aa400cb] to-[#00711af2] px-4 sm:px-8 lg:px-20">
        <div className="header flex flex-col">
          <div className="flex gap-3 sm:gap-5 justify-center lg:justify-start">
            <img
              className="w-[60px] sm:w-[70px] lg:w-[80px]"
              src="photos/props-short.png"
              alt="props"
            />
            <img
              className="w-[60px] sm:w-[70px] lg:w-[80px]"
              src="photos/props-short.png"
              alt="props"
            />
          </div>

          <div className="lg:ml-[110px] lg:mt-[-30px] text-center lg:text-left px-4 lg:px-0">
            <h1 className="text-white text-[24px] sm:text-[28px] lg:text-[35px] font-playfair font-semibold mt-4 lg:mt-0">
              {" "}
              Available Umrah Packages from Bangladesh{" "}
            </h1>

            <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-white font-poppins mt-4 mb-10 max-w-[95%] sm:max-w-[90%] lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              Plan your Umrah and Ziyarah. Our upcoming Umrah packages will
              encompass a range of options, including economy and premium
              packages, designed to accommodate various budgets and preferences.
            </p>
          </div>
        </div>

        <div className="card-row w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-10 justify-items-center px-4 lg:px-0">
          
          <div className="w-full max-w-[400px]">
            <PacegeCard
            coverPhoto={"photos/poster.jpg"}
            title={"Super Saver Umrah Package"}
            PriceWithFood={"৳1,28,000 included Food"}
            PriceWithOutFood={"৳1,20,000 Food not included"}
            Package_1={" 18 Sep-30 Sep (13 Days)"}
            makkahHotel={"Standard Hotel | Distance 700-800m"}
            HotelMadinah={"Standard Hotel | Distance 700-800m"}
            FliteUp={"Transit"}
            FlightDown={"Transit"}
            food={"Included/Excluded"}
            SpecialServices={"Ziyara + Guide + Da'e"}
            button_tru={"true"}
          />
          </div>
          
          <div className="w-full max-w-[400px]">
            <PacegeCard
            coverPhoto={"photos/poster.jpg"}
            title={"Economy Umrah Package"}
            PriceWithFood={" ৳1,48,000 included Food"}
            PriceWithOutFood={"৳1,40,000 Food not included"}
            Package_1={"08 Oct-20 Oct (13 Days)"}
            Package_2={"27 Nov-09 Dec (13 Days) "}
            Package_3={"18 Nov-30 Nov (13 Days) "}
            Package_4={"24 Dec-05 Jan (13 Days)  "}
            Package_5={" 04 Dec-16 Dec (13 Days) "}
            makkahHotel={" Hotel Adnan Matuq Al-Omari/Equivalent Hotel | Distance 650-750m."}
            HotelMadinah={" Burj Al Mukhtara Hotel/Equivalent Hotel | Distance 600-700m."}
            FliteUp={"Transit - Air Arabia/Gulf Air"}
            FlightDown={"Transit - Air Arabia/Gulf Air"}
            food={"Included/Excluded"}
            SpecialServices={"Ziyara + Guide + Da'e"}
            button_tru={"true"}
          />
          </div>
          
          <div className="w-full max-w-[400px]">
            <PacegeCard
            coverPhoto={"photos/poster.jpg"}
            title={"Standard Umrah Package"}
            PriceWithFood={" ৳1,38,000 included Food"}
            PriceWithOutFood={" ৳1,30,000 Food not included"}
            Package_1={"25 Sep-07 Oct (13 Days)"}
            makkahHotel={" Adnan Matouk al Amiri/Equivalent Hotel | Distance 650-750m."}
            HotelMadinah={" Adnan Matouk al Amiri/Equivalent Hotel | Distance 650-750m."}
            FliteUp={" Transit - Air Arabia/Gulf Air"}
            FlightDown={" Transit - Air Arabia/Gulf Air"}
            food={"Included/Excluded"}
            SpecialServices={"Ziyara + Guide + Da'e"}
            button_tru={"true"}
          />
          </div>
          

          
        </div>

        <div className="last-props w-full flex justify-center lg:justify-end px-4 lg:px-0 pt-8">
          <img className=" rotate-180" src="photos/star-icon.svg" alt="icon" />
        </div>



      </div>
    </>
  );
};

export default HomeComponent3;
