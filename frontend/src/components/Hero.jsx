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
import img1 from "../assets/slide1.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";
import img4 from "../assets/slide4.png";

const slides = [
  {
    heading: 'Slide One',
    description: 'This is the description for Slide One.',
    buttonText: 'Learn More',
    imageUrl: img1,
    backgroundColor: 'bg-[#FFCDD2]',
    dotColor: 'bg-[#E57373]',
    buttonColor: 'bg-[#E57373] ',
    textColor: 'text-[#E57373]',
  },
  {
    heading: 'Slide Two',
    description: 'This is the description for Slide Two.',
    buttonText: 'Explore',
    imageUrl: img2,
    backgroundColor: 'bg-[#3A3A3C]',
    dotColor: 'bg-white',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    textColor: 'text-yellow-100',
  },
  {
    heading: 'Slide Three',
    description: 'This is the description for Slide Three.',
    buttonText: 'Discover',
    imageUrl: img3,
    backgroundColor: 'bg-[#ff6a38]',
    dotColor: 'bg-white',
    buttonColor: 'bg-[#2f0e04]',
    textColor: 'text-[#2f0e04]',
  },
  {
    heading: 'Slide Four',
    description: 'This is the description for Slide Four.',
    buttonText: 'Get Started',
    imageUrl: img4,
    backgroundColor: 'bg-[#1F4D30]',
    dotColor: 'bg-white',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    textColor: 'text-gray-200',
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
    <div className={`relative mx-auto mt-10 ${slides[currentIndex].backgroundColor} p-6 rounded-lg shadow-lg`}>
      {/* Main Content */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-1/2 space-y-4">
          <h2 className={`text-2xl font-semibold ${slides[currentIndex].textColor}`}>
            {slides[currentIndex].heading}
          </h2>
          <p className={`${slides[currentIndex].textColor}`}>
            {slides[currentIndex].description}
          </p>
          <button className={`px-6 py-2 text-white font-semibold rounded-lg ${slides[currentIndex].buttonColor}`}>
            {slides[currentIndex].buttonText}
          </button>
        </div>
        <div className="w-1/2 h-[450px]">
          <img
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-lg w-full h-full object-cover"
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
              index === currentIndex ? slides[index].dotColor : 'bg-gray-400'
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
