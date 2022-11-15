import photo from '../../images/pic__COLOR_pic.jpg'
import "./AboutMe.css";
import React from "react";

export default function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <img className="student__container_pfoto" src={photo} alt="Фото студента" />
        <h3 className="student__container_name">Елизавета</h3>
        <p className="student__container_work">Фронтенд-разработчик, 30 лет</p>
        <p className="student__container_info">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="student__container_git" href="https://github.com/SkylynxX" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </section>
  );
}
