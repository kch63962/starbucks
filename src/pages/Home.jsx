import FindTheStore from "../components/FindTheStore/FindTheStore";
import Footer from "../components/Footer/Footer";
import PickYourFavorite from "../components/PickYourFavorite/PickYourFavorite";
import ReserveCoffee from "../components/ReserveCoffee/ReserveCoffee";
import ReserveStore from "../components/ReserveStore/ReserveStore";
import Rewards from "../components/Rewards/Rewards";
import SeasonProduct from "../components/SeasonProduct/SeasonProduct";
import ToTop from "../components/ToTop/ToTop";
import Youtube from "../components/Youtube/Youtube";
import AwardsContainer from "../containers/AwardsContainer";
import Header from "../containers/Header";
import Notice from "../containers/Notice";
import Visual from "../containers/Visual";

const Home = () => {
  return (
    <>
      <Header />
      <Visual />
      <Notice />
      <Rewards />
      <Youtube />
      <SeasonProduct />
      <ReserveCoffee />
      <PickYourFavorite />
      <ReserveStore />
      <FindTheStore />
      <AwardsContainer />
      <Footer />
      <ToTop />
    </>
  );
};

export default Home;
