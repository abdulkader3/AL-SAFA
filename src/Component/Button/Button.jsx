import React from "react";

const Button = ({buttonText,buttonColor}) => {
  return (
    <>
      <button className={` ${buttonColor? buttonColor:"bg-green-400"} font-playfair text-shadow-2xs text-white w-[120px] sm:w-[120px] md:w-[180px] h-[40px] sm:h-[40px] md:h-[55px] text-[14px] sm:text-[16px] md:text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer `} >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
