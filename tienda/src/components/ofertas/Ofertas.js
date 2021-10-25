import React from 'react';
import config from '../../config';
import './ofertas.css';


const Oferta = ({ title, products, data}) => {

    const [hover, setHover] = React.useState({
        active: false,
        id: ''
    });

    const handleProduct = id => {
        window.location.replace(`http://localhost:3000/producto/${id}`);
    }

    return (
        <React.Fragment>
            <section className="container-ofertas">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title-oferta">
                            <h3>{title}<a href={`${config.URL}/productos`}>  ver más</a></h3>
                        </div>
                    </div>
                    <div className="row ofertas">
                        {data === 'oferta' ? (
                            products && products.docs !== undefined && (
                                products.docs.map((item, i) => (
                                    item.information.oferta.active && (
                                        <div className="col-4 card mx-1" style={{ width: '18rem' }} key={i}
                                            onMouseLeave={() => { setHover({ active: false, id: i }) }}
                                            onMouseEnter={() => { setHover({ active: true, id: i }) }}
                                            onClick={() => handleProduct(item._id)}>
                                            <img className="card-img-top" src={item.imageURL[0]} alt="Cardimagcap" />
                                            <div className="card-body">
                                                <h6>${item.price}</h6>
                                                <h4>${item.information.oferta.priceSale}</h4>
                                            </div>

                                            {
                                                hover.active && i === hover.id && (
                                                    <div className="hover-active">
                                                        <div className="hover-active-border">
                                                            <strong>{item.information.marca}</strong>
                                                            <p className="mb-0">{item.information.model}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                ))
                            )
                        ) : (
                            products.recomendados.docs.length > 0 ? (
                                products.recomendados.docs.map((item, i) => (
                                    <div className="col-4 card mx-1" style={{ width: '18rem' }} key={i}
                                            onMouseLeave={() => { setHover({ active: false, id: i }) }}
                                            onMouseEnter={() => { setHover({ active: true, id: i }) }}
                                            onClick={() => handleProduct(item._id)}>
                                            <img className="card-img-top" src={item.imageURL[0]} alt="Cardimagcap" />
                                            <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                                <strong style={{ fontWeight: 300 }}>{item.title.toUpperCase()}</strong>
                                                <h5>${item.price}</h5>
                                            </div>

                                            {
                                                hover.active && i === hover.id && (
                                                    <div className="hover-active">
                                                        <div className="hover-active-border">
                                                            <strong>{item.information.marca}</strong>
                                                            <p className="mb-0">{item.information.model}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>

                                ))
                            ):<div className="mt-5">
                                <h5 className="text-center" style={{fontWeight: 300}}>No tenemos similares</h5>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <a href={`${config.URL}/productos`} className="mt-1 mx-auto btn btn-warning">Ver otros</a>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default Oferta;