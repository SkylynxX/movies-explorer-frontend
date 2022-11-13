import React from 'react';
import { Route, Redirect } from "react-router-dom";

//Этот компонентом защитите роут /, чтобы на него не смогли перейти неавторизованные пользователи
export const ProtectedRoute = ({ children, ...props }) => {
  
  return (
    <Route  {...props}>{()=>{console.log(props.isLoggedIn)}}
      {props.isLoggedIn ? children : <Redirect to="/signin" />}
    </Route>
  );
};

