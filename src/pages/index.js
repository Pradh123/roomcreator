import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainHomeContainer/MainHomeContainer";
import PGCardCarousel from "@/components/Home/PgPackage";
import PopularCities from "@/components/Home/PopularCities";
import SearchBar from "@/components/Home/SerchBar/SearchBar";
import WhyChoosePg from "@/components/Home/WhyChoosePg ";

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      {/* <MainContainer /> */}
      <WhyChoosePg />
      <PopularCities />
      <PGCardCarousel />
      <Footer />
    </>
  )
};

export default Home
