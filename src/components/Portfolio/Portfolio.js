import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
        <p className='portfolio__title'>Портфолио</p>
        <ul className="portfolio__list">
            <li className='portfolio__item'>
                 <a className='portfolio__item_name' href="https://github.com/SkylynxX/how-to-learn" target="_blank" rel="noopener noreferrer">Статичный сайт</a>                
                 <a className='portfolio__item_arrow' href="https://github.com/SkylynxX/how-to-learn" target="_blank" rel="noopener noreferrer">↗</a>
            </li>
            <li className='portfolio__item'>
                 <a className='portfolio__item_name' href="https://github.com/SkylynxX/russian-travel" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
                 <a className='portfolio__item_arrow' href="https://github.com/SkylynxX/russian-travel" target="_blank" rel="noopener noreferrer">↗</a>
            </li>
            <li className='portfolio__item'>
                 <a className='portfolio__item_name' href="https://github.com/SkylynxX/react-mesto-api-full" target="_blank" rel="noopener noreferrer" >Одностраничное приложение</a>
                 <a className='portfolio__item_arrow' href="https://github.com/SkylynxX/react-mesto-api-full" target="_blank" rel="noopener noreferrer">↗</a>
            </li>
        </ul>
    </section>
  );
}
