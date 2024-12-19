import React,{useEffect,useState} from 'react'
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";
import { ImCross } from "react-icons/im";
import images from '../MainHomeContainer/ContainerCard/Images/Images';

const ImageSlider = ({setSliderBool}) => {

    const [count,setCount]=useState(0);

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
          document.body.classList.remove("overflow-hidden");
        };
      }, []);

const handlePrev=()=>{
    if(count<1){
        setCount(3)
    }
    else{
        setCount(count-1);
    }

}
const handleForward=()=>{
    if(count>2){
        setCount(0)
    }
    else{
        setCount(count+1);
    }
}
  return (
    <>
    
     <div className="fixed inset-0 bg-black bg-opacity-90 sha z-50"></div>
    <div className="fixed inset-0 flex items-center  justify-center z-50">
    <div onClick={()=>setSliderBool(false)} className='text-white absolute top-8 right-14 cursor-pointer'><ImCross/></div>
       
    <button onClick={handlePrev} className="absolute top-1/2 transform -translate-y-1/2 left-[20px] bg-white hover:bg-red-500 rounded-full w-10 h-10 flex justify-center items-center shadow-md">
        <IoIosArrowBack />
    </button>
    <img src={images[count]} alt="Sunset over the ocean with a boat" className="w-3/4 h-2/3 rounded-lg" />
    <button onClick={handleForward} className="absolute top-1/2 transform -translate-y-1/2 right-[20px] hover:bg-red-500 bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md">
        <IoIosArrowForward />
    </button>
   
</div>
</>
  )
}

export default ImageSlider