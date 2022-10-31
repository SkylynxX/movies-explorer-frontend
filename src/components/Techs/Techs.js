import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="tech">
      <h2 className="tech__title title">Технологии</h2>
      <h3 className="tech__subtitle">7 технологий</h3>
      <p className="tech__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li className="tech__list_li">
          <p className="tech__list_text">HTML</p>
        </li>
        <li className="tech__list_li">
          <p className="tech__list_text">CSS</p>
        </li>
        <li className="tech__list_li">
          <p className="tech__list_text">JS</p>
        </li>
        <li className="tech__list_li">
          <p className="tech__list_text">React</p>
        </li>
        <li className="tech__list_li">
          <p className="tech__list_text">Git</p>
        </li>
        <li className="tech__list_li">
          <p className="tech__list_text">Express.js</p>
        </li>
        <li className="tech__list_li">
          <p className="tech__list_text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}
