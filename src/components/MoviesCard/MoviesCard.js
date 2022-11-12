import React from "react";
import "./MoviesCard.css";
import unlike from '../../images/like-disable.svg';
import like from '../../images/like-enable.svg';
import close from '../../images/x.svg';
export default function MoviesCard({ isSaved, isLiked, onLike, onUnlike, movie}) {
  const cardStatusImg = (isSaved ? close : isLiked? like :
    unlike);
  function buttonHandler(){
    if(isSaved) {
      movie.id = movie.movieId;
      console.log(movie)
      onUnlike(movie);
    } else if (isLiked) {
      movie._id = isLiked._id;
      onUnlike(movie);
    }
    else {
      onLike(movie);
    }
  }
  return (
  <li className='films__container'>
    <div className='films__container_info'>
      <a className='film__name' href={`${isSaved ? movie.trailer : movie.trailerLink}`}>{movie.nameRU}</a>
      <p className='film__time'>{(movie.duration>=60 ? Math.ceil(movie.duration/60) + "ч ": "") + (movie.duration%60 ? movie.duration%60 + "м" : "") }</p>
      <button className='film__like-button' onClick={buttonHandler}>
        <img className='film__like-img' src={cardStatusImg} alt="Лайк" />
      </button>
    </div>
    <a href={`${isSaved ? movie.trailer : movie.trailerLink}`}><img className='film__img' src={isSaved ? `${movie.image}`: `https://api.nomoreparties.co${movie.image.url}`} alt="Обложка фильма" /></a>
  </li>
  );
}
