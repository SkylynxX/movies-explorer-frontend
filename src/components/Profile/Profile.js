import React, {useContext, useState, useEffect} from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../Validation/Validation';

const Profile = ({onLogOut, onUpdate, isProcessed, isRequestSuccess}) => {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);
  const [isRequestExecuted,setRequestExecuted] = useState(false);
  const [isChangesDetected,setChangesDetected] = useState(false);
  const formValidator = useFormWithValidation();

  useEffect(() => {
    if (isProcessed) {
      setRequestExecuted(true);
    }
  }, [isProcessed]);

  useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, [currentUser]);
  
  useEffect(() => {
  if((currentUser.name !== name) || currentUser.email !== email) {
    setChangesDetected(true);
  } else {
    setChangesDetected(false);
  }
}, [email, name]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    formValidator.handleChange(e);
    console.log(isChangesDetected);

  }


  function handleChangeName(e) {
    setName(e.target.value);
    formValidator.handleChange(e);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    if(currentUser.name !== name || currentUser.email !== email) {
      onUpdate({ name: name, email: email});
      setChangesDetected(false);
    }
  }

  return (
      <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name || "Неизвестный Киновед"}!</h2>
        <form action="" className='profile__form'  onSubmit={handleSubmit}>
          <div className='profile__form_box-name'>
            <label htmlFor="">Имя</label>
            <input className={`profile__form_name ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "profile__form_name_disabled" : ""}`} type="text" required minLength="3" maxLength="40" name="name" value={name} onChange={handleChangeName} placeholder="" disabled={(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          </div>
          <p className='profile__form_name-error'>{formValidator.errors.name}</p>
          <div className='profile__form_box-maill'>
            <label htmlFor="">E-maill</label>
            <input className={`profile__form_maill ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "profile__form_maill_disabled" : ""}`} id="input-email" type="email" required name="email"  pattern="[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$" value={email} onChange={handleChangeEmail} placeholder="" disabled={(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          </div>
          <p className='profile__form_maill-error'>{formValidator.errors.email}</p>
          <button className={`profile__navigation_change ${(isProcessed  || !formValidator.isValid || !isChangesDetected) ? "profile__navigation_change_disabled" : ""}`} aria-label="редактировать" disabled={(isProcessed  ||  !formValidator.isValid || !isChangesDetected) ? "disabled" : ""}>
          Редактировать
          </button>
        </form>
        <Link className='profile__navigation_out' aria-label="выйти" to="/" onClick={onLogOut}>
          Выйти из аккаунта
        </Link>
      </section>
  )
}

export default Profile;