import {
    GET_ORDERS_OK,
    GET_ORDERS_FAIL,
    GET_ORDER_DETAIL_OK,
    GET_ORDER_DETAIL_FAIL
} from '../actions/types';

const initialState = {
    orders: null,
    order: null,
    count: null,
    next: null,
    previous: null,
};


export default function Orders(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_ORDERS_OK:
            return {
                ...state,
                orders: payload.results,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_ORDERS_FAIL:
            return {
                ...state,
                orders: [],
                count: null,
                next: null,
                previous: null,
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