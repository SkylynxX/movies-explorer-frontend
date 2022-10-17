import logo from './images/logo.svg'
import landingImg from './images/text__COLOR_landing-logo.svg'
import './App.css';
import photo from './images/pic__COLOR_pic.jpg'
import arrow from './images/text__COLOR_font-main.svg'


function App() {
  return (
    <body className="root">
    <header className="header">
        <div className="header__menu">
            <img src={logo} alt="" className="header__menu_logo"  />
            <div className="header__menu_box">
              <a href="" className="header__menu_registr">Регистрация</a>
              <a href="" className="header__menu_entr">Войти</a>
            </div>
        </div>
        <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="header__img" src={landingImg} alt="" />
    </header>
    <main>
        <section className="about">
            <h2 className="about__title title">О проекте</h2>
            <div className="about__stage">
              <div className="about__stage_element">
                <p className="about__stage_subtitle">Дипломный проект включал 5 этапов</p>
                <p className="about__stage_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
              </div>
              <div className="about__stage_element">
                <p className="about__stage_subtitle">На выполнение диплома ушло 5 недель</p>
                <p className="about__stage_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
              </div>
            </div>
            <div className="about__graph">
                <div className="about__graph_1w">1 неделя</div>
                <div className="about__graph_4w">4 недели</div>
            </div>
            <div className="about__graph-name">
                <p className="about__graph-name_back">Back-end</p>
                <p className="about__graph-name_front">Front-end</p>
            </div>
        </section>
        <section className="tech">
            <h2 className="tech__title title">Технологии</h2>
            <h3 className="tech__subtitle">7 технологий</h3>
            <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='tech__list'>
              <li className='tech__list_li'><p className='tech__list_text'>HTML</p></li>
              <li className='tech__list_li'><p className='tech__list_text'>CSS</p></li>
              <li className='tech__list_li'><p className='tech__list_text'>JS</p></li>
              <li className='tech__list_li'><p className='tech__list_text'>React</p></li>
              <li className='tech__list_li'><p className='tech__list_text'>Git</p></li>
              <li className='tech__list_li'><p className='tech__list_text'>Express.js</p></li>
              <li className='tech__list_li'><p className='tech__list_text'>mongoDB</p></li>
            </ul>
        </section>
        <section className="student">
        <h2 className="student__container_title title">Студент</h2>
          <div  className="student__container">
            <h3 className='student__container_name'>Елизавета</h3>
            <img className="student__container_pfoto" src={photo} alt="" />
            <p className='student__container_work'>Фронтенд-разработчик, 30 лет</p>
            <p className='student__container_info'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='student__container_git' href="">Github</a>
            
          </div>
            <p className='student__portfolio'>Портфолио</p>
            <div className='student__portfolio-item'>
                <p className='student__portfolio-item_name'>Статичный сайт</p>
                <p className='student__portfolio-item_arrow'>↗</p>
            </div>
            <div className='student__portfolio-item'>
                <p className='student__portfolio-item_name'>Адаптивный сайт</p>
                <p className='student__portfolio-item_arrow'>↗</p>
            </div>
            <div className='student__portfolio-item'>
                <p className='student__portfolio-item_name'>Одностраничное приложение</p>
                <p className='student__portfolio-item_arrow'>↗</p>
            </div>
            <p className='student__portfolio_ya'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        </section>
    </main>
    <footer className='footer'>
        <p className='footer__year'>© 2020</p>
        <div className='footer__container'>
          <a href="" className='footer__container_yandex'>Яндекс.Практикум</a>
          <a href="" className='footer__container_git'>Github</a>
        </div>
        
    </footer>
</body>
  );
}

export default App;
