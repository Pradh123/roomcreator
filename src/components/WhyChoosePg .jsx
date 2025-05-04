import { FaRupeeSign, FaBuilding } from "react-icons/fa";
import { MdKey, MdLocationOn } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";

const features = [
  {
    icon: <FaRupeeSign className="text-white text-[22px] transition-transform duration-300 group-hover:scale-125" />,
    title: "No Brokerage",
    description:
      "Search 1000+ PG Accommodation here without any brokerage or commission charge",
  },
  {
    icon: <BsHouseDoor className="text-white text-[22px] transition-transform duration-300 group-hover:scale-125" />,
    title: "Affordable Rents",
    description:
      "Single and Shared rooms at low security deposits, instant move-in with affordable rents.",
  },
  {
    icon: <MdKey className="text-white text-[22px] transition-transform duration-300 group-hover:scale-125" />,
    title: "PG Owner ?",
    description:
      "List your PG properties with us and Get lots of fresh leads",
  },
  {
    icon: <MdLocationOn className="text-white text-[22px] transition-transform duration-300 group-hover:scale-125" />,
    title: "Cities in India",
    description:
      "Newly Accommodation added in every hour to help PG finder right Accommodation.",
  },
];

const WhyChoosePg = () => {
  return (
    <section className="py-10 bg-white text-center container-wrapper">
      <h2 className="md:text-2xl text-xl font-semibold md:mb-2 mb-0.5">Why choose PG ?</h2>
      <div className="md:w-24 w-24 h-1 bg-teal-600 mx-auto mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md shadow hover:shadow-md p-6 border text-center group transition duration-300"
          >
            <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-para">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoosePg;
