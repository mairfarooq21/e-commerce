// import React from 'react'
// import {assets} from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//         {/*hero left */}
//         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP N0W</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//         </div>
//         {/*hero right */}
//         <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
//     </div>
//   )
// }

// export default Hero

import React, { useState } from 'react';

const slides = [
  {
    heading: 'Slide One',
    imageUrl: 'https://i.ebayimg.com/images/g/tPcAAOSwv9hm9tuQ/s-l500.webp',
    backgroundColor: 'bg-[#2C3E50]',
    dotColor: 'bg-white',  // Color for the active dot
  },
  {
    heading: 'Slide Two',
    imageUrl: 'https://i.ebayimg.com/images/g/JSQAAOSwUrllQDL2/s-l500.webp',
    backgroundColor: 'bg-[#3A3A3C]',
    dotColor: 'bg-white',  // Color for the active dot
  },
  {
    heading: 'Slide Three',
    imageUrl: 'https://i.ebayimg.com/images/g/tPcAAOSwv9hm9tuQ/s-l500.webp',
    backgroundColor: 'bg-[#D35400]',
    dotColor: 'bg-white',  // Color for the active dot
  },
  {
    heading: 'Slide Four',
    imageUrl: 'https://i.ebayimg.com/images/g/AOAAAOSwZU9kPwmB/s-l500.webp',
    backgroundColor: 'bg-[#1F4D30]',
    dotColor: 'bg-white',  // Color for the active dot
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative mx-auto mt-10 ${slides[currentIndex].backgroundColor} p-4 rounded-lg shadow-lg`}>
      {/* Main Image and Heading */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {slides[currentIndex].heading}
          </h2>
        </div>
        <div className="w-1/2">
          <img
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setSlide(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? slides[index].dotColor : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="text-lg px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-md"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="text-lg px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hero;