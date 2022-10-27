import React from 'react';
import circle from "../../images/circle.svg";
import "./Login.css";

const Login = () => {
  return (

    <section className='login'>
    <img className='login__circle' src={circle} alt="" />
    <h2 className='login__title'>Рады видеть!</h2>
    <form action="" className='login__form'>
      <label className='login__form_label' htmlFor="">E-maill</label>
      <input className='login__form_input' type="emaill" />
      <label className='login__form_label' htmlFor="">Пароль</label>
      <input className='login__form_input' type="password" />
    </form>
    <button className='login__button'>Войти</button>
    <div className='login__bottom-box'>
      <p className='login__bottom-box_question'>Еще не зарегистрированы?</p>
      <a className='login__bottom-box_link' href="">Регистрация</a>
    </div>
  </section>
  )
}

export default Login;