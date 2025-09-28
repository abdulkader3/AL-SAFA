import React from 'react'
import { FaHome, FaChevronRight } from 'react-icons/fa'
import HomeComponent3 from '../Home/HomeComponent3.jsx'
import { Link } from 'react-router-dom'

const Plan = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Blurred Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/photos/lantern.jpg')",
            filter: "blur(5px)",
            transform: "scale(1.1)" // Prevents blur edge artifacts
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Breadcrumb */}
          <div className="pt-16 sm:pt-20 pb-4 sm:pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="inline-flex items-center space-x-1 sm:space-x-2 text-white text-xs sm:text-sm bg-black bg-opacity-40 px-3 sm:px-4 py-2 rounded">
                <Link to="/"> <FaHome className="w-3 h-3 sm:w-4 sm:h-4" /> </Link>
                <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 text-gray-300" />
                <span className="text-gray-300">Umrah</span>
                <FaChevronRight className="w-2 h-2 sm:w-3 sm:h-3 text-gray-300" />
                <span className="text-white font-medium">Umrah Packages</span>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-start justify-start pt-8 sm:pt-12 lg:pt-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              {/* Left Side Content with White Background */}
              <div className="w-full bg-white bg-opacity-95 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg">
                {/* Green Banner */}
                <div className="inline-block bg-green-600 px-3 sm:px-4 py-1 rounded mb-4 sm:mb-6">
                  <span className="text-white font-medium text-xs sm:text-sm tracking-wider">
                    -AFFORDABLE PRICE & PROCESS-
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 font-Cairo leading-tight">
                  Available Umrah Packages 2025 from Bangladesh
                </h1>

                {/* Description */}
                <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                  Plan Your Hassle-Free Umrah Package from Bangladesh with Hijaz Hajj Umrah Ltd.
                </p>

                <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Are you looking for a smooth and fully guided Umrah package from Bangladesh this year? We understand that arranging your Umrah visa, air tickets, 
                  land transportation, hotel accommodations, and ziyarah management can be a stressful and time-consuming process. That's why Hijaz Hajj Umrah Ltd. 
                  offers a complete solution with the best price Umrah packages from Bangladesh.
                </p>

                {/* Call to Action Section */}
                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 font-Cairo">
                    Find the Best Price Umrah Package 2025 from Dhaka
                  </h2>
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Whether you're traveling alone, with family, or in a group, we provide a wide range of affordable Umrah packages designed to match your budget, 
                    preferences, and travel schedule. Each package is carefully crafted to ensure a spiritually fulfilling and comfortable experience in the holy cities of 
                    Makkah and Madinah.
                  </p>
                  <div className="flex flex-wrap items-center gap-1 text-sm sm:text-base">
                    <span className="text-gray-700">Call us today at</span>
                    <a href="tel:01713-155200" 
                       className="text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300">
                      01713-155200
                    </a>
                    <span className="text-gray-700">for a fully-guided and affordable Umrah package from Bangladesh.</span>
                  </div>
                </div>

                <div className="w-full mt-6 sm:mt-8 lg:mt-10">
                    <HomeComponent3 Background={"bg-[#fff]"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plan
