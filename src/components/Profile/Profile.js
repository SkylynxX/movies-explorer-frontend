import React, {useContext, useState, useEffect} from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({onLogOut, onUpdate, isProcessed, isRequestSuccess}) => {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
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


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    if(currentUser.name !== name || currentUser.email !== email) {
      onUpdate({ name: name|| currentUser.name, email: email|| currentUser.email });
    }
  }

  return (
      <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name || "Неизвестный Киновед"}!</h2>
        <form action="" className='profile__form'  onSubmit={handleSubmit}>
          <div className='profile__form_box-name'>
            <label htmlFor="">Имя</label>
            <input className={`profile__form_name ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "profile__form_name_disabled" : ""}`} type="text" required minLength="3" maxLength="40" value={name || currentUser.name} onChange={handleChangeName} placeholder="" disabled={(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          </div>
          <p className='profile__form_name-error'>jib,rf</p>
          <div className='profile__form_box-maill'>
            <label htmlFor="">E-maill</label>
            <input className={`profile__form_maill ${(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "profile__form_maill_disabled" : ""}`} id="input-email" type="email" required name="email" value={email || currentUser.email} onChange={handleChangeEmail} placeholder="" disabled = {(isProcessed  || (isRequestExecuted && isRequestSuccess)) ? "disabled" : ""}/>
          </div>
          <p className='profile__form_maill-error'>mmdmdm</p>
        </form>
        <div className='profile__navigation'>
          <button className='profile__navigation_change' aria-label="редактировать">
          Редактировать
          </button>
          <Link className='profile__navigation_out' aria-label="выйти" to="/signin" onClick={onLogOut}>
          Выйти из аккаунта
          </Link>
        </div>
      </section>
  )
}

export default Profile;