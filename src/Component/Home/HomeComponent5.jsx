import React, { useState } from 'react'

const HomeComponent5 = () => {
  const [selectedLocation, setSelectedLocation] = useState('Cumilla')
  
  const serviceAreas = [
    { 
      name: 'Dhaka', 
      highlighted: false,
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3821762218654!2d90.41347930952753!3d23.733747278592794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85eb7c58ecb%3A0x28e270db7b3e4dc6!2sG-Nat%20Tower!5e0!3m2!1sen!2sbd!4v1758804659234!5m2!1sen!2sbd"
    },
    { 
      name: 'Chattogram', 
      highlighted: true,
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.453672446818!2d91.8367853!3d22.3364925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2790d900cc8f%3A0xf8ef34c744e276b!2sZilla%20Parishad%20Market!5e0!3m2!1sen!2sbd!4v1758805046564!5m2!1sen!2sbd"
    },
  ]

  const handleLocationClick = (locationName) => {
    setSelectedLocation(locationName)
  }

  const getCurrentEmbedUrl = () => {
    const location = serviceAreas.find(area => area.name === selectedLocation)
    return location ? location.embedUrl : serviceAreas[1].embedUrl
  }

  return (
    <div className="hijaz-service-area bg-[#a4d4ba] min-h-screen px-4 py-8 md:py-12 lg:py-16 flex items-center justify-start relative">
      {/* Google Maps iframe - responsive positioning */}
      <div className="absolute top-8 md:top-12 lg:top-16 right-4 w-full md:w-4/5 lg:w-4/5 h-48 md:h-64 lg:h-[calc(100%-8rem)] z-0 rounded-l-none md:rounded-l-[30px] overflow-hidden shadow-lg md:shadow-2xl">
        <iframe
          src={getCurrentEmbedUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${selectedLocation}`}
        />
      </div>
      
      <div className="service-container bg-white rounded-xl md:rounded-[30px] p-4 md:p-6 lg:p-10 w-full max-w-sm md:max-w-md lg:max-w-2xl mx-auto md:mx-0 md:ml-8 lg:ml-12 shadow-lg md:shadow-2xl relative z-10 mt-52 md:mt-0">
      
        <h2 className="text-[#2d5a27] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 lg:mb-6 text-left font-playfair">
          Hijaz Service Area
        </h2>
        
        <p className="text-[#2d5a27] text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 font-poppins">
          Find your nearby Hajj & Umrah agency associated with Hijaz Hajj 
          Umrah Ltd. Bangladesh. Identify the trusted Umrah agents in 
          your area and get in touch with them to facilitate your next holy 
          journey to Makkah and Madina.
        </p>

        <div className="locations-grid grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {serviceAreas.map((area, index) => {
            const isSelected = selectedLocation === area.name
            return (
              <div 
                key={index}
                onClick={() => handleLocationClick(area.name)}
                className={`
                  ${isSelected 
                    ? 'bg-green-600 text-white border-2 border-green-600' 
                    : 'bg-transparent text-[#2d5a27] border-2 border-transparent hover:bg-gray-50'
                  }
                  p-3 md:p-4 rounded-lg text-sm md:text-base font-medium flex items-center cursor-pointer transition-all duration-300 ease-in-out font-poppins
                `}
              >
                <span className="mr-2 text-xs md:text-sm">📍</span>
                {area.name}
                {isSelected && (
                  <span className="ml-auto text-sm">✓</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeComponent5
