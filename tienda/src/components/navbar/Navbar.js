import React, { useRef, useContext, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
//Iconst
import { FaBars } from 'react-icons/fa'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'

import productoContext from '../../context/Producto/productoContext';

import Config from '../../config'

//Sidebar
import Categorias from './sidebarData';

const Navbar = () => {

    const { addItemCarritoCompras } = useContext(productoContext);
    const [miCarrito, setMicarrito] = useState(JSON.parse(localStorage.getItem('mi-carrito')) || []);

    const [sidebar, setSidebar] = React.useState(false);
    const [categorys, setCategory] = React.useState(false);
    const handleShowNavbar = () => { setSidebar(!sidebar) }

    const handleCategorias = () => { setCategory(!categorys); }

    //Navbar color
    let navbarDiv = useRef(null);
    let divCarrito = useRef(null);
    const urlActual = window.location.href === Config.URL + '/';
    const navColor = () => {
        window.onscroll = () => {
            if (urlActual) {
                if (window.scrollY < 900) {
                    navbarDiv.classList.add("init");
                } else {
                    navbarDiv.classList.remove("init");
                }
            }
        }
    }
    navColor();

    const handleShowCarritoList = () => {
        if (divCarrito.classList.contains('active')) {
            divCarrito.classList.remove('active')
        } else {
            divCarrito.classList.add('active')
            setMicarrito(JSON.parse(localStorage.getItem('mi-carrito')))
        }
    }

    const handleDeleteCarritoItem = (product) => {
        const filter = miCarrito.filter(item => item._id !== product._id);
        addItemCarritoCompras(product)
        setMicarrito(filter);
    }

    const zapa = 'https://i.blogs.es/02539c/28xp-shoes-05-superjumbo/450_1000.jpeg'

    return (
        <React.Fragment>
            <nav className={urlActual ? 'init' : ''} ref={el => { navbarDiv = el }}>
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

                        <div className='carritoCompras'>
                            <button className='btnCarritoNav' onClick={handleShowCarritoList}><AiOutlineShoppingCart className='btnCarritoNavItem' /></button>

                            <div className='listadoCarrito' ref={el => divCarrito = el}>

                                {miCarrito.length > 0 ? (
                                    <>
                                        {miCarrito.map(item => (
                                            <div className='listadoCarritoItem' key={item._id}>
                                                <div className='listadoCarritoItemInfo'>

                                                    <img className='listadoCarritoItemImg' src={item.imageURL[0]} alt='asadfjasd' />
                                                    <div className='titleDiv'>
                                                        <h6 className='mb-0 title'>{item.title}</h6>
                                                        <h6 className='mb-0'>$ {item.price}</h6>
                                                    </div>
                                                </div>

                                                <div className='listadoCarritoItemOpciones'>
                                                    <button className='btn-sm btn-danger' onClick={() => window.open(`http://localhost:3000/producto/${item._id}`)} >ver</button>
                                                    <button className='btn-sm btn-danger' onClick={() => handleDeleteCarritoItem(item)}>eliminar</button>
                                                </div>
                                            </div>
                                        ))}

                                        <div className='listadoCarritoItem'>
                                            <div className='listadoCarritoItemOpciones'>
                                                <table style={{ width: '100%' }}>
                                                    <thead class="thead-dark text-center">
                                                        <tr>
                                                            <th scope="col">MODELO</th>
                                                            <th scope="col">$</th>
                                                            <th scope="col">CANTIDAD</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className='text-center'>
                                                        {miCarrito.map(item => (
                                                            <tr>
                                                                <td>{item.title.slice(0, 7)}...</td>
                                                                <td>${item.price * (item.quantity || 1)}</td>
                                                                <td>{item.quantity || 1}
                                                                    <button className='btn btn-sm' onClick={()=>{item.quantity++}}>+</button>
                                                                    <button className='btn btn-sm' onClick={()=>{item.quantity--}}>-</button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <button className='btn btn-block text-light' style={{ width: '100%' }}> ( {miCarrito.length} ) Finalizar Compra</button>
                                            </div>
                                        </div>
                                    </>

                                ) : (
                                    <div className='listadoCarritoItem'>
                                        <div className='listadoCarritoItemInfo'>
                                            <img className='listadoCarritoItemImg' src={zapa} alt='asadfjasd' />
                                            <div className='titleDiv'>
                                                <h6 className='mb-0 title font-weight-bold'>NO TIENES PRODUCTOS EN TU CARRITO</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }

                            </div>
                        </div>

                        <p className="menu-bars mb-0" onClick={handleShowNavbar}>
                            <FaBars style={sidebar ? { display: 'none' } : { display: 'block' }} />
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
                                                <Link onClick={() => window.location.replace(`${Config.URL + cat.enlace}`)}
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