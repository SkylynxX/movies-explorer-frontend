import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ isSaved, movies,savedMovies, isProcessed,  isRequestSuccess, onAddMovie, moviesListSize, onLike, onUnlike}) {
  const [isRequestExecuted,setRequestExecuted] = useState(false);
  useEffect(() => {
    if (isProcessed) {
      setRequestExecuted(true);
    }
    if(!isRequestExecuted){
      onAddMovie('default');
    }
  }, [isProcessed]);
  


  return (
    <section className={`movies-card-list ${isProcessed ? "movies-card-list_none" : ""}`} >
      <ul className="movies-card-list__container">
        {
          movies.slice(0, moviesListSize).map((item, i) => {
          return (
            <MoviesCard
              key={item.id || item._id}
              isSaved={isSaved}
              isLiked={savedMovies.find(sItem => item.id === sItem.movieId)}
              onLike={onLike}
              onUnlike={onUnlike}
              movie={item}
            />
          );
        })}
      </ul>
      <div>{!isProcessed &&  ((!movies.length ? ( isRequestSuccess ? "Ничего не найдено по Вашему завпросу. " : "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ") : "") + (( !movies.length) ? "Нужно ввести ключевое слово.": ""))}</div>
      {( (<button
        className={`movies-card-list__more-button  ${
          isSaved || movies.length <=
           moviesListSize ? "movies-card-list__more-button_disable" : ""
        }`}
        type="button"
        onClick={onAddMovie}
      >
        Ещё
      </button>) )
      }
    </section>
  );
}
