import React, { useContext } from 'react';
import ContextProducto from '../../context/Producto/productoContext';
import './productos.css';

//Componens
import Filtros from './Filtros';
import Card from '../card/Card';
import SliderMarcas from './SliderMarcas';

const Productos = ({ products, loading }) => {

    const { getProducts } = useContext(ContextProducto);
    const load = 'https://i.stack.imgur.com/sEKwt.gif';

    const handlePage = (e) => {
        let page;
        if (e.target.name === 'ant') {
            page = products.page - 1;
        } else {
            page = products.page + 1;
        }

        getProducts('', '', page, 21);
    }

   
    return (
        <React.Fragment>
            <div className="productos-container">
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-3 col-xl-2 filtros-container">
                            <Filtros />
                        </div>

                        <div className="col-12 col-lg-9 col-xl-10">
                            <div className="col-12 mb-2" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', overflow: 'auto' }}>
                                <SliderMarcas />
                            </div>
                            <div className="col-12 container-cards mt-4">
                                {
                                    loading ? (
                                        <div className="loading">
                                            <img src={load} alt="loading" width="100"/>
                                        </div>
                                    ) : (

                                        products && products.docs !== undefined && (
                                            products.docs.length > 0 ? (
                                                products.docs.map(product => (
                                                    <Card
                                                        key={product._id}
                                                        product={product}
                                                    />
                                                ))
                                            ) : <div className="not-results">NO SE ENCONTRARON RESULTADOS</div>
                                        )

                                    )
                                }
                            </div>

                            <div className="col-12" style={{ display: 'flex', justifyContent: 'center' }}>
                                <button disabled={!products.hasPrevPage} name="ant" className="mx-1 btn btn-primary" onClick={handlePage}>anterior</button>
                                <button disabled={!products.hasNextPage} name="sig" className="mx-1 btn btn-primary" onClick={handlePage}>siguiente</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Productos