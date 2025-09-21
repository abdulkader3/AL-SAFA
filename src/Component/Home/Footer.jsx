import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Button from '../Button/Button.jsx'

const Footer = () => {
  return (
    <>
      {/* Header Section with CTA */}
      <div className="w-full flex flex-col items-center justify-center text-center bg-[url(photos/fottar-backgraound.jpg)] bg-cover bg-center px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <p className='text-2xl text-black sm:text-3xl lg:text-4xl font-playfair mb-20 lg:mb-50 max-w-4xl leading-relaxed'>
          Apply for an Umrah visa and experience the hassle-free journey to the city of Makkah.
        </p>
        
      </div>

      {/* Main Footer Content */}
      <div className="w-full bg-[#2c3e50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Corporate Office */}
            <div className="space-y-4">
              <div className="mb-6">
                <img src="photos/logo.png" alt="Logo" className="h-16 w-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-[#f39c12] mb-4">Corporate Office</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-[#f39c12] mt-1 flex-shrink-0" />
                  <span>House #123, Road #456, Dhanmondi, Dhaka-1205, Bangladesh</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#f39c12] flex-shrink-0" />
                  <span>+880 1234-567890</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#f39c12] flex-shrink-0" />
                  <span>info@hijazumrah.com</span>
                </p>
              </div>
            </div>

            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#f39c12] mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Who We Are</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Shariah Compliant</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Media Center</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Client Testimonials</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Guidance */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#f39c12] mb-4">Guidance</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Umrah Guide (Bangla)</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Umrah Guide (English)</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Umrah Guideline (Bangla)</a></li>
              </ul>
            </div>

            {/* Facilities */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#f39c12] mb-4">Facilities</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Visa Processing</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Hotel Booking</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Air Tickets</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Airport Solutions</a></li>
                <li><a href="#" className="hover:text-[#f39c12] transition-colors">Umrah Training</a></li>
              </ul>
            </div>

          </div>

          {/* Social Media Section */}
          <div className="mt-12 pt-8 border-t border-gray-600">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-lg font-semibold mb-3">We're Social Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#3b5998] p-2 rounded hover:bg-opacity-80 transition-colors">
                    <FaFacebookF className="text-white" />
                  </a>
                  <a href="#" className="bg-[#1da1f2] p-2 rounded hover:bg-opacity-80 transition-colors">
                    <FaTwitter className="text-white" />
                  </a>
                  <a href="#" className="bg-[#e1306c] p-2 rounded hover:bg-opacity-80 transition-colors">
                    <FaInstagram className="text-white" />
                  </a>
                  <a href="#" className="bg-[#0077b5] p-2 rounded hover:bg-opacity-80 transition-colors">
                    <FaLinkedinIn className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
              <a href="#" className="hover:text-[#f39c12] transition-colors">About Us</a>
              <a href="#" className="hover:text-[#f39c12] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#f39c12] transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-[#f39c12] transition-colors">Sitemap</a>
            </div>
            <p>Copyright © 2025 Al - Safa International. All rights reserved .</p>
            <p className="mt-1">Designed & Developed by <span className="text-[#f39c12]">Abdul Kader</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
