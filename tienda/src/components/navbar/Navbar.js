import React, {useRef} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
//Iconst
import { FaBars } from 'react-icons/fa'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import { CgClose } from 'react-icons/cg'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import Config from '../../config'

//Sidebar
import Categorias from './sidebarData';

const Navbar = () => {
    
    const [sidebar, setSidebar] = React.useState(false);
    const [categorys, setCategory] = React.useState(false);
    const handleShowNavbar = () => { setSidebar(!sidebar)}

    const handleCategorias = () => {setCategory(!categorys);}

    //Navbar color
    let navbarDiv = useRef(null);
    const urlActual = window.location.href === Config.URL+'/';
    const navColor = () => {
        window.onscroll = () => {
            if(urlActual){
                if(window.scrollY < 900){
                    navbarDiv.classList.add("init");
                }else{
                    navbarDiv.classList.remove("init");
                }
            }
        }
    }
    navColor();

    return (
        <React.Fragment>
            <nav className={urlActual ? 'init': ''} ref={el => { navbarDiv = el }}>
                <div className="nav-left">
                    <a href={`${Config.URL}`}>NIKSTORE</a>
                </div>


                <div className="nav-right">
                    <div className="navbar">
                        <div className="redes">
                            <a href="https://www.facebook.com/" className="facebook" target="_black"><AiFillFacebook /></a>
                            <a href="https://www.instagram.com/" className="instagram" target="_black"><AiFillInstagram /></a>
                            <a href="https://www.twitter.com/" className="twitter" target="_black"><AiFillTwitterSquare /></a>
                        </div>

                        <p className="menu-bars mb-0" onClick={handleShowNavbar}>
                            <FaBars style={sidebar ? { display: 'none' } : { display: 'block' }}/>
                        </p>
                    </div>

                    <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav">

                            <li className="nav-bars">
                                <p className="menu-bars mb-0">
                                    <CgClose onClick={handleShowNavbar} />
                                </p>
                            </li>


                            <div className="nav-item-container">
                                <div>

                                    <li className="nav-item">
                                        <a href={`${Config.URL}/productos`}>Ultima Colecciones</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href={`${Config.URL}/productos/ofertas`}>Nuevas Ofertas</a>
                                    </li>

                                    <li className="nav-item" onClick={handleCategorias}>
                                        <p className="a">Categorias
                                            {!categorys ? <BiDownArrowAlt /> : <BiUpArrowAlt />}
                                        </p>
                                    </li>

                                    {
                                        Categorias.map((cat, i) => (
                                            <li key={i} className={categorys ? "nav-item-category" : "nav-item-category active"}>
                                                <Link onClick={() =>  window.location.replace(`${Config.URL+cat.enlace}`)}
                                                >{cat.icon} {cat.title}</Link>
                                            </li>
                                        ))
                                    }

                                </div>

                                <div className="contact-navbar">
                                    <h4 className="text-center">Quienes Somos</h4>
                                    <a href="/">Conoce mas de nosotros</a>
                                </div>
                            </div>

                        </ul>
                    </div>
                </div>


            </nav>
        </React.Fragment>
    )
}

export default Navbar