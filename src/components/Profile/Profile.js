import React from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
      <section className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form action="" className='profile__form'>
          <div className='profile__form_box-name'>
            <label htmlFor="">Имя</label>
            <input className='profile__form_name' type="text" /></div>
            <p className='profile__form_name-error'></p>
          <div className='profile__form_box-maill'>
            <label htmlFor="">E-maill</label>
            <input className='profile__form_maill' type="emaill" />
            <p className='profile__form_error'></p>
          </div>
        </form>
        <div className='profile__navigation'>
          <Link className='profile__navigation_change' aria-label="редактировать" to="/profile">
          Редактировать
          </Link>
          <Link className='profile__navigation_out' aria-label="выйти" to="/logout">
          Выйти из аккаунта
          </Link>
        </div>
      </section>
  )
}

export default Profile;