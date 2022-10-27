import React from 'react';
import circle from "../../images/circle.svg";
import "./Register.css";

const Register = () => {
  return (

      <section className='register'>
        <img src={circle} alt="" />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form action="" className='register__form'>
          <label className='register__form_label' htmlFor="">Имя</label>
          <input className='register__form_input' type="text" />
          <label className='register__form_label' htmlFor="">E-maill</label>
          <input className='register__form_input' type="emaill" />
          <label className='register__form_label' htmlFor="">Пароль</label>
          <input className='register__form_input' type="password" />
        </form>
        <button className='register__button'>Зарегистрироваться</button>
        <div className='register__bottom-box'>
          <p>Уже зарегистрированы?</p>
          <a href="">Войти</a>
        </div>
      </section>
  );

}

export default Register;