export class MainApi {
  constructor(inObj) {
    this._baseUrl = inObj.baseUrl;
    this._headers = inObj.headers;
  }

  //Общая обработка результата запроса: ok - возвращаем сериализованный ответ, not ok - возвращаем промис со статусом  (аргумент - объект Response возвращемый промисом fetch)
  _returnStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  //Добаивть валидацию токена для работы модуля авторизации в node.js
  _validateHeader() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      ...this._headers,
    };
  }
  
  // Зарегистрировать пользователя с помощью пароля, имени и имейла, успешный ответ _id email
  signUp(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: userData.password,
        name: userData.name,
        email: userData.email,
      }),
    }).then(this._returnStatus);
  }

  // Залогинить пользователя с указанным паролем и емайлом, успешный ответ _id email
  signIn(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: userData.password,
        email: userData.email,
      }),
    }).then(this._returnStatus);
  }
  
  // Получить информацию о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._validateHeader(),
    }).then(this._returnStatus);
  }

  // Отправить данные о пользователе на сервер (аргумент - объект с данными о пользователе)
  setUserInfo(userInfoData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._validateHeader(),
      body: JSON.stringify({
        name: userInfoData.name,
        about: userInfoData.email,
      }),
    }).then(this._returnStatus);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._validateHeader(),
    }).then(this._returnStatus);
  }

  //Создать карточку понравившегося фильма на сервере (аргумент - объект данных карточки)
  addSavedMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._validateHeader(),
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: movieData.image,
        trailer: movieData.trailer,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
        thumbnail: movieData.thumbnail,
        movieId: movieData.movieId,
      }),
    }).then(this._returnStatus);
  }

  //Удалить карточку разонравившегося фильма на сервере (аргумент - ID карточки)
  removeSavedMovie(movieID) {
    return fetch(`${this._baseUrl}/movies/${movieID}`, {
      method: "DELETE",
      headers: this._validateHeader(),
    }).then(this._returnStatus);
  }

  // Проверить валидность токена и получить email
  validateToken(jwt) {
    if(jwt){
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": this._headers["Content-Type"],
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._returnStatus);
  }
  }
}

//экземпляр класса для экпорта
const mainAPI = new MainApi({
  baseUrl: "https://diplom-api.SkylynxX.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainAPI;
