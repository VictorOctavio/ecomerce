import React, {useContext, useEffect} from 'react';
import ProductoContext from '../context/Producto/productoContext';

//Components
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Oferta from '../components/ofertas/Ofertas';
import Destacados from '../components/destacados/Destacados';
import Footer from '../components/footer/footer';

const MainPage = () => {
    
    const {getProducts, products} = useContext(ProductoContext);
    
    useEffect(() => {
        getProducts('', '', '', 6);
    }, []);
    
   
    return(
       <React.Fragment>
           <Navbar/>
           <Slider/>
           <Oferta 
                title="Ultimas Ofertas"
                data='oferta'
                products={products}
           />
           <Destacados 
            products={products}
           />
           <Footer/>
       </React.Fragment>
    )
}

export default MainPage;