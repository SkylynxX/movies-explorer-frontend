import React from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import "./Movies.css"

export default function Movies({ searchMoviesCallback,toggleSearchShortMovieHandler, isSearchShortMovie, movies, savedMovies, isProcessed, isRequestSuccess, onAddMovie, moviesListSize, onLike, onUnlike, searchMovieString,setSearchMovieString}) {
  return (
    <main className='movies'>
        <SearchForm searchMoviesCallback={searchMoviesCallback} toggleSearchShortMovieHandler={toggleSearchShortMovieHandler}  isSearchShortMovie={isSearchShortMovie}  isProcessed={isProcessed} searchMovieString={searchMovieString} setSearchMovieString={setSearchMovieString}/>
        <Preloader isProcessed={isProcessed}/>
        <MoviesCardList isSaved={false} movies={movies} savedMovies={savedMovies} isProcessed={isProcessed}  isRequestSuccess={isRequestSuccess} onAddMovie={onAddMovie} moviesListSize={moviesListSize} onLike={onLike} onUnlike={onUnlike}/>
    </main>
  )
}
