import React from 'react';
import { Route, Redirect } from "react-router-dom";

//Этот компонентом защитите роут /, чтобы на него не смогли перейти неавторизованные пользователи
export const ProtectedRoute = ({ path, children }) => {
  return (
    <Route path={path} exact>
      {
        localStorage.getItem('jwt') ? children : <Redirect to="/" />
        //Хуки отрабатывают только после рендера, поэтому переход на главную произойдёт до момента установки isLoggedIn
        //предлагаемое решение - на момент логина проверять наличие jwt, который в случае невалидности удалится хуком и произойдёт редирект на "/"
      }
    </Route>
  )
};

