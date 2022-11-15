import React from 'react';
import { Route, Redirect } from "react-router-dom";

//Этот компонентом защитите роут /, чтобы на него не смогли перейти неавторизованные пользователи
export const CoveredRoute = ({ isLoggedIn, path, children }) => {
  return (
    <Route path={path} exact>
      {
        !isLoggedIn ? children : <Redirect to="/movies" />
      }
    </Route>
  )
};

