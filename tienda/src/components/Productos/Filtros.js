import React from 'react';
import {useContext} from 'react';
import ContextProducto from '../../context/Producto/productoContext';
import './filtros.css';

const Filtros = () => {
    const [catActive, setCatActive] = React.useState('')
    const {getProducts} = useContext(ContextProducto);

    const handleFiltro = (e) => {
        const sort = e.target.name;
        getProducts(sort);
    }

    const handleFiltroStyle = (e) => {
        const category = e.target.name;
        getProducts('-createdAt', category); 
    }

    React.useEffect(() => {
        const productId = window.location.pathname.split(`/`)[2];
        if(productId === undefined) setCatActive('all');
        else setCatActive(productId);
    }, [])

    return(
        <div className="filtros-container col-12">
            <div className="col-12 div">
                <h5 className="">Zapallitas</h5>
                <strong style={{fontSize: '14px', color: 'tomato'}}>{catActive.toUpperCase() || 'ALL'}</strong>
            </div>

            <div className="col-12 div">
                <h5 className="">Filtro Precio</h5>
                <div className="dropdown">
                    <button className="p-0 btn btn-inherit dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Precio
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" name="-price" onClick={handleFiltro}>Mayor a Menor</button>
                        <button className="dropdown-item" name="price" onClick={handleFiltro}>Menor a Mayor</button>
                    </div>
                </div>
            </div>

            <div className="col-12 div">
                <h5 className="">Ordenar Publicaciones</h5>
                <div className="dropdown">
                    <button className="p-0 btn btn-inherit dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Orden
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" name="-createdAt" onClick={handleFiltro}>Ultimas publicaciones</button>
                        <button className="dropdown-item" name="createdAt" onClick={handleFiltro}>Primeras publicaciones</button>
                    </div>
                </div>
            </div>

            <div className="col-12 div">
                <h5 className="">Style</h5>
                <div className="dropdown">
                    <button className="p-0 btn btn-inherit dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Seleccionar Style
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" name="urban" onClick={handleFiltroStyle} type="button">Urban</button>
                        <button className="dropdown-item" name="casual" onClick={handleFiltroStyle} type="button">Casual</button>
                        <button className="dropdown-item" name="deportiva" onClick={handleFiltroStyle} type="button">Deportiva</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtros;