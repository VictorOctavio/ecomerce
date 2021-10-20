import React, {useEffect, useContext} from 'react';
import ProductoContext from '../context/Producto/productoContext';

//Componens
import Footer from '../components/footer/footer';
import Productos from '../components/Productos/Productos';
import Navbar from '../components/navbar/Navbar';



const ProductosPage = () => {

    const {getProducts, products, loading} = useContext(ProductoContext);
    
    useEffect(() => {
        const categoria = window.location.pathname.split(`/`)[2];
        if(categoria !== 'all') getProducts('', categoria);
        else getProducts();
    }, []);

    return(
        <React.Fragment>
           <Navbar/>
           <Productos
            products={products}
            loading={loading}
           />
           <Footer/>
        </React.Fragment>
    )

}

export default ProductosPage