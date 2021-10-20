import React, { useContext, useEffect } from 'react';
import ProductoContext from '../context/Producto/productoContext';

//Components
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';
import Producto from '../components/Producto/Producto';

const ProductoPage = () => {

    const { getProducts, products } = useContext(ProductoContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Producto
                products={products}
            />
            <Footer />
        </React.Fragment>
    )
}

export default ProductoPage;