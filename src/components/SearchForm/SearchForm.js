import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";


export default function SearchForm({searchMoviesCallback, toggleSearchShortMovieHandler, isSearchShortMovie}) {

  function searchMoviesHandler(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    searchMoviesCallback(e.target[0].value);

  }
  return (
    <form className="search" noValidate  onSubmit={searchMoviesHandler}>
      <div className="search__container">
        <input  className="search__query" type="search" placeholder="Фильм" required></input>
        <button className="search__find" type="submit">Найти</button>
      </div>
      <FilterCheckbox toggleSearchShortMovieHandler={toggleSearchShortMovieHandler} isSearchShortMovie={isSearchShortMovie}/>
    </form>
  );
}
