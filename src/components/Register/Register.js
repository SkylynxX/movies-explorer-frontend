import React, {useState, useEffect} from 'react';
import circle from "../../images/circle.svg";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = ({onSignUp, isProcessed, isRequestSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRequestExecuted,setRequestExecuted] = useState(false);

  useEffect(() => {
    if (isProcessed) {
      setRequestExecuted(true);
    }
  }, [isProcessed]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onSignUp({ password, name, email });
  }

  return (
      <section className='register'>
        <img className='register__circle' src={circle} alt='Круг' />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form action="" className='register__form' name='signup' onSubmit={handleSubmit}>
          <label className='register__form_label' htmlFor="">Имя</label>
          <input className={`register__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__form_input_disabled" : ""}`} type="text" required minLength="3" maxLength="40" value={name} onChange={handleChangeName} placeholder="" disabled={(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          <p className='register__form_error register__form_error-name_none'></p>
          <label className='register__form_label' htmlFor="">E-maill</label>
          <input className={`register__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__form_input_disabled" : ""}`} id="input-email" type="email" required name="email" value={email} onChange={handleChangeEmail} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          <p className='register__form_error register__form_error-email_none'>error</p>
          <label className='register__form_label' htmlFor="">Пароль</label>
          <input className={`register__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__form_input_disabled" : ""}`} id="input-password" type="password" required name="password" minLength="3" maxLength="40" value={password} onChange={handleChangePassword} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess))? "disabled" : ""}/>
          <p className={`register__form_error ${!isProcessed && isRequestExecuted ? "" : "register__form_error-pasword_none"}`}> {isRequestSuccess ? "Вы успешно зараегестрировали нового пользователя, сейчас вы будете переадресованы на страну входа." : "Возникла ошибка при регистрации, свяжитесь со службой техподдержки"}</p>
          <button className={`register__button ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__button_disabled" : ""}`} disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}>Зарегистрироваться</button>
          </form>
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