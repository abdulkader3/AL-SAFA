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
      <div className='main-row flex justify-center gap-20 bg-[#00000013] py-5 '>
        <div
          data-aos="fade-up-right"
          className="textRight text-white w-[50%] pl-30 bg-gray-600 font-playfair rounded-4xl"
        >
          <p className='w-[570px] text-[50px] font-bold mt-40 mb-5'>
            Find the best Umrah package from Bangladesh
          </p>
          <p className='w-[570px] mb-16 text-[17px] font-poppins'>
            Discover all the amazing packages at exclusive rates with expert guides and Sharia consultants.
          </p>

          <Button buttonText={"Plan Your Umra"} />
        </div>

        <div
          data-aos="fade-up-left"
          className="BG w-[40%] rounded-4xl overflow-hidden"
        >
          <img src="photos/BG.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default HomeComponent
