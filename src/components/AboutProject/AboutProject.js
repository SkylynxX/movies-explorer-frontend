import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__title title">О проекте</h2>
      <div className="about__stage">
        <div className="about__stage_element">
          <p className="about__stage_subtitle">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about__stage_text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__stage_element">
          <p className="about__stage_subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about__stage_text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__graph">
        <div className="about__graph_1w">1 неделя</div>
        <div className="about__graph_4w">4 недели</div>
      </div>
      <div className="about__graph-name">
        <p className="about__graph-name_back">Back-end</p>
        <p className="about__graph-name_front">Front-end</p>
      </div>
    </section>
  );
}
