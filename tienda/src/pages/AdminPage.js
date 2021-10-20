import React, {useContext, useEffect} from 'react';
import ProductoContext from '../context/Producto/productoContext';

//Components
import Admin from '../components/Admin/Admin';

const AdminPage = () => {
    
    const {getProducts, products} = useContext(ProductoContext);
    
    useEffect(() => {
        getProducts();
    }, []);
    
   
    return(
       <React.Fragment>
        <Admin
            products={products}
        />
       </React.Fragment>
    )
}

export default AdminPage;