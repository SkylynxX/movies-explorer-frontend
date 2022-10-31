import React from "react";
import "./MoviesCard.css";
import unlike from '../../images/like-disable.svg';
import like from '../../images/like-enable.svg';
import close from '../../images/x.svg';
export default function MoviesCard({ name, duration, isSaved, isLiked, filmImg }) {
  const cardStatusImg = (isSaved ? close : isLiked? like :
    unlike);
  
  return (
    <div className='films__container'>
    <div className='films__container_info'>
      <p className='film__name'>{name}</p>
      <p className='film__time'>{duration}</p>
      <img className='film__like' src={cardStatusImg} alt="" />
    </div>
    <img className='film__img' src={filmImg} alt="" />
  </div>
  );
}
