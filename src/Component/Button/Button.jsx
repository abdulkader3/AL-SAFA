import React from "react";
import { Link } from "react-router-dom";

const Button = ({buttonText,buttonColor,path}) => {
  return (
    <>
      <button  className={` ${buttonColor? buttonColor:"bg-green-400"} font-playfair text-shadow-2xs text-white w-[100px] xs:w-[120px] sm:w-[140px] md:w-[180px] h-[35px] xs:h-[40px] md:h-[55px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer `} >
        
        <Link to={path}> {buttonText} </Link>
      </button>
    </>
  );
};

export default Button;
