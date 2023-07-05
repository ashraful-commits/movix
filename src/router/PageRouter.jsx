import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageLayout from "../components/Layout/PageLayout";
import Datials from "../pages/Datials/Datials";
import SearchResult from "../pages/SearchResult/SearchResult";
import Explore from "../pages/Explore/Explore";
import Notfound from "../pages/404/Notfound";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:mediaType/:id",
        element: <Datials />,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
      {
        path: "/explore/:mediaType",
        element: <Explore />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default router;
