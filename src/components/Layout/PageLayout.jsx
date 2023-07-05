import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./PageLayout.scss";
import { Outlet } from "react-router-dom";
const PageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
