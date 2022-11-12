import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";


export default function SearchForm({searchMoviesCallback, toggleSearchShortMovieHandler, isSearchShortMovie,  isProcessed, searchMovieString, setSearchMovieString}) {

  function searchMoviesHandler(e) {
    e.preventDefault();
    //  console.log(e.target[0].value);
    searchMoviesCallback(e.target[0].value);

  }

  function handleChangeSearch(e) {
    setSearchMovieString(e.target.value);
  }
  return (
    <form className="search" noValidate  onSubmit={searchMoviesHandler}>
      <div className="search__container">
        <input  className="search__query" type="search" placeholder="Фильм" required value={searchMovieString} onChange={handleChangeSearch}/>
        <button className={`search__find ${isProcessed ? "search__find_disabled" : ""}`} type="submit" disabled={isProcessed ? "disabled" : ""}>Найти</button>
      </div>
      <FilterCheckbox toggleSearchShortMovieHandler={toggleSearchShortMovieHandler} isSearchShortMovie={isSearchShortMovie}/>
    </form>
  );
}
