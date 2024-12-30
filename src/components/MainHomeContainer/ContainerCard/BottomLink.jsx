import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const BottomLink = () => {
  return (
    <div className="flex flex-col  shadow-sm bg-white my-2">
      <div className="my-3 mx-7">
        <p>Didn't find what you are looking for?</p>
        <p> Explore nearby localities</p>
      </div>
      <hr />
      <div className='flex my-5 mx-7  gap-28'>
            <div>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
            </div>
            <div> <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p></div>
            <div> <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p></div>
                <div> <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p>
                <p className='flex gap-1  items-center'><FaMapMarkerAlt /> <span>sector 1 , Noida</span></p></div>
        </div>
    </div>
  );
};

export default BottomLink;
