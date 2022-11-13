import React, {useEffect, useState}from 'react';
import circle from "../../images/circle.svg";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../Validation/Validation';

const Login = ({onSignIn, isProcessed, isRequestSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRequestExecuted,setRequestExecuted] = useState(false);
  const formValidator = useFormWithValidation();

  useEffect(() => {
    if (isProcessed) {
      setRequestExecuted(true);
    }
  }, [isProcessed]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    formValidator.handleChange(e);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    formValidator.handleChange(e);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onSignIn({ password, email });
  }
  return (

    <section className='login'>
    <img className='login__circle' src={circle} alt="Логотип сайта, круг"/>
    <h2 className='login__title'>Рады видеть!</h2>
    <form action="" className='login__form'  name='signin' onSubmit={handleSubmit}>
      <label className='login__form_label' htmlFor="">E-maill</label>
      <input className={`login__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "login__form_input_disable" : ""}`} id="input-email" type="email" required name="email" value={email} pattern="[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}.[a-zA-Z]{2,}" onChange={handleChangeEmail} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
      <p className='login__form_error-email'>{formValidator.errors.email}</p>
      <label className='login__form_label' htmlFor="">Пароль</label>
      <input className={`login__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "login__form_input_disabled" : ""}`} id="input-password" type="password" required name="password" minLength="3" maxLength="40" value={password} onChange={handleChangePassword} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess))? "disabled" : ""}/>
      <p className='login__form_error-email'>{formValidator.errors.password}</p>
      <p className='login__form_error-password'>{(!isProcessed && isRequestExecuted) ?  (isRequestSuccess ? "Вход выполнен успешно." : "Возникла ошибка при входе."):""}</p>
      <button className={`login__button ${(isProcessed  || (isRequestExecuted && isRequestSuccess) ||  !formValidator.isValid) ? "login__button_disabled" : ""}`} disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess) || !formValidator.isValid) ? "disabled" : ""}>Войти</button>
    </form>
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