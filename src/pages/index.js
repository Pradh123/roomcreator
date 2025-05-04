import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainHomeContainer/MainHomeContainer";
import PopularCities from "@/components/PopularCities";
import SearchBar from "@/components/SerchBar/SearchBar";
import WhyChoosePg from "@/components/WhyChoosePg ";

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      {/* <MainContainer /> */}
      <WhyChoosePg />
      <PopularCities />
      <Footer />
    </>
  )
};

export default Home
