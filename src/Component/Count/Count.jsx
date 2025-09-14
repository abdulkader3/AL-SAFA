import React from "react";

const Count = ({countYear,title,titleD}) => {
  return (
    <>
      <div className="count1 font-poppins">
        <div className="countbox w-[120px] h-[120px] bg-white shadow-2xl flex justify-center items-center text-5xl font-bold rounded-3xl  ">
          {" "}
          {countYear}
          {" "}
        </div>
        <p className=" text-xl text-center text-green-900 font-semibold mt-3 ">
          {title} <br />
          {titleD}
        </p>
      </div>
    </>
  );
};

export default Count;
