import React from 'react';
import circle from "../../images/circle.svg";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (

    <section className='login'>
    <img className='login__circle' src={circle} alt="" />
    <h2 className='login__title'>Рады видеть!</h2>
    <form action="" className='login__form'>
      <label className='login__form_label' htmlFor="">E-maill</label>
      <input className='login__form_input' type="emaill" />
      <p className='login__form_error-email'></p>
      <label className='login__form_label' htmlFor="">Пароль</label>
      <input className='login__form_input' type="password" />
      <p className='login__form_error-password'></p>
    </form>
    <button className='login__button'>Войти</button>
    <div className='login__bottom-box'>
      <p className='login__bottom-box_question'>Еще не зарегистрированы?</p>
      <Link className="login__bottom-box_link" aria-label="регистрация" to="/signup">
        Регистрация
      </Link>
    </div>
  </section>
  )
}

export default Login;