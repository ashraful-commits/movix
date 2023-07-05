import "./HeroBanner.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/LazyLoadImage/Img";

const HeroBanner = () => {
  //================================== use hook
  const { data, loading } = useFetch("/movie/upcoming");
  //==================================== useState for background and seach query
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  // usenavigate
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.Home);
  //==================serach query handler
  const serachQueryhandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  //==========================scrole effect

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="heroBannerContent">
        <span className="title">Welcome.</span>
        <span className="subTitle">
          Millions of movies, TV shows and people to discover. Explore now
        </span>
        <div className="searchInput">
          <input
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={serachQueryhandler}
            type="text"
            placeholder="Search for a movie or tv show...."
          />
          <button>Search</button>
        </div>
      </div>

      <div className="opacity-layer"></div>
    </div>
  );
};

export default HeroBanner;
