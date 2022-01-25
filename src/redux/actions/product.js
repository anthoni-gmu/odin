import {
    GET_PRODUCT_OK,
    GET_PRODUCT_FAIL,
    GET_PRODUCTS_HOME_OK,
    GET_PRODUCTS_HOME_FAIL
} from "./types"

import axios from "axios";

export const get_products_frontpage = ()=> async dispatch =>{
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try { 
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/frontpage`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_HOME_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_HOME_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_PRODUCTS_HOME_FAIL
        });
    }
}

export const get_product = (productId) => async dispatch =>{
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try { 
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/product/${productId}`, config);
    
        if (res.status === 200) {

            dispatch({
                type: GET_PRODUCT_OK,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCT_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_PRODUCT_FAIL
        });
    }
}