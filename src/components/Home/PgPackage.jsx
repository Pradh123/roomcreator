import { useRef } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic1 from "/public/assets/agra.jpg";
import pic2 from "/public/assets/noidaCity.jpg";
import pic3 from "/public/assets/delhi.jpg";
import pic4 from "/public/assets/gurugram.jpg";
import Image from "next/image";

const pgPackages = [
  {
    title: "Boys PG in IMT Faridabad",
    location: "IMT Faridabad, Faridabad",
    price: "₹5,999",
    suitableFor: "Working Professionals",
    img: pic1,
  },
  {
    title: "Boys PG in Ballabgarh",
    location: "Ballabgarh, Faridabad",
    price: "₹5,999",
    suitableFor: "Working Professionals",
    img: pic2,
  },
  {
    title: "PG near Metro Station",
    location: "Sector 11, Faridabad",
    price: "₹6,000",
    suitableFor: "Working Professionals",
    img: pic3,
  },
  {
    title: "Boys PG in Ballabgarh",
    location: "Ballabgarh, Faridabad",
    price: "₹5,999",
    suitableFor: "Working Professionals",
    img: pic4,
  },
];

const  PGCardCarousel = () => {

  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    direction === "left"
      ? (container.scrollLeft -= scrollAmount)
      : (container.scrollLeft += scrollAmount);
  };

  return (
    <div className="container-wrapper mx-auto">
      <div className="relative max-w-7xl mx-auto pt-10 pb-5">
        <h2 className="md:text-2xl text-xl font-semibold text-center md:mb-2 mb-0.5">Newly Added PG</h2>
        <div className="md:w-24 w-16 h-1 bg-teal-600 mx-auto mb-10 rounded-full"></div>
        <div className="flex items-center md:px-2">
          <button
            onClick={() => scroll("left")}
            className="hidden md:block px-2 py-1 bg-black/50 text-white shadow rounded-full absolute left-3 z-10"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {pgPackages.map((pg, index) => (
              <div
                key={index}
                className="min-w-[260px] md:min-w-[320px] flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 mb-5"
              >
                <Image
                  src={pg.img}
                  alt={pg.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                  width={100}
                  height={100}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">{pg.title}</h3>
                  <p className="text-sm text-gray-500">{pg.location}</p>
                  <div className="mt-2 text-para  ">
                    <p className="">
                      Accommodation For : <span>Boys</span>
                    </p>
                    <p className="text-para font-medium">
                      Suitable For :<span>{pg.suitableFor}</span>
                    </p>
                    <p className="text-para font-medium">
                      Price :<span>{pg.price}</span> 
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-1">
                    <button className="bg-teal-700 text-white w-full text-sm font-medium px-4 py-2 rounded-md shadow-md hover:shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden md:block px-2 py-1 bg-black/50 text-white shadow rounded-full absolute right-3 z-10"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PGCardCarousel;