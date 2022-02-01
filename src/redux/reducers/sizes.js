import {
    GET_SIZE_OK,
    GET_SIZE_FAIL
} from '../actions/types';

const initialState = {
    sizes: null
};

export default function Sizes(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SIZE_OK:
            return {
                ...state,
                sizes: payload.sizes
            }
        case GET_SIZE_FAIL:
            return {
                ...state,
                sizes: null
            }
        default:
            return state
    }
}