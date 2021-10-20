import { LOAGING, GET_PRODUCTS, GET_PRODUCT } from '../types';

const ProductoReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAGING: return { ...state, loading: true };
        case GET_PRODUCTS: return { ...state, loading: false, products: payload }
        case GET_PRODUCT: return { ...state, loading: false, product: payload }
        default: return { state }
    };
}

export default ProductoReducer;