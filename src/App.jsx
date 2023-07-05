import { useEffect } from "react";
import "./App.scss";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import router from "./router/PageRouter";
import { RouterProvider } from "react-router-dom";
function App() {
  const { url } = useSelector((state) => state.Home);
  const dispatch = useDispatch();

  //api calling with useffect
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  // api testing
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  const genresCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"];
    let allGenres = {};

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => {
        allGenres[item.id] = item;
      });
    });
    dispatch(getGenres(allGenres));
  };
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
