import React from 'react'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faUser, faXmark, faSquareWhatsapp } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <>
        <div className="hidden lg:flex justify-around items-center gap-5 w-full h-8 bg-blue-700 text-white text-xs">
        <div className="flex justify-center items-center gap-10">
          <div>
            <Link href="tel:+918084863546" className="flex gap-1 items-center hover:underline hover:text-gray-300">
              <FontAwesomeIcon icon={faPhone} />
              <p>8084863546</p>
            </Link>
          </div>
          <div>
            <Link href="mailto:rakeshspm2323@gmail.com"  
                className="flex gap-1 items-center hover:underline hover:text-gray-300"
                target="_blank"
            >
            <FontAwesomeIcon icon={faEnvelope} />
            <p>rakeshspm2323@gmail.com</p>
            </Link>
            
          </div>
          <div className="flex gap-1 items-center hover:text-gray-300">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Noida, UP</p>
          </div>
        </div>
        <div >
          <Link href="https://wa.me/8084863546" 
            className="flex gap-1 items-center hover:underline hover:text-gray-300"
            target="_blank" 
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>Whatsapp</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TopHeader;
