import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DATA from './Pages/DATA';
function Home() {
  const images = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_8PM_EToday_2X._CB795749964_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/2025/Auto/MayArt/GW/Main/PC/Vehicle-care--accessories._CB794909485_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/MayART25/Hero/Clean_Main_event_Rec_PC._CB794884745_.jpg'
    
  ];

  const [next, setNext] = useState(0);

  const handleNext = () => {
    setNext((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setNext((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
     
      <div
        className="w-full h-[300px] bg-cover  transition-all duration-400"
        style={{ backgroundImage: `url(${images[next]})` }}/>

     
      <div className="flex justify-between realtive  ">
        <button
          type="button"
          className="p-2 hover:border-2 border-white rounded-full  absolute top-60 left-3" 
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>


        <button
          type="button"
          className="p-2 hover:border-2 border-white rounded-full absolute top-60 right-3"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    
    <DATA/>
      
    </>
  );
}

export default Home;
