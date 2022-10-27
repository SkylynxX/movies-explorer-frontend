import React from "react";
import { useHistory } from "react-router-dom";
import "./Error404.css";
export default function Error404() {
  const history = useHistory();
  return (
    <body className="body">
      <section className="error404">
        <h2 className="error404__title">404</h2>
        <p className="error404__message">Страница не найдена</p>
        <button
          className="error404__back"
          type="button"
          onClick={() => history.goBack()}
        >
            Назад
         </button>
      </section>
    </body>
  );
}
