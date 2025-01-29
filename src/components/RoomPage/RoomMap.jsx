import Image from "next/image";
import { useEffect, useState } from "react";
const Itinerarymap= ()=>{
    const [map,setMap]=useState(null);

    return(
        <>
            <div className='p-2 '>
                {map?<div className="w-full md:h-80 h-72 rounded-xl  overflow-hidden" dangerouslySetInnerHTML={{ __html: map }}/>:<Image 
                    src="https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg" 
                    alt="map"  
                    width={800}
                    height={800}
                />}
            </div>
        </>
    )
}
export default Itinerarymap