import AsideFilter from "./AsideFilter";
import Container from "./ContainerCard/ContainerCard";
import { OwnerDetails } from "@/components/UserLoginToGetOnwerDetail";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const login=useSelector(store=>store.signup);
  console.log("login is here ----> ",login)
  return (
    <>
    {login?.togle&&<OwnerDetails/>}
      <div className="container-wrapper md:py-0 py-10">
        <div className="px-2 md:px-5 sm:px-3 grid grid-cols-1 xl:grid-cols-[300px,2fr] sm:grid-cols-[1fr,2fr] bg-gray-50 gap-3 sm:gap-2 md:gap-5">
          {/* Sidebar (AsideFilter) */}
          <div className="w-full sticky top-16 self-start">
            <AsideFilter />
          </div>
          <div className="w-full overflow-y-auto max-h-screen">
            <Container />
          </div>
        </div>       
      </div>
    </>
  );
};

export default MainContainer;
