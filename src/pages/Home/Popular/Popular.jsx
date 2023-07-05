import { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoing] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndpoing(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs onTabChange={onTabChange} data={["Movie", "TV"]} />
      </ContentWrapper>
      <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
