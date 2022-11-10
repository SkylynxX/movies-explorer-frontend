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

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearchShortMovie, setSearchShortMovie] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRequestProcessed, setRequestProcessed] = useState(false);
  const [isRequestSuccess, setRequestSuccess] = useState(false);
  const history = useHistory();
  const current = history.location.pathname;

  useEffect(() => {
    //валидируем токен через API авторизации
    const userToken = localStorage.getItem("jwt");
    if (userToken) {
      mainAPI
        .validateToken(userToken)
        .then((userData) => {
          if (userData) {
            // console.log(userData)
            setLoggedIn(true);
            history.push("/");
          }
        })
        .catch((err) => {
          //попадаем сюда если один из промисов завершится ошибкой
          console.log(err);
        });
    }
  }, [history]);

  useEffect(() => {
    mainAPI
      .getUserInfo()
      .then((rxUserInfo) => {
        setCurrentUser(rxUserInfo); //все данные получены, отрисовываем страницу
      })
      .catch((err) => {
        //попадаем сюда если промис завершится ошибкой
        console.log(err);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (current === "saved-movie" && isLoggedIn) {
      setRequestProcessed(true);
      setRequestSuccess(true);
      mainAPI
        .getSavedMovies()
        .then((rxSavedMovies) => {
          setSavedMovies(rxSavedMovies); //все данные получены, отрисовываем страницу
          setRequestProcessed(false);
          setRequestSuccess(true);
        })
        .catch((err) => {
          setRequestSuccess(false);
          setRequestProcessed(false);
          //попадаем сюда если промис завершится ошибкой
          console.log(err);
        });
    }
  }, [history, current, isLoggedIn]);

  function filterMovies(searchRequest) {
    console.log(searchRequest);
    console.log(movies);
    // console.log(movies.filter((item) => { return true}));
    setFilteredMovies(movies.filter((item) => { console.log(item); return item.nameRU.toLowerCase().indexOf(searchRequest.toLowerCase()) > -1 }));
  }

   function getMovies(searchRequest) {
    if (current === "/movies" && !movies.length) {
      setRequestSuccess(true);
      setRequestProcessed(true);
      moviesAPI
        .getInitialMoviess()
        .then((rxMovies) => {
          setMovies(rxMovies); //все данные получены, отрисовываем страницу
          filterMovies(searchRequest);
          setRequestSuccess(true);
          setRequestProcessed(false);
        })
        .catch((err) => {
          setRequestSuccess(false);
          setRequestProcessed(false);
          //попадаем сюда если промис завершится ошибкой
          console.log(err);
        });
    }
  }

  function searchMoviesCallback(searchRequest) {
    if (current === "/movies") {
      getMovies(searchRequest);
    }
  }

  function toggleSearchShortMovieHandler() {
    setSearchShortMovie(!isSearchShortMovie);
  }

  function redirectToSignIn() {
    history.push("/sign-in");
  }

  function handleSignUp(userData) {
    // console.log(userData);
    mainAPI
      .signUp(userData)
      .then((userData) => {
        //В случае успешной регистрации показываем сообщение успеха
        setRequestSuccess(true);
        //Ждем 2 секунды чтобы дать человеку насладиться его успехом,
        //делаем редирект для возможности пользователю войти, воспользовавшись плодами его успеха
        setTimeout(redirectToSignIn, 2000);
      })
      .catch((err) => {
        //В случае не успешной регистрации показываем окно не успеха
        setRequestSuccess(false);
        console.log(err);
      });
  }

  function handleSignIn(userData) {
    // console.log(userData);
    mainAPI
      .signIn(userData)
      .then((userReceivedData) => {
        // console.log(userReceivedData);
        //В случае успешной авторизации
        localStorage.setItem("jwt", userReceivedData.token);
        setRequestSuccess(true);
        setLoggedIn(true);
        history.push("/");
      })
      .catch((err) => {
        //В случае не успешной авторизации показываем окно не успеха
        setRequestSuccess(false);
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function handleMovieSave(movie) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    // const isLiked = card.likes.some((i) => i === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    // mainAPI
    //   .changeLikeCardStatus(card._id, !isLiked)
    //   .then((newCard) => {
    //     setCards((state) =>
    //       state.map((c) => (c._id === card._id ? newCard : c))
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function handleMovieDelete(card) {
    //console.log('delete card enter');
    // mainAPI
    //   .removeCard(card._id)
    //   .then(() => {
    //     setCards((state) => state.filter((item) => item !== card));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Header color="pink" isLoggedIn={true} />
            <Main />
            <Footer />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/profile">
            <Header color="white" isLoggedIn={isLoggedIn} />
            <Profile />
          </Route>
          <Route path="/movies">
            <Header color="white" isLoggedIn={isLoggedIn} />
            <Movies
              searchMoviesCallback={searchMoviesCallback}
              toggleSearchShortMovieHandler={toggleSearchShortMovieHandler}
              isSearchShortMovie={isSearchShortMovie}
              movies={movies}
              isProcessed={isRequestProcessed}
              isRequestSuccess={isRequestSuccess}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header color="white" isLoggedIn={isLoggedIn} />
            <SavedMovies
              savedMovies={savedMovies}
              isProcessed={isRequestProcessed}
              isRequestSuccess={isRequestSuccess}
            />
            <Footer />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
