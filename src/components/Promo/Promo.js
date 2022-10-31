import React from "react";
import landingImg from '../../images/text__COLOR_landing-logo.svg'

import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">

        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__img" src={landingImg} alt="" />
    </section>
  );
}