import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className='footer__container_year'>© 2020</p>
        <div className='footer__container_link'>
          <a className='footer__container_link_yandex' href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          <a className='footer__container_link_git' href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>
        
    </footer>
  );
}
