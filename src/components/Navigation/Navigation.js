import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./Navigation.css";
import circle from '../../images/circle.svg';
import man from '../../images/man.svg'

export default function Navigation({
  isLogged,
  isClosed,
  onNavOpen,
  onNavClose,
}) {
  const history = useHistory();
  const current = history.location.pathname;

  return (
    <div className='header__container'>
      <a href="*" className='header__container_film'>Фильмы</a>
      <a href="*" className='header__container_save'>Сохраненые фильмы</a>
      <div className='header__container_box'>
        <a href="*" className='header__container_box_link'>Аккаунт</a>
        <div className='header__container_acc_circle' >
          <img src={man} alt="" className='header__container_acc_img'/>
        </div>
      </div>
    </div>

  );
}
