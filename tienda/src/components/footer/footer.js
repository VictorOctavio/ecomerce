import React, {useState} from 'react';
import Config from '../../config';
import './footer.css';
import {FiSend} from 'react-icons/fi';

const link = 'https://web.whatsapp.com/'
const Footer = () => {

    const [sub, setSub] = useState({email: ''});

    const handleSub = async() => {
       const config = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sub)
       }

       const res = await fetch(`${Config.URI}/new-sub`, config);
       const data = await res.json();

       console.log(data);
    }

    return (
        <footer className="footer-container">
            <div className="container py-5">

                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h3>NOSOTROS</h3>
                        <p className="font-italic text-muted">
                            En StoreTienda brindamos la mejor antecion, compra/reserva de forma segura las mejores colecciones del zapatillas de mercado.  
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">MARCAS POPULARES</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href={link} className="text-muted">NIKE</a></li>
                            <li className="mb-2"><a href={link} className="text-muted">ADIDAS</a></li>
                            <li className="mb-2"><a href={link} className="text-muted">PUMA</a></li>
                            <li className="mb-2"><a href={link} className="text-muted">NEW BALANCE</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Navegación</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href={link} className="text-muted">Inicio</a></li>
                            <li className="mb-2"><a href={link} className="text-muted">Productos</a></li>
                            <li className="mb-2"><a href={link} className="text-muted">Contacto</a></li>
                            <li className="mb-2"><a href={link} className="text-muted">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">SUBSCRIBETE</h6>
                        <p className="text-muted mb-4">Enterate primero de las nuevas coleciones de la principales marcas de mercado.</p>
                        <div className="rounded">
                            <div className="input-group">
                                <input value={sub.email} onChange={(e) => setSub({email: e.target.value})} type="email" placeholder="Ingresa Email" className="form-control"/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn mx-1 btn-light" onClick={handleSub}><FiSend/></button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-2" style={{background: 'rgb(14, 14, 14)'}}>
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">© 2021 Derechos reservados GVO.</p>
                    </div>
                </div>
        </footer>
    )
};
export default Footer;