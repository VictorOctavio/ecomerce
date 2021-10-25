import React, { useContext, useEffect, useState } from 'react';
import ProductoContext from '../../context/Producto/productoContext';
import Ofertas from '../ofertas/Ofertas';
import './producto.css';

const Producto = () => {

    const { getProduct, product, getProducts, products } = useContext(ProductoContext);
    const [imgActive, setImgActive] = useState('');

    //Obtener Producto
    useEffect(() => {
        const productId = window.location.pathname.split(`/`)[2];
        getProduct(productId);
        getProducts();
    }, [])


    function createMarkup() {
        let description = product.data.description;
        return { __html: description };
    }

    const handleComprar = async () => {
        const buyProduct = {
            title: product.data.title,
            unit_price: product.data.price,
            quantity: 1
        }

        const conf = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buyProduct)
        }

        const res = await fetch('http://localhost:8080/api/buy', conf);
        const data = await res.json();
        if (data.err) return alert('PERDON ALGO SALIO MAL');
        else {
            let win = window.open(data.redirect, '_blank');
            return win.focus();
        }
        
    }

    const load = 'https://i.stack.imgur.com/sEKwt.gif';

    return (
        <React.Fragment>
            <div className="producto-container">
                {
                    product !== undefined && product !== null && (
                        <div className="container">

                            <div className="row producto-muestra">
                                <div className="col-12 col-lg-7 col-xl-8 producto-images">

                                    <div className="col-12 col-lg-1 images-muestra">
                                        {
                                            product.data.imageURL.map((image, i) => {
                                                return (
                                                    <div className="card-image-muestra" onClick={() => setImgActive(image)} key={i}>
                                                        <img src={image || load} alt={product.data.category} />
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                    <div className="col-12 col-lg-11 image-active">
                                        <img src={imgActive || product.imgActive} alt={product.data.description} />
                                    </div>

                                </div>

                                <div className="col-12 col-lg-5 col-xl-4 informacion-producto">
                                    <div className="titles-producto">
                                        <h3>{product.data.title.toUpperCase()}</h3>
                                        <strong>{product.data.category.toUpperCase()}</strong>
                                    </div>

                                    <div className="informacion">
                                        <h3 style={product.data.information.stock ? { color: 'rgb(101, 138, 28)' } : { color: 'red' }}
                                        >Stock: {product.data.information.stock ? 'Disponble' : 'Agotado'}</h3>

                                        <p style={{ fontSize: '40px' }} className="display-4 mt-1">$ {product.data.price}</p>

                                        <button className="btn btn-primary btn-lg btn-block"
                                            onClick={handleComprar}
                                        >Comprar</button>
                                    </div>

                                </div>

                                <div className="col-12 col-lg-7 col-xl-8 decripcion-producto">
                                    <h5>Descripción:</h5>

                                    <div className="acerca-de-description">
                                        <p className="m-0 description-title">Acerca de {product.data.title}: </p>
                                        <ul>
                                            <li><b>Marca:</b> {product.data.information.marca}</li>
                                            <li><b>Modelo:</b> {product.data.information.model}</li>
                                        </ul>
                                    </div>

                                    <div className="mas-inf-description">
                                        <p className="m-0 description-title">Mas información: </p>
                                        <div className="decription-zapatilla" dangerouslySetInnerHTML={createMarkup()}></div>
                                    </div>
                                </div>

                            </div>


                            <div className="row relacionados">
                                <div className="col-12">
                                    <Ofertas
                                        title={`Porque visitaste ${product.data.information.marca.toUpperCase()}`}
                                        products={product}
                                    />
                                </div>
                            </div>

                        </div>
                    )
                }

            </div>
        </React.Fragment>
    )
}

export default Producto;