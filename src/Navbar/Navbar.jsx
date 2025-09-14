import React, { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
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

  const handleCopyClick = () => {
    const phone = "+8801813284367";
    navigator.clipboard.writeText(phone).then(() => {
      setShow(true);
      setCopied(true);

      setTimeout(() => setCopied(false), 2500); // fade out before unmount
      setTimeout(() => setShow(false), 3000);   // fully remove after fade
    });
  };

  return (
    <>
      <nav className='flex justify-between font-playfair items-center px-10 pb-8 pt-5 text-[20px] text-shadow-2xs hover:text-shadow-2xs font-medium'>
        <Link to="/" className="Logo w-[150px]">
          <img src="photos/logo.png" alt="logo" />
        </Link>

        <ul className='flex gap-10 text-[18px] '>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> Home </Link></li>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> About </Link></li>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> Blog </Link></li>
          <li className='hover:text-green-600 active:scale-90 transition-all'><Link to="#"> Contact </Link></li>
        </ul>

        <div className="contact flex gap-10 items-center w-fit h-fit justify-center relative">
          <button 
            onClick={handleCopyClick} 
            className='hover:text-green-500 active:scale-95 transition-all'
          >
            +8801813284367
          </button>

          <button className='mb-1' onClick={handleWhatsAppClick}>
            <FaWhatsapp className='text-[30px] text-emerald-400 hover:text-black hover:scale-105 active:scale-90 transition-all' />
          </button>

          {/* Copy success message with fade animation */}
          {show && (
            <span
              className={`absolute top-full mt-2 text-sm text-green-600 bg-gray-100 px-3 py-1 rounded shadow
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
