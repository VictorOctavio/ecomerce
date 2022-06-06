import React, { useContext } from 'react';
import { MdLocalOffer } from 'react-icons/md'
import './card.css';

import ContextProducto from '../../context/Producto/productoContext';

// React icons
import { MdAddShoppingCart } from 'react-icons/md';

const Card = ({ product }) => {

    const handleProduct = id => {
        window.location.replace(`http://localhost:3000/producto/${id}`);
    }

    const load = 'https://i.stack.imgur.com/sEKwt.gif'

    const { addItemCarritoCompras } = useContext(ContextProducto)

    const handleCarrito = () => addItemCarritoCompras(product);

    return (
        <React.Fragment>
            <div className="card card-product col-12 col-md-6 col-lg-4">
                <div className="card-product-img">
                    <img className="card-img-top" title={`VER MAS DETALLES ${product.title.toUpperCase()}`}
                        src={product.imageURL[0] || load} alt={product.description} onClick={() => handleProduct(product._id)} />
                </div>

                <div className="card-body card-body-product">
                    <strong className="mb-0">{product.title.toUpperCase()}</strong>
                    <div className="precio-card">
                        <h6
                            onClick={handleCarrito}
                        >{product.category.toUpperCase()} <MdAddShoppingCart className='btnCart' title={`add ${product.title} al carrito`} /> </h6>
                        {
                            product.information.oferta.active ? (
                                <p>${product.information.oferta.priceSale}</p>
                            ) : <p>${product.price}</p>
                        }
                    </div>
                </div>
                {
                    product.information.oferta.active && (
                        <div className="oferta-etiqueta-card">
                            <MdLocalOffer /><bold>OFERTA</bold>
                        </div>
                    )
                }

            </div>

        </React.Fragment>
    )
};

export default Card;