import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import filmImg from '../../images/film.png'

export default function MoviesCardList({ isSaved }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        <MoviesCard
          name="Тест имя фильма, достаточно длинное"
          duration="8 часов 55 минут"
          isSaved={isSaved}
          isLiked={true}
          filmImg={filmImg}
        />
        <MoviesCard
          name="Тест имя фильма, достаточно длинное"
          duration="8 часов 55 минут"
          isSaved={isSaved}
          isLiked={true}
          filmImg={filmImg}
        />
        <MoviesCard
          name="Тест имя фильма, достаточно длинное"
          duration="8 часов 55 минут"
          isSaved={isSaved}
          isLiked={false}
          filmImg={filmImg}
        />
        <MoviesCard
          name="Тест имя фильма, достаточно длинное"
          duration="8 часов 55 минут"
          isSaved={isSaved}
          isLiked={false}
          filmImg={filmImg}
        />
        <MoviesCard
          name="Тест имя фильма, достаточно длинное"
          duration="8 часов 55 минут"
          isSaved={isSaved}
          isLiked={false}
          filmImg={filmImg}
        />
      </ul>
      <button className={`movies-card-list__more-button  ${isSaved ? "movies-card-list__more-button_disable" : ""}`} type="button">Ещё</button>
    </section>
  );
}
