import "./Header.scss";
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/movix-logo.svg";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  //================================= locatinon change

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  //===============================search button
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  //============================mobile menu
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  //=============================serarch
  const serachQueryhandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
    // setTimeout(() => {
    //   setShowSearch(false);
    // }, 3000);
  };
  //========================movie and tv navigation
  const navigationHandeler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
  };
  //===================scroll effect
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
        setShowSearch(false);
      } else {
        setShow("show");
        setShowSearch(false);
      }
    } else {
      setShow("top");
      setShowSearch(false);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img onClick={() => navigate("/")} src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandeler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandeler("tv")}>
            Tv Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={serachQueryhandler}
                type="text"
                placeholder="Search for a movie or tv show...."
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
