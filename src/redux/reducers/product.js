import {
    GET_PRODUCT_OK,
    GET_PRODUCT_FAIL,
    GET_PRODUCTS_HOME_OK,
    GET_PRODUCTS_HOME_FAIL,

    GET_PRODUCTS_OK,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_BY_ARRIVAL_OK,
    GET_PRODUCTS_BY_ARRIVAL_FAIL,
    GET_PRODUCTS_BY_SOLD_OK,
    GET_PRODUCTS_BY_SOLD_FAIL,
    SEARCH_PRODUCTS_OK,
    SEARCH_PRODUCTS_FAIL,
    FILTER_PRODUCTS_OK,
    FILTER_PRODUCTS_FAIL

} from "../actions/types"


const initialState = {
    producstFrontpage: null,
    product: null,
    related_products: null,
    products_colors: null,
    products: null,
    products_arrival: null,
    products_sold: null,
    search_products: null,
    filtered_products: null
}

export default function Product(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS_OK:
            return {
                ...state,
                products: payload.products
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                products: null
            }
        case GET_PRODUCT_OK:
            return {
                ...state,
                product: payload.product,
                related_products: payload.related_products,
                products_colors: payload.products_colors
            }


        case GET_PRODUCTS_BY_ARRIVAL_OK:
            return {
                ...state,
                products_arrival: payload.products
            }
        case GET_PRODUCTS_BY_ARRIVAL_FAIL:
            return {
                ...state,
                products_arrival: null
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

        case GET_PRODUCTS_BY_SOLD_OK:
            return {
                ...state,
                products_sold: payload.products
            }
        case GET_PRODUCTS_BY_SOLD_FAIL:
            return {
                ...state,
                products_sold: null
            }
        case FILTER_PRODUCTS_OK:
            return {
                ...state,
                filtered_products: payload.filtered_products
            }
        case FILTER_PRODUCTS_FAIL:
            return {
                ...state,
                filtered_products: null
            }
        case SEARCH_PRODUCTS_OK:
            return {
                ...state,
                search_products: payload.search_products
            }
        case SEARCH_PRODUCTS_FAIL:
            return {
                ...state,
                search_products: null
            }

        default:
            return state;
    }

}