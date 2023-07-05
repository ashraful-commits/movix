import { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const TopRated = () => {
  const [endpoint, setEndpoing] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoing(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs onTabChange={onTabChange} data={["Movie", "TV"]} />
      </ContentWrapper>
      <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default TopRated;
