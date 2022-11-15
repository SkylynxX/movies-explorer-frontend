import React, {useEffect, useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import "./SavedMovies.css"

export default function SavedMovies({ searchMoviesCallback,toggleSearchShortMovieHandler, isSearchShortMovie, movies, savedMovies, isProcessed, isRequestSuccess, moviesListSize, onAddMovie,onLike, onUnlike, searchMovieString, setSearchMovieString, filterSavedMovies}) {
  
  const [isRequestExecuted,setRequestExecuted] = useState(false);
  useEffect(() => {
    // console.log("useEffect() SavedMovies")
    if (isProcessed) {
      setRequestExecuted(true);
      // console.log("useEffect isProcessed")
    }
    if(!isRequestExecuted && !movies.length){
      // console.log("useEffect filterSavedMovies")
      filterSavedMovies("");
      
    }
  }, [savedMovies,isProcessed]);

  return (
    
    <main className='saved-movies'>
        <SearchForm searchMoviesCallback={searchMoviesCallback} toggleSearchShortMovieHandler={toggleSearchShortMovieHandler}  isSearchShortMovie={isSearchShortMovie}  isProcessed={isProcessed} searchMovieString={searchMovieString} setSearchMovieString={setSearchMovieString}/>
        <Preloader isProcessed={isProcessed}/>
        <MoviesCardList isSaved={true} movies={movies} savedMovies={savedMovies} isProcessed={isProcessed}  isRequestSuccess={isRequestSuccess} onAddMovie={onAddMovie} moviesListSize={moviesListSize} onLike={onLike} onUnlike={onUnlike}/>
  </main>
  )
}
