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
      <div className="cardOfOffer w-[400px] h-fit bg-[#ffffff36] shadow-2xl rounded-2xl pt-3 pb-10 px-4 text-center ">
        <div className="poster w-full h-[300px] overflow-hidden rounded-4xl shadow-2xl ">
          {" "}
          <img src={coverPhoto} alt="poster" />{" "}
        </div>

        <p className="text-[#002d00] text-[25px] font-playfair font-semibold my-5 ">
          {title}
        </p>

        {
          PriceWithFood &&
          <div className="w-full h-fit py-2 bg-[#ffffff3e] rounded-sm flex gap-2 items-center px-2 font-semibold ">
          <GiPriceTag /> <p className="font-semibold w-[165px] text-left">Price :</p>
          <p className="ml-2"> {PriceWithFood} </p>
        </div>
        }

        {
          PriceWithOutFood && 
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3  ">
          <GiPriceTag /> <p className  ="font-semibold w-[165px] text-left">Price :</p>
          <p className="ml-2"> {PriceWithOutFood} </p>
        </div>
        }

        {/* Package */}

        {Package_1 && 
        <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Package 1 :</p>
          <p className="ml-2"> {Package_1} </p>
        </div>
        }

         {Package_2 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Package 2 :</p>
          <p className="ml-2"> {Package_2} </p>
        </div>
         } 
        
         {Package_3 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Package 3 :</p>
          <p className="ml-2"> {Package_3} </p>
        </div>
         }
        
         {Package_4 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Package 4 :</p>
          <p className="ml-2"> {Package_4} </p>
        </div>
         }
        
         {Package_5 &&
         <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Package 5 :</p>
          <p className="ml-2"> {Package_5} </p>
        </div>
         }

        {/* package */}

        {
          makkahHotel &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left shrink-0">Hotel Makkah :</p>
          <p className="ml-2"> {makkahHotel} </p>
        </div>
        }

        {
          HotelMadinah &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3  ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left shrink-0 ">Hotel Madinah :</p>
          <p className="ml-2"> {HotelMadinah} </p>
        </div>
        }

        {
          FliteUp && 
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <IoAirplaneSharp  className="rotate-330" />{" "}
          <p className="font-semibold w-[165px] text-left ">Flights Up :</p>
          <p className="ml-2"> {FliteUp} </p>
        </div>
        }

        {
          FlightDown &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3  ">
          <IoAirplaneSharp className=" rotate-20" />{" "}
          <p className="font-semibold w-[165px] text-left ">Flights Down :</p>
          <p className="ml-2"> {FlightDown} </p>
        </div>
        }

        {
          food &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 bg-[#ffffff3e] ">
          <PiForkKnifeFill />{" "}
          <p className="font-semibold w-[165px] text-left ">Food :</p>
          <p className="ml-2"> {food} </p>
        </div>
        }

        {
          SpecialServices &&
          <div className="w-full h-fit py-2 rounded-sm flex gap-2 items-center px-2 font-semibold mt-3 ">
          <WiSunrise />{" "}
          <p className="font-semibold w-[165px] text-left ">Special Services :</p>
          <p className="ml-2"> {SpecialServices} </p>
        </div>
        }

        {
          button_tru &&
          <div className="button mt-10 ">
          <Button buttonText={"Buy Now"} buttonColor={"bg-[#cf8e00]"} />
        </div>
        }
      </div>
    </>
  );
};

export default PacegeCard;
