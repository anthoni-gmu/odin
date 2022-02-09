import {
    GET_ORDERS_OK,
    GET_ORDERS_FAIL,
    GET_ORDER_DETAIL_OK,
    GET_ORDER_DETAIL_FAIL
} from '../actions/types';

const initialState = {
    orders: null,
    order: null
};


export default function Orders(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_ORDERS_OK:
            return {
                ...state,
                orders: payload.orders
            }
        case GET_ORDERS_FAIL:
            return {
                ...state,
                orders: []
            }
        case GET_ORDER_DETAIL_OK:
            return {
                ...state,
                order: payload.order
            }
        case GET_ORDER_DETAIL_FAIL:
            return {
                ...state,
                order: {}
            }
        default:
            return state;
    }
}