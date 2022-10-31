import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className='footer__container_year'>© 2020</p>
        <div className='footer__container_link'>
          <a href="" className='footer__container_link_yandex'>Яндекс.Практикум</a>
          <a href="" className='footer__container_link_git'>Github</a>
        </div>
      </div>
        
    </footer>
  );
}
