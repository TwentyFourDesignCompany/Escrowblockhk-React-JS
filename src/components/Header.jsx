import React, { useEffect, useState } from "react";
import { Menu, Search } from "react-feather";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

function NavLink({ label, path, defaultChecked }) {
  const navigate = useNavigate();
  return (
    <div className="header__container__nav__link">
      <input
        type="radio"
        className="header__container__nav__link__input"
        name="header__container__nav__link__input"
        defaultChecked={defaultChecked}
        onClick={() => {
          navigate(path);
        }}
      />
      <div className="header__container__nav__link__content">{label}</div>
    </div>
  );
}

export default function Header() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsSearchBarOpen(true);
    } else {
      setIsSearchBarOpen(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500) {
        setIsSearchBarOpen(true);
      } else {
        setIsSearchBarOpen(false);
      }
    });
    console.log(window.innerWidth);
  }, []);

  return (
    <div className="header__container">
      <div className="header__container__content">
        <Link
          to="/"
          //   style={window.innerWidth < 500 ? { marginBottom: 20 } : null}
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          <img src={logo} alt="logo" className="header__container__logo" />
        </Link>
        <div
          className="header__container__nav"
          style={isSearchBarOpen ? { flex: 1, maxWidth: 850 } : null}
        >
          <div className="search__btn">
            <Search size={18} color="currentColor" />
            <input
              type="radio"
              className="search__btn__input"
              name="header__container__nav__link__input"
              onClick={() => {
                isSearchBarOpen
                  ? setIsSearchBarOpen(false)
                  : setIsSearchBarOpen(true);
              }}
            />
          </div>
          {isSearchBarOpen ? (
            <SearchBar setIsSearchBarOpen={setIsSearchBarOpen} />
          ) : null}
          <div className="header__container__nav__links">
            <NavLink label="About Us" path="/about-us" />
            <NavLink label="Our Services" path="/service" />
            <NavLink label="Sell Bitcoin" path="/sell-bitcoin" />
            <NavLink label="Register" path="/register" />
            <NavLink label="Helpdesk" path="/login" />
            <NavLink label="Login" path="/login" />
          </div>
        </div>
      </div>
    </div>
  );
}
