import React from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import "./Movies.css"

export default function Movies({ searchMoviesCallback,toggleSearchShortMovieHandler, isSearchShortMovie, movies, isProcessed, isRequestSuccess}) {
  return (
    <main className='movies'>
        <SearchForm searchMoviesCallback={searchMoviesCallback} toggleSearchShortMovieHandler={toggleSearchShortMovieHandler}  isSearchShortMovie={isSearchShortMovie} />
        <Preloader isProcessed={isProcessed}/>
        <MoviesCardList movies={movies}/>
    </main>
  )
}
