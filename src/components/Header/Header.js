
import circle from "../../images/circle.svg";
import "./Header.css";
import "../App/App.css";

import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header({ color, isLoggedIn }) {
  // const currentHeadarClassName = (color==="white" ? "header__container_white" :
  // "header__container_pink");
  return (
     <header className={`header_${color}`}>
        <div className={`header__container_${color}`}>
        <Link to={"/"}>
            <img src={circle} alt="Логотип сайта, круг" className="header__container_logo"  />
        </Link>
        <Navigation
          isLoggedIn={isLoggedIn}
          color={color}
        />
        </div>
    </header>
  );
}
