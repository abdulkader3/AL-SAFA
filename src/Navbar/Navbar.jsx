import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [copied, setCopied] = useState(false)
  const [show, setShow] = useState(false)

  const handleWhatsAppClick = () => {
    const phone = "+8801813284367"; 
    const message = "Hello, I am interested in your services"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleCopyClick = (phone) => {
    navigator.clipboard.writeText(phone).then(() => {
      setShow(true);
      setCopied(true);

      setTimeout(() => setCopied(false), 2500); // fade out before unmount
      setTimeout(() => setShow(false), 3000);   // fully remove after fade
    });
  };

  return (
    <>
      <nav className='flex sm:flex-row justify-between font-playfair items-center px-3 sm:px-6 lg:px-10 pb-4 sm:pb-8 pt-3 sm:pt-5 text-[20px] text-shadow-2xs hover:text-shadow-2xs font-medium'>
        <Link to="/" className="Logo w-[70px] sm:w-[90px] md:w-[120px] lg:w-[150px] mb-3 sm:mb-0">
          <img src="photos/logo.png" alt="logo" />
        </Link>

        {/* <div className=" hidden md:hidden lg:block ">
          <ul className='flex gap-10 text-[18px] '>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> Home </Link></li>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> About </Link></li>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> Blog </Link></li>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> Contact </Link></li>
        </ul>

        </div> */}

        <div className="contact flex  sm:flex-row gap-6 sm:gap-4 lg:gap-10 items-center w-fit h-fit justify-center relative text-[10px] sm:text-[13px] md:text-[15px] lg:text-[18px]">
          <button 
            onClick={() => handleCopyClick("+8801711720807")} 
            className='hover:text-green-500 active:scale-95 transition-all flex items-center font-semibold gap-1 sm:gap-2 lg:gap-3 text-center sm:text-left'
          >
           <span className='text-[14px] sm:text-[16px] lg:text-[18px]'> <MdCall/>  </span>  
           <span className='text-[#e600ad] leading-tight'> 
             <span className='hidden sm:inline'>S M Mubinul Hoque Managing Partner</span>
             <span className='sm:hidden'>S M Mubinul Hoque</span>
             <br/> 
             +8801711720807
           </span>
          </button>
          <button 
            onClick={() => handleCopyClick("+8801813284367")} 
            className='hover:text-green-500 active:scale-95 transition-all flex items-center font-semibold gap-1 sm:gap-2 lg:gap-3 text-center sm:text-left'
          >
           <span className='text-[14px] sm:text-[16px] lg:text-[18px]'> <MdCall/>  </span>  
           <span className='text-green-400 leading-tight'>
             <span className='hidden sm:inline'>MD Saiful Islam CEO Dhaka Office</span>
             <span className='sm:hidden'>MD Saiful Islam</span>
             <br/> 
             +8801813284367
           </span>
          </button>

          <button className='mb-1' onClick={handleWhatsAppClick}>
            <FaWhatsapp className='text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-emerald-400 hover:text-black hover:scale-105 active:scale-90 transition-all' />
          </button>

          {/* Copy success message with fade animation */}
          {show && (
            <span
              className={`absolute top-full mt-2 text-xs sm:text-sm text-green-600 bg-gray-100 px-2 sm:px-3 py-1 rounded shadow z-10
                transition-opacity duration-500 ease-in-out
                ${copied ? 'opacity-100' : 'opacity-0'}
              `}
            >
              Number copied!
            </span>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
