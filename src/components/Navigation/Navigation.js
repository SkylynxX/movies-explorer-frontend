import man from "../../images/man.svg";
import menu from "../../images/menu-icon.svg";
import close from "../../images/X-menu.svg";
import "./Navigation.css";

import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Navigation({ isLoggedIn }) {
  const history = useHistory();
  const current = history.location.pathname;

  const [isNavigationClosed, setNavigationClosed] = useState(true);
  function openNavigation() {
    setNavigationClosed(false);
  }
  function closeNavigation() {
    setNavigationClosed(true);
  }

  const currentLinkClassName = (path) => {
    return `header-menu__link ${
      path === current ? `header-menu__link_current` : ""
    }`;
  };

  return (
    <div className={`header-menu ${isNavigationClosed ? "header-menu_closed" : ""}`} >
      <button className="header-menu__toggle" aria-label="навигация" type="button" onClick={openNavigation} >
        <img src={menu} alt="Меню" className="header-menu__open" />
      </button>
      <div className= 'header-menu__container' >
        <button className="header-menu__close" aria-label="закрыть" type="button" onClick={closeNavigation} >
          <img src={close} alt="Крестик" className="header-menu__exit" />
        </button>

        {isLoggedIn && (
          <ul className="header-menu__links">
            <li className="header-menu__link-container header-menu__link-container_display">
              <Link className={currentLinkClassName("/")} aria-label="главная" to="/" >
                Главная
              </Link>
            </li>
            <li className="header-menu__link-container">
              <Link className={currentLinkClassName("/movies")} aria-label="фильмы" to="/movies" >
                Фильмы
              </Link>
            </li>
            <li className="header-menu__link-container">
              <Link className={currentLinkClassName("/saved-movies")} aria-label="сохраненные фильмы" to="/saved-movies" >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
        )}

        {isLoggedIn ? (
          <button className={`header-menu__profile ${
            ("/profile" === current) ? "header-menu__profile_current" : ""}`} aria-label="профиль" type="button"
            onClick={() => {
              history.push("/profile");
            }} > 
            Аккаунт
            <img className="header-menu__profile-img" alt="человек" src={man} />
          </button>
        ) : (
          <div className="header-menu__auth">
            <Link className="header-menu__link" aria-label="регистрация" to="/signup">
              Регистрация
            </Link>
            <button className="header-menu__login" aria-label="вход" type="button"
              onClick={() => { history.push("/signin"); }}>
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
