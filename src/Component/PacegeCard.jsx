import React from "react";
import { GiAirplaneDeparture, GiPriceTag } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Button from "./Button/Button.jsx";
import { WiSunrise } from "react-icons/wi";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoAirplaneSharp } from "react-icons/io5";

const PacegeCard = ({
  coverPhoto,
  title,
  PriceWithFood,
  PriceWithOutFood,
  makkahHotel,
  HotelMadinah,
  FliteUp,
  FlightDown,
  food,
  SpecialServices,
  Package_1,
  Package_2,
  Package_3,
  Package_4,
  Package_5,
  button_tru

}) => {
  return (
    <>
      <div className="cardOfOffer w-full max-w-[400px] h-fit bg-[#ffffff36] shadow-2xl rounded-2xl pt-3 pb-10 px-3 sm:px-4 text-center mx-auto">
        <div className="poster w-full h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden rounded-4xl shadow-2xl">
          {" "}
          <img src={coverPhoto} alt="poster" className="w-full h-full object-cover" />{" "}
        </div>

        <p className="text-[#002d00] text-[20px] sm:text-[22px] lg:text-[25px] font-playfair font-semibold my-4 lg:my-5 leading-tight">
          {title}
        </p>

        {
          PriceWithFood &&
          <div className="w-full h-fit py-2 bg-[#ffffff3e] rounded-sm flex gap-2 items-center px-2 font-semibold text-xs sm:text-sm">
          <GiPriceTag className="flex-shrink-0" /> <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Price :</p>
          <p className="ml-2 break-words"> {PriceWithFood} </p>
        </div>
        }

        {
          PriceWithOutFood && 
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 text-xs sm:text-sm">
          <GiPriceTag className="flex-shrink-0" /> <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Price :</p>
          <p className="ml-2 break-words"> {PriceWithOutFood} </p>
        </div>
        }

        {/* Package */}

        {Package_1 && 
        <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Package 1 :</p>
          <p className="ml-2 break-words"> {Package_1} </p>
        </div>
        }

         {Package_2 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Package 2 :</p>
          <p className="ml-2 break-words"> {Package_2} </p>
        </div>
         } 
        
         {Package_3 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Package 3 :</p>
          <p className="ml-2 break-words"> {Package_3} </p>
        </div>
         }
        
         {Package_4 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Package 4 :</p>
          <p className="ml-2 break-words"> {Package_4} </p>
        </div>
         }
        
         {Package_5 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Package 5 :</p>
          <p className="ml-2 break-words"> {Package_5} </p>
        </div>
         }

        {/* package */}

        {
          makkahHotel &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left shrink-0">Hotel Makkah :</p>
          <p className="ml-2 break-words text-left"> {makkahHotel} </p>
        </div>
        }

        {
          HotelMadinah &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 text-xs sm:text-sm">
          <SiHomeassistantcommunitystore className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left shrink-0">Hotel Madinah :</p>
          <p className="ml-2 break-words text-left"> {HotelMadinah} </p>
        </div>
        }

        {
          FliteUp && 
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <IoAirplaneSharp  className="rotate-330 flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Flights Up :</p>
          <p className="ml-2 break-words"> {FliteUp} </p>
        </div>
        }

        {
          FlightDown &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 text-xs sm:text-sm">
          <IoAirplaneSharp className=" rotate-20 flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Flights Down :</p>
          <p className="ml-2 break-words"> {FlightDown} </p>
        </div>
        }

        {
          food &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] text-xs sm:text-sm">
          <PiForkKnifeFill className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Food :</p>
          <p className="ml-2 break-words"> {food} </p>
        </div>
        }

        {
          SpecialServices &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 text-xs sm:text-sm">
          <WiSunrise className="flex-shrink-0" />{" "}
          <p className="font-semibold w-[140px] sm:w-[165px] text-left flex-shrink-0">Special Services :</p>
          <p className="ml-2 break-words"> {SpecialServices} </p>
        </div>
        }

        {
          button_tru &&
          <div className="button mt-8 lg:mt-10">
          <Button buttonText={"Buy Now"} buttonColor={"bg-[#cf8e00]"} />
        </div>
        }
      </div>
    </>
  );
};

export default PacegeCard;
