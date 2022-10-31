import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ text }) {
  return (
    <label>
      <div className="switch">
        <input className="switch__toggle" type="checkbox" name="toggle1" id="toggle1" />
        <label for="toggle1"></label>
        <span className="switch__text">Короткометражки</span>
      </div>
    </label>
  );
}
