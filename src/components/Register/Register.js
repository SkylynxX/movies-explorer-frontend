import React, {useState, useEffect} from 'react';
import circle from "../../images/circle.svg";
import "./Register.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../Validation/Validation';


const Register = ({onSignUp, isProcessed, isRequestSuccess}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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

  function handleChangeName(e) {
    setName(e.target.value);
    formValidator.handleChange(e);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onSignUp({ password, name, email });
  }

  return (
      <section className='register'>
        <Link className='register__link-circle' aria-label="логотип" to="/">
          <img className='register__circle' src={circle} alt='Круг' />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form action="" className='register__form' name='signup' onSubmit={handleSubmit}>
          <label className='register__form_label' htmlFor="">Имя</label>
          <input className={`register__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__form_input_disabled" : ""}`} id="input-name" type="text" required name="name" minLength="3"  maxLength="40" value={name} onChange={handleChangeName} placeholder="" disabled={(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          <p className='register__form_error'>{formValidator.errors.name}</p>
          <label className='register__form_label' htmlFor="">E-maill</label>
          <input className={`register__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__form_input_disabled" : ""}`} id="input-email" type="email" required name="email" value={email} pattern="[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}" onChange={handleChangeEmail} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          <p className='register__form_error'>{formValidator.errors.email}</p>
          <label className='register__form_label' htmlFor="">Пароль</label>
          <input className={`register__form_input ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "register__form_input_disabled" : ""}`} id="input-password" type="password" required name="password" minLength="3" maxLength="40" value={password} onChange={handleChangePassword} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess))? "disabled" : ""}/>
          <p className='register__form_error'>{formValidator.errors.password}</p>
          <p className={`register__form_error ${!isProcessed && isRequestExecuted ? "" : "register__form_error-pasword_none"}`}> {isRequestSuccess ? "Вы успешно зараегестрировали нового пользователя, сейчас вы будете переадресованы на страницу поиска фильмов." : "Возникла ошибка при регистрации, свяжитесь со службой техподдержки"}</p>
          <button className={`register__button ${(isProcessed  || (isRequestExecuted && isRequestSuccess) || !formValidator.isValid) ? "register__button_disabled" : ""}`} disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess)|| !formValidator.isValid) ? "disabled" : ""}>Зарегистрироваться</button>
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