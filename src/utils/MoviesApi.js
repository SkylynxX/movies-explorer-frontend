export class MoviesApi {
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
  
  // Получить данные начальные о всех картах
  getInitialMoviess() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    }).then(this._returnStatus);
  }
}

//экземпляр класса для экпорта
const moviesAPI = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesAPI;
