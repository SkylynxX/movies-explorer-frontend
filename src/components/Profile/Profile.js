import React from 'react';
import Navigation from '../Navigation/Navigation';
import circle from "../../images/circle.svg";
import man from '../../images/man.svg'
import "./Profile.css";

const Profile = () => {
  return (
      <section className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form action="" className='profile__form'>
          <div className='profile__form_box-name'>
            <label htmlFor="">Имя</label>
            <input className='profile__form_name' type="text" /></div>
          <div className='profile__form_box-maill'>
            <label htmlFor="">E-maill</label>
            <input className='profile__form_maill' type="emaill" />
          </div>
        </form>
        <div className='profile__navigation'>
          <a href="" className='profile__navigation_change'>Редактировать</a>
          <a href="/logout" className='profile__navigation_out'>Выйти из аккаунта</a>
        </div>
      </section>
  )
}

export default Profile;