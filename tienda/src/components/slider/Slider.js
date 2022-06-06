import React from 'react';
import { NavLink } from 'react-router-dom';
import './slider.css';

//React icons
import { HiChevronDoubleDown } from 'react-icons/hi';

const Slider = () => {
    return (
        <React.Fragment>
            <section className="slider-contaiener">
                <div className="slider">
                    <h1 className="text-center">SIEMPRE SER ORIGINAL</h1>
                    <p className="text-center">EL MUNDO EN TUS PIES</p>
                    <NavLink to="productos" className="btn btn-outline-light">Ver lo nuevo</NavLink>
                </div>

                <div className="icons-down">
                    <HiChevronDoubleDown className="arrow" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Slider