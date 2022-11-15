import React from 'react'
import './Preloader.css'

const Preloader = ({isProcessed}) => {
    return (
        <div className={`preloader ${isProcessed ? "" : "preloader-none"}`} >
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
