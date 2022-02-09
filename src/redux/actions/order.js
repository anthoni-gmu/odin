import axios from 'axios';
import {
    GET_ORDERS_OK,
    GET_ORDERS_FAIL,
    GET_ORDER_DETAIL_OK,
    GET_ORDER_DETAIL_FAIL
} from './types';


export const list_orders = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/get-orders`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_ORDERS_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_ORDERS_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: GET_ORDERS_FAIL
            });
        }
    }
}


export const get_order_detail = transactionId => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/get-order/${transactionId}`, config);

            if (res.status === 200) {
                dispatch({
                    type: GET_ORDER_DETAIL_OK,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: GET_ORDER_DETAIL_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: GET_ORDER_DETAIL_FAIL
            });
        }
    }
}