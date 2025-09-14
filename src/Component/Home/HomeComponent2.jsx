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
      <div className="main w-full h-screen flex justify-center pb-5 font-playfair ">
        <div data-aos="fade-up-right" className="left flex">
          <div className="img-props1 w-[90px] ">
            {" "}
            <img src="photos/props.png" alt="props" />{" "}
          </div>
          <div className="img-props1 w-[100px] ">
            {" "}
            <img src="photos/props-long.png" alt="props" />{" "}
          </div>
          <div className="img-props1 w-[580px] mt-[140px] ">
            {" "}
            <img src="photos/secend-page-props.png" alt="props" />{" "}
          </div>
        </div>

        <div data-aos="fade-up-left" className="right">
          <div className="flex">
            <p className="text-[45px] mt-[120px] w-[520px] font-semibold ">
              Hijaz Hajj Umrah Ltd. Best Agency in Bangladesh
            </p>
            <div className="img-props1 w-[90px] ">
              {" "}
              <img src="photos/props.png" alt="props" />{" "}
            </div>
          </div>

          <p className=" text-[19px] w-[640px] mt-5 mb-10 font-poppins ">
            Hijaz Hajj Umrah Ltd. in Bangladesh was established in January 2023.
            Aiming to provide a comprehensive and all-in-one experience for
            individuals <br /> undertaking the holy pilgrimage of Hajj and Umrah
            from any city in Bangladesh.
          </p>

          <div className="count w-full flex gap-10 ">
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

          <div
          
           className="mt-10">
            <Button buttonText={"Management Board"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent2;
