import Image from "next/image";
import pic1 from "/public/assets/agra.jpg";
import pic2 from "/public/assets/noidaCity.jpg";
import pic3 from "/public/assets/delhi.jpg";
import pic4 from "/public/assets/gurugram.jpg";

const PopularCities = () => {
  
  const cities1 = [
    { img: pic1, city: "Agra"},
    { img: pic2, city: "Noida"},
  ];
  const cities2 = [
    { img: pic3, city: "Delhi"},
    { img: pic4, city: "Gurugram"},
  ];
  return (
    <section className="md:py-10 py-5 bg-white text-center">
      <h2 className="md:text-2xl text-xl font-semibold">Most Popular Places</h2>
      <p className="md:text-para text-sm md:mb-2 mb-0.5">Properties In Most Popular Places</p>
      <div className="md:w-24 w-16 h-1 bg-teal-600 mx-auto mb-10 rounded-full"></div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 px-4 max-w-7xl mx-auto md:mb-7 mb-6">
        {cities1?.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-md shadow hover:shadow-md border overflow-hidden transition duration-300"
          >
            <div className="w-full lg:h-80 h-72 relative">
              <Image
                src={item?.img}
                alt={item?.city}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="w-full h-full flex justify-center items-center absolute bg-black/50">
                <h3 className="text-white text-xl font-semibold">{item?.city}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 px-4 max-w-7xl mx-auto md:mb-7">
        {cities2?.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-md shadow hover:shadow-md border overflow-hidden transition duration-300"
          >
            <div className="w-full lg:h-80 h-72 relative">
              <Image
                src={item?.img}
                alt={item?.city}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="w-full h-full flex justify-center items-center absolute bg-black/50">
                <h3 className="text-white text-xl font-semibold">{item?.city}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default PopularCities;
