import { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoing] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoing(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs onTabChange={onTabChange} data={["Day", "Week"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
