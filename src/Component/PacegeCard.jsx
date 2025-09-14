import React from "react";
import { GiPriceTag } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Button from "./Button/Button.jsx";

const PacegeCard = () => {
  return (
    <>

      <div className="cardOfOffer w-[450px] h-fit bg-[#ffffff36] shadow-2xl rounded-2xl pt-3 pb-10 px-4 text-center ">
              <div className="poster w-full h-[300px] overflow-hidden rounded-4xl shadow-2xl ">
                {" "}
                <img src="photos/poster.jpg" alt="poster" />{" "}
              </div>
    
              <p className="text-[#002d00] text-[25px] font-playfair font-semibold my-5 ">
                Super Saver Umrah Package
              </p>
    
              <div className="w-full h-[55px] bg-[#ffffff3e] rounded-sm flex gap-2 items-center px-2 font-semibold ">
                <GiPriceTag /> <p className="font-semibold">Price :</p>
                <p className="ml-10">৳1,28,000 included Food</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
                <GiPriceTag /> <p className="font-semibold">Price :</p>
                <p className="ml-10">৳1,20,000 Food not included</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 bg-[#ffffff3e] ">
                <SiHomeassistantcommunitystore />{" "}
                <p className="font-semibold">Hotel Makkah :</p>
                <p className="ml-10">Standard Hotel | Distance 700-800m</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
                <SiHomeassistantcommunitystore />{" "}
                <p className="font-semibold">Hotel Madinah :</p>
                <p className="ml-10">Standard Hotel | Distance 700-800m</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 bg-[#ffffff3e] ">
                <SiHomeassistantcommunitystore />{" "}
                <p className="font-semibold">Flights Up :</p>
                <p className="ml-10">Transit</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
                <SiHomeassistantcommunitystore />{" "}
                <p className="font-semibold">Flights Down :</p>
                <p className="ml-10">Transit</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 bg-[#ffffff3e] ">
                <SiHomeassistantcommunitystore />{" "}
                <p className="font-semibold">Food :</p>
                <p className="ml-10">Included/Excluded</p>
              </div>
    
              <div className="w-full h-[55px] rounded-sm flex gap-2 items-center px-2 font-semibold mt-5 border border-white ">
                <SiHomeassistantcommunitystore />{" "}
                <p className="font-semibold">Special Services :</p>
                <p className="ml-10">Ziyara + Guide + Da'e</p>
              </div>
    
              <div className="button mt-[200px] ">
                <Button buttonText={"Buy Now"} buttonColor={"bg-[#cf8e00]"} />
              </div>
            </div>
      
    </>
  )
}

export default PacegeCard
