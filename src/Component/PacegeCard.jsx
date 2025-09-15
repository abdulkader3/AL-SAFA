import React from "react";
import { GiPriceTag } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Button from "./Button/Button.jsx";

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
  SpecialServices

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

        <div className="w-full h-[55px] bg-[#ffffff3e] rounded-sm flex gap-2 items-center px-2 font-semibold ">
          <GiPriceTag /> <p className="font-semibold w-[165px] text-left">Price :</p>
          <p className="ml-2"> {PriceWithFood} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
          <GiPriceTag /> <p className  ="font-semibold w-[165px] text-left">Price :</p>
          <p className="ml-2"> {PriceWithOutFood} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Hotel Makkah :</p>
          <p className="ml-2"> {makkahHotel} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Hotel Madinah :</p>
          <p className="ml-2"> {HotelMadinah} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Flights Up :</p>
          <p className="ml-2"> {FliteUp} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Flights Down :</p>
          <p className="ml-2"> {FlightDown} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 bg-[#ffffff3e] ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Food :</p>
          <p className="ml-2"> {food} </p>
        </div>

        <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
          <SiHomeassistantcommunitystore />{" "}
          <p className="font-semibold w-[165px] text-left ">Special Services :</p>
          <p className="ml-2"> {SpecialServices} </p>
        </div>

        <div className="button mt-[200px] ">
          <Button buttonText={"Buy Now"} buttonColor={"bg-[#cf8e00]"} />
        </div>
      </div>
    </>
  );
};

export default PacegeCard;
