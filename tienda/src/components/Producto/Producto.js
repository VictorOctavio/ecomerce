import React, { useContext, useEffect, useState } from 'react';
import ProductoContext from '../../context/Producto/productoContext';
import Ofertas from '../ofertas/Ofertas';
import './producto.css';

const Producto = () => {

    const { getProduct, product, getProducts } = useContext(ProductoContext);
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
            quantity: product.data.quantity || 1,
            description: `talla: ${product.data.talla || product.data.information.tallas[0]}`
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
           window.open(data.redirect, '_blank');
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
                                        >{product.data.information.stock ? 'En stock' : 'Agotado'}</h3>

                                        <p style={{ fontSize: '40px' }} className="display-4 mb-2">$ {product.data.price}</p>

                                        <div className='selects'>
                                            <div className='select-cantidad'>
                                                <select className='form-select mb-2' onChange={(e)=>product.data.quantity = parseInt(e.target.value)}>
                                                    <option className="form-select-option" value="1">1</option>
                                                    <option className="form-select-option" value="2">2</option>
                                                    <option className="form-select-option" value="3">3</option>
                                                    <option className="form-select-option" value="5">4</option>
                                                </select>
                                                <strong className='selectTitle'>CANTIDAD</strong>
                                            </div>

                                            <div className='select-talla'>
                                                <select className='form-select mb-2' onChange={e=> product.data.talla = e.target.value}>
                                                    {product.data.information.tallas.map(talle => (
                                                        <option value={talle} key={talle} className="form-select-option">{talle}</option>
                                                    ))}
                                                </select>
                                                <strong className='selectTitle'>TALLA</strong>
                                            </div>
                                        </div>

                                        <button className="btn btn-primary btn-lg btn-block"
                                            onClick={handleComprar}
                                            disabled={!product.data.information.stock}
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


                            <div className="relacionados">
                                <Ofertas
                                    title={`Porque visitaste ${product.data.information.marca.toUpperCase()}`}
                                    products={product}
                                />
                            </div>

                        </div>
                    )
                }

            </div>
        </React.Fragment>
    )
}

export default Producto;