import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from '../Validation/Validation';
import "./SearchForm.css";


export default function SearchForm({searchMoviesCallback, toggleSearchShortMovieHandler, isSearchShortMovie,  isProcessed, searchMovieString, setSearchMovieString}) {
  const formValidator = useFormWithValidation();
  function searchMoviesHandler(e) {
    e.preventDefault();
    //  console.log(e.target[0].value);
    searchMoviesCallback(e.target[0].value);

  }

  function handleChangeSearch(e) {
    setSearchMovieString(e.target.value);
    formValidator.handleChange(e);
  }
  return (
    <form className="search" noValidate  onSubmit={searchMoviesHandler}>
      <div className="search__container">
        <input  className="search__query"  id="input-search" required type="search" name="search" placeholder="Фильм" value={searchMovieString} onChange={handleChangeSearch} minLength="1"/>
        <button className={`search__find ${(isProcessed || !formValidator.isValid) ? "search__find_disabled" : ""}`} type="submit" disabled={(isProcessed || !formValidator.isValid) ? "disabled" : ""}>Найти</button>
        
      </div>
        
      <FilterCheckbox toggleSearchShortMovieHandler={toggleSearchShortMovieHandler} isSearchShortMovie={isSearchShortMovie}/>
      <p className='search__form_error'>{formValidator.errors.search}</p>
    </form>
  );
}
