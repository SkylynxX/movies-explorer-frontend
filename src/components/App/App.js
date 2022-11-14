import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Main from "../Main/Main";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Error404 from "../Error404/Error404";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import mainAPI from "../../utils/MainApi";
import moviesAPI from "../../utils/MoviesApi";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // let _searchRequest;
  let movies = [];
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isSearchShortMovie, setSearchShortMovie] = useState(false);
  const [searchMovieString, setSearchMovieString] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMoviesRequestProcessed, setMoviesRequestProcessed] = useState(false);
  const [isMoviesRequestSuccess, setMoviesRequestSuccess] = useState(false);
  const [isUserRequestProcessed, setUserRequestProcessed] = useState(false);
  const [isUserRequestSuccess, setUserRequestSuccess] = useState(false);
  const history = useHistory();

  //в качестве примера использован ответ 1: https://stackoverflow.com/questions/57025569/react-execute-script-if-window-width
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesListSize, setMoviesListSize] = useState(7);
  const [moviesListAddition, setMoviesListAddition] = useState(7);

  useEffect(() => {
    function handleResize() {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if(width < 768) {
      setMoviesListAddition(5);
    } else {
      setMoviesListAddition(7);
    }
  },[width]);

  function addMoviesListCallback(additionSizeSettings) {
    if (additionSizeSettings==='default')
    {
      setMoviesListSize(moviesListAddition);
    } else {
      setMoviesListSize(moviesListSize + moviesListAddition);
    }
  }

  useEffect(() => {
    filterSavedMovies(searchMovieString);
  }, [savedMovies]);
  

  useEffect(() => {
  validateTocken();
  }, [history]);
  


  useEffect(() => {
    mainAPI
      .getUserInfo()
      .then((rxUserInfo) => {
        setCurrentUser(rxUserInfo);
      })
      .catch((err) => {
        //попадаем сюда если промис завершится ошибкой
        console.log(err);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies("");
    }
  }, [isLoggedIn]);
  
// useEffect(() => {
//   console.log(isRequestProcessed);
// }, [isRequestProcessed]);
  function validateTocken(){
        //валидируем токен через API авторизации
        console.log('Validate tocken')
        const userToken = localStorage.getItem("jwt");
        if (userToken) {
          mainAPI
            .validateToken(userToken)
            .then((userData) => {
              if (userData) {
                console.log(userData)
                setLoggedIn(true);
              }
            })
            .catch((err) => {
              //попадаем сюда если один из промисов завершится ошибкой
              console.log(err);
              handleSignOut();
              history.push("/");
            });
        }
  }

  function filterMovies(searchRequest) {
    let filterRes = []
    if (searchRequest) {
      filterRes = movies.filter((item) => { return ((item.nameRU.toLowerCase().indexOf(searchRequest.toLowerCase()) > -1)
       && (isSearchShortMovie ?  item.duration <= 40 : true))  });
    }
    // console.log(filterRes);
    setFilteredMovies(filterRes);
  }

  function filterSavedMovies(searchRequest) {
    let filterRes = []
    if (searchRequest) {
      filterRes = savedMovies.filter((item) => { return ((item.nameRU.toLowerCase().indexOf(searchRequest.toLowerCase()) > -1)
       && (isSearchShortMovie ?  item.duration <= 40 : true))  });
    }
    //  console.log(filterRes);
    setFilteredSavedMovies(filterRes);
  }


  function getMovies() {
    // if (!localStorage.hasOwnProperty("movies")) {
      if (! movies.length) {
      setMoviesRequestSuccess(false);
      setMoviesRequestProcessed(true);
      moviesAPI
        .getInitialMoviess()
        .then((rxMovies) => {
          localStorage.setItem("movies", JSON.stringify(rxMovies));
          movies = rxMovies;
          filterMovies(searchMovieString);
          setMoviesRequestSuccess(true);
          setMoviesRequestProcessed(false);
        })
        .catch((err) => {
          setMoviesRequestSuccess(false);
          setMoviesRequestProcessed(false);
          //попадаем сюда если промис завершится ошибкой
          console.log(err);
        });
        // console.log("getMovies(searchRequest) API done");
    } else if (history.location.pathname === "/movies" && movies.length) {
      setMoviesRequestSuccess(false);
      setMoviesRequestProcessed(true);
      movies = JSON.parse(localStorage.getItem("movies"));
      // console.log(movies);
      filterMovies(searchMovieString);
      setMoviesRequestSuccess(true);
      setMoviesRequestProcessed(false);
      // console.log("getMovies(searchRequest) done");
    }
  }

  function getSavedMovies() {
    // if (!localStorage.hasOwnProperty("movies")) {
      mainAPI
      .getSavedMovies()
      .then((rxSavedMovies) => {
        setSavedMovies(rxSavedMovies);
        // console.log(rxSavedMovies);
        setMoviesRequestProcessed(false);
        setMoviesRequestSuccess(true);
      })
      .catch((err) => {
        setMoviesRequestSuccess(false);
        setMoviesRequestProcessed(false);
        //попадаем сюда если промис завершится ошибкой
        console.log(err);
      });
  }





  function searchMoviesCallback(searchRequest) {
    setSearchMovieString(searchRequest);
    if (history.location.pathname === "/movies") {
      getMovies();
    } else if (history.location.pathname === "/saved-movies") {
      getSavedMovies();
    }
  }

  
  function toggleSearchShortMovieHandler() {
    setSearchShortMovie(!isSearchShortMovie);
  }


  function handleSignUp(userData) {
    setUserRequestSuccess(false);
    setUserRequestProcessed(true);
    mainAPI
      .signUp(userData)
      .then((repData) => {
        setUserRequestSuccess(true);
        setUserRequestProcessed(false);
        //Ждем 5 секунды чтобы дать человеку прочитать что у него всё получилось
        setTimeout(handleSignIn, 5000,userData);
      })
      .catch((err) => {
        //В случае не успешной регистрации показываем окно не успеха
      setUserRequestSuccess(false);
      setUserRequestProcessed(false);
        console.log(err);
      });
  }

  function handleSignIn(userData) {
    // console.log(userData);
    setUserRequestProcessed(true);
    setUserRequestSuccess(false);
    mainAPI
      .signIn(userData)
      .then((userReceivedData) => {
        // console.log(userReceivedData);
        //В случае успешной авторизации
        localStorage.setItem("jwt", userReceivedData.token);
        setUserRequestSuccess(true);
        setUserRequestProcessed(false);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        //В случае не успешной авторизации показываем окно не успеха
        setUserRequestSuccess(false);
        setUserRequestProcessed(false);
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    // console.log(userData);
    setUserRequestProcessed(true);
    setUserRequestSuccess(false);
    mainAPI
      .setUserInfo(userData)
      .then((userReceivedData) => {
        // console.log(userReceivedData);
        //В случае успешной авторизации
        
        setCurrentUser(userData);
        setUserRequestSuccess(true);
        setUserRequestProcessed(false);
      })
      .catch((err) => {
        //В случае не успешной авторизации показываем окно не успеха
        setUserRequestSuccess(false);
        setUserRequestProcessed(false);
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    setSavedMovies([]);
    setLoggedIn(false);

  }

  function handleMovieSave(movie) {
    setMoviesRequestSuccess(false);
    setMoviesRequestProcessed(true);
    mainAPI
      .addSavedMovie(movie)
      .then((newMovie) => {
        setSavedMovies((prevState) => prevState.concat(newMovie));
        // console.log(savedMovies);
        setMoviesRequestSuccess(true);
        setMoviesRequestProcessed(false);
      })
      .catch((err) => {
        console.log(err);
        setMoviesRequestSuccess(false);
        setMoviesRequestProcessed(false);
      });
  }

  function handleMovieDelete(movie) {
    setMoviesRequestSuccess(false);
    setMoviesRequestProcessed(true);
    mainAPI
      .removeSavedMovie(movie._id)
      .then(() => {
        setSavedMovies((prevState) => prevState.filter((item) => item.movieId !== movie.id));
        setMoviesRequestSuccess(true);
        setMoviesRequestProcessed(false);
      })
      .catch((err) => {
        console.log(err);
        setMoviesRequestSuccess(false);
        setMoviesRequestProcessed(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Header color="pink" isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/signin">
            <Login  onSignIn={handleSignIn} isProcessed={isUserRequestProcessed} isRequestSuccess={isUserRequestSuccess}/>
          </Route>
          <Route path="/signup">
            <Register onSignUp={handleSignUp} isProcessed={isUserRequestProcessed} isRequestSuccess={isUserRequestSuccess}/>
          </Route>
          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Header color="white" isLoggedIn={isLoggedIn}/>
            <Profile onLogOut={handleSignOut} onUpdate={handleUpdateUser}/>
          </ProtectedRoute>
          <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
            <Header color="white" isLoggedIn={isLoggedIn} />
            <Movies
              searchMoviesCallback={searchMoviesCallback}
              toggleSearchShortMovieHandler={toggleSearchShortMovieHandler}
              isSearchShortMovie={isSearchShortMovie}
              movies={filteredMovies}
              savedMovies={savedMovies}
              isProcessed={isMoviesRequestProcessed}
              isRequestSuccess={isMoviesRequestSuccess}
              onAddMovie={addMoviesListCallback}
              moviesListSize={moviesListSize}
              onLike={handleMovieSave}
              onUnlike={handleMovieDelete}
              searchMovieString={searchMovieString}
              setSearchMovieString={setSearchMovieString}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies"  isLoggedIn={isLoggedIn}>
            <Header color="white" isLoggedIn={isLoggedIn} />
            <SavedMovies
              searchMoviesCallback={searchMoviesCallback}
              toggleSearchShortMovieHandler={toggleSearchShortMovieHandler}
              isSearchShortMovie={isSearchShortMovie}
              movies={filteredSavedMovies}
              savedMovies={savedMovies}
              isProcessed={isMoviesRequestProcessed}
              isRequestSuccess={isMoviesRequestSuccess}
              onAddMovie={addMoviesListCallback}
              moviesListSize={savedMovies.length}
              onLike={handleMovieSave}
              onUnlike={handleMovieDelete}
              searchMovieString={searchMovieString}
              setSearchMovieString={setSearchMovieString}
            />
            <Footer />
          </ProtectedRoute>
          <Route path="/*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
