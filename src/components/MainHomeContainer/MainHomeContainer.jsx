import AsideFilter from "./AsideFilter";
import Container from "./ContainerCard/ContainerCard";

const MainContainer = () => {
  return (
    <>
      <div className=" container-wrapper md:py-0 py-10">
        <div className=" px-2 md:px-5 sm:px-3 grid grid-cols-1 xl:grid-cols-[300px,2fr]  sm:grid-cols-[0.7fr,2fr] bg-gray-50 gap-3  place-items-center sm:gap-2  md:gap-5 ">
          <div className="w-full">
            {/* <Filter Heading={Heading} filterGlobalData={filterGlobalData} /> */}
            <AsideFilter />
          </div>
          <div className="  w-full">
            {/* <MainData Heading={Heading} /> */}
            <Container />
          </div>
        </div>
        <div>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
          <p>eoprjthioejkwprghjwefrgnuhieqwrguherighu gurhui</p>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
