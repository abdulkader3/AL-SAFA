import React, { useEffect } from "react";
import AOS from "aos";
import Button from "../Button/Button.jsx";
import Count from "../Count/Count.jsx";

const HomeComponent2 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  

  return (
    <>
      <div className="main w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:items-start pb-5 font-playfair px-4 lg:px-0">
        <div data-aos="fade-up-right" className="left flex flex-col lg:flex-row order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="img-props1 w-[60px] sm:w-[70px] lg:w-[90px] hidden lg:block">
            {" "}
            <img src="photos/props.png" alt="props" />{" "}
          </div>
          <div className="img-props1 w-[70px] sm:w-[80px] lg:w-[100px] hidden lg:block">
            {" "}
            <img src="photos/props-long.png" alt="props" />{" "}
          </div>
          <div className="img-props1 w-full max-w-[300px] sm:max-w-[400px] lg:w-[580px] lg:mt-[140px] mx-auto lg:mx-0">
            {" "}
            <img src="photos/secend-page-props.png" alt="props" className="w-full h-auto" />{" "}
          </div>
        </div>

        <div data-aos="fade-up-left" className="right order-1 lg:order-2 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <p className="text-[28px] sm:text-[35px] lg:text-[45px] mt-8 lg:mt-[120px] w-full max-w-[90%] sm:max-w-[80%] lg:w-[520px] font-semibold leading-tight">
              Hijaz Hajj Umrah Ltd. Best Agency in Bangladesh
            </p>
            <div className="img-props1 w-[60px] sm:w-[70px] lg:w-[90px] mt-4 lg:mt-0 hidden lg:block">
              {" "}
              <img src="photos/props.png" alt="props" />{" "}
            </div>
          </div>

          <p className="text-[16px] sm:text-[18px] lg:text-[19px] w-full max-w-[95%] sm:max-w-[90%] lg:w-[640px] mt-5 mb-10 font-poppins mx-auto lg:mx-0 leading-relaxed">
            Hijaz Hajj Umrah Ltd. in Bangladesh was established in January 2023.
            Aiming to provide a comprehensive and all-in-one experience for
            individuals undertaking the holy pilgrimage of Hajj and Umrah
            from any city in Bangladesh.
          </p>

          <div className="count w-full grid grid-cols-2 sm:grid-cols-2 lg:flex gap-4 lg:gap-10 justify-items-center lg:justify-start max-w-[600px] mx-auto lg:mx-0">
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="300"
              className=""
            >
              {" "}
              <Count
                countYear={"10+"}
                title={"Shariah"}
                titleD={"Consultants"}
              />{" "}
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="400"
              className=""
            >
              <Count countYear={"10+"} title={"Special"} titleD={" Da'e "} />{" "}
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="500"
              className=""
            >
              <Count countYear={"20+"} title={"Umrah"} titleD={"Guides"} />{" "}
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="600"
              className=""
            >
              <Count
                countYear={"50+"}
                title={"Business"}
                titleD={"Associates"}
              />{" "}
            </div>
          </div>

          {/* <div className=" flex justify-center lg:justify-start">
            <Button buttonText={"Management Board"} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeComponent2;
