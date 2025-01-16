import AsideFilter from "./AsideFilter";
import Container from "./ContainerCard/ContainerCard";

const MainContainer = () => {
  return (
    <>
      {/* <div className="flex">
        <div className=" sticky top-24 w-1/4 inline-block h-96">
          <AsideFilter />
        </div>
        <div className="w-3/4  ml-4">
          <Container />
        </div>
      </div> */}
      <div className=" container-wrapper">
        <div className=" px-2 md:px-10 grid grid-cols-1 xl:grid-cols-[300px,2fr]  sm:grid-cols-[0.7fr,2fr] bg-gray-50 gap-3  place-items-center  md:gap-10 ">
          <div className="w-full" >
            {/* <Filter Heading={Heading} filterGlobalData={filterGlobalData} /> */}
            <AsideFilter />
          </div>
          <div className="  w-full">
            {/* <MainData Heading={Heading} /> */}
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
