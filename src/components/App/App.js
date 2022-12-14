import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Error404 from "../Error404/Error404";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <body className="root">
        <Switch>
          <Route exact path="/">
            <Header color="pink" isLoggedIn={true}/>
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
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header color="white" isLoggedIn={isLoggedIn} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="*">
            <Error404 />
          </Route> 
        </Switch>
    </body>
  );
}

export default App;
