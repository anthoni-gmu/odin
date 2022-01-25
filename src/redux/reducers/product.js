import {
    GET_PRODUCT_OK,
    GET_PRODUCT_FAIL,
    GET_PRODUCTS_HOME_OK,
    GET_PRODUCTS_HOME_FAIL
} from "../actions/types"


const initialState = {
    producstFrontpage: null,
    product: null,
    related_products: null,
    products_colors: null
}

export default function Product(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCT_OK:
            return {
                ...state,
                product: payload.product,
                related_products: payload.related_products,
                products_colors: payload.products_colors
            }
        case GET_PRODUCTS_HOME_OK:
            return {
                ...state,
                producstFrontpage: payload.products
            }
        case GET_PRODUCTS_HOME_FAIL:
            return {
                ...state,
                producstFrontpage: null
            }

        
        case GET_PRODUCT_FAIL:

            return {
                ...state,
                product: null,
                related_products: null,
                products_colors: null
            }




        default:
            return state;
    }

}