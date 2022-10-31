import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
            <p className='portfolio__title'>Портфолио</p>
            <div className='portfolio__item'>
                <a className='portfolio__item_name' href="https://github.com/SkylynxX/how-to-learn">Статичный сайт</a>
                <a className='portfolio__item_arrow' href="https://github.com/SkylynxX/how-to-learn">↗</a>
            </div>
            <div className='portfolio__item'>
                <a className='portfolio__item_name' href="https://github.com/SkylynxX/russian-travel">Адаптивный сайт</a>
                <a className='portfolio__item_arrow' href="https://github.com/SkylynxX/russian-travel">↗</a>
            </div>
            <div className='portfolio__item'>
                <a className='portfolio__item_name' href="https://github.com/SkylynxX/react-mesto-api-full">Одностраничное приложение</a>
                <a className='portfolio__item_arrow' href="https://github.com/SkylynxX/react-mesto-api-full">↗</a>
            </div>
        </section>
  );
}
