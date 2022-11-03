import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";


export default function SearchForm() {
  return (
    <form className="search" novalidate>
      <div className="search__container">
        <input  className="search__query" type="search" placeholder="Фильм" required></input>
        <button className="search__find" type="submit">Найти</button>
      </div>
      <FilterCheckbox/>
    </form>
  );
}
