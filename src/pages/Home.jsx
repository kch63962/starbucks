import PickYourFavorite from "../components/PickYourFavorite/PickYourFavorite";
import ReserveCoffee from "../components/ReserveCoffee/ReserveCoffee";
import Rewards from "../components/Rewards/Rewards";
import SeasonProduct from "../components/SeasonProduct/SeasonProduct";
import Youtube from "../components/Youtube/Youtube";
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
    </>
  );
};

export default Home;
