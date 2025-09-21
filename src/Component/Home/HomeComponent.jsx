import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '../Button/Button.jsx'

const HomeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    })
  }, [])

  return (
    <>
      <div className='main-row flex flex-col lg:flex-row justify-center gap-5 md:gap-10 lg:gap-20 bg-[#00000013] py-5 px-4'>
        <div
          data-aos="fade-up-right"
          className="textRight text-white py-5 md:py-0 w-full lg:w-[50%] px-4 md:px-8 lg:pl-30 bg-gray-600 font-playfair rounded-4xl"
        >
          <p className='w-full max-w-[570px] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold mt-8 md:mt-20 lg:mt-40 mb-3 md:mb-5'>
            Find the best Umrah package from Bangladesh
          </p>
          <p className='w-full max-w-[570px] mb-8 md:mb-12 lg:mb-16 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-poppins'>
            Discover all the amazing packages at exclusive rates with expert guides and Sharia consultants.
          </p>

          <Button buttonText={"Plan Your Umra"} />
        </div>

        <div
          data-aos="fade-up-left"
          className="BG w-full lg:w-[40%] rounded-4xl overflow-hidden"
        >
          <img src="photos/BG.jpg" alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </>
  )
}

export default HomeComponent
