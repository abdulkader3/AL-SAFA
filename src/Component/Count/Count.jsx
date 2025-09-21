import React from "react";

const Count = ({countYear,title,titleD}) => {
  return (
    <>
      <div className="count1 font-poppins">
        <div className="countbox w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] bg-white shadow-2xl flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-bold rounded-3xl">
          {" "}
          {countYear}
          {" "}
        </div>
        <p className="text-sm sm:text-lg lg:text-xl text-center text-green-900 font-semibold mt-3">
          {title} <br />
          {titleD}
        </p>
      </div>
    </>
  );
};

export default Count;
