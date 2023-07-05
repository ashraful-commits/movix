import { fetchDataFromApi } from "../../utils/api";
import HeroBanner from "./HeroBanner/HeroBanner";
import "./Home.scss";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import Trending from "./Trending/Trending";
const Home = () => {
  // fetchDataFromApi();
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
