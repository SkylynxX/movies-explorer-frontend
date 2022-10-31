import React from 'react';
import circle from "../../images/circle.svg";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
      <section className='register'>
        <img className='register__circle' src={circle} alt="" />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form action="" className='register__form'>
          <label className='register__form_label' htmlFor="">Имя</label>
          <input className='register__form_input' type="text" />
          <p className='register__form_error register__form_error-name_none'></p>
          <label className='register__form_label' htmlFor="">E-maill</label>
          <input className='register__form_input' type="emaill" />
          <p className='register__form_error register__form_error-email_none'>error</p>
          <label className='register__form_label' htmlFor="">Пароль</label>
          <input className='register__form_input' type="password" />
          <p className='register__form_error register__form_error-pasword_none'>error</p>
        </form>
        <button className='register__button'>Зарегистрироваться</button>
        <div className='register__bottom-box'>
          <p className='register__bottom-box_question'>Уже зарегистрированы?</p>
          <Link className='register__bottom-box_enter' aria-label="войти" to="/signin">
            Войти
          </Link>
        </div>
      </section>
  );

}

export default Register;