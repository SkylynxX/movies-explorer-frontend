import React, { useState } from "react";
import circle from "../../images/circle.svg";
import "./Header.css";
import "../App/App.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header({ theme, positionStyle, isLoggedIn }) {
  const [isNavClosed, setIsNavClosed] = useState(true);
  function openNav() {
    setIsNavClosed(false);
  }
  function closeNav() {
    setIsNavClosed(true);
  }

  return (
     <header className="header">
        <div className="header__menu">
        <Link to={"/"}>
            <img src={circle} alt="Logo" className="header__menu_logo"  />
        </Link>
        <Navigation
          isLoggedIn={isLoggedIn}
          isClosed={isNavClosed}
          onNavOpen={openNav}
          onNavClose={closeNav}
        />
        </div>
    </header>
  );
}
