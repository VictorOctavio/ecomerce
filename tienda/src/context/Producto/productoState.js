import { useReducer } from 'react';
import ProductContext from './productoContext'
import ProductoReducer from './productoReducer';
import axios from 'axios';
import Config from '../../config';

const ProductoState = (props) => {

    //Data inicial productos
    const dataIncial = {
        products: [],
        product: null,
        loading: false
    }

    //Reducer
    const [state, dispath] = useReducer(ProductoReducer, dataIncial);

    //actions
    const getProducts = async (sort, category, page, limit) => {

        dispath({ type: 'LOAGING' })

        try {
            const res = await axios.get(`http://localhost:8080/api/products?sort=${sort}&category=${category}&page=${page}&limit=${limit}`);

            dispath({
                type: 'GET_PRODUCTS',
                payload: res.data.data
            })
        } catch (err) { console.log(err) }
    };


    const getProduct = async (id) => {

        dispath({ type: 'LOAGING' })

        try {

            const res = await axios.get(`http://localhost:8080/api/product/${id}`);
            
            console.log(res);
            dispath({
                type: 'GET_PRODUCT',
                payload: res.data
            })

        } catch (err) { console.log(err) }
    };


    const saveProduct = async (product, descrip, images, products, setErr, setMessage) => {

        const formdata = new FormData();
        dispath({ type: 'LOAGING' })

        for (const productValue in product) {
            formdata.append(productValue, product[productValue])
        }

        formdata.append('description', descrip.text)

        for (let i = 0; i < images.length; i++) {
            formdata.append("images", images[i]);
        }
        try {

            const config = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            }
            const res = await fetch(`${Config.URI}/saved-product`, config);
            const data = await res.json();

            if(data.err) return setErr({text: data.message, active: true});

            setMessage({text: data.message, active: true});

        } catch (err) { console.log(err) }
    };



    const editProduct = async (product,description, products, setErr, setMessage) => {
       
        dispath({ type: 'LOAGING' })

        const editProduct = {
            id: product._id,
            title: product.title,
            price: product.price,
            category: product.category,
            description: description.text, 
            information: {
                stock: product.stock,
                marca: product.marca,
                model: product.model,
                oferta: {
                    active: product.information.oferta.active,
                    priceSale:  product.information.oferta.priceSale
                }
            }
        }

        try {
            const config = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editProduct)
            }
            
            const res = await fetch(`${Config.URI}/update-product/${product.id}`, config);
            const data = await res.json();
          
            if(data.err) return setErr({text: data.message, active: true});

            setMessage({text: data.message, active: true})

        } catch (err) { console.log(err) }
    };



    const deleteProduct = async (id, products) => {

        dispath({ type: 'LOAGING' })

        try {
            const res = await axios.delete(`${Config.URI}/deleted-product/${id}`);
            console.log(res.data.data);

            if(res.data.err) return console.log('error');

            const arrayFilter = products.docs.filter(item => item._id !== id);
            products.docs = arrayFilter;

            dispath({
                type: 'GET_PRODUCTS',
                payload: products
            })

        } catch (err) { console.log(err) }
    }


    return (
        <ProductContext.Provider value={{
            products: state.products,
            product: state.product,
            loading: state.loading,
            getProducts, getProduct, saveProduct, editProduct, deleteProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductoState